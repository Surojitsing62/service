import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class Wirring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://cdn.homeguide.com/assets/images/content/homeguide-electrical-wiring-installation-of-outlets-and-switches.jpg',
      imgsrc2:
        'https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2014/07/electric-wires-720.jpg',
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
          itemName="Internal Wirring(per 5m)"
          desc="Includes concealed wiring for single coonection"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Casing Wiring"
          desc="Includes concealed wiring for single coonection"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Wiring Without Casing"
          desc="Includes concealed wiring for single coonection"
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
