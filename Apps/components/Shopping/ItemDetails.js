import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Label,
  Input,
  Item,
  Icon,
  Card,
  Title,
} from 'native-base';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
import ItemCarousel from './ItemCarousel';
import DiviSonalItemView from './DiviSonalItemView';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <Header style={styles.HeaderStyle} androidStatusBarColor={COLORS.black}>
          <Left style={{alignSelf: 'center'}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="arrowleft"
                type="AntDesign"
                style={{fontSize: hp('3.5%'), color: COLORS.white}}
              />
            </Button>
          </Left>
          <Right style={{alignSelf: 'center'}}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('MyCart')}>
              <Icon
                name="shoppingcart"
                type="AntDesign"
                style={{fontSize: hp('4%'), color: COLORS.white}}
              />
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.BodyRoot}>
            <ItemCarousel />
            <DiviSonalItemView
              navigation={this.props.navigation}
              name="Similar Tolls"
            />
          </View>
        </ScrollView>
        <View style={{alignItems: 'center', paddingBottom: hp('2%')}}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('MyCart')}>
            <View style={styles.ButtonMyCart}>
              <Text style={{fontSize: hp('2%'), color: COLORS.white}}>
                Add to My Cart
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
  HeaderStyle: {
    backgroundColor: COLORS.themecolor,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ButtonMyCart: {
    width: wp('90%'),
    height: hp('5.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.themecolor,
    borderRadius: 15,
    elevation: 3,
  },
});
