import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../firebase";

function DBTestPage() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 데이터베이스에서 데이터 가져오기
        const dbRef = ref(getDatabase());
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // 데이터가 존재할 경우 state 업데이트
            setUserData(Object.values(data.user));
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleMoneyChange = (index, newValue) => {
    // 변경된 돈 값 업데이트
    const newData = [...userData];
    newData[index].money = newValue;
    setUserData(newData);

    // 데이터베이스에 변경된 값 업데이트
    db.ref(`user/${index + 1}/money`).set(newValue);
  };

  return (
    <div>
      {userData.map((user, index) => (
        <div key={index}>
          <p>User Name: {user.name}</p>
          <p>Money: 
            <input
              type="number"
              value={user.money}
              onChange={(e) => handleMoneyChange(index, e.target.value)}
            />
          </p>
        </div>
      ))}
    </div>
  );
}

export default DBTestPage;
