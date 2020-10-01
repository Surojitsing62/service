import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../constants/Colors';
import BodyContainerTop from '../components/MainScreen/BodyContainerTop';
import BodyContainer2 from '../components/MainScreen/BodyContainer2';
import BodyContainer3 from '../components/MainScreen/BodyContainer3';
import BodyContainer4 from '../components/MainScreen/BodyContainer4';
import BodyContainer5 from '../components/MainScreen/BodyContainer5';
import BodyContainer6 from '../components/MainScreen/BodyContainer6';
import BodyContainer7 from '../components/MainScreen/BodyContainer7';
import ReferelBody from '../components/MainScreen/ReferelBody';
import MemberShipPlanBody from '../components/MainScreen/MemberShipPlanBody';
import InsurancePrgramBody from '../components/MainScreen/InsurancePrgramBody';
import EndSectionBody from '../components/MainScreen/EndSectionBody';
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
            <BodyContainer3 navigation={this.props.navigation} />
            <BodyContainer2 />

            <BodyContainer6
              TextTitle="Customer safety is our priority"
              SubTitle="What customers are saying about our safety standards"
            />

            <ReferelBody />
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
