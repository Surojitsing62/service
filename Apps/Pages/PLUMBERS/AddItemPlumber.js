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
import BasinSink from '../../components/Plumber_Components/BasinSink';
import BathFitting from '../../components/Plumber_Components/BathFitting';
import TapMixer from '../../components/Plumber_Components/TapMixer';
import Toilet from '../../components/Plumber_Components/Toilet';
import WaterTank from '../../components/Plumber_Components/WaterTank';
import Motor from '../../components/Plumber_Components/Motor';
export default class AddItemPlumber extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.HeaderStyle}>
          <ScrollView
            scrollEventThrottle={16}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <HeaderNameSubService
              HeaderBoxName="Basin & Sink"
              width={wp('25%')}
            />
            <HeaderNameSubService
              HeaderBoxName="Bath Fitting"
              width={wp('28%')}
            />
            <HeaderNameSubService
              HeaderBoxName="Tap & Mixer"
              width={wp('25%')}
            />
            <HeaderNameSubService HeaderBoxName="Toilet" width={wp('20%')} />
            <HeaderNameSubService
              HeaderBoxName="Water Tank"
              width={wp('25%')}
            />
            <HeaderNameSubService HeaderBoxName="Motor" width={wp('20%')} />
          </ScrollView>
          {/* Header End Here*********************************************************************** */}
        </View>
        {/* Item List Render*********************************************sTART */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.BodySectionStyle}>
            <BasinSink
              ServiceName="Basin & Sink"
              navigation={this.props.navigation}
            />
            <BathFitting
              ServiceName="Bath Fitting"
              navigation={this.props.navigation}
            />
            <TapMixer
              ServiceName="Tap & Mixer"
              navigation={this.props.navigation}
            />
            <Toilet ServiceName="Toilet" navigation={this.props.navigation} />
            <WaterTank
              ServiceName="Water Tank"
              navigation={this.props.navigation}
            />
            <Motor ServiceName="Motor" navigation={this.props.navigation} />
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
