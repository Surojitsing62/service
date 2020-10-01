import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
// import ImageListByHorizontalScroll from '../../components/BannerImage_Horizontal/ImageListByHorizontalScroll';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AcImageBanner from '../../components/Ac_Components/AcImageBanner';
import AcSubImageList from '../../components/Ac_Components/AcSubImageList';

import SafetyNote from '../../components/SafetyNote';
import Fulfilled_Verified_Note from '../../components/Fulfilled_Verified_Note';
import ReviewRatingOfPlumber from '../../components/Review_Image_List/ReviewRatingOfPlumber';
import UserReviewOnPlumber from '../../components/Review_Image_List/UserReviewOnPlumber';

export default class SubServiceAcPages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainRoot}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AcImageBanner />
          <View style={styles.SectionList}>
            <View style={styles.TextStyle}>
              <Text style={{fontSize: hp('2.5%'), fontWeight: 'bold'}}>
                What do you want help with?
              </Text>
            </View>
            <AcSubImageList navigation={this.props.navigation} />
          </View>
          <SafetyNote />
          <Fulfilled_Verified_Note />
          <ReviewRatingOfPlumber />
          <UserReviewOnPlumber />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainRoot: {
    flex: 1,
  },
  SectionList: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  TextStyle: {
    padding: hp('2.5%'),
  },
});
