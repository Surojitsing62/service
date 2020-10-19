import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class Light extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://cnet1.cbsistatic.com/img/KYlEnsvZxluVDRbk26tFuBX2rpg=/1200x675/2019/07/26/6e2a7516-91b8-4818-8a8d-5db444bc2f54/wyze-bulb-2-720.jpg',
      imgsrc2:
        'https://cdn.mos.cms.futurecdn.net/GA65QwMeSu6J9kWUKFhVbc-320-80.jpg',
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
          itemName="Blub Replacemnet(5 nos)"
          desc="Replacement Upto 5 Bulbs"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Blub Holder Insatalltion"
          desc="Includes creating cavity & installing lock"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Decorative Wall Light/Celling Light"
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
