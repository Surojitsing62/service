import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import HeaderBar from '../../constants/HeaderBar';
import {Container, Header, Content, Textarea, Form} from 'native-base';
import {COLORS} from '../../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class Otherservice extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <HeaderBar name="Others service" navigation={this.props.navigation} />
        <Content padder>
          <Form>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Which service are you want"
              style={{fontWeight: 'bold'}}
            />
          </Form>
        </Content>
        <View style={{paddingHorizontal: hp('2%'), marginBottom: hp('2%')}}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('Address')}>
            <View style={styles.subscribeButton}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: hp('2%'),
                  color: COLORS.white,
                  letterSpacing: 1,
                }}>
                CONTINUE
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    // paddingHorizontal: hp('2%'),
  },
  subscribeButton: {
    height: hp('5%'),
    borderRadius: 5,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.buttonColor,
  },
});
