import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';
import {COLORS} from '../constants/Colors';
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: true,
      item: 1,
      maxitem: 4,
    };
  }

  AddButtonHandle = (e) => {
    this.setState({btn: false});
  };
  increaseItemHandle = (e) => {
    if (this.state.item <= this.state.maxitem) {
      this.setState({item: this.state.item + 1});
    } else {
      alert('sorry you can not add more item');
      // this.props.navigation.navigate('Purchase');
    }
  };
  DecreaseItemHandle = (e) => {
    if (this.state.item > 1) {
      this.setState({item: this.state.item - 1});
    } else {
      this.setState({btn: true});
    }
  };
  render() {
    const addBtn = this.state.btn;
    return (
      <>
        <View style={styles.ListItemStyle}>
          <View style={styles.ItemsCardS}>
            <View style={styles.ImageContainer}>
              <Image
                style={styles.ImageStyle}
                source={{uri: this.props.img}}
                resizeMode="center"
              />
            </View>
            <View>
              <View style={styles.CardDescUpperStyle}>
                <View>
                  <Text numberOfLines={2} style={styles.textsize}>
                    {this.props.itemName}
                  </Text>
                  <Text>
                    <Icon
                      name="rupee"
                      type="FontAwesome"
                      style={styles.textsize}
                    />{' '}
                    {this.props.price}
                  </Text>
                </View>
                {addBtn ? (
                  <TouchableNativeFeedback onPress={this.AddButtonHandle}>
                    {/* onPress={() => this.props.navigation.navigate('Purchase')} */}
                    <View style={styles.AddCardStyles}>
                      <View style={styles.AddTextBoxStyle}>
                        <Text style={{fontSize: hp('2.5%'), color: '#fff'}}>
                          Add
                        </Text>
                      </View>
                      <View style={styles.PlusSignBoxStyle}>
                        <Text style={{color: '#fff', fontSize: hp('2.9%')}}>
                          +
                        </Text>
                      </View>
                    </View>
                  </TouchableNativeFeedback>
                ) : (
                  <View style={styles.AddButtonPressStyles}>
                    <TouchableNativeFeedback onPress={this.DecreaseItemHandle}>
                      <View style={styles.MinusBoxStyle}>
                        <Text style={{color: '#fff', fontSize: hp('3%')}}>
                          -
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                    <View style={styles.NumberBoxStyle}>
                      <Text style={{fontSize: hp('2.5%')}}>
                        {this.state.item}
                      </Text>
                    </View>
                    <TouchableNativeFeedback onPress={this.increaseItemHandle}>
                      <View style={styles.PlusBoxStyle}>
                        <Text style={{color: '#fff', fontSize: hp('2.9%')}}>
                          +
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                )}
              </View>

              <View style={styles.CardDescStyle}>
                <View style={styles.FeaturesTextStyle}>
                  <View style={{width: wp('5%')}}>
                    <Text style={{color: '#969595'}}>*</Text>
                  </View>
                  <View style={{width: wp('60%')}}>
                    <Text style={{color: '#969595', fontSize: hp('1.5%')}}>
                      {this.props.desc}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  ListItemStyle: {
    width: wp('100%'),
    borderBottomWidth: 1,
    borderColor: '#b5b5b5',
    paddingVertical: hp('2%'),
    backgroundColor: '#ffff',
  },
  textsize: {
    fontWeight: 'bold',
    fontSize: hp('1.8%'),
    width: wp('50%'),
    // height: hp('5%'),
  },
  ItemsCardS: {
    flex: 1,
    paddingHorizontal: hp('1%'),
    flexDirection: 'row',
  },
  ImageContainer: {
    // paddingHorizontal: hp('1%'),
    width: wp('20%'),
  },
  ImageStyle: {
    width: wp('18%'),
    height: hp('10%'),
    borderRadius: 25,
  },
  CardDescStyle: {
    paddingHorizontal: hp('2%'),
    marginVertical: hp('2%'),
  },
  FeaturesTextStyle: {
    flexDirection: 'row',
    width: wp('65%'),
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },

  CardDescUpperStyle: {
    width: wp('78%'),
    height: hp('8%'),
    paddingHorizontal: hp('2%'),
    // backgroundColor: 'red',
    borderBottomWidth: 0.5,
    borderColor: '#c9c9c9',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AddCardStyles: {
    width: wp('21%'),
    height: hp('4%'),
    flexDirection: 'row',
    backgroundColor: '#fa610f',
    elevation: 4,
    // paddingHorizontal: hp('1%'),
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#fa610f',
    borderWidth: 1,
  },
  AddTextBoxStyle: {
    width: wp('14%'),
    height: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  PlusSignBoxStyle: {
    width: wp('7%'),
    height: hp('4%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa610f',
  },
  AddButtonPressStyles: {
    width: wp('21%'),
    height: hp('4%'),
    flexDirection: 'row',
    backgroundColor: '#fa610f',
    // paddingHorizontal: hp('1%'),
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#fa610f',
    borderWidth: 0.5,
  },
  PlusBoxStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('7%'),
    height: hp('4%'),
    // borderRightWidth: 0.5,
    // borderColor: '#ffff',
  },
  NumberBoxStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('7%'),
    height: hp('4%'),
    borderColor: '#fa610f',
    borderWidth: 0.4,
    backgroundColor: '#fff',
  },
  MinusBoxStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('7%'),
    height: hp('4%'),
    // borderLeftWidth: 0.5,
    // borderColor: '#fff',
  },
});
