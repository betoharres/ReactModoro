import { ref } from '~/config/constants'

export async function fetchUser (uid) {
  const snapshot = await ref.child(`users/${uid}`).once('value')
  return snapshot.val()
}
