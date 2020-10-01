import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import user_avtar from '../../Images/user_avtar.png';
import rating_star from '../../Images/star.png';

export default class UserReview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.rootStyle}>
        <View style={styles.ProfileSection}>
          <View style={styles.TextRowOfBody}>
            <View style={styles.IconStyle}>
              <Image
                style={styles.ImageStyle}
                resizeMode="center"
                source={user_avtar}
              />
            </View>
            <View
              style={{
                marginHorizontal: hp('1%'),
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: hp('1.8%')}}>{this.props.name}</Text>
              <Text
                style={{color: '#b8b1ae', fontSize: hp('1.3%')}}
                numberOfLines={2}>
                {this.props.city} ● {this.props.date}
              </Text>
            </View>
          </View>
          <View style={styles.RightSideTextStyle}>
            <Image
              resizeMode="center"
              style={{width: wp('2.5%'), height: hp('3%')}}
              source={rating_star}
            />
            <Text
              style={{
                color: 'grey',
                fontWeight: 'bold',
                fontSize: hp('1.5%'),
              }}
              numberOfLines={1}>
              {this.props.ratingrate}
            </Text>
          </View>
        </View>
        <View style={styles.ReviewBoxStyle}>
          <View style={styles.ReviewTextStyle}>
            <Text style={{color: '#9e9b99', fontSize: hp('1.5%')}}>
              <Text style={{fontSize: hp('2%'), color: '#b8b1ae'}}>
                ❝&nbsp;
              </Text>
              {this.props.reviewsms}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    borderBottomWidth: 1,
    borderRadius: 22,
    borderColor: '#d9d3d0',
    padding: hp('2%'),
  },
  ProfileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextRowOfBody: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  IconStyle: {
    width: wp('15%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    width: wp('10%'),
    height: hp('5%'),
  },
  RightSideTextStyle: {
    width: wp('10%'),
    height: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // borderTopRightRadius: 45,
    // borderBottomLeftRadius: 45,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 4},
    // shadowOpacity: 0.7,
    // shadowRadius: 4,
    // elevation: 4,
    // justifyContent: 'center',
    alignItems: 'center',
    // borderColor: '#ff8c19',
    // borderWidth: 0.5,
  },
  ReviewBoxStyle: {
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: hp('2.5%'),
  },
  ReviewTextStyle: {
    width: wp('80%'),
    paddingHorizontal: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
