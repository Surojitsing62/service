import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class TableFan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://img.tatacliq.com/images/i2/437Wx649H/MP000000002620177_437Wx649H_20180329031733.jpeg',
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
          itemName="Table Fan Replacemnet"
          price="199"
          desc="Replacement"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="Table Fan Insatalltion"
          price="169"
          desc="Installtion"
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
