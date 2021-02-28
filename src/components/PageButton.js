import React from 'react';
import style from './PageButton.module.css';
import { moveExactlyToPage } from '../action/actionCreator';
import { useSelector, useDispatch } from 'react-redux';

export default function PageButton({number, currentPage}) {
    const total = useSelector(state => state.pagination.total);
    const dispatch = useDispatch();

    const handleMoveExactlyToPage = () => {
        if (number !== currentPage && number <= total) 
            dispatch(moveExactlyToPage(number));
        else return
    }
    if (number === currentPage) {
        return (
        <button 
            className = {style.buttonActive}
            onClick = {handleMoveExactlyToPage}
        >
            {number}
        </button>
        );
    } else return (
        <button
            className = {style.buttonDefault}
            onClick = {handleMoveExactlyToPage}
        >
            {number}
        </button>
    );  
}