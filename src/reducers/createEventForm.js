import {CHANGE_EVENT, SUBMIT_EVENT} from '../actions/events'

const initialState =  {
    name: '',
    date: '',
    description: ''
}

const reducer = (state = initialState, action={}) => {
    switch(action.type){
        case CHANGE_EVENT:
            return {
                ...state,
                ...action.payload
            }
        case SUBMIT_EVENT:
            return initialState
        default:
            return state
    }
}
export default reducer