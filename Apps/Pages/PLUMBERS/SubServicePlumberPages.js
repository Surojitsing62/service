import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import PlumberImageBanner from '../../components/Plumber_Components/PlumberImageBanner';
import PlumberSubImageList from '../../components/Plumber_Components/PlumberSubImageList';
import SafetyNote from '../../components/SafetyNote';
import Fulfilled_Verified_Note from '../../components/Fulfilled_Verified_Note';
import ReviewRatingOfPlumber from '../../components/Review_Image_List/ReviewRatingOfPlumber';
import UserReviewOnPlumber from '../../components/Review_Image_List/UserReviewOnPlumber';

import {Button, Header, Title, Icon} from 'native-base';
import {COLORS} from '../../constants/Colors';

export default class SubServicePlumberPages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainRoot}>
        <Header
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: COLORS.themecolor,
          }}
          androidStatusBarColor="#000">
          <TouchableWithoutFeedback>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrowleft" type="AntDesign" />
            </Button>
          </TouchableWithoutFeedback>

          <Title>Plumbers</Title>
        </Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PlumberImageBanner />

          <View style={styles.SectionList}>
            <View style={styles.TextStyle}>
              <Text style={{fontSize: hp('2.5%'), fontWeight: 'bold'}}>
                What do you want help with?
              </Text>
            </View>
            <PlumberSubImageList navigation={this.props.navigation} />
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
    // width: wp('100%'),
    // height: hp('45%'),
    backgroundColor: '#ffff',
  },
  TextStyle: {
    padding: hp('2.5%'),
  },
});
