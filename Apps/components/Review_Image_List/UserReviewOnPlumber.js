import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import UserReview from './UserReview';
export default class UserReviewOnPlumber extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MainConatin}>
        <UserReview
          name="Surojit Singh"
          date="10th Oct, 2020"
          city="Kolkata"
          ratingrate="5.0"
          reviewsms="Very humble and honest man. Does his job with full dedication and
              will not misguide you in any way."
        />
        <UserReview
          name="Ayan Sen"
          date="5th Sep, 2020"
          city="Kolkata"
          ratingrate="4.0"
          reviewsms="Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical."
        />
        <UserReview
          name="Sumit Paul"
          date="7th Sep, 2020"
          city="Kolkata"
          ratingrate="4.5"
          reviewsms="According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC."
        />
        <UserReview
          name="Rimo "
          date="12th Sep, 2020"
          city="Kolkata"
          ratingrate="3.2"
          reviewsms="It seems that only fragments of the original text remain in the Lorem Ipsum texts used today."
        />
        <UserReview
          name="Surojit singh"
          date="12th Sep, 2020"
          city="Kolkata"
          ratingrate="4.1"
          reviewsms="In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets ("
        />
        <View style={styles.ViewMoreStyle}>
          <Text style={{color: '#ff5526', fontSize: hp('2%')}}>View more</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainConatin: {
    flex: 1,
    marginTop: hp('2%'),
    backgroundColor: '#fff',
    marginBottom: hp('2%'),
  },
  ViewMoreStyle: {
    width: wp('100%'),
    height: hp('5%'),
    // borderColor: '#ff8336',
    justifyContent: 'center',
    alignItems: 'center',
    // borderTopWidth: 0.5,
    // borderRadius: 20,
  },
});
