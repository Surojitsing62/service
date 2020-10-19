import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  StatusBar,
  ToastAndroid,
  ScrollView,
  ImageBackground,
} from 'react-native';
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
import HeaderBar from '../../constants/HeaderBar';
import CartItem from './CartItem';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
export default class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainView}>
        <HeaderBar navigation={this.props.navigation} name="Cart" />
        <View style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingVertical: hp('2%')}}>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </View>
          </ScrollView>
        </View>

        {/* itemBox end***************************** */}
        <View
          style={{
            height: '8%',
            backgroundColor: '#fff',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                marginLeft: 20,
                marginVertical: 2,
                color: '#6C6D6D',
                fontFamily: 'Roboto-Regular',
              }}>
              Payble Amount
            </Text>
            <Text
              style={{marginLeft: 19, fontSize: 17, fontFamily: 'Roboto-Bold'}}>
              {' '}
              <Icon
                name="rupee"
                type="FontAwesome"
                style={{fontSize: 17}}
              />{' '}
              880.00
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Button
              onPress={() => this.props.navigation.navigate('PaymentOption')}
              style={{
                justifyContent: 'center',
                width: '95%',
                alignSelf: 'center',
                borderRadius: 5,
                backgroundColor: COLORS.themecolor,
                height: 40,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  textAlign: 'center',
                  fontFamily: 'Cairo-Bold',
                  color: '#f4f4f4',
                }}>
                Place Order
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ECF0F1',
  },
  itemStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    elevation: 4,
    height: 35,
    borderRadius: 5,
    width: '90%',
  },
});
