const initialState = {
    listUsers: [],
    status: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "setStatus":
            return {
                ...state,
                status: payload 
            };
        case "setData":
            return {
                listUsers: payload 
            };
        case "ADD":
            return {
                listUsers: [payload, ...state.listUsers]
            };
        case "CLEAR":
            return {
                listUsers: []
            };
        default:
            return state;
    }
}