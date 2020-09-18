import React, { Component } from 'react';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, Image, StyleSheet, Text, TouchableOpacity, Share, I18nManager, NativeModules, Platform } from "react-native"
import RoutesKey from './routeskey';
import Global from "../utils/global"
import Constant from "../utils/constant";
// import { ScrollView } from 'react-native-gesture-handler';
// import Advertiser from '../components/admin/Advertiser';
import RNRestart from 'react-native-restart';
// import { StackNavigationOptions } from '@react-navigation/stack';

const LogOut = (props) => {
    Global.removeStorage(Constant.USER_DETAIL_KEY)
    props.navigation.navigate(RoutesKey.LOGIN)
}



class CustomDrawerContent extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            userData: {},
            isGuest: false
        }
    }


    render() {
        return (
            <DrawerContentScrollView {...this.props}
                style={{ flex: 1, padding: 20, backgroundColor: "#393939", }}
            >

                {/* <DrawerItemList {...props} /> */}
                <View style={{ flex: 1 }}>
                    <View style={styles.MainContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.PROFILE)} style={styles.RoundImage}>
                            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png' }}
                                style={{ width: 50, height: 50, borderRadius: 150 / 2 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.PROFILE)} style={styles.NameAndRole}>
                            <Text style={styles.Namee}>Sabih Siddiqui</Text>
                                <Text style={styles.Rolee}>sabih@gmail.com</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    {[
                        {
                            name: Global.I18n("home"),
                            icon: require("../assets/Images/drawer/home.png"),
                            key: RoutesKey.HOME
                        },
                        {
                            name: Global.I18n("profile2"),
                            icon: require("../assets/Images/drawer/profile.png"),
                            key: RoutesKey.PROFILE
                        },
                        {
                            name: Global.I18n("myOrder"),
                            icon: require("../assets/Images/drawer/order.png"),
                            key: RoutesKey.ORDER
                        },
                        {
                            name: Global.I18n("myFavorite"),
                            icon: require("../assets/Images/drawer/menu_fav.png"),
                            key: RoutesKey.MY_FAVOURIT
                        },
                        {
                            name: Global.I18n("contactUs"),
                            icon: require("../assets/Images/drawer/contactus.png"),
                            key: RoutesKey.CONTACT_US
                        },
                        {
                            name: Global.I18n("notification2"),
                            icon: require("../assets/Images/drawer/notification.png"),
                            key: RoutesKey.NOTIFICATION
                        },
                        {
                            name: Global.I18n("aboutApp"),
                            icon: require("../assets/Images/drawer/about.png"),
                            key: RoutesKey.ABOUT
                        },
                        {
                            name: Global.I18n("MyCart"),
                            icon: require("../assets/Images/drawer/cart.png"),
                            key: RoutesKey.MY_CART
                        },


                    ].map(v =>

                        <TouchableOpacity style={[styles.Link, { marginVertical: 5 }, v.name == Global.I18n("home") ? { backgroundColor: "#f3525c" } : {}]} onPress={() => this.props.navigation.navigate(v.key)}>
                            <Image source={v.icon}
                                style={{ width: 20, height: 20, }} />

                            <Text style={[styles.LinkName]}>{v.name}</Text>
                        </TouchableOpacity>)}

                </View>

                <TouchableOpacity onPress={() => {
                    Share.share({
                        message: 'Share All Out',
                        url: '#',
                        title: 'All Out'
                    }, {
                        // Android only:
                        dialogTitle: 'Share Us',
                        // iOS only:
                        excludedActivityTypes: [
                            'com.apple.UIKit.activity.PostToTwitter'
                        ]
                    })
                }} style={styles.LinkLogout} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/Images/drawer/share.png")}
                            style={{ width: 20, height: 20 }} />

                        <Text style={styles.LinkName}>{Global.I18n("share")}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => LogOut(this.props)} style={[styles.LinkLogout, { marginTop: 20 }]} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/Images/drawer/logout.png")}
                            style={{ width: 20, height: 20, }} />

                        <Text style={styles.LinkName}>{Global.I18n("logout")}</Text>
                    </View>
                </TouchableOpacity>
            </DrawerContentScrollView >
        );
    }
}
export default CustomDrawerContent

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            // backgroundColor: "yellow",
            flex: 1,
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',

            // margin: 5,
            paddingBottom: 20,
            marginTop: 30,
            paddingTop: (Platform.OS === 'ios') ? 20 : 0,
            // borderBottomWidth: 1 / 2,
            // borderBottomColor: "gray"

        },
        RoundImage: {
            // backgroundColor: "pink"
        },
        NameAndRole: {
            // backgroundColor: "blue",
            flex: 1,
            paddingHorizontal: 6

        },
        Namee: {
            fontWeight: "bold",
            // fontSize:30,
            // backgroundColor:"pink",
            color: "white"
        },
        Rolee: {
            fontWeight: "100",
            fontSize: 10,
            color: "white",
            opacity: 0.7,

        },
        Link: {
            // flex:1,
            flexDirection: "row",
            // backgroundColor: "yellow",
            marginTop: 10,
            paddingVertical: 10,
            borderRadius: 50,
            paddingHorizontal: 20,

        },
        LinkLogout: {
            flex: 1,
            paddingHorizontal: 20,

            flexDirection: "column",
            // backgroundColor: "yellow",
            marginTop: 10,
            paddingVertical: 10,
            justifyContent: "flex-end",
            // alignItems:"flex-end",
            // alignSelf: "flex-end"
        },
        LinkName: {
            paddingHorizontal: 10,
            fontSize: 12,
            textAlignVertical: "center",
            color: "white",
            fontWeight: "normal",
            fontFamily: Global.font(),


        }

    });