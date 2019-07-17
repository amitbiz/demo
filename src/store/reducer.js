const initialState = {
    data: ["a","b"],
    dataState: false,
    displayComponentState: false,
    label: 'RENDER COMPONENT'
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'DATA'){
        newState.dataState = !newState.dataState;
    } else if(action.type === 'COMPONENT'){
        newState.displayComponentState = !newState.displayComponentState;
        if(newState.displayComponentState){
            newState.label = 'HIDE COMPONENT'
        }else{
            newState.label = 'RENDER COMPONENT'
        }
    }

    return newState;
};

export default reducer;