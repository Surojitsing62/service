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
  // Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import Inputs from '../components/Registration_Assest/Inputs';
import Submit from '../components/Registration_Assest/Submit';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
export default class ForgotPassword extends Component {
  render() {
    return (
      <ScrollView
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require('../Images/forgot_password.gif')}
            resizeMode="center"
            style={styles.image}
          />
          <Text style={styles.textTitle} numberOfLines={1}>
            Forgot Password ?
          </Text>
          <Text
            style={[styles.textBody, {marginVertical: hp('2%')}]}
            numberOfLines={1}>
            Enter the email address associated with your account
          </Text>

          <Inputs name="Email" icon="envelope" />

          <Submit title="RESET PASSWORD" color="#0148a4" />
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[
                styles.textBody,
                {
                  color: 'blue',
                  borderBottomWidth: 1,
                  borderBottomColor: 'blue',
                },
              ]}
              onPress={() => this.props.navigation.navigate('Otp')}>
              Try with another way &nbsp;
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
  },
  image: {
    width: wp('70%'),
    height: hp('35%'),
    marginVertical: hp('1%'),
  },
  textTitle: {
    fontSize: hp('3.5%'),
    marginVertical: hp('1%'),
  },
  textBody: {
    fontSize: hp('2%'),
  },
});
