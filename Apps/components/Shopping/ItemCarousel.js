import React, {Component} from 'react';

import {COLORS} from '../../constants/Colors';

import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Card, Icon, Button, Input, Item} from 'native-base';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';

export default class ItemCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        {/* <View style={styles.HeaderStyle}>
          <Text style={{fontFamily: 'Roboto-Bold'}}>
            Good Life Almonds 500 g
          </Text>
          <Text style={{color: COLORS.shadowTextColor}}>GOOD LIFE</Text>
        </View> */}

        <View style={styles.SwiperView}>
          <Swiper
            autoplay={true}
            paginationStyle={{position: 'absolute', bottom: 0}}>
            <View style={styles.slide1}>
              <ImageBackground
                source={{
                  uri:
                    'https://previews.123rf.com/images/john79/john791710/john79171000019/87519613-brush-and-roller-for-painting-tools.jpg',
                }}
                style={styles.imagestyle}
                resizeMode="contain"></ImageBackground>
            </View>
            <View style={styles.slide2}>
              <ImageBackground
                source={{
                  uri:
                    'https://previews.123rf.com/images/john79/john791710/john79171000019/87519613-brush-and-roller-for-painting-tools.jpg',
                }}
                style={styles.imagestyle}
                resizeMode="contain"></ImageBackground>
            </View>

            <View style={styles.slide3}>
              <ImageBackground
                source={{
                  uri:
                    'https://previews.123rf.com/images/john79/john791710/john79171000019/87519613-brush-and-roller-for-painting-tools.jpg',
                }}
                style={styles.imagestyle}
                resizeMode="contain"></ImageBackground>
            </View>
          </Swiper>
        </View>

        <View style={styles.DescPlace}>
          <View
            style={{paddingHorizontal: hp('2.5%'), paddingVertical: hp('2%')}}>
            <Text style={{fontSize: hp('3%')}}>Brush and Roller</Text>
            <Text style={{color: COLORS.green}}>
              You save{' '}
              <Icon
                name="rupee"
                type="FontAwesome"
                style={{fontSize: hp('1.5%'), color: COLORS.green}}
              />
              &nbsp;30
            </Text>
            <Text>
              <Icon
                name="rupee"
                type="FontAwesome"
                style={{fontSize: hp('2%'), fontWeight: 'bold'}}
              />
              &nbsp;
              <Text style={{fontWeight: 'bold', fontSize: hp('2%')}}>
                220.00
              </Text>{' '}
              <Text style={{fontSize: hp('2%'), color: COLORS.shadowTextColor}}>
                (incl. of all taxes)
              </Text>
            </Text>
            <View>
              <Text
                style={{fontSize: hp('1.7%'), color: COLORS.shadowTextColor}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: hp('1%'),
  },
  HeaderStyle: {
    // flex: 1,
    paddingVertical: hp('2%'),
    paddingHorizontal: hp('2%'),
  },
  SwiperView: {
    // flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: hp('2%'),
    width: wp('100%'),
    height: hp('40%'),
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagestyle: {
    width: wp('100%'),
    height: hp('100%'),
  },
  DescPlace: {
    paddingBottom: hp('2%'),
    backgroundColor: COLORS.white,
  },
});
