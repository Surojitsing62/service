import React, {Component} from 'react';
import {Text, StyleSheet, Image, ScrollView, View} from 'react-native';
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

import ItemHeader from '../../components/Shopping/ItemHeader';

import DiviSonalItemView from '../../components/Shopping/DiviSonalItemView';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <Header style={styles.HeaderStyle} androidStatusBarColor={COLORS.black}>
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

        <View style={styles.BodyRoot}>
          <View style={styles.HeaderPlace}>
            <Text style={styles.HeaderText}>Our Products</Text>
          </View>
          <View style={styles.ItemHeader}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ItemHeader name="Plumbers Tolls" />
              <ItemHeader name="Electronics Tolls" />
              <ItemHeader name="Carpentres Tolls" />
              <ItemHeader name="Painters Tolls" />
            </ScrollView>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <DiviSonalItemView
              navigation={this.props.navigation}
              name="Plumbers Tolls"
            />
            <DiviSonalItemView
              navigation={this.props.navigation}
              name="Electronics Tolls"
            />
            <DiviSonalItemView
              navigation={this.props.navigation}
              name="Carpenters Tolls"
            />
            <DiviSonalItemView
              navigation={this.props.navigation}
              name="Painters Tolls"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  HeaderStyle: {
    backgroundColor: COLORS.themecolor,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  BodyRoot: {
    flex: 1,
  },
  HeaderPlace: {
    // paddingVertical: hp('2%'),
    marginTop: hp('1%'),
    paddingHorizontal: hp('2.5%'),
  },
  HeaderText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  ItemHeader: {
    marginTop: hp('1%'),
    flexDirection: 'row',
    width: wp('100%'),
  },
});
