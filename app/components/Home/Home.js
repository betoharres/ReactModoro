import React, {PropTypes} from 'react'
import { View, Text, Platform, TouchableOpacity, StyleSheet } from 'react-native'
import { ReactModoroNavbar, Gear, Hamburger } from '~/components'

import Score from './Score'
import Countdown from './Countdown'
import ProgressBar from './ProgressBar'
import TimerButtons from './TimerButtons'
import SkipRest from './SkipRest'

import { colors } from '~/styles'

Home.propTypes = {
  openDrawer: PropTypes.func,
  handleToSettings: PropTypes.func.isRequired,
  timer: PropTypes.string.isRequired,
  rest: PropTypes.string.isRequired,
  activeCountdown: PropTypes.string.isRequired,
  countdownRunning: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
  onSkipRest: PropTypes.func.isRequired,
  onToggleCountdown: PropTypes.func.isRequired,
}

export default function Home (props) {

  return (
    <View style={[styles.container,
      {backgroundColor: props.activeCountdown === 'timer'
        ? colors.blue : colors.red}]}>
      <ReactModoroNavbar
        title='Home'
        leftButton={Platform.OS === 'android'
          ? <Hamburger onPress={props.openDrawer} /> : null}
        rightButton={
          <Gear onPress={props.handleToSettings} />}
      />
      <Score count={props.score} />
      <Countdown formattedTime={props[props.activeCountdown]} />
      <ProgressBar style={{marginLeft: 20, marginRight: 20}}
        progress={props.progress} />
      <View style={styles.footer}>
        {props.activeCountdown === 'timer'
          ? <TimerButtons
              countdownRunning={props.countdownRunning}
              onToggle={props.onToggleCountdown}
              onReset={props.onReset} />
        : <SkipRest onSkipRest={props.onSkipRest} />}
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 65,
  }
})
