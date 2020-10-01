import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class Motor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://images-na.ssl-images-amazon.com/images/I/81zxmNowlAL._SL1500_.jpg',
      imgsrc2:
        'https://www.aquagroup.in/wp-content/uploads/2017/01/4P-MOTOR.jpg',
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
          itemName="Motor Installtion"
          price="499"
          desc="Best suited for installation"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Motor Air Cavity Removal"
          price="169"
          desc="Include air cavity removal which is not subject to 30 day warranty"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Washbasin Replacement"
          price="469"
          desc="Exludes masonry work"
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
