import {EVENT_DETAIL_FETCH,EVENT_UPDATE_SUCCESS} from '../actions/events'

const reducer = (state = null, action = {}) => {
    switch(action.type){
        case EVENT_DETAIL_FETCH:
            return action.event
         case EVENT_UPDATE_SUCCESS:
            return action.event
        default:
            return state
    }
}

export default reducer