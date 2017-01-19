import { ref } from '~/config/constants'

export async function fetchScore (uid) {
  const snapshot = await ref.child(`scores/${uid}`).once('value')
  return snapshot.val()
}

export function increaseScore (uid, amount) {
  return ref.child(`scores/${uid}/score`)
    .transaction((score) => score += amount)
}

export function decreaseScore (uid, amount) {
  return ref.child(`scores/${uid}/score`)
    .transaction((score) => score -= amount)
}
