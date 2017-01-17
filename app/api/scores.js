import { ref } from '~/config/constants'

export async function fetchScore (uid) {
  const snapshot = await ref.child(`scores/${uid}`).once('value')
  return snapshot.val()
}
