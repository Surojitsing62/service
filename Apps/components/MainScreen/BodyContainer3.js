import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {Card, Icon, Button} from 'native-base';
import ServiceImagedata from './ServicesImage';
import {COLORS} from '../../constants/Colors';

export default class BodyContainer3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagedata: ServiceImagedata,
    };
  }

  render() {
    return (
      <View style={styles.BodyContain3}>
        <View style={styles.Container}>
          {this.state.imagedata.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate(item.url)}>
                <Card style={styles.CardView}>
                  <View key={item.id}>
                    <Image
                      source={item.imgsrc}
                      resizeMode="contain"
                      style={styles.imageStyles}
                    />
                  </View>
                  <View>
                    <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                      {item.title}
                    </Text>
                  </View>
                </Card>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BodyContain3: {
    flex: 1,
    marginTop: hp('1.5%'),
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  Container: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    paddingVertical: hp('2%'),
    alignItems: 'center',
  },

  CardView: {
    width: width / 2.29,
    height: hp('15%'),
    marginLeft: hp('2%'),
    marginBottom: hp('2%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: hp('1%'),
    elevation: 4,
    borderRadius: 10,
  },
  imageStyles: {
    width: wp('15%'),
    height: hp('7.5%'),
  },
  textsize: {
    fontSize: hp('1.5%'),
    padding: hp('0.3%'),
    textAlign: 'center',
  },
});
