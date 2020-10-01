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
import {COLORS} from '../../constants/Colors';
import {Card, Icon, Button} from 'native-base';
import BookingCard from '../../components/Booking/BookingCard';

export default class OngoingProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MiddleSectionStyle}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BookingCard navigation={this.props.navigation} status="ACCEPTED" />
          <BookingCard navigation={this.props.navigation} status="PENDING" />
          <BookingCard navigation={this.props.navigation} status="PENDING" />
          <BookingCard navigation={this.props.navigation} status="PENDING" />
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
