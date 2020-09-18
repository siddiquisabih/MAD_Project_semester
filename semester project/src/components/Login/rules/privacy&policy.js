
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Button, { Back, Heart } from '../../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import {
    View,
    Text,
    StyleSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground, FlatList,
    Animated
} from 'react-native';
import Style from "./Style"
import Global from '../../../utils/global';
import Constant from '../../../utils/constant';
import loader from "../../../assets/Images/authentication/animation.gif"


export default class Privacy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
            yOffset: 0,
            aboutApp: "",
            loader: true,
            
        };
    }


    render() {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                resizeMode="cover"
                // resizeMode="contain"
                source={require('../../../assets/Images/bg1.png')}>
                {/* source={Global.isDay() ? require('../../assets/Images/bg1.png') : require('../../assets/Images/bg2.png')}> */}
                <ScrollView>
                    <View style={{ padding: 30 }}>
                        <Back props={this.props} />
                        <Text style={Style.h1}>Privacy and Policy</Text>
                    </View>
                    <View style={Style.main}>
                        <Image
                            style={Style.Logoimage}
                            source={require('../../../assets/Images/about_big_icon.png')}
                        />
                        <View style={Style.row}>
                            <Text style={Style.h2}> PRIVACY AND POLICY </Text>
                            <Text style={Style.all}> ALLOUT </Text>
                        </View>
                        <Text style={Style.p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                       
                    </View>
                </ScrollView>

            </ImageBackground >
        );
    }
}


