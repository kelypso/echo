// Synchronous action creators 
export const updateLoginForm = (name, value) => {
    return {
        type: "UPDATE_LOGIN_FORM",
        formData: {name, value}
    }
}

export const resetLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM"
    }
}