const initialState = {
    username: "",
    password: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_LOGIN_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_LOGIN_FORM":
            return initialState
        default:
            return state
    }
}