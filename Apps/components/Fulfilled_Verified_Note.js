import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import {COLORS} from '../constants/Colors';
export default class Fulfilled_Verified_Note extends Component {
  render() {
    return (
      <View style={styles.MainConatin}>
        <View style={styles.SectionHeader}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: hp('2.5%'),
              fontStyle: 'italic',
            }}>
            Fulfilled
          </Text>
        </View>

        <View style={styles.TextRowOfBody}>
          <View style={styles.IconStyle}>
            <Image resizeMode="center" source={require('../Images/user.png')} />
          </View>
          <View style={{marginHorizontal: hp('1%'), justifyContent: 'center'}}>
            <Text style={styles.textSize}>Skiled and verified plumbers</Text>
          </View>
        </View>
        <View style={styles.TextRowOfBody}>
          <View style={styles.IconStyle}>
            <Image
              source={require('../Images/month.png')}
              resizeMode="center"
            />
          </View>
          <View style={{marginHorizontal: hp('1%'), justifyContent: 'center'}}>
            <Text style={styles.textSize}>30-Day service guarantee</Text>
          </View>
        </View>
        <View style={styles.TextRowOfBody}>
          <View style={styles.IconStyle}>
            <Image
              source={require('../Images/rupee.png')}
              resizeMode="center"
            />
          </View>
          <View style={{marginHorizontal: hp('1%'), justifyContent: 'center'}}>
            <Text style={styles.textSize}>
              <Icon name="rupee" type="FontAwesome" style={styles.textSize} />{' '}
              100 damage cover on every booking
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainConatin: {
    flex: 1,
    // width: wp('100%'),
    // height: hp('25%'),
    marginTop: hp('2%'),
    padding: hp('2.5%'),
    backgroundColor: '#fff',
  },
  textSize: {
    fontSize: hp('1.8%'),
    // color: COLORS.shadowTextColor,
  },
  SectionHeader: {
    width: wp('25%'),
    height: hp('4%'),
    paddingHorizontal: hp('2%'),
    justifyContent: 'center',
    alignContent: 'center',
    // backgroundColor: '#ff6b21',
    borderColor: '#ff6b21',
    borderWidth: 1,
    borderTopLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  TextRowOfBody: {
    flexDirection: 'row',
    paddingVertical: hp('1.5%'),
    justifyContent: 'flex-start',
  },
  IconStyle: {
    width: wp('8%'),
    height: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
