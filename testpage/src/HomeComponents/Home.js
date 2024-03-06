import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPersonalData } from '../Store';

export default function Home(){
    const dispatch = useDispatch();
    const personalData = useSelector((state) => state.personalData);

    useEffect(() => {
        dispatch(fetchPersonalData('com.lh.1@doctorr.co.kr'));
    }, [dispatch]);
    return (
        <div>
            <h1>Home</h1>
            <div>test: {personalData && personalData.Character}</div>
        </div>
    )
}