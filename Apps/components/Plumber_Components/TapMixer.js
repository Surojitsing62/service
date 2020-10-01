import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class TapMixer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://www.wholesaledomestic.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc_9262_1.jpg',
      imgsrc2:
        'https://ohrmarketplaceimages.blob.core.windows.net/adlister-images/GHTAPB111.jpg',
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
          itemName="Hot & Cold Water Mixer Installtion"
          price="450"
          desc="For a faulty Driverter"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="Hot & Cold Water Mixer Repair"
          price="216"
          desc="Inastalltion of tap to dummy pipe"
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
