import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Label,
  Input,
  Item,
  Icon,
  Card,
  Title,
  Image,
} from 'native-base';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
export default class ItemHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Card style={styles.CardStyle}>
          <Text style={styles.TextStyle}>{this.props.name}</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CardStyle: {
    // width: wp('30%'),
    paddingHorizontal: hp('1%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp('1%'),
    marginRight: hp('1%'),
    borderRadius: 5,
  },
  TextStyle: {
    // fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: hp('2%'),
  },
});
