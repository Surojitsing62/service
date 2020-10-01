import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class TotalPurchaseList extends Component {
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
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rootcontainer}>
          <View style={styles.TopSection}>
            <View style={styles.Topcontainer}>
              <View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>Item total</Text>
                </View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>Add-on [+]</Text>
                </View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>
                    Safety & Convenience fees !
                  </Text>
                </View>
              </View>
              <View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>$100</Text>
                </View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>$400</Text>
                </View>
                <View style={styles.LeftSideItemStyle}>
                  <Text style={styles.textColor}>$100</Text>
                </View>
              </View>
            </View>
            <View style={styles.TotalSectionStyle}>
              <Text style={{fontWeight: 'bold'}}>Total</Text>
              <Text style={{fontWeight: 'bold'}}>$600</Text>
            </View>
          </View>
          {/* Bill Section End ************************************* */}
          <View style={styles.CardItem}>
            <View style={styles.CardDescUpperStyle}>
              <View style={styles.ItemNameStyle}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontWeight: 'bold',
                    fontSize: hp('2%'),
                  }}>
                  Hot & Cold Water Mixer Repair
                </Text>
                <View style={styles.descstyle}>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                  <Text style={styles.textColor}>* For a faulty Driverter</Text>
                </View>
              </View>
              <View style={styles.AddTextBoxStyle}>
                <View style={styles.AddButtonPressStyles}>
                  <TouchableNativeFeedback onPress={this.increaseItemHandle}>
                    <View style={styles.PlusBoxStyle}>
                      <Text style={{color: '#fff', fontSize: hp('2.9%')}}>
                        +
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                  <View style={styles.NumberBoxStyle}>
                    <Text style={{fontSize: hp('2.5%')}}>
                      {this.state.item}
                    </Text>
                  </View>
                  <TouchableNativeFeedback onPress={this.DecreaseItemHandle}>
                    <View style={styles.MinusBoxStyle}>
                      <Text style={{color: '#fff', fontSize: hp('3%')}}>-</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
                <Text style={{fontSize: hp('2%')}}>$248</Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp('50%'),
                // position: 'absolute',
                // top: hp('12%'),
              }}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.navigate('Payments')}>
                <View style={styles.PurchaseButton}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: hp('2%'),
                    }}>
                    Continue Purchase
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
  },
  TopSection: {
    backgroundColor: '#fff',
  },
  Topcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp('2%'),
    width: wp('100%'),
    borderBottomWidth: 0.5,
    borderRadius: 20,
    // backgroundColor: 'red',
  },
  textColor: {
    color: '#a8a8a8',
  },
  LeftSideItemStyle: {
    marginVertical: hp('0.5%'),
  },
  TotalSectionStyle: {
    flexDirection: 'row',
    padding: hp('2%'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardItem: {
    marginVertical: hp('2%'),
    backgroundColor: '#fff',
  },
  CardDescUpperStyle: {
    padding: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    // paddingHorizontal: hp('2%'),
    // marginVertical: hp('2%'),
  },
  ItemNameStyle: {
    width: wp('60%'),
    // backgroundColor: 'red',
  },
  descstyle: {
    paddingHorizontal: hp('1%'),
  },
  AddTextBoxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('30%'),
    height: hp('5%'),
    // backgroundColor: 'red',
  },
  AddButtonPressStyles: {
    width: wp('18%'),
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
    width: wp('6%'),
    height: hp('4%'),
    // borderRightWidth: 0.5,
    // borderColor: '#ffff',
  },
  NumberBoxStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('6%'),
    height: hp('4%'),
    borderColor: '#fa610f',
    borderWidth: 0.4,
    backgroundColor: '#fff',
  },
  MinusBoxStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('6%'),
    height: hp('4%'),
  },

  PurchaseButton: {
    // paddingHorizontal: hp('2%'),
    width: wp('90%'),
    height: hp('5%'),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#54b5ff',
    borderWidth: 1,
  },
});
