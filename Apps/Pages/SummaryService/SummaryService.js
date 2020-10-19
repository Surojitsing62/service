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

export default class SummaryService extends Component {
  constructor(props) {
    super(props);
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
                Plumber Service
              </Text>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                5 Times
              </Text>
            </View>
            <View
              style={{
                padding: hp('1%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                Plumber Service
              </Text>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                5 Times
              </Text>
            </View>
            <View
              style={{
                padding: hp('1%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                Plumber Service
              </Text>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                5 Times
              </Text>
            </View>
            <View
              style={{
                padding: hp('1%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                Plumber Service
              </Text>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                5 Times
              </Text>
            </View>
          </Card>

          <Card style={{marginTop: hp('2%')}}>
            <View
              style={{
                padding: hp('1%'),
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                Booking Sucsessfull{' '}
              </Text>
              <Image
                style={{width: wp('10%'), height: hp('5')}}
                resizeMode="contain"
                source={require('../../Images/confrimimag.png')}
              />
            </View>
          </Card>
          <TouchableWithoutFeedback>
            <Button
              onPress={() => this.props.navigation.navigate('HomeTab')}
              style={{
                width: wp('92%'),
                alignItems: 'center',
                height: hp('5.5%'),
                justifyContent: 'center',
                backgroundColor: COLORS.buttonColor,
                // marginTop: hp('2%'),
                position: 'relative',
                top: hp('5%'),
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: hp('2%'),
                  color: COLORS.white,
                }}>
                CONTINUE
              </Text>
            </Button>
          </TouchableWithoutFeedback>
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
