import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'native-base';

export default class SearchingPages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerContain}>
        <View style={styles.textInputfiled}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('HomeTab')}>
            <View>
              <Icon
                type="MaterialIcons"
                name="arrow-back"
                color="black"
                style={{fontSize: 25}}
              />
            </View>
          </TouchableNativeFeedback>

          <View style={{marginHorizontal: hp('4%')}}>
            <TextInput
              autoFocus={true}
              placeholder="Search for services and packges"
              placeholderTextColor="grey"
              maxLength={45}
              style={{
                fontSize: hp('2%'),
                // color: 'grey',
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContain: {
    flex: 1,
    // width: wp('100%'),
    // height: hp('10%'),

    color: '#fff',
  },
  textInputfiled: {
    width: wp('100%'),
    height: hp('6%'),
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    paddingHorizontal: hp('2%'),
    backgroundColor: '#fff',
  },
});
