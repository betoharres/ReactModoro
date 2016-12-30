import React, {Component, PropTypes} from 'react'
import { View } from 'react-native'
import { ReactModoroNavigator } from '~/containers'
import { connect } from 'react-redux'
import { onAuthChange } from '~/redux/modules/authentication'

import { PreSplash } from '~/components'
import { firebaseAuth } from '~/config/constants'

class AppContainer extends Component {

  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthed: PropTypes.bool.isRequired,
  }

  componentDidMount () {
    firebaseAuth.onAuthStateChanged((user) => (
      this.props.dispatch(onAuthChange(user))
    ))
  }

  render () {
    return (
      <View style={{flex: 1}}>
      {this.props.isAuthenticating == true
        ? <PreSplash />
        : <ReactModoroNavigator isAuthed={this.props.isAuthed} />
      }
      </View>
    )
  }
}

function mapStateToProps ({authentication}) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed,
  }
}

export default connect(mapStateToProps)(AppContainer)
