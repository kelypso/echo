const initialState = {
    name: "",
    email: "",
    username: "",
    password: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_SIGNUP_FORM":
            return initialState
        default: 
            return state
    }
}