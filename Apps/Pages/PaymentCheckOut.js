import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import RadioButton from './RadioButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import {COLORS} from '../constants/Colors';
export default class PaymentCheckOut extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.rootContain}>
        <View style={styles.HeaderStyle}>
          <Text style={styles.HeaderTextStyle}>All Payments Options</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: '#fff',
          }}>
          <View style={styles.PaymentOptionsStyle}>
            <RadioButton />
          </View>
          <View style={styles.ContinueButton}>
            <View style={styles.amountStyle}>
              <Text
                style={{
                  color: COLORS.buttonColor,
                  fontSize: hp('2%'),
                  fontWeight: 'bold',
                }}>
                Payble Amount
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: hp('2.5%'),
                  // letterSpacing: 1,
                }}>
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  style={{
                    // color: COLORS.green,
                    fontSize: hp('2.5%'),
                  }}
                />{' '}
                280
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {
                alert('payment successfull');
                this.props.navigation.navigate('HomeTab');
              }}>
              <View style={styles.Button}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: hp('2%'),
                    color: '#fff',
                    letterSpacing: 1,
                  }}>
                  CONTINUE
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContain: {
    flex: 1,
  },
  BodyContain: {
    // width: wp('100%'),
    // height: hp('20%'),
  },
  HeaderStyle: {
    backgroundColor: '#fff',
    padding: hp('2%'),
  },
  HeaderTextStyle: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  PaymentOptionsStyle: {
    width: wp('100%'),

    backgroundColor: '#fff',
    marginTop: hp('2%'),
  },
  ContinueButton: {
    flexDirection: 'row',
    padding: hp('2%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('8%'),
    borderTopWidth: 0.5,
    borderColor: '#e3e3e3',
    // backgroundColor: 'red',
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('50%'),
    height: hp('6%'),
    backgroundColor: '#ff6d33',
    elevation: 2,
    borderRadius: 5,
  },
  amountStyle: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: wp('40%'),
    height: hp('6%'),
    // backgroundColor: 'pink',
  },
});
