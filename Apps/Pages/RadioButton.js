import React, {Component} from 'react';
import {
  // Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
} from 'native-base';

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VisaItemSelcted: false,
      Visaitem: false,
      UpiItemSelected: false,
      UpiItem: false,
      CodItemSelected: false,
      CodItem: false,
    };
  }
  HandleChangeVisaItem = () => {
    this.setState({VisaItemSelcted: true});
    this.setState({Visaitem: true});
    this.setState({UpiItem: false});
    this.setState({UpiItem: false});
    this.setState({CodItemSelected: false});
    this.setState({CodItem: false});
  };
  HandleChangeUpiItem = () => {
    this.setState({VisaItemSelcted: false});
    this.setState({Visaitem: false});
    this.setState({UpiItem: true});
    this.setState({UpiItem: true});
    this.setState({CodItemSelected: false});
    this.setState({CodItem: false});
  };
  HandleChangeCodItem = () => {
    this.setState({VisaItemSelcted: false});
    this.setState({Visaitem: false});
    this.setState({UpiItem: false});
    this.setState({UpiItem: false});
    this.setState({CodItemSelected: true});
    this.setState({CodItem: true});
  };
  render() {
    return (
      <View
        style={{
          width: wp('100%'),
          height: hp('30%'),
          // paddingHorizontal: hp('2%'),
          // justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity>
          <ListItem
            onPress={this.HandleChangeVisaItem}
            selected={this.state.VisaItemSelcted}>
            <Left>
              <Text>VISA</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={this.state.Visaitem}
              />
            </Right>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <ListItem
            onPress={this.HandleChangeUpiItem}
            selected={this.state.UpiItemSelected}>
            <Left>
              <Text>UPI</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={this.state.UpiItem}
              />
            </Right>
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <ListItem
            onPress={this.HandleChangeCodItem}
            selected={this.state.CodItemSelected}>
            <Left>
              <Text>Cash on Delivery</Text>
            </Left>
            <Right>
              <Radio
                color={'#f0ad4e'}
                selectedColor={'#5cb85c'}
                selected={this.state.CodItem}
              />
            </Right>
          </ListItem>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
