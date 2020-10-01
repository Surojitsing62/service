import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class Tv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://i01.appmifile.com/webfile/globalimg/in/cms/9E8A096E-085A-B3CD-FB95-D0322641483D.jpg',
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
          itemName="Tv Installtion"
          price="119"
          desc="Include wall  mounting and alignment"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="Tv Uninstalltion"
          price="169"
          desc="Include wall  mounting and alignment"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="Tv installtion(Greater than 48 inches"
          price="566"
          desc="Include wall  mounting and alignment"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="Door Repair"
          price="266"
          desc="Include wall  mounting and alignment"
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
