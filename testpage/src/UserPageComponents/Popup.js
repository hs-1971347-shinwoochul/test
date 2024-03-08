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
    // 팝업이 열릴 때만 데이터를 가져오도록 수정
    if (userData.userID) {
      console.log(userData.userID);
      dispatch(fetchPersonalData(userData.userID));
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, userData.userID]);
  return (
    <div ref={popupRef} style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', background: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', zIndex: 999 }}>
      <button style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={onClose}>
        Close
      </button>
      <p>Name: {personalData?.Name}</p>
      <p>Role: {personalData?.Role}</p>
      <p>Roblox ID: {userData.robloxID}</p>
      <p>User ID: {userData.userID}</p>
      <p>Character: {userData.Avatar}</p>
      <p>Status: {personalData?.Status}</p>
      <p>Level: {personalData?.Level}</p>
      <p>Cash: {personalData?.Cash}</p>
      <p>CrystalGems: {personalData?.CrystalGems}</p>
      <p>RubyGems: {personalData?.RubyGems}</p>
    </div>
  );
};

export default Popup;

