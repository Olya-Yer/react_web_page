


const ageReducer = (state = {
    age: "18",
    ageLog: []
}, action) => {
    switch (action.type) {
        case "GROW_UP":
            state = {
                ...state,
                age: state.age + action.payload,
                ageLog: [...state.ageLog, ...state.age],
            };
            break;
        case "GET_YOUNGER":
            state = {
                ...state,
                age: state.age - action.payload,
                ageLog: [...state.ageLog, ...state.age],
            };
            break;
    }
    return state;
}
export default ageReducer;