import React from 'react';
import '../css/Home.css';

const Home = () => {
    return(
        <div>
            <div className="nav">
                <div className="leaflet1">leaflet</div>
                <div className="points">
                    <img src="/images/leaf1.png"/>
                    <div className="point">250</div>
                </div>
                <div className="shop">
                <img src="/images/shop.png"/>
                    <div className="shopWord">shop</div>
                </div>
                <div className="profile">
                <img src="/images/profile.png"/>
                    <div className="profileWord">profile</div>
                </div>
            </div>
            <div className="dailyTasks">
                <p className="dailyTasksTitle">Daily Tasks</p>
                <ul>
                <input className="checkBox" id="todo-0" type="checkbox" defaultChecked={false} />
                <label className="tasks">Daily photo update</label>
                <img src="/images/caretRight.png" className="caretRight" id="caret"/><br></br>
                <input className="checkBox" id="todo-0" type="checkbox" defaultChecked={false} />
                <label className="tasks">Search on Ecosia</label>
                <img src="/images/caretRight.png" className="caretRight"/><br></br>
                <input className="checkBox" id="todo-0" type="checkbox" defaultChecked={false} />
                <label className="tasks">Use a reusable water bottle</label>
                <img src="/images/caretRight.png" className="caretRight"/><br></br>
                </ul>
                
            </div>
            <div className="weeklyTasks">
                <p className="dailyTasksTitle">Weekly Tasks</p>
                <ul>
                <input className="checkBox" id="todo-0" type="checkbox" defaultChecked={false} />
                <label className="tasks">Recycle 10 things</label>
                <img src="/images/caretRight.png" className="caretRight" id="caret"/><br></br>
                <input className="checkBox" id="todo-0" type="checkbox" defaultChecked={false} />
                <label className="tasks">Use a reusable bag</label>
                <img src="/images/caretRight.png" className="caretRight"/><br></br>
                <input className="checkBox" id="todo-0" type="checkbox" defaultChecked={false} />
                <label className="tasks">Zero emission commute</label>
                <img src="/images/caretRight.png" className="caretRight"/><br></br>
                </ul>
            </div>
                
            <div className="friends">
                <p className="friendsTitle">Friends</p>
                <div className="friend"></div>
            </div>
        </div>
    )
}

export default Home;