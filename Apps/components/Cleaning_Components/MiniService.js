import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class MiniService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cropped-hands-of-person-cleaning-toilet-bowl-with-royalty-free-image-1586180014.jpg',
      imgsrc2:
        'https://image.shutterstock.com/image-photo/housemaid-cleaning-bathroom-closeup-shot-260nw-414570532.jpg',
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
          img={this.state.imgsrc2}
          itemName="1 Bathrooms"
          price="799"
          desc="Enhance shine of floors & tiles"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc2}
          itemName="2 Bathrooms"
          price="499"
          desc="Enhance shine of floors & tiles"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.imgsrc}
          itemName="3 Bathrooms"
          price="169"
          desc="Enhance shine of floors & tiles"
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
