import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView, Image, View} from 'react-native';
import Inputs from '../components/Registration_Assest/Inputs';
import Submit from '../components/Registration_Assest/Submit';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {COLORS} from '../constants/Colors';
export default class SignUpPages extends Component {
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
            source={require('../Images/add_user.gif')}
            resizeMode="center"
            style={styles.image}
          />
          <Text style={styles.textTitle}>Let's Get Started</Text>
          <Text style={styles.textBody}>
            Create an account to get all features
          </Text>
          <View style={{marginTop: hp('2%')}}>
            <Inputs name="Full Name" icon="user" />
            <Inputs name="Email" icon="envelope" />
            <Inputs name="Phone" icon="phone" />
            <Inputs name="Password" icon="lock" pass={true} />
          </View>

          <Submit title="SIGN UP" color={COLORS.buttonColor} />
          <View style={{flexDirection: 'row'}}>
            <Text>Already have an acoount &nbsp;</Text>
            <Text
              style={[styles.textBody, {color: COLORS.buttonColor}]}
              onPress={() => this.props.navigation.navigate('Login')}>
              Sign In
            </Text>
          </View>
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
    // marginVertical: hp('1%'),
  },
  textTitle: {
    fontSize: hp('4.5%'),
    marginVertical: hp('1%'),
  },
  textBody: {
    fontSize: hp('2%'),
  },
});
