import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class CarpenterImageBanner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          autoplay={true}
          autoplayTimeout={3}
          style={styles.wrapper}
          dot={<View style={styles.dotButton} />}
          activeDot={<View style={styles.activeDotButton} />}
          paginationStyle={{
            bottom: hp('3%'),
            position: 'absolute',
          }}
          loop={true}>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://5.imimg.com/data5/CM/TH/ZF/SELLER-12842665/carpenter-500x500.jpg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://artech.ae/images/carpentry.jpg',
              }}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://www.dumpsters.com/images/blog/carpentry_1530018525/carpentry-1200x600.jpg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://artech.ae/images/carpentry.jpg',
              }}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('30%'),
  },
  wrapper: {
    backgroundColor: '#ffff',
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  image: {
    width: wp('93%'),
    height: hp('28%'),
    borderRadius: 14,
  },
  dotButton: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 8,
    height: 8,
    borderRadius: 5,
    marginLeft: 7,
    marginRight: 7,
  },
  activeDotButton: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 5,
    marginLeft: 7,
    marginRight: 7,
  },
});
