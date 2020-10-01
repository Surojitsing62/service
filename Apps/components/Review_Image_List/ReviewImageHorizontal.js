import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import images from './ReviewImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class ReviewImageHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagedata: images,
    };
  }
  getImage = () => {
    return this.state.imagedata.map((item, index) => {
      return (
        <React.Fragment key={item.id}>
          <View>
            <Image
              resizeMode="cover"
              source={{uri: item.url}}
              style={{
                width: wp('85%'),
                height: hp('25%'),
                borderRadius: 5,
                borderWidth: 2,
                borderColor: 'rgba(145, 154, 255,0.3)',
                marginHorizontal: hp('1%'),
              }}
            />
          </View>
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardsimage}>{this.getImage()}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardsimage: {
    // height: hp('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: hp('1.5%'),
  },
});
