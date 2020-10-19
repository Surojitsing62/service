import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {Button, Header, Title, Icon} from 'native-base';

import {COLORS} from './Colors';

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: COLORS.themecolor,
          }}
          androidStatusBarColor="#000">
          <TouchableWithoutFeedback>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrowleft" type="AntDesign" />
            </Button>
          </TouchableWithoutFeedback>

          <Title>{this.props.name}</Title>
        </Header>
      </>
    );
  }
}

const styles = StyleSheet.create({});
