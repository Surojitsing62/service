import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BookingHistory from '../../components/Booking/BookingHistory';
export default class HistoryProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MiddleSectionStyle}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BookingHistory navigation={this.props.navigation} />
          <BookingHistory navigation={this.props.navigation} />
          <BookingHistory navigation={this.props.navigation} />
          <BookingHistory navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MiddleSectionStyle: {
    flex: 1,
    marginVertical: hp('1%'),
    paddingHorizontal: hp('2%'),
    marginBottom: hp('1%'),
  },
});
