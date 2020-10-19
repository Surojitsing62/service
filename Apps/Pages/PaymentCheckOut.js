import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  ListItem,
  Text,
  Radio,
  Right,
  Left,
  Icon,
  Button,
  Header,
  Title,
} from 'native-base';

import {COLORS} from '../constants/Colors';
import HeaderBar from '../constants/HeaderBar';

export default class PaymentOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VisaItemSelcted: false,
      VisaItem: false,
      UpiItemSelected: false,
      UpiItem: false,
      CodItemSelected: false,
      CodItem: false,
    };
  }
  HandleChangeVisaItem = () => {
    this.setState({VisaItemSelcted: true});
    this.setState({VisaItem: true});
    this.setState({UpiItem: false});
    this.setState({UpiItem: false});
    this.setState({CodItemSelected: false});
    this.setState({CodItem: false});
  };
  HandleChangeUpiItem = () => {
    this.setState({VisaItemSelcted: false});
    this.setState({VisaItem: false});
    this.setState({UpiItem: true});
    this.setState({UpiItem: true});
    this.setState({CodItemSelected: false});
    this.setState({CodItem: false});
  };
  HandleChangeCodItem = () => {
    this.setState({VisaItemSelcted: false});
    this.setState({VisaItem: false});
    this.setState({UpiItem: false});
    this.setState({UpiItem: false});
    this.setState({CodItemSelected: true});
    this.setState({CodItem: true});
  };

  HandleChange = () => {
    if (
      this.state.VisaItemSelcted == true ||
      this.state.UpiItemSelected == true ||
      this.state.CodItemSelected == true
    ) {
      alert('payment successfully');
      this.props.navigation.navigate('Home');
    } else {
      alert('plase seclet payment method');
    }
  };
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
              onPress={() => this.props.navigation.navigate('Subscription')}>
              <Icon name="arrowleft" type="AntDesign" />
            </Button>
          </TouchableWithoutFeedback>

          <Title>Payments</Title>
        </Header>
        <ScrollView>
          <View style={{width: wp('100%'), height: hp('50%')}}>
            <TouchableOpacity>
              <ListItem
                onPress={this.HandleChangeVisaItem}
                selected={this.state.VisaItemSelcted}>
                <Left
                  style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Radio
                      color={'#f0ad4e'}
                      selectedColor={COLORS.themecolor}
                      selected={this.state.VisaItem}
                    />
                    <View style={{marginLeft: hp('2%')}}>
                      <Image
                        resizeMode="contain"
                        style={{width: wp('8%'), height: hp('4%')}}
                        source={{
                          uri:
                            'https://w7.pngwing.com/pngs/753/672/png-transparent-credit-card-visa-mastercard-discover-card-american-express-visa-text-rectangle-logo.png',
                        }}
                      />
                    </View>
                  </View>
                  <View style={{marginLeft: hp('2%')}}>
                    <Text>Visa Card/ ATM</Text>
                  </View>
                </Left>
              </ListItem>
            </TouchableOpacity>

            <TouchableOpacity>
              <ListItem
                onPress={this.HandleChangeUpiItem}
                selected={this.state.UpiItemSelected}>
                <Left
                  style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Radio
                      color={'#f0ad4e'}
                      selectedColor={COLORS.themecolor}
                      selected={this.state.UpiItem}
                    />
                    <View style={{marginLeft: hp('2%')}}>
                      <Image
                        resizeMode="contain"
                        style={{width: wp('8%'), height: hp('4%')}}
                        source={{
                          uri:
                            'https://www.searchpng.com/wp-content/uploads/2018/11/phone-pe.png',
                        }}
                      />
                    </View>
                  </View>
                  <View style={{marginLeft: hp('2%')}}>
                    <Text>PhonePe /UPI</Text>
                  </View>
                </Left>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem
                onPress={this.HandleChangeCodItem}
                selected={this.state.CodItemSelected}>
                <Left
                  style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Radio
                      color={'#f0ad4e'}
                      selectedColor={COLORS.themecolor}
                      selected={this.state.CodItem}
                    />
                    <View style={{marginLeft: hp('2%')}}>
                      <Image
                        resizeMode="contain"
                        style={{width: wp('8%'), height: hp('4%')}}
                        source={{
                          uri:
                            'https://static.thenounproject.com/png/1914661-200.png',
                        }}
                      />
                    </View>
                  </View>
                  <View style={{marginLeft: hp('2%')}}>
                    <Text>Cash on Delivery</Text>
                  </View>
                </Left>
              </ListItem>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <TouchableNativeFeedback>
          {/* <View style={{paddingHorizontal: hp('2%')}}> */}
          <Button style={styles.ButtonStyle} onPress={this.HandleChange}>
            <Text
              style={{
                fontSize: hp('2%'),
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                color: COLORS.white,
              }}>
              Make Payment
            </Text>
          </Button>
          {/* </View> */}
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },
  HeaderTextPlace: {
    alignItems: 'center',
    width: wp('100%'),
    height: hp('5%'),
    alignItems: 'center',
    backgroundColor: COLORS.buttonColor,
  },
  HeaderTextStyle: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    fontFamily: 'Roboto-Light',
    color: COLORS.HeaderbarIconColor,
  },
  ButtonStyle: {
    justifyContent: 'center',
    width: wp('90%'),
    position: 'relative',
    bottom: hp('2%'),
    alignSelf: 'center',
    elevation: 4,
    borderRadius: 5,
    backgroundColor: COLORS.themecolor,
    height: hp('5.5%'),
  },
});
