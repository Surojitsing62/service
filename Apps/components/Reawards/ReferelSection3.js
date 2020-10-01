import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ReferelSection3 extends Component {
  render() {
    return (
      <View style={styles.MainScreenStyle}>
        <View style={styles.HeaderTextStyle}>
          <Text
            numberOfLines={2}
            style={{fontSize: hp('2.5%'), fontWeight: 'bold'}}>
            You are yet to earn any scratch cards
          </Text>
          <Text style={{fontSize: hp('1.8%'), color: 'grey'}}>
            Strat referring to get surprise
          </Text>

          {/* <Text numberOfLines={1} style={{letterSpacing: 2}}>
            ..........................................................
          </Text> */}
          <View
            style={{
              width: wp('90%'),
              borderBottomWidth: 0.5,
              borderColor: '#e3e3e3',
              paddingVertical: hp('1%'),
              // margin: hp('1%'),
            }}></View>
        </View>

        <View style={styles.EndSectionStyle}>
          <Image
            resizeMode="contain"
            source={require('../../Images/gifbox.png')}
            style={styles.GiftboxStyle}
          />
          <View style={styles.EndTextStyle}>
            <Text style={{fontSize: hp('1.8%')}}>
              Earn Min. $10 off on every scratch card
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainScreenStyle: {
    width: wp('100%'),
    height: hp('18%'),
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    // marginVertical: hp('2%'),
    marginBottom: hp('2%'),
  },
  HeaderTextStyle: {
    width: wp('90%'),
    height: hp('10%'),
    justifyContent: 'center',
    marginHorizontal: hp('2%'),
  },
  EndSectionStyle: {
    width: wp('100%'),
    height: hp('5%'),
    flexDirection: 'row',
    paddingHorizontal: hp('2%'),
  },
  GiftboxStyle: {
    width: wp('5%'),
    height: hp('2.5%'),
  },
  EndTextStyle: {
    paddingHorizontal: hp('2%'),
  },
});
