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
import {COLORS} from '../../constants/Colors';
import HeaderNameSubService from '../../components/HeaderNameSubService';
import Bed from '../../components/Carpenter_Components/Bed';
import Door from '../../components/Carpenter_Components/Door';
import Furniture from '../../components/Carpenter_Components/Furniture';
import Tv from '../../components/Carpenter_Components/Tv';
import Furniture_Repair from '../../components/Carpenter_Components/Furniture_Repair';
import Window from '../../components/Carpenter_Components/Window';
export default class AddItemCarpenter extends Component {
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
            <HeaderNameSubService HeaderBoxName="Bed" width={wp('20%')} />
            <HeaderNameSubService HeaderBoxName="Door" width={wp('25%')} />
            <HeaderNameSubService
              HeaderBoxName="Furniture Repair"
              width={wp('32%')}
            />
            <HeaderNameSubService HeaderBoxName="Tv" width={wp('18%')} />
            <HeaderNameSubService
              HeaderBoxName="Furniture Assembly"
              width={wp('35%')}
            />
            <HeaderNameSubService
              HeaderBoxName="Window & Curtain"
              width={wp('35%')}
            />
          </ScrollView>
          {/* Header End Here*********************************************************************** */}
        </View>
        {/* Item List Render*********************************************sTART */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          decelerationRate={'fast'}
          scrollEventThrottle={16}>
          <View style={styles.BodySectionStyle}>
            <Bed ServiceName="Bed" navigation={this.props.navigation} />
            <Door ServiceName="Door" />
            <Furniture
              ServiceName="Furniture Repair"
              navigation={this.props.navigation}
            />
            <Tv ServiceName="Tv" navigation={this.props.navigation} />
            <Furniture_Repair
              ServiceName="Furniture Assembly"
              navigation={this.props.navigation}
            />
            <Window
              ServiceName="Window & Curtain"
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
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
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
