import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class DoorBell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://icdn3.digitaltrends.com/image/digitaltrends/ring-video-doorbell-hero3.jpg',
      imgsrc2:
        'https://previews.123rf.com/images/prasanmaksaen/prasanmaksaen1708/prasanmaksaen170800096/84338521-men-hand-pushing-door-bell.jpg',
      imgsrc3:
        'https://cdn.thewirecutter.com/wp-content/uploads/2020/03/smartdoorbell-lowres-2x1-1-1024x512.jpg',
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
          itemName="Door Replacemnet"
          price="199"
          desc="Excluding wiring and box set up"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Door Bell Insatalltion"
          price="169"
          desc="Includes creating cavity & installing lock"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc3}
          itemName="Door Bell Repair"
          price="169"
          desc="Installtion or Repair"
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
