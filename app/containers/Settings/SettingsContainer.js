import React, {Component, PropTypes} from 'react'
import { View, Text } from 'react-native'
import { Settings } from '~/components'
import { connect } from 'react-redux'
import { handleUnauth } from '~/redux/modules/authentication'
import { showFlashNotification } from '~/redux/modules/flashNotification'
import { handleAndUpdateTimer,
         handleAndUpdateRest } from '~/redux/modules/settings'

class SettingsContainer extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    timerDuration: PropTypes.number.isRequired,
    restDuration: PropTypes.number.isRequired,
  }

  state = {
    timerDuration: this.props.timerDuration,
    restDuration: this.props.restDuration,
  }

  handleTimerChange = (timerDuration) => {
    this.setState({timerDuration})
  }

  handleRestChange = (restDuration) => {
    this.setState({restDuration})
  }

  handleTimerComplete = async () => {
    try {
      await this.props.dispatch(handleAndUpdateTimer(this.state.timerDuration))
      this.props.dispatch(showFlashNotification({text: 'Duration Saved!'}))
    } catch (e) {
      this.props.dispatch(showFlashNotification({text: 'Duration not saved :('}))
    }
  }

  handleRestComplete = async () => {
    try {
      await this.props.dispatch(handleAndUpdateRest(this.state.restDuration))
      this.props.dispatch(showFlashNotification({text: 'Duration Saved!'}))
    } catch (e) {
      this.props.dispatch(showFlashNotification({text: 'Duration not saved :('}))
    }
  }

  handleLogout = () => {
    try {
      this.props.dispatch(handleUnauth())
    } catch (e) {
      console.warn('Error in handleLogout' ,e)
    }
  }

  render () {
    return (
      <Settings onBack={this.props.navigator.pop}
        onLogout={this.handleLogout}
        onRestComplete={this.handleRestComplete}
        onTimerComplete={this.handleTimerComplete}
        onRestChange={this.handleRestChange}
        onTimerChange={this.handleTimerChange}
        timerDuration={this.state.timerDuration}
        restDuration={this.state.restDuration} />
    )
  }
}

function mapStateToProps ({settings}) {
  return {
    timerDuration: settings.timerDuration,
    restDuration: settings.restDuration,
  }
}

export default connect(mapStateToProps)(SettingsContainer)
