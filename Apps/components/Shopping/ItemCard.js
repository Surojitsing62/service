import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ToastAndroid,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon, Card, Title} from 'native-base';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
import ImageList from './ItemImage';
export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagelist: ImageList,
    };
  }
  Handlebutton = () => {
    ToastAndroid.show('Item added', ToastAndroid.BOTTOM);
  };
  HandleChange = () => {
    this.props.navigation.navigate('Shopping');
  };
  render() {
    const ImageList = this.state.imagelist;
    return (
      <>
        {ImageList.map((item, index) => {
          return (
            <TouchableWithoutFeedback key={item.id} onPress={this.HandleChange}>
              <Card style={styles.CardStyle}>
                <View style={styles.ImageContainer}>
                  <Image
                    style={styles.ImageStyle}
                    resizeMode="contain"
                    source={{uri: item.image}}
                  />
                </View>

                <View style={styles.DescItem}>
                  <View style={{width: wp('25%'), alignSelf: 'flex-end'}}>
                    <Text style={{fontSize: hp('2%')}} numberOfLines={2}>
                      {item.desc}
                    </Text>
                    <Text numberOfLines={1} style={{fontSize: hp('2%')}}>
                      <Icon
                        name="rupee"
                        type="FontAwesome"
                        style={{fontSize: hp('2%')}}
                      />{' '}
                      250
                    </Text>
                  </View>
                  <View style={{alignSelf: 'flex-end'}}>
                    <TouchableWithoutFeedback onPress={this.Handlebutton}>
                      <View style={styles.ButtonStyle}>
                        <Icon
                          name="plus"
                          type="AntDesign"
                          style={{fontSize: hp('2.5%'), color: COLORS.white}}
                        />
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </Card>
            </TouchableWithoutFeedback>
          );
        })}
      </>
    );
  }
}

const styles = StyleSheet.create({
  CardStyle: {
    width: wp('42%'),
    height: hp('30%'),
    elevation: 5,
    padding: hp('2%'),
    marginLeft: hp('1%'),
    marginRight: hp('1%'),
    marginBottom: hp('2%'),
    borderRadius: 15,
  },
  ImageContainer: {
    alignSelf: 'center',
    height: hp('15%'),
    // backgroundColor: 'red',
  },
  ImageStyle: {
    width: wp('40%'),
    height: hp('15%'),
  },
  DescItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ButtonStyle: {
    width: wp('8%'),
    height: hp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 4,
    backgroundColor: COLORS.themecolor,
  },
});
