import React, {PropTypes} from 'react'
import { View, Text, Platform } from 'react-native'
import { ReactModoroNavbar, Hamburger } from '~/components'

Leaderboard.propTypes = {
 openDrawer: PropTypes.func,
}

export default function Leaderboard (props) {

  return (
    <View>
      <ReactModoroNavbar
        title='Home'
        leftButton={Platform.OS === 'android'
          ? <Hamburger onPress={props.openDrawer} /> : null}
      />
      <Text>Leaderboard</Text>
    </View>
  )

}
