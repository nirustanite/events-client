import {CHANGE_EVENT, SUBMIT_EVENT, EVENT_DETAIL_FETCH,EVENT_UPDATE_SUCCESS} from '../actions/events'

const initialState =  {
    name: '',
    date: '',
    description: ''
}

const reducer = (state = initialState, action={}) => {
    switch(action.type){
        case EVENT_DETAIL_FETCH:
            return action.event
        case CHANGE_EVENT:
            return {
                ...state,
                ...action.payload
            }
        case SUBMIT_EVENT:
            return initialState
        case EVENT_UPDATE_SUCCESS:
                return initialState
        default:
            return state
    }
}
export default reducer