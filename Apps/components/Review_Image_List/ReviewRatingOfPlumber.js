import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import star from '../../Images/star.png';
import review from '../../Images/review.png';

export default class ReviewRatingOfPlumber extends Component {
  render() {
    return (
      <View style={styles.MainConatin}>
        <Text
          numberOfLines={2}
          style={{
            fontWeight: 'bold',
            fontSize: hp('2.5%'),
            //   fontStyle: 'italic',
          }}>
          What user are saying about us
        </Text>

        <View style={styles.TextRowOfBody}>
          <View style={styles.IconStyle}>
            <Image resizeMode="center" source={star} />
          </View>
          <View style={{marginHorizontal: hp('1%'), justifyContent: 'center'}}>
            <Text>4.7 out of 5 stars</Text>
            <Text style={{color: 'grey'}} numberOfLines={2}>
              Average rating of the service
            </Text>
          </View>
        </View>
        <View style={styles.TextRowOfBody}>
          <View style={styles.IconStyle}>
            <Image source={review} resizeMode="center" />
          </View>
          <View style={{marginHorizontal: hp('1%'), justifyContent: 'center'}}>
            <Text>100,000+ reviews</Text>
            <Text style={{color: 'grey'}} numberOfLines={2}>
              Of the service by users
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
    // height: hp('22%'),
    marginTop: hp('2%'),
    padding: hp('2.5%'),
    backgroundColor: '#fff',
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
