import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Item from '../Item';
export default class AcRepair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img:
        'https://www.acservicecenterinmumbai.com/wp-content/uploads/2018/02/ac-repair-1-300x200.png',
      img2:
        'https://i.pinimg.com/originals/66/76/cf/6676cf33bbed492fee990dcc25540e88.jpg',
      img3:
        'https://sulcdn.azureedge.net/content/images/listings/listseo/ac-repair-service.jpg',
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
          img={this.state.img2}
          itemName="Ac Installtion"
          price="799"
          desc="Ac Installtion"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.img}
          itemName="Ac Repair"
          price="499"
          desc="Ac Repair"
          navigation={this.props.navigation}
        />
        <Item
          img={this.state.img3}
          itemName="Ac Cleaning"
          price="169"
          desc="Enhance shine"
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
