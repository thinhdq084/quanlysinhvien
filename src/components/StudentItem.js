import React from 'react';
import style from './StudentItem.module.css';
import { Male, Female } from "react-gender";

export default function StudentItem({student}) {
    const showGender = () => {
        if (student.gender === "Nam") return (
            <Male color="#419fcf" className = {style.genderType}/>
        ); else return (
            <Female color="#f378ac" className = {style.genderType}/>
        );
    }

    const handleBeginModifyStudent = () => {
        localStorage.setItem('studentModifying', JSON.stringify(student));
        window.location.replace("/ModifyStudent");
    }

    return (
        <div className = {style.studentItem} onClick = {handleBeginModifyStudent}>
            <div className = {style.img_container}>
                <img src={student.img} alt={student.name}/>
            </div>
            <div className = {style.details_area}>
                <div className = {style.name}>{student.name}</div>
                <div className = {style.phoneNumber}>{student.phoneNumber}</div>
            </div>
            <div className = {style.gender_container}>
                {showGender()}
            </div>
            
        </div>
    );
}
