import React from 'react';
import style from './Pagination.module.css';
import { useSelector, useDispatch } from 'react-redux';
import PageButton from './PageButton';
import { 
    moveToNextPage,
    moveToPreViousPage,
    increasePageNumber,
    decreasePageNumber 
} from '../action/actionCreator';

export default function Pagination() {
    const total = useSelector(state => state.pagination.total);
    const pagesNumber = useSelector(state => state.pagination.pagesNumber);
    const currentPage = useSelector (state => state.pagination.currentPage);
    const dispatch = useDispatch();

    const handleMoveToPreviousPage = () => {
        if (currentPage - 1 > 0) {
            dispatch(moveToPreViousPage());
            if (currentPage === pagesNumber[0]) 
                dispatch(decreasePageNumber());
        }
            
        else return
    }

    const handleMoveToNextPage = () => {
        if (currentPage + 1 <= total) {
            dispatch(moveToNextPage());
            if (currentPage === pagesNumber[4]) 
                dispatch(increasePageNumber());
        }
            
        else return
    }

    return (
        <div className = {style.pages}>
            <button onClick = {handleMoveToPreviousPage}>&lt;</button>
            {
                pagesNumber.map(number => <PageButton 
                    key = {number}
                    number = {number}
                    currentPage = {currentPage}
                />)
            }
            <button onClick = {handleMoveToNextPage}>&gt;</button>
        </div>
    );
}