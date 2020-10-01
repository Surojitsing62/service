import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';
import NavigationService from './app/Service/Navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Location from './app/screen/Resturents/Location';
import Home from './app/screen/Home/Home';
import Resturent from './app/screen/Resturents/Resturent';
import Product from './app/screen/Resturents/Product';
import Package from './app/screen/Package/Package';
import MyAccount from './app/screen/Account/Account';
import GroceryShop from './app/screen/Grocery/GroceryShop';
import GroceryLocation from './app/screen/Grocery/GroceryLocation';
import MeatShop from './app/screen/Meat/MeatShop';
import MeatLocation from './app/screen/Meat/MeatLocation';
import MeatProduct from './app/screen/Meat/MeatProduct';
import GroceryProduct from './app/screen/Grocery/GroceryProduct';
import FruitsLocation from './app/screen/Fruits/FruitsLocation';
import FruitsProduct from './app/screen/Fruits/FruitsProduct';
import FruitShop from './app/screen/Fruits/FruitsShop';
import MedicineLocation from './app/screen/Medicine/MedicineLocation';
import MedicineShop from './app/screen/Medicine/MedicineShop';
import MedicineProduct from './app/screen/Medicine/MedicineProduct';
import LaundryLocation from './app/screen/Laundry/LaundryLocation';
import LaundryProduct from './app/screen/Laundry/LaundryProduct';
import LaundryShop from './app/screen/Laundry/LaundryShop';
import Cart from './app/screen/Cart/Cart';
import Order from './app/screen/Order/Order';
import GarmentLocation from './app/screen/Garments/GarmentLocation';
import GarmentShop from './app/screen/Garments/GarmentShop';
import GarmentProduct from './app/screen/Garments/GarmentProduct';
import Checkout from './app/component/Cart/Checkout';
import LoginScreen from './app/screen/Auth/loginScreen';
import RegisterScreen from './app/screen/Auth/registerScreen';
import {Provider} from 'react-redux';
import configStore from './app/component/Redux/Store/index';
import OrderTrack from './app/screen/Order/OrderTrack';
import ProductDetails from './app/screen/Order/ProductDetails';

const store = configStore();

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'HOME',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="SimpleLineIcons"
            name="home"
            color={tintColor}
            style={{fontSize: 22, color: tintColor}}
          />
        ),
      },
    },
    Search: {
      screen: Package,
      navigationOptions: {
        tabBarLabel: 'PICK & DROP',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="search1"
            type="AntDesign"
            color={tintColor}
            style={{fontSize: 22, color: tintColor}}
          />
        ),
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarLabel: 'CART',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="SimpleLineIcons"
            name="handbag"
            color={tintColor}
            style={{fontSize: 22, color: tintColor}}
          />
        ),
      },
    },
    // Account:{
    //   screen:MyAccount,
    //   navigationOptions:{
    //     tabBarLabel:"ACCOUNT",
    //     tabBarIcon:({tintColor}) => <Icon  name="user" type="Feather" color={tintColor} style={{fontSize:22,color:tintColor}} />
    //   }
    // },
    History: {
      screen: Order,
      navigationOptions: {
        tabBarLabel: 'ORDER  ',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="pocket"
            type="Feather"
            color={tintColor}
            style={{fontSize: 22, color: tintColor}}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: '#2ECC71',
      labelStyle: {
        fontSize: 10,
      },
      // showLabel:false
    },
  },
);
const ResturentStack = createStackNavigator(
  {
    Resturent: {
      screen: Location,
    },
    ResturentScreen: {
      screen: Resturent,
    },
    Product: {
      screen: Product,
    },
  },
  {
    initialRouteName: 'Resturent',
    headerMode: 'none',
  },
);
const GroceryStack = createStackNavigator(
  {
    GroceryLocation: {
      screen: GroceryLocation,
    },
    GroceryShop: {
      screen: GroceryShop,
    },
    GroceryProduct: {
      screen: GroceryProduct,
    },
  },
  {
    initialRouteName: 'GroceryLocation',
    headerMode: 'none',
  },
);
const MeatStack = createStackNavigator(
  {
    MeatLocation: {
      screen: MeatLocation,
    },
    MeatShop: {
      screen: MeatShop,
    },
    MeatProduct: {
      screen: MeatProduct,
    },
  },
  {
    initialRouteName: 'MeatLocation',
    headerMode: 'none',
  },
);
const FruitStack = createStackNavigator(
  {
    FruitLocation: {
      screen: FruitsLocation,
    },
    FruitShop: {
      screen: FruitShop,
    },
    FruitProduct: {
      screen: FruitsProduct,
    },
  },
  {
    initialRouteName: 'FruitLocation',
    headerMode: 'none',
  },
);
const MedicineStack = createStackNavigator(
  {
    ShopLocation: {
      screen: MedicineLocation,
    },
    MedicineShop: {
      screen: MedicineShop,
    },
    MedicineProduct: {
      screen: MedicineProduct,
    },
  },
  {
    initialRouteName: 'ShopLocation',
    headerMode: 'none',
  },
);
const LaundryStack = createStackNavigator(
  {
    LaundryLocation: {
      screen: LaundryLocation,
    },
    LaundryShop: {
      screen: LaundryShop,
    },
    LaundryProduct: {
      screen: LaundryProduct,
    },
  },
  {
    initialRouteName: 'LaundryLocation',
    headerMode: 'none',
  },
);
const GarmentStack = createStackNavigator(
  {
    GarmentLocation: {
      screen: GarmentLocation,
    },
    GarmentShop: {
      screen: GarmentShop,
    },
    GarmentProduct: {
      screen: GarmentProduct,
    },
  },
  {
    initialRouteName: 'GarmentLocation',
    headerMode: 'none',
  },
);
const HomeStack = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    Account: {
      screen: MyAccount,
    },
    HomeTab: {
      screen: TabNavigator,
    },
    ResturentStack: {
      screen: ResturentStack,
    },
    GroceryStack: {
      screen: GroceryStack,
    },
    MeatStack: {
      screen: MeatStack,
    },
    FruitStack: {
      screen: FruitStack,
    },
    MedicineStack: {
      screen: MedicineStack,
    },
    LaundryStack: {
      screen: LaundryStack,
    },
    GarmentStack: {
      screen: GarmentStack,
    },
    Package: {
      screen: Package,
    },
    CartScreen: {
      screen: Cart,
    },
    Checkout: {
      screen: Checkout,
    },
    OrderTrack: {
      screen: OrderTrack,
    },
    ProductDetails: {
      screen: ProductDetails,
    },
  },
  {
    initialRouteName: 'HomeTab',
    headerMode: 'none',
  },
);
const AppRoot = createAppContainer(HomeStack);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoot
          ref={(r) => {
            NavigationService.setTopLevelNavigator(r);
          }}
        />
      </Provider>
    );
  }
}
