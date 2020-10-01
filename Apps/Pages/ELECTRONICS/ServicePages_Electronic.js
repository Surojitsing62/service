import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Service_Cards from '../../components/services_category/Service_Cards';

export default class ServicePages_Electronic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img:
        'https://www.aestexas.com/wp-content/uploads/2019/07/electrician-wiring-dallas-1024x682.jpg',
      img2:
        'https://www.urdesignmag.com/wordpress/wp-content/uploads/2020/06/how-to-choose-a-home-electrician-1-1200x520.jpg',
    };
  }

  render() {
    return (
      <View style={styles.RootContainer}>
        <View style={styles.HeaderTitleStyle}>
          <Text style={styles.HeaderTextStyle}>Select your prefernce</Text>
        </View>
        {/* service cards***************************************** */}
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('ElectronicSubServiceScreen')
          }>
          <Service_Cards
            offer={'40% off'}
            ServiceName={'Prime Electronics'}
            Specalization={'Skilled and verified Electronics'}
            rating={'4.5'}
            years={'4-5'}
            brandName={'Company Name'}
            imgsrc={this.state.img}
          />
        </TouchableHighlight>
        <TouchableHighlight>
          <Service_Cards
            offer={'50% off'}
            ServiceName={'Classic Electronic'}
            Specalization={'Skilled and verified Electronics'}
            rating={'3.5'}
            years={'3-4'}
            brandName={'Company Name'}
            imgsrc={this.state.img2}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  HeaderTitleStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('10%'),
    backgroundColor: '#c9c9c9',
  },

  HeaderTextStyle: {
    fontSize: hp('3%'),
  },
});
