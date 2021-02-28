import React from 'react';
import style from './Header.module.css';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { searchStudent } from '../action/actionCreator';
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
    const directToNewStudent = () => window.location.replace("/NewStudent");
    const studentList = useSelector(state => state.students.studentList);
    const dispatch = useDispatch();

    const handleSeachStudent = value => {
        const searchedItem =  studentList.filter(student =>
            (student.name === value || student.phoneNumber === value));
        if (searchedItem) dispatch(searchStudent(searchedItem));
        else dispatch(searchStudent([]));
    }
    return (
        <div className = {style.header}>
            <div className = {style.top_area}>
                <h2>Quản lý sinh viên</h2>
                <button onClick = {directToNewStudent} >
                    <AddIcon className = {style.plus}/>
                    <span>Thêm mới</span>
                </button>
            </div>
            <div className={style.search_area}>
                <input type="text" onChange = {(e) => handleSeachStudent(e.target.value)}/>
                <SearchIcon className = {style.search_button}/>
            </div>
        </div>
    );
}