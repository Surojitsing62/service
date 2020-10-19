import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default class BodyContainer1 extends Component {
  render() {
    return (
      <View style={styles.BodyContain2}>
        <TouchableOpacity>
          <Image
            source={{
              uri:
                'https://cdn.static-zoutons.com/images/originals/stores/URBANCLAP1_1_1597737098.png',
            }}
            style={{
              width: wp('92%'),
              height: hp('24%'),
              resizeMode: 'cover',
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BodyContain2: {
    width: wp('100%'),
    height: hp('27%'),
    marginTop: hp('1.5%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
