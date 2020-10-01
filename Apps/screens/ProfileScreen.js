import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Icon,
  Label,
  Button,
} from 'native-base';
import {COLORS} from '../constants/Colors';
import ProfileDivisonComponent from '../components/ProfileScreen/ProfileDivisonComponent';
import Submit from '../components/Registration_Assest/Submit';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  ShowModal = () => {
    this.setState({isVisible: true});
  };
  HideModal = () => {
    this.setState({isVisible: false});
  };
  render() {
    return (
      <View style={styles.MainScreen}>
        <View style={styles.HeaderConatiner}>
          <Text style={styles.UserNameText}>My Profile</Text>
        </View>

        {/* Header Conatiner End******************************************** */}

        <View style={styles.UserNamePlace}>
          <View style={styles.imagesection}>
            <View style={styles.ProfileImage}>
              <Text style={{fontSize: hp('2.5%'), color: 'white'}}>U</Text>
            </View>
            <View style={styles.NameSection}>
              <Text
                numberOfLines={2}
                style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                User
              </Text>
              <Text>Your Name</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.ShowModal}>
            <View style={styles.EditBtn}>
              <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>EDIT</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Modal
            isVisible={this.state.isVisible}
            testID={'modal'}
            onSwipeComplete={this.close}
            onBackdropPress={this.HideModal}
            // swipeDirection={['up', 'left', 'right', 'down']}
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: hp('7%'),
            }}>
            <View style={styles.modalViewStyle}>
              <View style={{padding: hp('2%')}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View
                    style={{
                      marginBottom: hp('2%'),
                      width: wp('90%'),
                      height: hp('5%'),
                      flexDirection: 'row',
                      // backgroundColor: 'red',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <TouchableWithoutFeedback onPress={this.HideModal}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: wp('10%'),
                          height: hp('5%'),
                          elevation: 2,
                          shadowColor: '#d4d4d4',
                          // borderWidth: 0.5,
                          backgroundColor: '#d4d4d4',
                          borderRadius: 100,
                          alignItems: 'center',
                        }}>
                        <Text style={{fontSize: hp('3%')}}>X</Text>
                      </View>
                    </TouchableWithoutFeedback>

                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: wp('70%'),
                        height: hp('5%'),
                      }}>
                      <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>
                        Update Account
                      </Text>
                    </View>
                  </View>

                  <Item regular style={styles.Input}>
                    <Input placeholder="First Name" />
                  </Item>
                  <Item regular style={styles.Input}>
                    <Input placeholder="Email Id" />
                  </Item>
                  <Item regular style={styles.Input}>
                    <Input placeholder="Phone Numbe" />
                  </Item>
                  <Item regular style={styles.Input}>
                    <Input placeholder="Address" />
                  </Item>
                </View>

                <View
                  style={{
                    padding: hp('2%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Submit title="UPDATE" color={COLORS.buttonColor} />
                </View>
              </View>

              {/* <Button title="Hide modal" /> */}
            </View>
          </Modal>
        </View>
        {/* prodile container**************************************************************** */}

        {/* profile division section************************start*********** */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.BodyBannerContainer}>
            <ProfileDivisonComponent
              IconName="rocketchat"
              Title="Help Center"
            />
            <ProfileDivisonComponent
              IconName="handshake"
              Title="Download Service Partner App"
            />
            <ProfileDivisonComponent IconName="smile" Title="About Service" />
            <ProfileDivisonComponent
              IconName="telegram-plane"
              Title="Share Service App"
            />

            <ProfileDivisonComponent IconName="star" Title="Rate Service App" />

            <View style={styles.EndSection}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{color: COLORS.themecolor, fontSize: hp('2%')}}>
                  Logout
                </Text>
              </TouchableOpacity>
              <View style={styles.VersionSection}>
                <Text style={{color: '#bdbdbd'}} numberOfLines={2}>
                  Version 1.0.0
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default ProfileScreen;

const styles = StyleSheet.create({
  MainScreen: {
    flex: 1,
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

  UserNamePlace: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: hp('12%'),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e9ecf0',
  },
  imagesection: {
    width: wp('70%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  NameSection: {
    width: wp('30%'),
    position: 'absolute',
    left: wp('20%'),
  },
  ProfileImage: {
    width: wp('15%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    backgroundColor: 'rgba(10, 117, 209,0.9)',
  },

  EditBtn: {
    width: wp('20%'),
    height: hp('5%'),
    borderRadius: 30,
    borderColor: COLORS.themecolor,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BodyBannerContainer: {
    flex: 1,
    marginVertical: hp('1%'),
  },
  EndSection: {
    marginVertical: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  VersionSection: {
    marginVertical: hp('0.5%'),
    width: wp('30%'),
    height: hp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink',
  },
  modalViewStyle: {
    width: wp('100%'),
    height: hp('100%'),
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    // padding: hp('2%'),
  },
  Input: {
    width: wp('90%'),
    height: hp('5%'),
    marginVertical: hp('1%'),
  },
});
