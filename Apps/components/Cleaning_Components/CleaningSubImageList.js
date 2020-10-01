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
} from 'react-native';
import CleaningSubImagedata from './CleaningSubImage';

export default class CleaningSubImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagedata: CleaningSubImagedata,
    };
  }

  Imagelist = () => {
    return this.state.imagedata.map((item, index) => {
      return (
        <React.Fragment key={item.id}>
          <TouchableOpacity
            style={styles.Items}
            onPress={() => this.props.navigation.navigate('CleaningItem')}>
            <View style={styles.ImageCircleStyle}>
              <Image
                resizeMode="contain"
                source={{uri: item.imgurl}}
                style={styles.imageStyles}
              />
            </View>

            <Text numberOfLines={2} style={styles.textsize}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    });
  };
  render() {
    return (
      <View style={styles.ImageContainer}>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          {this.Imagelist()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ImageContainer: {
    backgroundColor: '#fff',
  },
  Items: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('33.3%'),
    height: hp('16%'),
    padding: hp('2%'),
    borderWidth: 1,
    borderColor: 'rgba(235, 235, 235,0.3)',
  },
  imageStyles: {
    width: wp('17%'),
    height: hp('8.5%'),
    // backgroundColor: '#0000',
    borderRadius: 100,
  },
  textsize: {
    fontSize: hp('1.5%'),
    padding: hp('0.3%'),
    margin: hp('0.4%'),
    textAlign: 'center',
  },
});
