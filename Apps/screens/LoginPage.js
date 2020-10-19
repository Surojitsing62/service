import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '../constants/Colors';
import Inputs from '../components/Registration_Assest/Inputs';

import Accounts from '../components/Registration_Assest/Accounts';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require('../Images/userlogin.gif')}
            resizeMode="center"
            style={styles.image}
          />
          <Text style={styles.textTitle}>Welcome Back</Text>
          <Text style={styles.textBody}>Log in to your existant account</Text>
          <View style={{marginTop: 20}} />

          <Inputs name="Phone Number" icon="mobile-alt" />
          <View style={{marginTop: hp('2%')}}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('Otp')}>
              <View
                style={[
                  styles.Submitbutton_container,
                  {
                    backgroundColor: COLORS.buttonColor,
                    marginVertical: hp('2%'),
                  },
                ]}>
                <Text style={styles.submitText}>SIGN IN</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View
            style={{
              marginTop: hp('2%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textBody}>Or connect using</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Accounts color="#3b5c8f" icon="facebook" title="Facebook" />
              <Accounts color="#ec482f" icon="google" title="Google" />
            </View>
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              marginVertical: hp('2%'),
              justifyContent: 'center',
            }}>
            <Text style={styles.textBody}>Don't Have an account&nbsp;</Text>
            <Text
              style={[styles.textBody, {color: COLORS.buttonColor}]}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </View> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: wp('70%'),
    height: hp('35%'),
    marginVertical: hp('1%'),
  },
  textTitle: {
    fontSize: hp('4%'),
    marginVertical: hp('1%'),
  },
  textBody: {
    fontSize: hp('2%'),
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
