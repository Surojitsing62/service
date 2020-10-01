import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class InsurancePrgramBody extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.ReferelContain}>
          <View style={styles.Container}>
            <View style={{padding: hp('2%')}}>
              <Image
                source={require('../../Images/protection.png')}
                style={styles.ImageStyle}
              />
            </View>

            <View style={styles.textcontainer}>
              <Text style={styles.TextTitle} numberOfLines={2}>
                Urban Company Insurance{'\n'}Protection Program
              </Text>

              <Text style={styles.subTitle} numberOfLines={2}>
                Upto Rs. 10,000 insurance protection{'\n'}with every service
                request
              </Text>

              <View style={{marginVertical: hp('1.5%')}}>
                <Text style={{color: '#00a6bf', fontWeight: 'bold'}}>
                  Learn more
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  ReferelContain: {
    flex: 1,
    // width: wp('100%'),
    // height: hp('24%'),
    marginTop: hp('2%'),
    backgroundColor: '#edf6f7',
  },
  Container: {
    flex: 1,
    paddingHorizontal: hp('2%'),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // flexDirection: 'row',
  },
  ImageStyle: {
    width: wp('16%'),
    height: hp('9%'),
    borderRadius: 10,
  },
  textcontainer: {
    // width:wp('')
    paddingVertical: hp('2%'),
    justifyContent: 'center',
  },
  TextTitle: {
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: hp('2%'),
    color: '#969696',
    marginVertical: hp('1.5%'),
  },
});
