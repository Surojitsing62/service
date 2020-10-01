import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, TouchableHighlight} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Test_Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.PlumberServicesStyle}>
          <View style={{marginVertical: hp('2%')}}>
            <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
              Plumber Services
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Plumber_Service')}>
              <View style={styles.PlumberServicesList}>
                <Text style={{color: '#fff'}}>Plumber Services</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Plumber')}>
              <View style={styles.PlumberServicesList}>
                <Text style={{color: '#fff'}}>Add Cart</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Purchase')}>
              <View style={styles.PlumberServicesList}>
                <Text style={{color: '#fff'}}>Purchase Item</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {/* ********************carpenters*************************** */}

        <View style={styles.PlumberServicesStyle}>
          <View style={{marginVertical: hp('2%')}}>
            <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
              Carpenter Services
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('Carpenter_Service')
              }>
              <View style={styles.PlumberServicesList}>
                <Text style={{color: '#fff'}}>Carpenter Services</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Carpenter')}>
              <View style={styles.PlumberServicesList}>
                <Text style={{color: '#fff'}}>Add Cart</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  PlumberServicesStyle: {
    // flexDirection: 'row',
    paddingHorizontal: hp('2%'),
    width: wp('100%'),
    height: hp('20%'),
    backgroundColor: 'red',
    borderBottomWidth: 1,
  },
  PlumberServicesList: {
    width: wp('30%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'black',
  },
});
