import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class ReferelSection2 extends Component {
  render() {
    return (
      <View style={styles.MainScreenStyle}>
        <View style={styles.HeaderTextStyle}>
          <Text
            numberOfLines={2}
            style={{fontSize: hp('2.9%'), fontWeight: 'bold'}}>
            Refer everyone - the most generous referral program
          </Text>
        </View>

        <View style={styles.Section2}>
          <View style={styles.ImageStyleCircle}>
            <Image
              resizeMode="contain"
              source={require('../../Images/trophy.png')}
              style={styles.ImageStyle}
            />
          </View>
          <Text numberOfLines={2} style={{color: '#858382'}}>
            Invite all friends even if they have tried&nbsp;&nbsp;&nbsp;{'\n'}
            us.You will get rewarded every Time!
          </Text>
        </View>
        <View style={styles.Section2}>
          <View style={styles.ImageStyleCircle}>
            <Image
              resizeMode="contain"
              source={require('../../Images/money-bag.png')}
              style={styles.ImageStyle}
            />
          </View>
          <Text numberOfLines={2} style={{color: '#858382'}}>
            Upon inviting, well give them rewards for{'\n'}the services they
            haven't tried yet
          </Text>
        </View>
        <View style={styles.Section2}>
          <View style={styles.ImageStyleCircle}>
            <Image
              resizeMode="contain"
              source={require('../../Images/msg_logo.png')}
              style={styles.ImageStyle}
            />
          </View>
          <Text numberOfLines={2} style={{color: '#858382'}}>
            For every successfull signup,you can win{'\n'}upto $5, and minimum
            $1
          </Text>
        </View>

        <View style={{paddingHorizontal: hp('2%')}}>
          <Text style={{color: 'blue'}}>
            <Text style={{fontWeight: 'bold', fontSize: hp('3%')}}>
              .&nbsp;&nbsp;
            </Text>
            <Text style={{fontSize: hp('1.5%')}}>
              Terms and Conditions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: hp('3%')}}>
              .&nbsp;&nbsp;
            </Text>
            <Text style={{fontSize: hp('1.5%')}}>FAQs</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainScreenStyle: {
    width: wp('100%'),
    height: hp('50%'),
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginVertical: hp('2%'),
  },
  HeaderTextStyle: {
    width: wp('100%'),
    height: hp('10%'),
    justifyContent: 'center',
    paddingHorizontal: hp('2%'),
  },
  Section2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: hp('1%'),
  },
  ImageStyle: {
    width: wp('8%'),
    height: hp('5%'),
  },
  ImageStyleCircle: {
    width: wp('15%'),
    height: hp('7.5%'),
    backgroundColor: '#dcf5ef',
    borderRadius: 100,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
