import { ref } from '~/config/constants'

export function setTimer (duration, uid) {
  return ref.child(`settings/${uid}/timerDuration`).set(duration)
}

export function setRest (duration, uid) {
  return ref.child(`settings/${uid}/restDuration`).set(duration)
}

export async function fetchSettings (uid) {
  const timerDuration = 20
  const restDuration = 5

  const snapshot = await ref.child(`settings/${uid}`).once('value')
  const settings = snapshot.val()

  if (settings === null) {
    return {
      timerDuration,
      restDuration,
    }
  } else if (!settings.timerDuration) {
    return {
      timerDuration,
      restDuration: settings.restDuration,
    }
  } else if (!settings.restDuration) {
    return {
      timerDuration,
      restDuration: settings.restDuration,
    }
  } else {
    return settings
  }
}
