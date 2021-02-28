import React from 'react';
import style from './Home.module.css';
import Header from './Header';
import StudentList from './StudentList';
import Pagination from './Pagination';

export default function Home() {
    return (
        <div className = {style.home}>
            <Header />
            <StudentList />
            <Pagination />
        </div>
    );
}
