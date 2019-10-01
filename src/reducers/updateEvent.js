import {EDIT_TOGGLE, SUBMIT_EVENT_TOGGLE} from '../actions/events'

const initialState={
    editMode : false
}

const reducer = (state = initialState, action = {}) => {
    switch(action.type){
        case EDIT_TOGGLE:
            return {...action.payload}
        case SUBMIT_EVENT_TOGGLE:
            return initialState
        default:
            return state
    }
}

export default reducer