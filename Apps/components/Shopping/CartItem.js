import React, {Component} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import {
  Card,
  Left,
  CardItem,
  Item,
  Input,
  Icon,
  Content,
  Button,
  Picker,
  Label,
} from 'native-base';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
export default class CartItem extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff'}}>
        <Text
          style={{
            fontSize: hp('2%'),
            paddingHorizontal: hp('2%'),
            fontWeight: 'bold',
          }}>
          {' '}
          Brush and Roller(2 items)
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginVertical: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '18%',
              justifyContent: 'center',
              marginHorizontal: 8,
            }}>
            <Image
              source={{
                uri:
                  'https://previews.123rf.com/images/john79/john791710/john79171000019/87519613-brush-and-roller-for-painting-tools.jpg',
              }}
              style={{width: '100%', height: 60}}
              resizeMode="contain"
            />
          </View>
          <View style={{width: '70%', justifyContent: 'center'}}>
            <Text
              style={{
                marginVertical: 5,
                fontSize: 14,
                letterSpacing: 0.4,
                fontFamily: 'Roboto-SemiBold',
              }}>
              Brush and Roller
            </Text>
            <Text style={{marginVertical: 5, fontSize: 14}}>
              <Icon name="rupee" type="FontAwesome" style={{fontSize: 17}} />{' '}
              220.00{' '}
              <Text style={{color: 'green', fontFamily: 'Roboto-SemiBold'}}>
                {' '}
                You save{' '}
                <Icon
                  name="rupee"
                  type="FontAwesome"
                  style={{fontSize: 13, color: 'green'}}
                />{' '}
                30.00
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginVertical: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '60%',
              justifyContent: 'center',
              marginHorizontal: 8,
            }}></View>
          <View
            style={{
              width: '30%',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                marginVertical: 5,
                fontSize: 20,
                letterSpacing: 0.4,
                fontFamily: 'Roboto-SemiBold',
                justifyContent: 'center',
              }}>
              <Icon
                name="circle-with-minus"
                type="Entypo"
                style={{color: COLORS.themecolor, fontSize: 30}}
              />{' '}
              1{' '}
              <Icon
                name="pluscircle"
                type="AntDesign"
                style={{color: COLORS.themecolor, fontSize: 26}}
              />
            </Text>
          </View>
        </View>
        <View style={styles.borderStyle}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  borderStyle: {
    width: '95%',
    borderWidth: 0.5,
    marginVertical: 5,
    borderColor: '#BDC3C7',
    alignSelf: 'center',
  },
});
