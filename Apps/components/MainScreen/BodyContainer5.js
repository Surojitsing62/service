import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewBotton from './ViewBotton';
import ImageDisplayInto4section from '../Main_Service_Image_List/ImageDisplayInto4section';

export default class BodyContain5 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.BodyContain5}>
        <View style={styles.textcontainer}>
          <Text style={styles.TextTitle}>{this.props.TextTitle}</Text>
          <Text style={styles.subTitle}>{this.props.SubTitle}</Text>
        </View>

        <ImageDisplayInto4section />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CleaningStack')}>
          <ViewBotton navigation={this.props.navigation} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BodyContain5: {
    flex: 1,
    // width: wp('100%'),
    // height: hp('68%'),
    marginTop: hp('1.5%'),
    backgroundColor: '#ffff',
  },
  textcontainer: {
    padding: hp('2%'),
  },
  TextTitle: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: hp('1.8%'),
    color: '#969696',
    marginVertical: hp('0.8%'),
  },
});
