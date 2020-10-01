import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderNameSubService from '../../components/HeaderNameSubService';
import {COLORS} from '../../constants/Colors';

import Q_D_C from '../../components/Cleaning_Components/Q_D_C';
import MiniService from '../../components/Cleaning_Components/MiniService';
export default class AddItemCleaning extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.HeaderStyle}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HeaderNameSubService
              HeaderBoxName="Monthly Refresh Cleaning"
              width={wp('45%')}
            />
            <HeaderNameSubService
              HeaderBoxName="Quaterly Deep Cleaning"
              width={wp('40%')}
            />
            <HeaderNameSubService
              HeaderBoxName="Move in Friendly"
              width={wp('30%')}
            />
            <HeaderNameSubService
              HeaderBoxName="Mini Services"
              width={wp('28%')}
            />
          </ScrollView>
          {/* Header End Here*********************************************************************** */}
        </View>
        {/* Item List Render*********************************************sTART */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.BodySectionStyle}>
            <Q_D_C
              ServiceName="Monthly Refresh Cleaning"
              navigation={this.props.navigation}
            />
            <Q_D_C
              ServiceName="Quarterly Deep Cleaning"
              navigation={this.props.navigation}
            />
            <Q_D_C
              ServiceName="Move in Friendly"
              navigation={this.props.navigation}
            />
            <MiniService
              ServiceName="Mini Services"
              navigation={this.props.navigation}
            />
          </View>
        </ScrollView>
        <View
          style={{
            padding: hp('1.2%'),
            backgroundColor: COLORS.white,
            // marginBottom: hp('1%'),
          }}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('LocationStack')}>
            <View style={styles.subscribeButton}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: hp('2%'),
                  color: COLORS.white,
                  letterSpacing: 1,
                }}>
                CONTINUE
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'space-between',
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
  subscribeButton: {
    // width: wp('90%'),
    height: hp('5%'),
    backgroundColor: '#1f90e0',
    borderRadius: 5,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: hp('3%'),
  },
});
