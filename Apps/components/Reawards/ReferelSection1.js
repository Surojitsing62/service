import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class ReferelSection1 extends Component {
  render() {
    return (
      <View style={styles.FirstHeaderSection}>
        <View style={styles.Section1Style}>
          <View style={styles.TextSectionOfHeader}>
            <Text style={styles.TitleText}>Refer and get FREE services</Text>
            <Text
              numberOfLines={2}
              style={{color: '#bdbab9', fontSize: hp('1.6%')}}>
              Invite your friends to Urban Company services.They get{'\n'}
              instant $2 off. You win upto $50 in rewards.
            </Text>
          </View>
          <View style={styles.ImageContainer}>
            <Image
              resizeMode="contain"
              source={require('../../Images/gifbox.png')}
              style={styles.GiftboxStyle}
            />
          </View>
        </View>
        <View style={styles.BorderDotText}>
          <Text numberOfLines={1} style={{letterSpacing: 2, color: 'grey'}}>
            .........................Refer via........................
          </Text>
        </View>
        <View style={styles.SocialIconStyle}>
          <TouchableOpacity>
            <View style={styles.iconSection}>
              <Image
                resizeMode="contain"
                source={require('../../Images/whatsapp.png')}
                style={styles.IconStyle}
              />
            </View>
            <View style={styles.TextStyle}>
              <Text>Whatsapp</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconSection}>
              <Image
                resizeMode="contain"
                source={require('../../Images/messenger.png')}
                style={styles.IconStyle}
              />
            </View>
            <View style={styles.TextStyle}>
              <Text>Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconSection}>
              <Image
                resizeMode="contain"
                source={require('../../Images/more.png')}
                style={styles.IconStyle}
              />
            </View>
            <View style={styles.TextStyle}>
              <Text>More</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FirstHeaderSection: {
    // marginVertical: hp('2%'),
    paddingHorizontal: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('35%'),
    backgroundColor: 'rgba(250, 156, 115,0.1)',
  },
  Section1Style: {
    paddingHorizontal: hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextSectionOfHeader: {
    width: wp('80%'),
    height: hp('10%'),
  },
  TitleText: {
    fontSize: hp('2.4%'),
    fontWeight: 'bold',
  },
  GiftboxStyle: {
    width: wp('10%'),
    height: hp('5%'),
  },
  ImageContainer: {
    padding: hp('1%'),
  },
  BorderDotText: {
    width: wp('95%'),
    height: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('2%'),
  },
  SocialIconStyle: {
    flexDirection: 'row',
    marginVertical: hp('1%'),
    justifyContent: 'space-around',
    // alignItems: 'flex-end',
    width: wp('90%'),
    height: hp('10%'),
  },
  iconSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('15%'),
    height: hp('7.5%'),
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  IconStyle: {
    width: wp('7.1%'),
    height: hp('4%'),
  },
  TextStyle: {
    alignItems: 'center',
  },
});
