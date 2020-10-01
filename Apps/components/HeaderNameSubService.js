import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class HeaderNameSubService extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={[styles.HeaderBoxStyle, {width: this.props.width}]}>
          <Text style={{color: '#adadac'}}>{this.props.HeaderBoxName}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  HeaderBoxStyle: {
    // flex: 1,
    // width: wp('25%'),
    height: hp('5%'),
    marginHorizontal: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b5b5b3',
    borderRadius: 5,
  },
});
