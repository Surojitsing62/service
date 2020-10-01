import React, {Component} from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class InputText extends Component {
  render() {
    return (
      <View style={styles.inputtext}>
        <TextInput
          style={{
            fontSize: hp('2%'),
            letterSpacing: 2,
            width: wp('10%'),
            textAlign: 'center',
          }}
          maxLength={3}
          placeholder="CVV"
          underlineColorAndroid="transparent"
        />
        <Text
          style={{
            color: 'grey',
            fontSize: hp('2%'),
            fontWeight: 'bold',
          }}>
          �
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputtext: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // paddingHorizontal: hp('1%'),
    width: wp('30%'),
    height: hp('5%'),
    // backgroundColor: 'red',
    borderBottomWidth: 0.5,
  },
});
