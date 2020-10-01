import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class ProfileDivisonComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity>
        <View style={styles.HeaderPlace2}>
          <View style={styles.HeaderPlaceIcons}>
            <FontAwesome5
              name={this.props.IconName}
              size={24}
              color="#9c9c9c"
            />
          </View>
          <View style={styles.HeaderPlaceName}>
            <Text style={{fontSize: hp('1.8%')}}>{this.props.Title}</Text>
            <AntDesign
              name="right"
              size={18}
              color="#9c9c9c"
              style={{marginHorizontal: hp('2.5%')}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  HeaderPlace2: {
    width: wp('100%'),
    height: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: 'white',
  },
  HeaderPlaceIcons: {
    width: wp('10%'),
    height: hp('5%'),
    marginHorizontal: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderPlaceName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('77%'),
    height: hp('7%'),
    borderColor: '#f5f5f5',
    borderBottomWidth: 1,
  },
});
