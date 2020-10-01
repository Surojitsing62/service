import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class Accounts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, {backgroundColor: this.props.color}]}>
        <Icon style={styles.accIcon} name={this.props.icon} />
        <Text style={styles.textTitle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp('32%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: hp('1%'),
    marginVertical: hp('1%'),
    borderRadius: 5,
  },
  accIcon: {
    color: 'white',
    fontSize: hp('2%'),
    // marginVertical: hp('2%'),
    marginHorizontal: hp('1%'),
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('2%'),
    marginHorizontal: hp('1%'),
  },
});
