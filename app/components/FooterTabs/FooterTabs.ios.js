import React, {PropTypes} from 'react'
import { View, TabBarIOS, Text } from 'react-native'
import { colors } from '~/styles'

import { HomeContainer, LeaderboardContainer } from '~/containers'

import Icon from 'react-native-vector-icons/Ionicons'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
}

export default function FooterTabs (props) {

  return (
    <TabBarIOS tintColor={colors.active}>
      <Icon.TabBarItem
        iconSize={35}
        iconName='ios-home-outline'
        title='Home'
        selected={props.activeFooterTab === 'home'}
        onPress={() => props.onTabSelect('home')}>
          <HomeContainer navigator={props.navigator} />
      </Icon.TabBarItem>
      <Icon.TabBarItem
        iconSize={35}
        iconName='ios-trophy-outline'
        title='Leaderboard'
        selected={props.activeFooterTab === 'leaderboard'}
        onPress={() => props.onTabSelect('leaderboard')}>
          <LeaderboardContainer navigator={props.navigator} />
      </Icon.TabBarItem>
    </TabBarIOS>
  )

}
