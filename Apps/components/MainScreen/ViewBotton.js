import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class ViewBotton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.ViewButton}>
        <Text style={{color: 'blue'}}>View all Services</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewButton: {
    width: wp('94%'),
    height: hp('6%'),
    borderWidth: 1,
    borderColor: 'rgba(145, 154, 255,0.3)',
    borderRadius: 5,
    backgroundColor: 'rgba(230, 242, 255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: hp('3%'),
  },
});
