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
import {Icon} from 'native-base';
import {COLORS} from '../../constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class ReferelBody extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.ReferelContain}>
          <View style={styles.Container}>
            <Image
              source={require('../../Images/sckatchCard.jpeg')}
              style={styles.ImageStyle}
            />
            <View style={styles.textcontainer}>
              <Text style={styles.TextTitle}>
                Help your friends get a safe service
              </Text>
              <Text style={styles.subTitle}>
                Refer & earn upto{' '}
                <Icon name="rupee" type="FontAwesome" style={styles.subTitle} />
                50
              </Text>
            </View>
            <FontAwesome name="angle-right" size={28} color="#969696" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  ReferelContain: {
    width: wp('100%'),
    height: hp('10%'),
    marginTop: hp('1.5%'),
    backgroundColor: COLORS.white,
  },
  Container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ImageStyle: {
    width: wp('15%'),
    height: hp('7%'),
    borderRadius: 10,
  },
  textcontainer: {
    padding: hp('2%'),
    justifyContent: 'center',
  },
  TextTitle: {
    color: '#00a6bf',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: hp('1.8%'),
    color: COLORS.shadowTextColor,
    marginVertical: hp('0.5%'),
  },
});
