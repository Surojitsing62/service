import React, {useRef} from 'react';
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
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Inputs from '../components/Inputs';
import Submit from '../components/Registration_Assest/Submit';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
export default function Otp() {
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
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
        <Text style={[styles.textBody, {marginVertical: 15}]} numberOfLines={1}>
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
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => ref_input2.current.focus()}
          />
          <TextInput
            placeholderTextColor={'#dadee3'}
            underlineColorAndroid="transparent"
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => ref_input3.current.focus()}
            ref={ref_input2}
            // autoFocus={true}
          />
          <TextInput
            placeholderTextColor={'#dadee3'}
            underlineColorAndroid="transparent"
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => ref_input4.current.focus()}
            ref={ref_input3}
            // autoFocus={true}
          />

          <TextInput
            placeholderTextColor={'#dadee3'}
            underlineColorAndroid="transparent"
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            ref={ref_input4}
            // autoFocus={true}
          />
        </View>
        <Submit title="CONFRIM" color="#0148a4" />
      </View>
    </ScrollView>
  );
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
});
