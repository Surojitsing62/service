import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
import {Card, Icon, Button, Header, Title} from 'native-base';

export default class BookingDetails extends Component {
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
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Bookings')}>
              <Icon name="arrowleft" type="AntDesign" />
            </Button>
          </TouchableWithoutFeedback>

          <Title>Booking Details</Title>
        </Header>
        <View style={styles.HeaderPlace}>
          <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
            30,Wed Oct 2020
          </Text>
          <Text
            style={{fontSize: hp('2%'), fontWeight: 'bold'}}
            numberOfLines={2}>
            Booking Id #SER154855484
          </Text>
        </View>
        <View style={{paddingHorizontal: hp('2%')}}>
          <Card>
            <View style={{padding: hp('1%')}}>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                Dr somenath roy
              </Text>
              <Text style={{fontSize: hp('1.8%')}}>
                Head Office-42,Nayanpur Road,Japorigog,Ganeshguri,Guwahati-6,
                Assam
              </Text>
            </View>
          </Card>
          <Card style={{marginTop: hp('2%')}}>
            <View
              style={{
                padding: hp('1%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                Payment Mode:{' '}
                <Text
                  style={{
                    fontSize: hp('1.8%'),
                    // color: COLORS.green,
                  }}>
                  CASH
                </Text>
              </Text>
              <Text style={{fontSize: hp('1.8%')}}>
                Booking Status:
                <Text
                  style={{
                    fontSize: hp('1.8%'),
                    color: COLORS.green,
                    fontWeight: 'bold',
                  }}>
                  ACCEPTED
                </Text>
              </Text>
            </View>
          </Card>

          <Card style={{paddingBottom: hp('1%'), marginTop: hp('2%')}}>
            <View
              style={{
                justifyContent: 'center',
                height: hp('4.5%'),
                paddingHorizontal: hp('2%'),
                backgroundColor: '#8a8a8a',
              }}>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                TECHNICIAN
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: hp('1%'),
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={{
                  uri:
                    'https://cdn.iconscout.com/icon/premium/png-256-thumb/technician-1623536-1375040.png',
                }}
                style={{
                  width: wp('20%'),
                  height: hp('10%'),
                  borderRadius: 100,
                }}
              />
              <View style={{marginLeft: hp('1%')}}>
                <Text style={{fontWeight: 'bold', fontSize: hp('2%')}}>
                  Technician Name
                </Text>
              </View>
            </View>
            <TouchableWithoutFeedback>
              <View
                style={{
                  // width: wp('90%'),
                  borderRadius: 5,
                  height: hp('4.5%'),
                  margin: hp('1%'),
                  backgroundColor: COLORS.green,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: hp('2%'), color: COLORS.white}}>
                  Your OTP to Start the Work 715515
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  HeaderPlace: {
    width: wp('100%'),
    height: hp('7%'),
    marginTop: hp('2%'),
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
