//REDUCER 
const signInsignOutReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGNIN':
        return true
        case 'SIGNOUT':
        return false
        default:
            return state
    }
}
export default signInsignOutReducer