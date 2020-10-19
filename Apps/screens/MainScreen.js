import React, {Component} from 'react';
// import {createAppContainer} from 'react-navigation';
import {View, StyleSheet, ScrollView} from 'react-native';

import BodyContainerTop from '../components/MainScreen/BodyContainerTop';
import BodyContainer1 from '../components/MainScreen/BodyContainer1';
import BodyContainer2 from '../components/MainScreen/BodyContainer2';

import BodyContainer3 from '../components/MainScreen/BodyContainer3';

import MemberShipPlanBody from '../components/MainScreen/MemberShipPlanBody';

import MainScreenHeader from '../components/MainScreen/MainScreenHeader';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContain}>
        {/* Header Place********************************** */}
        <MainScreenHeader navigation={this.props.navigation} />
        {/* Header End*************************************** */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.BodyContain}>
            <BodyContainerTop />
            <BodyContainer2 navigation={this.props.navigation} />
            <BodyContainer1 />

            <BodyContainer3
              TextTitle="Customer safety is our priority"
              SubTitle="What customers are saying about our safety standards"
            />

            <MemberShipPlanBody />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContain: {
    flex: 1,
  },
  BodyContain: {
    flex: 1,
    // backgroundColor: 'red',
  },
});
