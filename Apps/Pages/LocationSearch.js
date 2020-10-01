import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import navigationimage from '../Images/Navigation.gif';
import {COLORS} from '../constants/Colors';

export default class LocationSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerContain}>
        <View style={styles.textInputfiled}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('HomeTab')}>
            <View>
              <Icon
                type="MaterialIcons"
                name="arrow-back"
                color="black"
                style={{fontSize: 25}}
              />
            </View>
          </TouchableNativeFeedback>

          <View style={{marginHorizontal: hp('4%')}}>
            <TextInput
              autoFocus={true}
              placeholder="Search Your Location"
              placeholderTextColor="grey"
              maxLength={45}
              style={{
                fontSize: hp('2%'),
                // color: 'grey',
              }}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: hp('2%'),
          }}>
          <ImageBackground
            resizeMode="contain"
            source={navigationimage}
            style={{width: wp('90%'), height: hp('40%')}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContain: {
    flex: 1,
    justifyContent: 'space-between',
    // width: wp('100%'),
    // height: hp('10%'),
    backgroundColor: COLORS.white,

    color: '#fff',
  },
  textInputfiled: {
    width: wp('100%'),
    height: hp('6%'),
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    paddingHorizontal: hp('2%'),
    backgroundColor: '#fff',
  },
});
