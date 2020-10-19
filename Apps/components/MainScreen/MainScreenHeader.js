import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableNativeFeedback} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Icon} from 'native-base';
export default class MainScreenHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerContain}>
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('LocationStack')}>
          <View style={styles.headerText}>
            <Icon
              name="location-pin"
              type="SimpleLineIcons"
              style={{fontSize: hp('1.8%'), color: '#fff'}}
            />

            <Text style={{color: '#fff', paddingLeft: hp('1%')}}>
              Ganeshguri,Assam..
            </Text>
            <Text style={{padding: hp('1%')}}>
              <Icon
                name="arrow-down"
                type="SimpleLineIcons"
                style={{fontSize: hp('1.8%'), color: '#fff'}}
              />
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('Search')}>
          <View style={styles.textInputfiled}>
            <Icon
              name="search1"
              type="AntDesign"
              style={{fontSize: hp('2%'), color: '#ccc'}}
            />
            <Text
              style={{
                fontSize: hp('2%'),
                paddingHorizontal: hp('1.8%'),
                color: 'grey',
              }}>
              Search for services and packges
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContain: {
    width: wp('100%'),
    height: hp('13%'),

    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    padding: hp('2%'),
    color: '#fff',
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputfiled: {
    width: wp('92%'),
    height: hp('5.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hp('2%'),
    marginTop: hp('0.8%'),
    backgroundColor: '#fff',
    borderRadius: hp('0.8%'),
  },
});
