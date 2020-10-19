import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class BathFitting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://www.homary.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/0/j021019__1.jpg',
      img2:
        'https://img3.exportersindia.com/product_images/bc-full/dir_184/5515789/rain-shower-head-1518153137-3635814.jpg',
      img3:
        'https://www.waterpik.com/shower-head/buying-guide/adjustable-shower-head/images/adjustable-shower-heads.jpg',
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
          itemName="Bath Fitting Installtion"
          desc="Any one of top or holder"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.img2}
          itemName="Shower Installtion - Celling Mounted"
          desc="Any one of top or holder"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.img3}
          itemName="Shower Installtion - Wall Mounted"
          desc="Any one of top or holder"
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
