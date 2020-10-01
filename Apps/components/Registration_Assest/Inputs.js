import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
  }

  onFocusChnage = () => {
    this.setState({isFocused: true});
  };
  render() {
    return (
      <View
        style={[
          styles.container,
          {borderColor: this.state.isFocused ? '#0779ef' : '#eee'},
        ]}>
        <Icon
          style={styles.iconstyle}
          name={this.props.icon}
          size={22}
          color={this.state.isFocused ? '#0779e4' : 'grey'}
        />
        <TextInput
          // autoCompleteType="none"
          style={styles.TextInput}
          placeholder={this.props.name}
          onFocus={this.onFocusChnage}
          secureTextEntry={this.props.pass}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('7%'),
    borderRadius: 100,
    marginVertical: hp('1%'),
    borderWidth: 3.5,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  TextInput: {
    fontSize: hp('2.4%'),
    // color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: hp('5%'),
  },
  // inputText: {

  // },
  iconstyle: {
    position: 'absolute',
    top: hp('1.3%'),
    left: hp('2%'),
  },
});
