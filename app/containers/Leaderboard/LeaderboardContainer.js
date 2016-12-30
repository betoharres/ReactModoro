import React, {Component, PropTypes} from 'react'
import { Leaderboard } from '~/components'

class LeaderboardContainer extends Component {

  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
    openDrawer: PropTypes.func,
  }

  render () {
    return (
      <Leaderboard openDrawer={this.props.openDrawer} />
    )
  }
}

export default LeaderboardContainer
