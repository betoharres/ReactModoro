import React, {Component, PropTypes} from 'react'
import { View } from 'react-native'
import { ReactModoroNavigator } from '~/containers'
import { connect } from 'react-redux'
import { onAuthChange } from '~/redux/modules/authentication'
import { hideFlashNotification } from '~/redux/modules/flashNotification'

import { PreSplash, FlashNotification } from '~/components'
import { firebaseAuth } from '~/config/constants'

class AppContainer extends Component {

  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthed: PropTypes.bool.isRequired,
    showFlashNotification: PropTypes.bool.isRequired,
    flashNotificationIsPermanent: PropTypes.bool.isRequired,
    flashNotificationText: PropTypes.string.isRequired,
    flashNotificationLocation: PropTypes.string.isRequired,
  }

  componentDidMount () {
    firebaseAuth.onAuthStateChanged((user) => (
      this.props.dispatch(onAuthChange(user))
    ))
  }

  handleHideNotification = () => {
    this.props.dispatch(hideFlashNotification())
  }

  render () {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating == true
          ? <PreSplash />
          : <ReactModoroNavigator isAuthed={this.props.isAuthed} />}
        {this.props.showFlashNotification === true
          ? <FlashNotification
              permanent={this.props.flashNotificationIsPermanent}
              location={this.props.flashNotificationLocation}
              text={this.props.flashNotificationText}
              onHideNotification={this.handleHideNotification} />
          : null}
      </View>
    )
  }
}

function mapStateToProps ({authentication, flashNotification}) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed,
    flashNotificationIsPermanent: flashNotification.permanent,
    flashNotificationLocation: flashNotification.location,
    flashNotificationText: flashNotification.text,
    showFlashNotification: flashNotification.showFlashNotification,
  }
}

export default connect(mapStateToProps)(AppContainer)
