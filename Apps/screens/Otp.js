import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../constants/Colors';
export default class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
    };
  }
  componentDidMount = () => {
    this.refs.pin1ref.focus();
  };

  render() {
    const {pin1, pin2, pin3, pin4} = this.state;
    return (
      <ScrollView
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require('../Images/mail-sent.gif')}
            resizeMode="center"
            style={styles.image}
          />
          <Text style={styles.textTitle} numberOfLines={1}>
            Verify your OTP
          </Text>
          <Text
            style={[styles.textBody, {marginVertical: 15}]}
            numberOfLines={1}>
            Please enter the 4 digit code sent to
          </Text>

          {/* <Inputs /> */}
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholderTextColor={'#dadee3'}
              underlineColorAndroid="transparent"
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              ref={'pin1ref'}
              onChangeText={(pin1) => {
                this.setState({pin1: pin1});
                if (pin1 != '') {
                  this.refs.pin2ref.focus();
                }
              }}
              value={pin1}
            />
            <TextInput
              placeholderTextColor={'#dadee3'}
              underlineColorAndroid="transparent"
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              // returnKeyType="next"
              ref={'pin2ref'}
              value={pin2}
              onChangeText={(pin2) => {
                this.setState({pin2: pin2});
                if (pin2 != '') {
                  this.refs.pin3ref.focus();
                }
              }}
            />
            <TextInput
              placeholderTextColor={'#dadee3'}
              underlineColorAndroid="transparent"
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              // returnKeyType="next"
              ref={'pin3ref'}
              value={pin3}
              onChangeText={(pin3) => {
                this.setState({pin3: pin3});
                if (pin3 != '') {
                  this.refs.pin4ref.focus();
                }
              }}
            />

            <TextInput
              placeholderTextColor={'#dadee3'}
              underlineColorAndroid="transparent"
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              ref={'pin4ref'}
              onChangeText={(pin4) => this.setState({pin4: pin4})}
              value={pin4}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('HomeTab')}>
            <View
              style={[
                styles.Submitbutton_container,
                {backgroundColor: COLORS.buttonColor, marginVertical: hp('2%')},
              ]}>
              <Text style={styles.submitText}>CONFRIM</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: wp('70%'),
    height: hp('35%'),
  },
  textTitle: {
    fontSize: hp('3.5%'),
  },
  textBody: {
    fontSize: hp('2%'),
  },
  input: {
    width: wp('15%'),
    height: hp('6%'),
    // margin: 15,
    margin: hp('2%'),
    textAlign: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  Submitbutton_container: {
    width: wp('90%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.buttonColor,
    borderRadius: 10,
    marginVertical: hp('1%'),
    // borderWidth: 0,
  },
  submitText: {
    fontSize: hp('3%'),
    letterSpacing: 1,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginVertical: hp('1%'),
  },
});
