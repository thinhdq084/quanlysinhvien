import { actionType } from '../action/actionType';
import studentData from '../studentData';

const calculateTotalPage = () => {
    const itemPerPage = 6;
    switch(studentData.length % itemPerPage) {
        case 0: {
            return studentData.length/itemPerPage;
        }
        default: 
            return Math.floor(studentData.length/itemPerPage) + 1;
    }
}


export const pagination = (state = {
    total: calculateTotalPage(),
    currentPage: 1,
    pagesNumber: [1, 2, 3, 4, 5]
}, action) => {
    switch(action.type) {
        case actionType.MOVE_TO_NEXTPAGE: {
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
        } 
        case actionType.MOVE_TO_PREVIOUSPAGE: {
            return {
                ...state,
                currentPage: state.currentPage - 1,
            }
        } 
        case actionType.MOVE_EXACTLY_TO_PAGE: {
            return {
                ...state,
                currentPage: action.payload.page,
            }
         
        }
        case actionType.INCREASE_PAGENUMBER: {
            return {
                ...state,
                pagesNumber: state.pagesNumber.map(number => number + 1)
            }
         
        }
        case actionType.DECREASE_PAGENUMBER: {
            return {
                ...state,
                pagesNumber: state.pagesNumber.map(number => number - 1)
            }
         
        }

        default: return state;
    }
}


