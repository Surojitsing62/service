import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Service_Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.CardsContainerBox}>
        <View style={styles.cardsBox}>
          <View style={styles.UpperSectionOfCards}>
            <View style={styles.UpperLeftOfCards}>
              <View style={styles.row1Style}>
                <View style={styles.ServicesTextStyle}>
                  <Text style={{fontSize: hp('2%')}} numberOfLines={1}>
                    {this.props.offer}
                  </Text>
                </View>
              </View>
              <View style={styles.row2Style}>
                <View style={styles.TextBoxStyleOfrow2}>
                  <Text style={styles.TypeOfServicesText} numberOfLines={2}>
                    {this.props.ServiceName}
                  </Text>
                  <Text style={styles.TypeOfServicesSubText} numberOfLines={2}>
                    {this.props.Specalization}
                  </Text>
                </View>
              </View>
              <View style={styles.row3Style}>
                <View style={styles.RatingBox}>
                  <Text style={{color: 'grey'}} numberOfLines={1}>
                    Rating
                  </Text>
                  <Text>{this.props.rating}</Text>
                </View>
                <View style={styles.ExpreincesBox}>
                  <Text style={{color: 'grey'}} numberOfLines={1}>
                    Expreince
                  </Text>
                  <Text>{this.props.years}yrs.</Text>
                </View>
              </View>
            </View>
            <View style={styles.UpperRightOfCards}>
              <Image
                resizeMode="cover"
                source={{uri: this.props.imgsrc}}
                style={styles.ImageStyle}
              />
            </View>
          </View>
          <View style={styles.LowerSectionOfCards}>
            <View style={styles.BrandTextStyle}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: hp('2%'),
                  color: '#d6fff9',
                  letterSpacing: 2,
                }}>
                {this.props.brandName}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CardsContainerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('40%'),
    backgroundColor: '#fff',
  },
  cardsBox: {
    width: wp('90%'),
    height: hp('35%'),
    backgroundColor: '#ffff',
    borderRadius: 15,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  UpperSectionOfCards: {
    flexDirection: 'row',
    width: wp('90%'),
    height: hp('28%'),
  },
  LowerSectionOfCards: {
    width: wp('90%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'pink',
  },
  UpperLeftOfCards: {
    width: wp('50%'),
    height: hp('28%'),
  },
  UpperRightOfCards: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderLeftRadius: 10,
    borderTopLeftRadius: 45,
    width: wp('40%'),
    height: hp('28%'),
  },
  ImageStyle: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: wp('40%'),
    height: hp('28%'),
  },
  row1Style: {
    width: wp('50%'),
    height: hp('6%'),
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
  },
  ServicesTextStyle: {
    width: wp('30%'),
    height: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffbe82',
    position: 'relative',
    borderTopLeftRadius: 10,

    shadowRadius: 4,
    shadowOffset: {width: 0, height: 4},
    shadowColor: '#fff',
    shadowOpacity: 0.1,
    elevation: 5,
  },
  row2Style: {
    width: wp('50%'),
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'grey',
  },
  TextBoxStyleOfrow2: {
    width: wp('42%'),
    height: hp('8%'),
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  TypeOfServicesText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  TypeOfServicesSubText: {
    color: 'grey',
  },
  row3Style: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: wp('50%'),
    height: hp('12%'),
    // backgroundColor: 'red',
  },
  RatingBox: {
    width: wp('18%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    // borderWidth: 1,
  },
  ExpreincesBox: {
    width: wp('22%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    // borderWidth: 1,
  },
  BrandTextStyle: {
    width: wp('85%'),
    height: hp('5%'),
    justifyContent: 'center',
    // borderWidth: 1,
  },
});
