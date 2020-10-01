import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class AcImageBanner extends Component {
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
                  'https://3.imimg.com/data3/UJ/LS/MY-8628121/ac-repair-service-500x500.jpg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://www.acservicecenterinjaipur.in/wp-content/uploads/2018/02/ac-repair-5.jpg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://www.supportkerala.com/wp-content/uploads/2017/12/ac-repairing-600x550.jpg',
              }}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://dr55kig202lxr.cloudfront.net/gallery/v1/ac-repair-service-chennai.jpg',
              }}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://previews.123rf.com/images/leolintang/leolintang1709/leolintang170900008/85191848-young-asian-male-technician-repairing-air-conditioner-at-home.jpg',
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
