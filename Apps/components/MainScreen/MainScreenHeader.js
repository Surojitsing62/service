import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableNativeFeedback} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import { TouchableNativeFeedback } from 'react-native-gesture-handler';

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
            <Text>
              <SimpleLineIcons
                name="location-pin"
                style={{fontSize: hp('1.8%'), color: '#fff'}}
              />
            </Text>
            <Text style={{color: '#fff', paddingLeft: hp('1%')}}>
              Kolkata, West Bengal
            </Text>
            <Text style={{padding: hp('1%')}}>
              <SimpleLineIcons
                name="arrow-down"
                style={{fontSize: hp('1.5%'), color: '#fff'}}
              />
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('Search')}>
          <View style={styles.textInputfiled}>
            <Ionicons
              name="ios-search"
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
