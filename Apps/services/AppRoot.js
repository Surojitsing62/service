import React from 'react';
import {createAppContainer} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'native-base';
import {View, Text} from 'react-native';
import {COLORS} from '../constants/Colors';
import MainScreen from '../screens/MainScreen';
import Bookings from '../screens/Booking/Bookings';
import ProfileScreen from '../screens/ProfileScreen';

import Otp from '../screens/Otp';
import LoginPage from '../screens/LoginPage';
import SearchingPages from '../Pages/SearchingPages';

import SubServicePlumberPages from '../Pages/PLUMBERS/SubServicePlumberPages';
import AddItemPlumber from '../Pages/PLUMBERS/AddItemPlumber';
import TotalPurchaseList from '../Pages/TotalPurchaseList';

import SubServiceCarpenterPages from '../Pages/CARPENTERS/SubServiceCarpenterPages';
import AddItemCarpenter from '../Pages/CARPENTERS/AddItemCarpenter';

import AddItemElectronic from '../Pages/ELECTRONICS/AddItemElectronic';
import SubServiceElectronicPages from '../Pages/ELECTRONICS/SubServiceElectronicPages';

import SubServicePainterPages from '../Pages/Painters/SubServicePainterPages';
import AddItemPainter from '../Pages/Painters/AddItemPainter';

import LocationSearch from '../Pages/LocationSearch';
import Subscription from '../screens/Subscription';
import BookingDetails from '../components/Booking/BookingDetails';
import DeliveryAddress from '../Pages/Address/DeliveryAddress';
import BookingDate from '../Pages/BookingDate/BookingDate';
import Otherservice from '../screens/OtherWork/Otherservice';
import SummaryService from '../Pages/SummaryService/SummaryService';
import Home from '../screens/Shop/Home';
import ItemDetails from '../components/Shopping/ItemDetails';
import MyCart from '../components/Shopping/MyCart';
import PaymentOption from '../Pages/PaymentCheckOut';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: MainScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="SimpleLineIcons"
            name="home"
            color={tintColor}
            style={{fontSize: hp('2%'), color: tintColor}}
          />
        ),
      },
    },
    Subscription: {
      screen: Subscription,
      navigationOptions: {
        tabBarLabel: 'Subscription',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="shoppingcart"
            type="AntDesign"
            color={tintColor}
            style={{fontSize: hp('2.5%'), color: tintColor}}
          />
        ),
      },
    },
    Shop: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Shopping',
        tabBarIcon: ({tintColor}) => (
          <View
            style={{
              position: 'absolute',
              top: -10,
              zIndex: 1,
              elevation: 2,
              width: 40,
              height: 40,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.themecolor,
            }}>
            <Icon
              type="FontAwesome"
              name="shopping-bag"
              color={tintColor}
              style={{fontSize: hp('2%'), color: COLORS.white}}
            />
          </View>
        ),
      },
    },
    Bookings: {
      screen: Bookings,
      navigationOptions: {
        tabBarLabel: 'Bookings',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="book"
            type="AntDesign"
            color={tintColor}
            style={{fontSize: hp('2.3%'), color: tintColor}}
          />
        ),
      },
    },

    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="AntDesign"
            name="user"
            color={tintColor}
            style={{fontSize: hp('2.5%'), color: tintColor}}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: '#f74d14',
      labelStyle: {
        fontSize: hp('1.5%'),
      },
      // showLabel:false
    },
  },
);

const LocationStack = createStackNavigator(
  {
    LocationSearch: {
      screen: LocationSearch,
    },
  },
  {
    initialRouteName: 'LocationSearch',
    headerMode: 'none',
  },
);
const SearchingStack = createStackNavigator(
  {
    Search: {
      screen: SearchingPages,
    },
  },
  {
    initialRouteName: 'Search',
    headerMode: 'none',
  },
);
const Purchase = createStackNavigator(
  {
    Purchase: {
      screen: TotalPurchaseList,
    },
  },
  {
    initialRouteName: 'Purchase',
    headerMode: 'none',
  },
);

