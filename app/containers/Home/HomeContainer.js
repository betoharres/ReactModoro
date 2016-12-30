import React, {Component, PropTypes} from 'react'
import { Home } from '~/components'

class HomeContainer extends Component {

  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
  }

  handleToSettings = () => {
    this.props.navigator.push({
      settings: true
    })
  }

  render () {
    return (
      <Home handleToSettings={this.handleToSettings}
        openDrawer={this.props.openDrawer} />
    )
  }
}

export default HomeContainer
