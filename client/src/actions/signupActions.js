// Synchronous action creators 
export const updateSignupForm = (name, value) => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData: {name, value}
    }
}
 
export const resetSignupForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}