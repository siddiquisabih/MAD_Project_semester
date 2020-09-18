import React, { Component } from 'react';

import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,

} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import Routeskey from './routeskey';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationNativeContainer } from '@react-navigation/native';
import DrawerContent from "./DrawerContent"

//components list
// import Splash from '../components/Splash/Splash';
// import Signup from "../components/Login/Signup"
// import Forgetpassword from "../components/Login/Forgetpassword"
// import ResetPassword from "../components/Login/ResetPassword"
// import Tab from "./Tab"
import Categories from "../components/Categories/Categories"
import Splash from "../components/Splash/Splash"
import Login from "../components/Login/Login"
import Signup from "../components/Login/Signup"
import Forgetpassword from "../components/Login/Forgetpassword"
import ResetPassword from "../components/Login/ResetPassword"
import Verification from "../components/Verification/Verification"
import ChangeNumber from "../components/ChangeNumber/ChangeNumber"
import Map from "../components/Map/Map"
import Mycart from "../components/cart/cart"
import PaymentMethod from "../components/PaymentMethod/PaymentMedthod"
import EstimatedDeliveryTime from "../components/EstimatedDeliveryTime/EstimatedDeliveryTime"
import Notification from "../components/Notification/Notification"
import MyAddresses from "../components/MyAddresses/MyAddresses"
import About from "../components/About/About"
import ContactUs from "../components/ContactUs/ContactUs"
import Order from "../components/Order/Order"
import Search from "../components/search/searchRestaurant"
import Profile from "../components/Profile/Profile"
import OrderDetail from "../components/orderDetail/OrderDetail"
import OrderDeliver from "../components/orderDeliverd/OrderDeliver"
import OrderConfirmed from "../components/OrderConfirmed/OrderConfirmed"
import MyFavourites from "../components/MyFavourites/MyFavourites"
import TrackOrder from "../components/TrackOrder/TrackOrder"
import RestaurantProductFilter from "../components/Restaurant/rerurantProductFilter"
// import { Restaurant, Tab as BottomTab } from "../components/Restaurant/Restaurant"
// import Restaurant from "../components/Restaurant/Restaurant"
// import Tab from "./Tab"
import Home from "../components/home/home"
import RestaurantReviews from '../components/Restaurant/RestaurantReviews';
import UpdateAddress from '../components/Map/UpdateAddress';
import EditProfile from "../components/Login/EditProfile"
import List from '../components/Restaurant/List';
// import ListDetail from '../components/Restaurant/ListDetail';
import Privacy from "../components/Login/rules/privacy&policy";
import Terms from "../components/Login/rules/terms";
import ResetPasswordToProfile from "../components/Profile/ResetPasswordToProfile";
// import ShowRestaurants from "../components/ShowResaurantsBySearch/ShowRestaurant";
import AboutShop from "../components/Restaurant/AboutAndReviews"
import ChangeLanguage from "../components/ChangeLanguage/ChangeLanguage";
import LoginAsGuest from "../components/Login/loginGuest";
import { Restaurant, Tab as BottomTab } from "../components/Restaurant/Restaurant"


import Tab from "./Tab"
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function stackRoute(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>

      <Stack.Screen
        name={Routeskey.HOME}
        component={Tab}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Stack.Screen
        name={Routeskey.RESTAURANT}
        component={Restaurant}
        options={{ headerShown: false, gesturesEnabled: false }}

      />
      <Stack.Screen
        name="List"
        component={List}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      {/* <Stack.Screen
        name="List Detail"
        component={ListDetail}
        options={{ headerShown: false, gesturesEnabled: false }}
      /> */}
      <Stack.Screen
        name={Routeskey.RESTURANT_PRODUCT_FILTER}
        component={RestaurantProductFilter}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
    </Stack.Navigator>
  )
}


MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={Routeskey.SPLASH}
      drawerContent={props => <DrawerContent {...props}
        // openByDefault={true}
        openByDefault={"back"}
      // drawerStyle={{ width: 100 }}
      // edgeWidth={20}
      />}
      independent={true}
      drawerStyle={{
        width: 250
      }}
    >

      <Drawer.Screen
        name={Routeskey.SPLASH}
        component={Splash}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name={Routeskey.HOME}
        component={stackRoute}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      {/* <Drawer.Screen
        name={Routeskey.HOME}
        component={Tab}
        options={{ headerShown: false, gesturesEnabled: false }}
      /> */}

      <Drawer.Screen
        name={Routeskey.LOGIN}
        component={Login}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.SIGN_UP}
        component={Signup}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.PRIVACY}
        component={Privacy}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.TERMS}
        component={Terms}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.FORGET_PASSWORD}
        component={Forgetpassword}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.EDIT_PROFILE}
        component={EditProfile}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.RESET_PASSWORD}
        component={ResetPassword}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.MAP}
        component={Map}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.CATEGORIES}
        component={Categories}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.DRAWER}
        component={MyDrawer}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.MY_CART}
        component={Mycart}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.PAYMWNT_METHOD}
        component={PaymentMethod}
        options={{ headerShown: false, gesturesEnabled: false }}
      />



      <Drawer.Screen
        name={Routeskey.YOUR_ORDER}
        component={EstimatedDeliveryTime}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.NOTIFICATION}
        component={Notification}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.MY_ADDRESS}
        component={MyAddresses}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.ABOUT}
        component={About}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.CONTACT_US}
        component={ContactUs}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.ORDER}
        component={Order}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.PROFILE}
        component={Profile}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.SEARCH}
        component={Search}
        options={{ headerShown: false, gesturesEnabled: false }}
      />


      <Drawer.Screen
        name={Routeskey.OREDER_DETAIL}
        component={OrderDetail}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.OREDER_DELIVER}
        component={OrderDeliver}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.OREDER_CONFIRM}
        component={OrderConfirmed}
        options={{ headerShown: false, gesturesEnabled: false }}
      />


      <Drawer.Screen
        name={Routeskey.MY_FAVOURIT}
        component={MyFavourites}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.CHANGE_NUMBER}
        component={ChangeNumber}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.VERIFICATION}
        component={Verification}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name="UpdateAddress"
        component={UpdateAddress}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      {/* <Drawer.Screen
        name={Routeskey.RESTAURANT}
        component={stackRoute}
        options={{ headerShown: false, gesturesEnabled: false }}
      /> */}
      {/*<Drawer.Screen
        name="List"
        component={List}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name="List Detail"
        component={ListDetail}
        options={{ headerShown: false, gesturesEnabled: false }}
      /> */}
      <Drawer.Screen
        name="Tab"
        component={Tab}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.RESTAURANT_REVIEW}
        component={RestaurantReviews}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.ResetPasswordToProfile}
        component={ResetPasswordToProfile}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      <Drawer.Screen
        name={Routeskey.TRACK_ORDER}
        component={TrackOrder}
        options={{ headerShown: false, gesturesEnabled: false }}
      />

      {/* <Drawer.Screen
        name={Routeskey.SHOW_RESTAURANT_BY_SEARCH}
        component={ShowRestaurants}
        options={{ headerShown: false, gesturesEnabled: false }}
      /> */}
      <Drawer.Screen
        name={Routeskey.ABOUT_REVIEW}
        component={AboutShop}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
      <Drawer.Screen
        name={Routeskey.CHANGE_LANGUAGE}
        component={ChangeLanguage}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
       <Drawer.Screen
        name={Routeskey.LOGIN_AS_GUEST}
        component={LoginAsGuest}
        options={{ headerShown: false, gesturesEnabled: false }}
      />
    </Drawer.Navigator>

  );
}
class StackNav extends Component {

  render() {
    return (
      <Stack.Navigator
        {...this.props}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>

        <Stack.Screen
          name={Routeskey.SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name={Routeskey.HOME}
          component={Tab}
          options={{ headerShown: false, gesturesEnabled: false }}
        /> */}

        <Stack.Screen
          name={Routeskey.LOGIN}
          component={Login}
          options={{ headerShown: false, gesturesEnabled: false }}
        />

        <Stack.Screen
          name={Routeskey.SIGN_UP}
          component={Signup}
          options={{ headerShown: false, gesturesEnabled: false }}
        />

        <Stack.Screen
          name={Routeskey.FORGET_PASSWORD}
          component={Forgetpassword}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
        <Stack.Screen
          name={Routeskey.EDIT_PROFILE}
          component={EditProfile}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
        <Stack.Screen
          name={Routeskey.RESET_PASSWORD}
          component={ResetPassword}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
        <Stack.Screen
          name={Routeskey.MAP}
          component={Map}
          options={{ headerShown: false, gesturesEnabled: false }}
        />

        <Stack.Screen
          name={Routeskey.VERIFICATION}
          component={Verification}
          options={{ headerShown: false, gesturesEnabled: false }}
        />

        <Stack.Screen
          name="UpdateAddress"
          component={UpdateAddress}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
        <Stack.Screen
          name={Routeskey.DRAWER}
          component={MyDrawer}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
        <Stack.Screen
          name={Routeskey.CHANGE_LANGUAGE}
          component={ChangeLanguage}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
          <Drawer.Screen
        name={Routeskey.LOGIN_AS_GUEST}
        component={LoginAsGuest}
        options={{ headerShown: false, gesturesEnabled: false }}
      /> 
        {/* <Stack.Screen
          name="List"
          component={List}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
        <Stack.Screen
          name="Tab"
          component={Tab}
          options={{ headerShown: false, gesturesEnabled: false }}
        />
        <Stack.Screen
          name="my_cart"
          component={Mycart}
          options={{ headerShown: false, gesturesEnabled: false }}
        /> */}
      </Stack.Navigator>
    );
  }
}

export default Routes = () => {
  return (

    <>
      {/* <StackNav /> */}
      <MyDrawer />


    </>
  )
}