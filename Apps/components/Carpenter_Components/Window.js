import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://5.imimg.com/data5/WB/TN/MY-38652658/wooden-windows-500x500.jpg',
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
          itemName="Motorized Blinds fitting"
          desc="Addittional curtain rod brackets"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="Non Motorized Blinds fitting"
          desc="Addittional curtain rod brackets"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="window installtion(Greater than 48 inches"
          desc="Addittional curtain rod brackets"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="window installtion(Greater than 48 inches"
          desc="Addittional curtain rod brackets"
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
