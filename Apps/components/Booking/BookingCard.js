import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
import {Card, Icon, Button} from 'native-base';

export default class BookingCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Card style={styles.cardstyle}>
          <View style={styles.HeadingText}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: hp('2%'),
                fontWeight: 'bold',
              }}>
              TV Installtion & Repair
            </Text>
          </View>
          <View style={styles.UserDescPlace}>
            <View
              style={{
                width: wp('65%'),
              }}>
              <Text style={styles.textSize} numberOfLines={2}>
                Dr somenath roy
              </Text>
              <View>
                <Text style={{fontSize: hp('1.8%')}}>
                  Head Office-42,Nayanpur Road,Japorigog,Ganeshguri,Guwahati-6,
                  Assam
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text numberOfLines={1} style={{fontSize: hp('1.6%')}}>
                30 Oct 2020
              </Text>
              <View style={styles.ButtonStyle}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: hp('1.7%'),
                    color: COLORS.white,
                  }}>
                  {this.props.status}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.ButtonPlace}>
            <View style={styles.CancelButton}>
              <Text style={styles.ButtontextSize}>
                <Icon
                  name="cancel"
                  type="MaterialIcons"
                  style={{color: COLORS.white, fontSize: hp('2%')}}
                />{' '}
                Cancel
              </Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('BookingStack')}>
              <View style={styles.Button}>
                <Text style={styles.ButtontextSize}>
                  <Icon
                    name="book-open"
                    type="FontAwesome5"
                    style={{color: COLORS.white, fontSize: hp('2%')}}
                  />{' '}
                  View Details
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardstyle: {
    paddingBottom: hp('2%'),
    // elevation: 4,
  },
  ButtonStyle: {
    width: wp('20%'),
    height: hp('4%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%'),
    backgroundColor: '#3f873e',
  },
  HeadingText: {
    justifyContent: 'center',
    height: hp('4.5%'),
    paddingHorizontal: hp('2%'),
    backgroundColor: '#757575',
  },
  UserDescPlace: {
    // flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp('1%'),
  },
  ButtonPlace: {
    // flex: 1,
    // alignSelf: 'flex-end',
    marginTop: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textSize: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  ButtontextSize: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: COLORS.white,
  },
  Button: {
    width: wp('42%'),
    height: hp('5%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c8c16',
    elevation: 4,
  },
  CancelButton: {
    width: wp('42%'),
    height: hp('5%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ab0000',
    elevation: 4,
  },
});
