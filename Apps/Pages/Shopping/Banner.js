import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
export default class Banner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          horizontal={false}
          autoplay
          style={styles.wrapper}
          paginationStyle={{
            bottom: hp('2%'),
            position: 'absolute',
          }}
          loop={true}>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://previews.123rf.com/images/anterovium/anterovium1602/anterovium160200003/53672526-old-carpenter-tools-collection-isolated-on-white.jpg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://www.expresssewer.com/hs-fs/hubfs/plumbing%20tools_89517060.jpeg?width=1000&name=plumbing%20tools_89517060.jpeg',
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri:
                  'https://bestplumbers.com.au/wp-content/uploads/2019/07/set-of-plumbing-tools.jpg',
              }}
              resizeMode="cover"
            />
          </View>
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
        </Swiper>
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
    width: wp('100%'),
    height: hp('25%'),
  },
});
