import React, {Component} from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
import HeaderBar from '../../constants/HeaderBar';
import DatePicker from 'react-native-date-picker';

export default class BookingDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  HandleChange = () => {
    alert('Booking Confirm');
    this.props.navigation.navigate('SummaryService');
  };

  render() {
    return (
      <View style={styles.root}>
        <HeaderBar name="Booking schedule" navigation={this.props.navigation} />
        <View style={styles.BodyContainer}>
          <View
            style={{
              height: hp('10%'),
              // marginTop: hp('3%'),
              // backgroundColor: '#ffff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: hp('2%')}}>
              When would you like your service?
            </Text>
          </View>

          <DatePicker
            style={styles.DateViewStyle}
            date={this.state.date}
            onDateChange={(date) => this.setState({date})}
            mode="date"
            // textColor="red"
          />
        </View>
        <View
          style={{
            padding: hp('1.2%'),
            backgroundColor: COLORS.white,
            // marginBottom: hp('1%'),
          }}>
          <TouchableWithoutFeedback onPress={this.HandleChange}>
            <View style={styles.subscribeButton}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: hp('2%'),
                  color: COLORS.white,
                  letterSpacing: 1,
                }}>
                BOOKING
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  BodyContainer: {
    flex: 1,
    paddingHorizontal: hp('1.5%'),
    backgroundColor: '#ffff',
  },
  subscribeButton: {
    // width: wp('90%'),
    height: hp('5%'),
    backgroundColor: '#1f90e0',
    borderRadius: 5,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: hp('3%'),
  },
  DateViewStyle: {
    width: wp('100%'),
    // height: hp('50%'),
  },
});
