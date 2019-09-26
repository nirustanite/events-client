import request from 'superagent';

const baseUrl = 'http://localhost:4000';

const eventsFetched = events => ({
    type: EVENTS_FETCHED,
    events
});

export const changeEvent = (key, value) => {
   return {
        type: CHANGE_EVENT,
        payload:{
            [key]: value
        }
    }
}

const eventCreateSuccess = event => ({
    type: EVENT_CREATE_SUCCESS,
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

export const createEvent = (data) => (dispatch) => {
    request
      .post(`${baseUrl}/event`)
      .send(data)
      .then(response => dispatch(eventCreateSuccess(response.body)))
      .catch(console.error)
}

export const EVENTS_FETCHED = 'EVENTS_FETCHED';
export const CHANGE_EVENT = 'CHANGE_EVENT';
export const SUBMIT_EVENT = 'SUBMIT_EVENT';
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'