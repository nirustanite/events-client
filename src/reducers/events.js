import { EVENTS_FETCHED, EVENT_DELETE_SUCCESS, EVENT_CREATE_SUCCESS, EVENT_UPDATE_SUCCESS } from '../actions/events'


const reducer = (state = [], action = {}) => {
    console.log('action test:', action)
    switch(action.type){
        case EVENTS_FETCHED:
           return action.events
        case EVENT_CREATE_SUCCESS:
            return [...state,action.event]
        case EVENT_DELETE_SUCCESS:
            return state.filter(event => event.id !== action.id)
        default:
            return state
    }
}

export default reducer;