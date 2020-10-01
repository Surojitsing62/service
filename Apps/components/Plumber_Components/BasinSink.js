import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class BasinSink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://www.dhresource.com/0x0/f2/albu/g2/M00/7F/E8/rBVaG1Z3q-eASnolAASb5wGRo1g223.jpg/bathroom-tempered-glass-sink-handcraft-counter.jpg',
      imgsrc2:
        'https://5.imimg.com/data5/GB/AD/MY-13935091/granite-bathroom-sink-500x500.jpg',
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
          itemName="Bath & Sink"
          price="199"
          desc="Best suited for installation or Leakage"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Washbasin Repair"
          price="169"
          desc="Suitable for leakage under basin"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="Washbasin Repair"
          price="169"
          desc="Suitable for leakage under basin"
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
