import { combineReducers } from 'redux'
import events from './events'
import createEventForm from './createEventForm'
import eventDetail from './eventDetail'
import updateEvent from './updateEvent'

export default combineReducers({
   events,
   createEventForm,
   eventDetail,
   updateEvent
})