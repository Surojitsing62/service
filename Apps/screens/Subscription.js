import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Icon,
  Card,
  ScrollableTab,
} from 'native-base';

import {COLORS} from '../constants/Colors';
import SubscriptionsCards from '../components/Subcriptions/SubcriptionsCards';
export default class Subscription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.HeaderStyle}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: hp('2%'),
                color: COLORS.white,
                // fontWeight: 'bold',
              }}>
              My Subscription
            </Text>
          </View>
        </View>
        <View style={styles.bodycontainer}>
          <View
            style={{
              //   flex: 1,
              //   marginTop: hp('2%'),

              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.themecolor,
            }}>
            <View style={{marginTop: hp('2%')}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: hp('4%'),
                  color: COLORS.white,
                }}>
                Subscription
              </Text>
            </View>
            <View style={{height: hp('10%'), marginTop: hp('2%')}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: hp('4%'),
                  color: COLORS.white,
                }}>
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  style={{
                    color: COLORS.white,
                    fontSize: hp('4%'),
                  }}
                />{' '}
                280
              </Text>
            </View>
          </View>
          <View style={styles.bodycontainer2}>
            <View>
              <SubscriptionsCards name="Plumbers" />
              <SubscriptionsCards name="Electronics" />
              <SubscriptionsCards name="Carpenters" />
              <SubscriptionsCards name="Painter" />
            </View>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('Payments')}>
              <View style={styles.subscribeButton}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: hp('2%'),
                    color: COLORS.white,
                    letterSpacing: 1,
                  }}>
                  SUBSCRIBE
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //
  },
  HeaderStyle: {
    paddingHorizontal: hp('2%'),
    width: wp('100%'),
    height: hp('6%'),
    backgroundColor: 'black',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bodycontainer: {
    // backgroundColor: 'red',
    flex: 1,
  },
  bodycontainer2: {
    marginTop: hp('2%'),
    flex: 1,
    // backgroundColor: 'red',
    paddingHorizontal: hp('1.5%'),
  },
  subscribeButton: {
    //   width:wp('90')
    height: hp('5%'),
    backgroundColor: '#1f90e0',
    borderRadius: 10,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3%'),
  },
});
