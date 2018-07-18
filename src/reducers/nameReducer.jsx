


const nameReducer = (state = {
    Name: "Olya",
    nameLog: []
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                Name: action.payload,
                nameLog: [...state.nameLog, ...state.Name],
            };
            break;
        case "SET_INITIAL_NAME":
            state = {
                ...state,
                name: action.payload,
            };
            break;
    }
    return state;
}
export default nameReducer;