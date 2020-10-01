import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class WaterTank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://images.jdmagicbox.com/quickquotes/images_main/sintex_5000_litres_triple_layered_storage_water_tank_white_ccws0500_01_tlw__11637080_0.jpg',
      imgsrc2: 'https://i.ytimg.com/vi/ib49ikhgPX0/hqdefault.jpg',
    };
  }

  render() {
    return (
      <View style={styles.RootContain}>
        <View style={styles.HeaderStyle}>
          <Text style={styles.HeaderTextStyle}>{this.props.ServiceName}</Text>
        </View>
        {/* Service Name ........******************************endddddd */}

        {/* ITEM LIST *****************************      */}

        <Item
          img={this.state.imgsrc}
          itemName="Overhead Tank Installtion(Upto 500L)"
          price="599"
          desc="Best suited for installation"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Water Tank Cleaning"
          price="799"
          desc="Cleaning"
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  RootContain: {
    flex: 1,
  },
  HeaderStyle: {
    width: wp('100%'),
    height: hp('10%'),
    justifyContent: 'center',
    paddingHorizontal: hp('1%'),
  },
  HeaderTextStyle: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
});
