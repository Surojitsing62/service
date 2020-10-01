import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import ProductImagedata from './ProductsImage';

export default class ProductImagedisplay4section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagedata: ProductImagedata,
    };
  }

  Imagelist = () => {
    return this.state.imagedata.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={styles.itemsContain}>
            <View style={styles.Items}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(item.url)}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: wp('45%'),
                    height: hp('16%'),
                    backgroundColor: 'rgba(230, 242, 255,0.3)',
                    borderWidth: 0,
                  }}>
                  <Image
                    resizeMode="center"
                    source={{uri: item.imgurl}}
                    style={styles.imageStyles}
                  />

                  <Text numberOfLines={2} style={styles.textsize}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={1} style={styles.subText}>
                    {item.subTitle}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
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
  itemsContain: {
    width: wp('50%'),
    height: hp('20%'),
  },
  Items: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    width: wp('50%'),
    height: hp('20%'),
  },
  imageStyles: {
    width: wp('22%'),
    height: hp('10%'),
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
  subText: {
    fontSize: hp('1.5%'),
  },
});
