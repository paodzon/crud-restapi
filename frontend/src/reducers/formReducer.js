const INITIAL_STATE = {
    formList: [],
    selectedForm: []
}

const formReducer =(state =INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_FORMS':
            return {...state, formList:action.payload}
        case 'ADD_FORM':
            return {...state, formList:[...state.formList, action.payload]}
        case 'EDIT_FORM':
            const updatedForm = state.formList.map((form) =>{
                if(form._id === action.payload._id){
                    return action.payload
                }else{
                    return form
                }
            })
            return {...state, formList:updatedForm}
        case 'DELETE_FORM':
            const filteredForm = state.formList.filter((form) => form._id !== action.payload);
            return{...state, formList:filteredForm}
        case 'GET_FORM':
            return {...state, selectedForm: action.payload}
        case 'CLEAR_FORM':
            return {...state, selectedForm:[]}
        default:
            return state
    }
}

export default formReducer;