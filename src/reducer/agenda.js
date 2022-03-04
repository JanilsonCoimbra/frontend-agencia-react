const agenda = (state = [], action) => {
    if(action.type.toString().includes("@@redux/INIT")){

    }else{
        state = [...state, action.type]
    }
    

return state
}
export default agenda