import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'native-base';

import MainScreen from '../screens/MainScreen';
import Bookings from '../screens/Booking/Bookings';
import ProfileScreen from '../screens/ProfileScreen';

import Otp from '../screens/Otp';
import ForgotPassword from '../screens/ForgotPassword';
import LoginPage from '../screens/LoginPage';
import SignUpPages from '../screens/SignUpPages';
import SearchingPages from '../Pages/SearchingPages';

import SubServicePlumberPages from '../Pages/PLUMBERS/SubServicePlumberPages';
import AddItemPlumber from '../Pages/PLUMBERS/AddItemPlumber';
import TotalPurchaseList from '../Pages/TotalPurchaseList';

import SubServiceCarpenterPages from '../Pages/CARPENTERS/SubServiceCarpenterPages';
import AddItemCarpenter from '../Pages/CARPENTERS/AddItemCarpenter';

import AddItemElectronic from '../Pages/ELECTRONICS/AddItemElectronic';
import SubServiceElectronicPages from '../Pages/ELECTRONICS/SubServiceElectronicPages';

import SubServiceCleaningPages from '../Pages/CLEANING_DISINFECTION/SubServiceCleaningPages';
import AddItemCleaning from '../Pages/CLEANING_DISINFECTION/AddItemCleaning';

import SubServiceAcPages from '../Pages/AC_SERVICES/SubServiceAcPages';
import AddItemAc from '../Pages/AC_SERVICES/AddItemAc';
import PaymentCheckOut from '../Pages/PaymentCheckOut';
import LocationSearch from '../Pages/LocationSearch';
import Subscription from '../screens/Subscription';
import BookingDetails from '../components/Booking/BookingDetails';
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
        fontSize: 10,
      },
      // showLabel:false
    },
  },
);

const LocationStack = createStackNavigator(
  {
    Location: {
      screen: LocationSearch,
    },
  },
  {
    initialRouteName: 'Location',
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
    // headerMode: 'none',
  },
);
const Payments = createStackNavigator(
  {
    Payments: {
      screen: PaymentCheckOut,
    },
  },
  {
    initialRouteName: 'Payments',
    // headerMode: 'none',
  },
);
const PlumberStack = createStackNavigator(
  {
    PlumberSubServiceScreen: {
      screen: SubServicePlumberPages,
      navigationOptions: {
        title: 'Plumber',
      },
    },
    PlumberItem: {
      screen: AddItemPlumber,
      navigationOptions: {
        title: 'Plumber',
      },
    },
  },
  {
    initialRouteName: 'PlumberSubServiceScreen',
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
  },
  {
    initialRouteName: 'CarpenterSubServiceScreen',
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
  },
  {
    initialRouteName: 'ElectronicSubServiceScreen',
  },
);
const CleaningStack = createStackNavigator(
  {
    CleaningSubServiceScreen: {
      screen: SubServiceCleaningPages,
      navigationOptions: {
        title: 'Cleaning',
      },
    },
    CleaningItem: {
      screen: AddItemCleaning,
      navigationOptions: {
        title: 'Cleaning',
      },
    },
  },
  {
    initialRouteName: 'CleaningSubServiceScreen',
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
  },
);

// const SubscriptionStack = createStackNavigator(
//   {
//     ViewDetailsBooking: {
//       screen: Subscription,
//       navigationOptions: {
//         title: 'Booking Details',
//       },
//     },
//   },
//   {
//     initialRouteName: 'ViewDetailsBooking',
//   },
// );

const HomeStack = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
    },
    SignUp: {
      screen: SignUpPages,
    },
    ForgotPassword: {
      screen: ForgotPassword,
    },
    Otp: {
      screen: Otp,
    },
    HomeTab: {
      screen: TabNavigator,
    },
    LocationStack: {
      screen: LocationStack,
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
    Payments: {
      screen: Payments,
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
    CleaningStack: {
      screen: CleaningStack,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);
export default AppRoot = createAppContainer(HomeStack);
