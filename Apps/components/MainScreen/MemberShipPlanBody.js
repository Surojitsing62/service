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
import {COLORS} from '../../constants/Colors';

export default class MemberShipPlanBody extends Component {
  render() {
    return (
      <View style={styles.MainContain}>
        <View style={styles.TextContain}>
          <Text style={styles.TextTitle} numberOfLines={1}>
            Wellness Membership
          </Text>
          <Text style={styles.subTitle}>Get 10% OFF on all services</Text>
          <View style={styles.ButtonContain}>
            <TouchableOpacity>
              <View style={styles.ButtonViewMebership}>
                <Text style={{color: '#5ad1a7', fontWeight: 'bold'}}>
                  View membership plan
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContain: {
    flex: 1,

    marginTop: hp('1.5%'),
    paddingHorizontal: hp('2%'),
    backgroundColor: 'rgb(21, 110, 78)',
  },
  TextContain: {
    paddingVertical: hp('2%'),
  },
  ButtonContain: {
    width: wp('45%'),
    marginVertical: hp('1%'),
  },
  TextTitle: {
    fontSize: hp('2.2%'),
    color: '#ffff',
  },
  subTitle: {
    fontSize: hp('1.8%'),
    color: COLORS.white,
    // paddingVertical: hp('1%'),
  },
  ButtonViewMebership: {
    width: wp('45%'),
    height: hp('5%'),
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
});
