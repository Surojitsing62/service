import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class Toilet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://cdn5.vectorstock.com/i/1000x1000/68/79/realistic-restroom-ceramic-toilet-bowl-vector-25076879.jpg',
      imgsrc2:
        'https://economictimes.indiatimes.com/thumb/msid-65207019,width-1200,height-900,resizemode-4,imgsize-167990/toilet-getty.jpg',
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
          itemName="Western Toilet Installtion(Floor Mounted)"
          price="1,499"
          desc="Best suited for installation"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Washbasin Repair"
          price="169"
          desc="Suitable Inastalltion"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Washbasin Repair"
          price="169"
          desc="Suitable Inastalltion"
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
