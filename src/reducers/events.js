import { EVENTS_FETCHED } from '../actions/events'

const reducer = (state = [], action = {}) => {
    console.log('action test:', action)
    switch(action.type){
        case EVENTS_FETCHED:
           return action.events 
        default:
            return state
    }
}

export default reducer;