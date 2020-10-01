import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class SafetyNote extends Component {
  render() {
    return (
      <View style={styles.MainRoot}>
        <View style={styles.HeaderTextstyle}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: hp('2.5%'),
              fontStyle: 'italic',
            }}>
            Note:-
          </Text>
        </View>
        <View style={styles.BodySectionStyle}>
          <View style={styles.TextSectionStyle}>
            <Text style={styles.textSize}>⬤</Text>
            <View style={styles.TextHeadingStyle}>
              <Text numberOfLines={2} style={styles.textSize}>
                Technical follow social distancing norms to ensure this is a low
                contact service
              </Text>
            </View>
          </View>
          <View style={styles.TextSectionStyle}>
            <Text style={styles.textSize}>⬤</Text>
            <View style={styles.TextHeadingStyle}>
              <Text numberOfLines={2} style={styles.textSize}>
                Technical wear masks, carry santizers,and follow WHO hygine
                guidelines
              </Text>
            </View>
          </View>
          <View style={styles.TextSectionStyle}>
            <Text style={styles.textSize}>⬤</Text>
            <View style={styles.TextHeadingStyle}>
              <Text numberOfLines={2} style={styles.textSize}>
                Spare parts are charged as per market price
              </Text>
            </View>
          </View>
          <View style={styles.TextSectionStyle}>
            <Text style={styles.textSize}>⬤</Text>
            <View style={styles.TextHeadingStyle}>
              <Text numberOfLines={2} style={styles.textSize}>
                Service charge excludes material costs and masonry charges
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainRoot: {
    flex: 1,
    // width: wp('100%'),
    // height: hp('33%'),

    backgroundColor: '#fff',
    padding: hp('2.5%'),
    marginTop: hp('2%'),
  },
  textSize: {
    fontSize: hp('1.8%'),
  },
  HeaderTextstyle: {
    // padding: hp('2.5%'),
    width: wp('25%'),
    height: hp('4%'),
    paddingHorizontal: hp('2%'),
    justifyContent: 'center',
    alignContent: 'center',
    // backgroundColor: '#ff6b21',
    borderWidth: 1,
    borderColor: '#ff6b21',
    borderTopLeftRadius: 45,
    borderBottomRightRadius: 45,
    // shadowRadius: 2,
    // shadowOpacity: 0.7,
    // shadowOffset: {width: 0, height: 4},
    // shadowColor: '#0000',
    // elevation: 5,
  },
  BodySectionStyle: {
    paddingHorizontal: hp('1.5%'),
    width: wp('95%'),
    height: hp('30%'),
  },
  TextSectionStyle: {
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: hp('1%'),
  },
  TextHeadingStyle: {
    marginHorizontal: hp('2%'),
  },
});
