import { getAccessToken, authWithToken, updateUser } from '~/api/auth'

const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const IS_AUTHED = 'IS_AUTHED'

function authenticating () {
  return {
    type: AUTHENTICATING,
  }
}

function notAuthed () {
  return {
    type: NOT_AUTHED,
  }
}

function isAuthed (uid) {
  return {
    type: IS_AUTHED,
    uid,
  }
}

export function handleAuthWithFirebase () {
  return async function (dispatch, getState) {
    dispatch(authenticating())
    try {
      const accessToken = await getAccessToken()
      return await authWithToken(accessToken)
    } catch (e) {
      console.warn('Error in handleAuthWithFirebase: ', e)
    }
  }
}

export function onAuthChange (user) {
  return async function (dispatch) {
    if (!user) {
      dispatch(notAuthed())
    } else {
      const { uid, displayName, photoURL } = user
      await updateUser({
        uid,
        displayName,
        photoURL,
      })
      dispatch(isAuthed(uid))
    }
  }
}

const initialState = {
  isAuthed: false,
  isAuthenticating: true,
  authedId: '',
}

export default function authentication (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING :
      return {
        ...state,
        isAuthenticating: true,
      }
    case NOT_AUTHED :
      return {
        isAuthenticating: false,
        isAuthed: false,
        authedId: '',
      }
    case IS_AUTHED:
      return {
        isAuthed: true,
        isAuthenticating: false,
        authedId: action.uid,
      }
    default :
      return state
  }
}
