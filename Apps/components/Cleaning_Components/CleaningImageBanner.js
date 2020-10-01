import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class CleaningImageBanner extends Component {
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
                  'https://goldenmaidservices.com/wp-content/uploads/2019/02/home-cleaning-tips-e1551283378699.jpeg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/10/11144136/shutterstock_677952907.jpg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://www.news-medical.net/image.axd?picture=2020%2F3%2F%40shutterstock_1626450310.jpg',
              }}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://content3.jdmagicbox.com/comp/def_content/housekeeping_services/default-housekeeping-services-3.jpg',
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
