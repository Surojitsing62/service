import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ReferelSection1 from '../components/Reawards/ReferelSection1';
import ReferelSection2 from '../components/Reawards/ReferelSection2';
import ReferelSection3 from '../components/Reawards/ReferelSection3';

export default class Rewards extends Component {
  render() {
    return (
      <View style={styles.MainScreen}>
        <View style={styles.HeaderConatiner}>
          <Text style={styles.UserNameText}>Refer & Earn</Text>
        </View>
        {/* header end********************************************* */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <ReferelSection1 />
          <ReferelSection2 />
          <ReferelSection3 />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
  },
  HeaderConatiner: {
    width: wp('100%'),
    height: hp('6%'),
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: hp('2%'),
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(21, 17, 51,0.4)',
  },

  UserNameText: {
    color: '#fff',
    fontSize: hp('2.5% '),
  },
});
