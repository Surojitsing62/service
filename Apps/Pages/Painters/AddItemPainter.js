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

import Q_D_C from '../../components/Painters_Components/Q_D_C';
import MiniService from '../../components/Painters_Components/MiniService';
import HeaderBar from '../../constants/HeaderBar';
export default class AddItemPainter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <HeaderBar name="Painters" navigation={this.props.navigation} />
        <View style={styles.HeaderStyle}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HeaderNameSubService HeaderBoxName="Painting" width={wp('25%')} />
            <HeaderNameSubService HeaderBoxName="Painting" width={wp('25%')} />
            <HeaderNameSubService HeaderBoxName="Painting" width={wp('25%')} />
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
            <Q_D_C ServiceName="Painting" navigation={this.props.navigation} />
            <Q_D_C ServiceName="Painting" navigation={this.props.navigation} />
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
            onPress={() => this.props.navigation.navigate('Address')}>
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
