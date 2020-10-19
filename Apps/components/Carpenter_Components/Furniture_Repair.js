import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class Furniture_Repair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://previews.123rf.com/images/tiero/tiero1105/tiero110500027/9518554-fine-detail-of-woman-carpenter-at-work.jpg',
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
          itemName="Furniture Leg Cap Installation"
          desc="Addittional curtain rod brackets"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="Table/Chair Wheels fitting"
          desc="Includes fitting of up to 4 wheels"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="furniture_repair installtion(Greater than 48 inches"
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
