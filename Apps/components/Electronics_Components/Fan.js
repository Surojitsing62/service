import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class Fan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://images.jdmagicbox.com/quickquotes/images_main/orient-electric-kiara-shine-1200mm-high-speed-ceiling-fan-chocolate-gold-179318589-fuusm.jpg',
      imgsrc2:
        'https://rukminim1.flixcart.com/image/352/352/k0h12fk0/fan/9/z/t/ujala-ceiling-fan-1200-orient-electric-original-imafk9a2c4fghhwm.jpeg',
      imgsrc3:
        'https://images-na.ssl-images-amazon.com/images/I/51QqXY279vL._SL1200_.jpg',
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
          itemName="Celling Fan Installtion"
          price="199"
          desc="Best suited for installation"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Celling Fan Repair"
          price="169"
          desc="Coil Repair and Ball Bearings replaced in shop if required"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc3}
          itemName="Celling Fan Replacment"
          price="169"
          desc="Celling,Exhaust or wall Fan"
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
