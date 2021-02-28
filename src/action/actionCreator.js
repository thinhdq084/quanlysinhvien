import { actionType } from './actionType';

export const moveToPreViousPage = () => (
    {
        type: actionType.MOVE_TO_PREVIOUSPAGE,
        payload: {}
    }
)

export const moveToNextPage = () => (
    {
        type: actionType.MOVE_TO_NEXTPAGE,
        payload: {}
    }
)

export const moveExactlyToPage = page => (
    {
        type: actionType.MOVE_EXACTLY_TO_PAGE,
        payload: {
            page,
        }
    }
)

export const increasePageNumber = () => (
    {
        type: actionType.INCREASE_PAGENUMBER,
        payload: {}
    }
)

export const decreasePageNumber = () => (
    {
        type: actionType.DECREASE_PAGENUMBER,
        payload: {}
    }
)

export const searchStudent = (studentsMatched) => (
    {
        type: actionType.SEARCH_STUDENT,
        payload: {
            studentsMatched
        }
    }
)

export const editingImg = urlImg => (
    {
        type: actionType.MODIFY_STUDENT.EDITING_IMG,
        payload: {
            urlImg
        }
    }
)

export const editingName = name => (
    {
        type: actionType.MODIFY_STUDENT.EDITING_NAME,
        payload: {
            name
        }
    }
)

export const editingPhoneNumber = phoneNumber => (
    {
        type: actionType.MODIFY_STUDENT.EDITING_PHONENUMBER,
        payload: {
            phoneNumber
        }
    }
)

export const editingBirthday = birthday => (
    {
        type: actionType.MODIFY_STUDENT.EDITING_BIRTHDAY,
        payload: {
            birthday
        }
    }
)

export const editingDayAdmission = dayAdmission => (
    {
        type: actionType.MODIFY_STUDENT.EDITING_DAYADMISSION,
        payload: {
            dayAdmission
        }
    }
)

export const editingGender = gender => (
    {
        type: actionType.MODIFY_STUDENT.EDITING_GENDER,
        payload: {
            gender
        }
    }
)

export const addingImg = urlImg => (
    {
        type: actionType.ADD_STUDENT.ADDING_IMG,
        payload: {
            urlImg
        }
    }
)

export const addingName = name => (
    {
        type: actionType.ADD_STUDENT.ADDING_NAME,
        payload: {
            name
        }
    }
)

export const addingPhoneNumber = phoneNumber => (
    {
        type: actionType.ADD_STUDENT.ADDING_PHONENUMBER,
        payload: {
            phoneNumber
        }
    }
)

export const addingDayAdmission = dayAdmission => (
    {
        type: actionType.ADD_STUDENT.ADDING_DAYADMISSION,
        payload: {
            dayAdmission
        }
    }
)

export const addingBirthday = birthday => (
    {
        type: actionType.ADD_STUDENT.ADDING_BIRTHDAY,
        payload: {
            birthday
        }
    }
)

export const addingGender = gender => (
    {
        type: actionType.ADD_STUDENT.ADDING_GENDER,
        payload: {
            gender
        }
    }
)






