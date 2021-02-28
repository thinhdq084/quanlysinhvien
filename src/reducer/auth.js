const setModifiedList = () => {
    const localModifiedList = localStorage.getItem('localModifiedList');
    if (localModifiedList) return (JSON.parse(localModifiedList));
    else return [];
}

const setAddedList = () => {
    const localAddedList = localStorage.getItem('localAddedList');
    if (localAddedList) return (JSON.parse(localAddedList));
    else return [];
}

export const auth = (state = {
    modifiedList: [],
    addedList: [],
}, action) => {
    switch(action.type) {
        case "@@INIT": {
            return {
                modifiedList: setModifiedList(),
                addedList: setAddedList(),
            }
        }
        default: return state;
    }
}