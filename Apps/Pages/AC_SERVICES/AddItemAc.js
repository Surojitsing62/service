import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderNameSubService from '../../components/HeaderNameSubService';

import AcRepair from '../../components/Ac_Components/AcRepair';
export default class AddItemAc extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.HeaderStyle}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HeaderNameSubService
              HeaderBoxName="Monthly Ac Cleaning"
              width={wp('45%')}
            />
            <HeaderNameSubService
              HeaderBoxName="Quaterly Ac Cleaning"
              width={wp('40%')}
            />

            <HeaderNameSubService
              HeaderBoxName="Ac Services"
              width={wp('28%')}
            />
          </ScrollView>
          {/* Header End Here*********************************************************************** */}
        </View>
        {/* Item List Render*********************************************sTART */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.BodySectionStyle}>
            <AcRepair
              ServiceName="Ac Services"
              navigation={this.props.navigation}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  HeaderStyle: {
    flexDirection: 'row',
    width: wp('100%'),
    height: hp('8%'),
    // paddingHorizontal: hp('1%'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.7,
    // shadowRadius: 4,
    // elevation: 4,
  },
  BodySectionStyle: {
    flex: 1,
  },
});
