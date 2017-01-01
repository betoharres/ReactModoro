import { setTimer, setRest } from '~/api/settings'

const ADD_SETTINGS_TIMER_DURATION = 'ADD_SETTINGS_TIMER_DURATION'
const ADD_SETTINGS_REST_DURATION = 'ADD_SETTINGS_REST_DURATION'

export function addSettingsTimerDuration (duration) {
  return {
    type: ADD_SETTINGS_TIMER_DURATION,
    duration,
  }
}

export function addSettingsRestDuration (duration) {
  return {
    type: ADD_SETTINGS_REST_DURATION,
    duration,
  }
}

export function handleAndUpdateTimer (duration) {
  return async function (dispatch, getState) {
    await setTimer(duration, getState().authentication.authedId)
    dispatch(addSettingsTimerDuration(duration))
  }
}

export function handleAndUpdateRest (duration) {
  return async function (dispatch, getState) {
    await setRest(duration, getState().authentication.authedId)
    dispatch(addSettingsRestDuration(duration))
  }
}

const initialState = {
  timerDuration: 25,
  restDuration: 5,
}

export default function settings (state = initialState, action) {
  switch (action.type) {
    case ADD_SETTINGS_TIMER_DURATION :
      return {
        ...state,
        timerDuration: action.duration,
      }

    case ADD_SETTINGS_REST_DURATION :
      return {
        ...state,
        restDuration: action.duration,
      }

    default :
      return state
  }
}
