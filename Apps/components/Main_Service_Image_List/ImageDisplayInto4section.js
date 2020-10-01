import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import CleanImagedata from './cleaningimage';

export default class ImageDisplayInto4section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagedata: CleanImagedata,
    };
  }

  Imagelist = () => {
    return this.state.imagedata.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={styles.Items}>
            <TouchableOpacity>
              <Image
                resizeMode="cover"
                source={{uri: item.url}}
                style={styles.imageStyles}
              />
              <Text numberOfLines={2} style={styles.textsize}>
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      );
    });
  };
  render() {
    return (
      <View style={styles.BodyContain5}>
        <View style={styles.ImageBox}>{this.Imagelist()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BodyContain5: {
    marginTop: hp('2%'),
    backgroundColor: '#fff',
  },
  Items: {
    width: wp('40%'),
    height: hp('22%'),
  },
  imageStyles: {
    width: wp('40%'),
    height: hp('15%'),
    borderRadius: 5,
  },
  ImageBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  textsize: {
    fontSize: hp('1.6%'),
    fontWeight: 'bold',
    marginVertical: hp('0.4%'),
  },
});
