import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Icon,
  Card,
  ScrollableTab,
} from 'native-base';

import {COLORS} from '../../constants/Colors';
export default class SubscriptionsCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback>
          <Card style={styles.container}>
            <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
              {this.props.name}
            </Text>
            <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
              5 Times
            </Text>
          </Card>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp('10%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: hp('1%'),
    alignItems: 'center',
    marginTop: hp('1%'),
  },
});
