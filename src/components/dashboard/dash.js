import Helmet from 'react-helmet';
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './dash.css';
function Dash() {
    const [list, setList] = useState([]);
    const [taskName, setTaskName] = useState('');
    const history = useHistory();
    const token = localStorage.getItem('token');
    if (token == null) {
        history.push('/');
    }
    const bearerToken = 'Bearer'.concat(" ").concat(token);
    function logoutclick() {
        localStorage.removeItem("token");
        history.push("/")
    }
    useEffect(() => {
        async function fetchData() {
            const result = await fetch('https://todo-application-using-nodejs.herokuapp.com/api/todo', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': bearerToken
                },
            });
            const response = await result.json();
            console.log(response)
            setList(response);
        }
        fetchData();
    }, [bearerToken]);
    async function onSubmit() {
        const name = { taskName }.taskName;
        const completed = "Incomplete";
        const payload = {
            taskName: name,
            taskStatus: completed
        }
        await fetch('https://todo-application-using-nodejs.herokuapp.com/api/todo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': bearerToken
            },
            body: JSON.stringify(payload)
        });
        setTaskName('');
    }
    async function updateItem(index) {
        const taskid = list[index].taskId;
        const taskname = list[index].taskName;
        if (list[index].taskStatus === "Completed") {
            list[index].taskStatus = "Incomplete";
        }
        else {
            list[index].taskStatus = "Completed";
        }
        const taskstatus = list[index].taskStatus;
        const payload = {
            taskId: taskid.toString(),
            taskName: taskname.toString(),
            taskStatus: taskstatus.toString()
        }
        await fetch('https://cors-anywhere.herokuapp.com/https://todo-application-using-nodejs.herokuapp.com/api/todo', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': bearerToken
            },
            body: JSON.stringify(payload)
        });
        const newList = [...list];
        setList(newList);
    }
    async function deleteItem(index) {
        const taskid = list[index].taskId;
        const payload = {
            taskId: taskid.toString()
        }
        await fetch('https://cors-anywhere.herokuapp.com/https://todo-application-using-nodejs.herokuapp.com/api/todo', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': bearerToken,
            },
            body: JSON.stringify(payload)
        });
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }
    return (
        <div className='dash-content'>
            <Helmet>
                <title>DashBoard</title>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Helmet>
            <header className="header">
                <h1>DashBoard</h1>
                <img src="https://img.icons8.com/cute-clipart/64/000000/logout-rounded.png" alt="logout-icon"  title="logout" className="logoutpic" onClick={logoutclick} />
            </header>
            <div className="box">
                <div className="addinput">
                    <form onSubmit={onSubmit}>
                        <input type="text" placeholder="Add Item" className="inputbox" value={taskName} onChange={e => setTaskName(e.target.value)} required />
                        <button type="submit" className="btn" title="Add">Add</button>
                    </form>
                </div>
                <div className="box-main"  >
                    {
                        list.map((task, index) =>
                        (<div className="items" key={index} >
                            <span onClick={() => updateItem(index)} className={task.taskStatus === "Completed" ? "task-name completed-task " : "task-name"}>
                                {task.taskName}
                            </span>
                            <div >
                                <button title="delete"className="delete-icon icon" onClick={() => deleteItem(index)}><i className="material-icons">delete</i></button>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}
export default Dash;