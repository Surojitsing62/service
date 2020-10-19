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
import Fan from '../../components/Electronics_Components/Fan';
import Light from '../../components/Electronics_Components/Light';
import DoorBell from '../../components/Electronics_Components/DoorBell';
import Wirring from '../../components/Electronics_Components/Wirring';
import TableFan from '../../components/Electronics_Components/TableFan';
import HeaderBar from '../../constants/HeaderBar';

export default class AddItemElectronic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <HeaderBar name="Electronics" navigation={this.props.navigation} />
        <View style={styles.HeaderStyle}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HeaderNameSubService HeaderBoxName="Fan" width={wp('20%')} />
            <HeaderNameSubService HeaderBoxName="Light" width={wp('22%')} />
            <HeaderNameSubService HeaderBoxName="Door Bell" width={wp('25%')} />
            <HeaderNameSubService HeaderBoxName="Wirring" width={wp('22%')} />
            <HeaderNameSubService HeaderBoxName="Table Fan" width={wp('30%')} />
          </ScrollView>
          {/* Header End Here*********************************************************************** */}
        </View>
        {/* Item List Render*********************************************sTART */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.BodySectionStyle}>
            <Fan ServiceName="Fan" navigation={this.props.navigation} />
            <Light ServiceName="Light" navigation={this.props.navigation} />
            <DoorBell
              ServiceName="Door Bell"
              navigation={this.props.navigation}
            />
            <Wirring ServiceName="Wirring" navigation={this.props.navigation} />
            <TableFan
              ServiceName="Table Fan"
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
  },
  BodySectionStyle: {
    flex: 1,
  },
  subscribeButton: {
    height: hp('5%'),
    backgroundColor: '#1f90e0',
    borderRadius: 5,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
