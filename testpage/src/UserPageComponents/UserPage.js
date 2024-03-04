import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../Store';
import './UserPage.css';

function UserPage(){
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData);
    console.log("userdate:");
    console.log(userData);
    const [onToggle,setToggle]=useState(true);
    const imageStyle = {
      width: '100px', // 이미지의 너비를 300px로 지정
      height: 'auto', // 높이를 자동으로 조정
    };

    useEffect(() => {
        dispatch(fetchUserData());
        console.log('123');
    }, [dispatch]);

    const onClick=()=>{
        setToggle(!onToggle);
    }

    //const userArray = userData && userData.users;
    //console.log(userArray);
    return (
    <div>
        <h1>User Data</h1>
        <table className="user-table">
          <thead>
          <button className="toggleButton" onClick={onClick}>{onToggle ? "male" : "female"}</button>
            <tr className="header">
              <th>Name</th>
              <th>Img</th>
              <th>description_kr</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.map((user) => {
              if ((onToggle && user.gender === 'male') || (!onToggle && user.gender === 'female')) {
                return(<tr key={user.id} className="user-row">
                <td>{user.name}</td>
                <td><img src={user.imgUrl} style={imageStyle}/></td>
                <td>{user.description_kr}</td>
              </tr>);
              }
            })}
          </tbody>
        </table>
    </div>
    );
}

export default UserPage;