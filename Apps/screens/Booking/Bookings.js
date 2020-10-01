import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import OngoingProject from '../Booking/OngoingProject';
import HistoryProject from '../Booking/HistoryProject';

import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';

class Bookings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MainScreen}>
        <View style={styles.HeaderConatiner}>
          <Text style={styles.UserNameText}>My Booking</Text>
        </View>

        {/* Header Conatiner End******************************************** */}

        <Tabs initialPage={0} page={0}>
          <Tab
            heading="ONGONIG"
            tabStyle={{backgroundColor: 'black'}}
            activeTabStyle={{backgroundColor: 'black'}}
            activeTextStyle={{color: '#ffff'}}>
            <OngoingProject navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading="HISTORY"
            tabStyle={{backgroundColor: 'black'}}
            activeTabStyle={{backgroundColor: 'black'}}
            activeTextStyle={{color: '#ffff'}}>
            <HistoryProject navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </View>
    );
  }
}
export default Bookings;

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeaderConatiner: {
    width: wp('100%'),
    height: hp('6%'),
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: hp('2.5%'),
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(21, 17, 51,0.4)',
  },

  UserNameText: {
    color: '#fff',
    fontSize: hp('2.5% '),
  },
});
