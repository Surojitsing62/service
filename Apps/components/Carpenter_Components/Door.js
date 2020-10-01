import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class Door extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://5.imimg.com/data5/OK/AV/MY-24341078/decorative-teak-wood-double-door-500x500.jpg',
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
          itemName="Accessary Installtion"
          price="119"
          desc="Any one of lathc,chain,stopper,magnet"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="Airdrop or door peephole installtion"
          price="169"
          desc="Include repair of either single leg or headboard"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="Door installation"
          price="566"
          desc="For wooden doors only"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="Door Repair"
          price="266"
          desc="wood scraping"
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
