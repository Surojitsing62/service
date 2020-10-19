import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
import ItemCard from '../../components/Shopping/ItemCard';
export default class DiviSonalItemView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={styles.CatItemStyle}>
          <Text
            style={{
              fontSize: hp('2%'),
              fontWeight: 'bold',
              paddingVertical: hp('1%'),
              paddingHorizontal: hp('2%'),
            }}>
            {this.props.name}
          </Text>
          <View style={styles.ItemViewStyle}>
            <ItemCard navigation={this.props.navigation} />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  ItemViewStyle: {
    width: wp('100%'),
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: hp('2%'),
    paddingVertical: hp('1%'),
  },
  CatItemStyle: {
    backgroundColor: COLORS.white,
    marginBottom: hp('1%'),
  },
});