const PlumberStack = createStackNavigator(
  {
    PlumberSubServiceScreen: {
      screen: SubServicePlumberPages,
      navigationOptions: {
        title: 'Plumber',
        headerBackTitle: 'Plumber',
      },
    },
    PlumberItem: {
      screen: AddItemPlumber,
      navigationOptions: {
        title: 'Plumber',
        headerBackTitle: 'Plumber',
        // headerShown: 'Plumber',
      },
    },
    Otherserives: {
      screen: Otherservice,
    },
    Address: {
      screen: DeliveryAddress,
      navigationOptions: {
        title: 'Address',
        // headerBackTitle: 'Address',
      },
    },
    DateBooking: {
      screen: BookingDate,
    },
    SummaryService: {
      screen: SummaryService,
    },
  },
  {
    initialRouteName: 'PlumberSubServiceScreen',
    headerMode: 'none',
  },
);

const CarpenterStack = createStackNavigator(
  {
    CarpenterSubServiceScreen: {
      screen: SubServiceCarpenterPages,
      navigationOptions: {
        title: 'Carpenter',
      },
    },
    CarpenterItem: {
      screen: AddItemCarpenter,
      navigationOptions: {
        title: 'Carpenter',
      },
    },
    Otherserives: {
      screen: Otherservice,
    },
    Address: {
      screen: DeliveryAddress,
      navigationOptions: {
        title: 'Address',
        // headerBackTitle: 'Address',
      },
    },

    DateBooking: {
      screen: BookingDate,
    },
    SummaryService: {
      screen: SummaryService,
    },
  },
  {
    initialRouteName: 'CarpenterSubServiceScreen',
    headerMode: 'none',
  },
);

const ElectronicStack = createStackNavigator(
  {
    ElectronicSubServiceScreen: {
      screen: SubServiceElectronicPages,
      navigationOptions: {
        title: 'Electronic',
      },
    },
    ElectronicItem: {
      screen: AddItemElectronic,
      navigationOptions: {
        title: 'Electronic',
      },
    },
    Otherserives: {
      screen: Otherservice,
    },
    Address: {
      screen: DeliveryAddress,
      navigationOptions: {
        title: 'Address',
        // headerBackTitle: 'Address',
      },
    },
    DateBooking: {
      screen: BookingDate,
    },
    SummaryService: {
      screen: SummaryService,
    },
  },
  {
    initialRouteName: 'ElectronicSubServiceScreen',
    headerMode: 'none',
  },
);
const PainterStack = createStackNavigator(
  {
    PainterSubServiceScreen: {
      screen: SubServicePainterPages,
      navigationOptions: {
        title: 'Painter',
      },
    },
    PainterItem: {
      screen: AddItemPainter,
      navigationOptions: {
        title: 'Painter',
      },
    },
    Otherserives: {
      screen: Otherservice,
    },
    Address: {
      screen: DeliveryAddress,
      navigationOptions: {
        title: 'Address',
        // headerBackTitle: 'Address',
      },
    },
    DateBooking: {
      screen: BookingDate,
    },
    SummaryService: {
      screen: SummaryService,
    },
  },
  {
    initialRouteName: 'PainterSubServiceScreen',
    headerMode: 'none',
  },
);
const BookingStack = createStackNavigator(
  {
    ViewDetailsBooking: {
      screen: BookingDetails,
      navigationOptions: {
        title: 'Booking Details',
      },
    },
  },
  {
    initialRouteName: 'ViewDetailsBooking',
    headerMode: 'none',
  },
);
const AddressStack = createStackNavigator(
  {
    Address: {
      screen: DeliveryAddress,
      navigationOptions: {
        title: 'Address',
        // headerBackTitle: 'Plumber',
      },
    },
  },
  {
    initialRouteName: 'Address',
    headerMode: 'none',
  },
);

const HomeStack = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
    },
    Otp: {
      screen: Otp,
    },
    HomeTab: {
      screen: TabNavigator,
    },
    Shopping: {
      screen: ItemDetails,
    },
    MyCart: {
      screen: MyCart,
    },
    PaymentOption: {
      screen: PaymentOption,
    },
    Address: {
      screen: AddressStack,
    },
    BookingStack: {
      screen: BookingStack,
    },
    Search: {
      screen: SearchingStack,
    },
    Purchase: {
      screen: Purchase,
    },

    PlumberStack: {
      screen: PlumberStack,
    },
    CarpenterStack: {
      screen: CarpenterStack,
    },
    ElectronicStack: {
      screen: ElectronicStack,
    },
    PainterStack: {
      screen: PainterStack,
    },
    Subscription: {
      screen: Subscription,
    },
    LocationStack: {
      screen: LocationStack,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);
export default AppRoot = createAppContainer(HomeStack);
