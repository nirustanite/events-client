import request from 'superagent';

const baseUrl = 'http://localhost:4000';

const eventsFetched = events => ({
    type: EVENTS_FETCHED,
    events
});

const eventDetailFetch = event => ({
    type: EVENT_DETAIL_FETCH,
    event
})


export const changeEvent = (key, value) => {
   return {
        type: CHANGE_EVENT,
        payload:{
            [key]: value
        }
    }
}

export const eventToggle = () => {
    return {
      type: EDIT_TOGGLE,
      payload: {
          editMode: true
    }}
}

export const submitEventEdit = () => {
    return{
        type:SUBMIT_EVENT_TOGGLE
    }
}

const eventCreateSuccess = event => ({
    type: EVENT_CREATE_SUCCESS,
    event
})


const eventDeleteSuccess = id => ({
    type: EVENT_DELETE_SUCCESS,
    id
})

const eventUpdateSuccess = event => ({
    type: EVENT_UPDATE_SUCCESS,
    event
})

export const submitEvent = () => {
    return {
        type: SUBMIT_EVENT
    }
}

export const loadEvents = () => (dispatch,getState) => {
    console.log('loadEvents test')
    
    if(getState().events.length) return

    console.log('before request test')

    request(`${baseUrl}/event`)
        .then(response => {
            dispatch(eventsFetched(response.body))
        })
        .catch(console.error)
}

export const displayDetails = (id) => (dispatch,getState) => {
    if(getState().event) return

    request(`${baseUrl}/event/${id}`)
        .then(response => {
            dispatch(eventDetailFetch(response.body))
        })
        .catch(console.error)
}

export const createEvent = (data) => (dispatch) => {
    request
      .post(`${baseUrl}/event`)
      .send(data)
      .then(response => dispatch(eventCreateSuccess(response.body)))
      .catch(console.error)
}

export const deleteEvent = (id) => (dispatch,getState) => {
    if(getState().event) return

    request
       .delete(`${baseUrl}/event/${id}`)
       .then(response => {
           dispatch(eventDeleteSuccess(id))
       })
       .catch(console.error)
}

export const updateEvent = (id,data) => (dispatch,getState) => {
    if(getState().event) return

    request
      .put(`${baseUrl}/event/${id}`)
      .send(data)
      .then(response => {
        dispatch(eventUpdateSuccess(response.body))
      })
      .catch(console.error)
}

export const EVENTS_FETCHED = 'EVENTS_FETCHED';
export const CHANGE_EVENT = 'CHANGE_EVENT';
export const SUBMIT_EVENT = 'SUBMIT_EVENT';
export const EVENT_DETAIL_FETCH = 'EVENT_DETAIL_FETCH';
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS';
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS';
export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS';
export const EDIT_TOGGLE = 'EDIT_TOGGLE';
export const SUBMIT_EVENT_TOGGLE = 'SUBMIT_EVENT_TOGGLE';