import React, {Component} from 'react';
import {View, Image, StatusBar, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class UcSafe extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Swiper
          autoplay
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
                uri: 'https://ywfm.in/wp-content/uploads/2019/02/20.jpg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://ywfm.in/wp-content/uploads/2019/02/20.jpg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://ywfm.in/wp-content/uploads/2019/02/20.jpg',
              }}
            />
          </View>
        </Swiper> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('25%'),
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
    width: wp('90%'),
    height: hp('22%'),
  },
  dotButton: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  activeDotButton: {
    backgroundColor: '#fff',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
});
