import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPersonalData } from '../Store';



const Popup = ({ userData, onClose }) => {
  const popupRef = useRef(null);
  const dispatch = useDispatch();
  const personalData = useSelector((state) => state.personalData);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    dispatch(fetchPersonalData(userData.userID));
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);


  return (
    <div ref={popupRef} style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', background: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: 999 }}>
      <button style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={onClose}>
        Close
      </button>
      <p>Avatar: {userData.Avatar}</p>
      <p>Gender: {userData.gender}</p>
      <p>Group: {userData.group}</p>
      <p>Name: {userData.name}</p>
      <p>Roblox ID: {userData.robloxID}</p>
      <p>User ID: {userData.userID}</p>
      <p>Cash: {personalData.Cash}</p>
      <p>Crystal: {personalData.Gems.Crystal}</p>
    </div>
  );
};

export default Popup;

