import React, {Component} from 'react';

import {COLORS} from '../../constants/Colors';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import {Card, Icon, Button, Input, Header, Title, Item} from 'native-base';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default class DeliveryAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <Header
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: COLORS.themecolor,
          }}
          androidStatusBarColor="#000">
          <TouchableWithoutFeedback>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrowleft" type="AntDesign" />
            </Button>
          </TouchableWithoutFeedback>

          <Title>Address</Title>
        </Header>
        <View style={styles.ContainerRoot}>
          <Text style={styles.HeaderTextStyle}>Address</Text>
          <View style={styles.SubContainer}>
            <View style={styles.SecondButtonBox}>
              <Icon
                name="checkcircle"
                type="AntDesign"
                style={{color: COLORS.themecolor, fontSize: hp('2.5%')}}
              />
              <View style={styles.AddressTextPlace}>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: hp('2%'),
                      color: COLORS.shadowTextColor,
                    }}>
                    Dr somenath roy
                  </Text>

                  <Text style={{color: COLORS.shadowTextColor}}>
                    Head Office-42,Nayanpur
                    Road,Japorigog,Ganeshguri,Guwahati-6, Assam
                  </Text>
                  <Text style={{color: COLORS.shadowTextColor}}>
                    +91 - 565659592
                  </Text>
                </View>
              </View>
            </View>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('LocationSearch')}>
              <View style={styles.FirstButtonBox}>
                <Text style={{fontSize: hp('3%'), color: COLORS.themecolor}}>
                  +
                </Text>
                <View style={{marginHorizontal: hp('1%')}}>
                  <Text
                    numberOfLines={1}
                    style={{color: COLORS.shadowTextColor}}>
                    Add New Address
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View
          style={{
            padding: hp('1.2%'),
            backgroundColor: COLORS.white,
            // marginBottom: hp('1%'),
          }}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('DateBooking')}>
            <View style={styles.subscribeButton}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: hp('2%'),
                  color: COLORS.white,
                  letterSpacing: 1,
                }}>
                Continue with this address
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ContainerRoot: {
    flex: 1,
    paddingHorizontal: hp('2%'),
    paddingVertical: hp('2%'),
  },
  HeaderTextStyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: hp('3%'),
  },
  SubContainer: {
    // flex: 1,
    backgroundColor: COLORS.white,
    marginTop: hp('2%'),
    // justifyContent: 'space-around',
    alignItems: 'center',
    padding: hp('2%'),
  },
  FirstButtonBox: {
    width: wp('85%'),
    height: hp('5%'),
    marginTop: hp('2%'),
    paddingHorizontal: hp('1.5%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.bordercolor,
  },
  SecondButtonBox: {
    width: wp('85%'),
    height: hp('20%'),
    marginTop: hp('2%'),
    paddingHorizontal: hp('1.5%'),
    paddingVertical: hp('2%'),
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.bordercolor,
  },
  AddressTextPlace: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: hp('1%'),
  },
  subscribeButton: {
    // width: wp('90%'),
    height: hp('5%'),
    backgroundColor: '#1f90e0',
    borderRadius: 5,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: hp('3%'),
  },
});
