
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Button, { Back, Heart } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Alert from "../../utils/Alert"

import {
    View,
    Text,
    StyleSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground, FlatList,
    Animated,
    TextInput,
    Platform,
    Linking,
    Modal

} from 'react-native';
import Style from "./Style"
import colors from '../../utils/colorConstant';
import styles from '../home/homeStyle';
import Constant from '../../utils/constant';
import Global from '../../utils/global';
import loader from "../../assets/Images/authentication/animation.gif"
import { TransparentHeader } from "../CustomComponent/index"

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
            yOffset: 0,
            title: "",
            description: "",
            isLoading: false,
            showModel: false
        };
    }

    changeScreen = () => {
        this.setState({ title: "", description: "", isLoading: false });
        // console.log(_this);

    }

    send() {
        let { title, description } = this.state;

        if (title === "" || description === "") {
            this.setState({ showModel: true, msg: Global.I18n("message3"), isLoading: false })
        }
    }
    openDialScreen = () => {
        let number = '';
        if (Platform.OS === 'ios') {
            number = 'telprompt:${97145519407}';
        }
        else {
            number = 'tel:${97145519407}';
        }
        Linking.openURL(number);
    };

    render() {


        return (
            <ImageBackground
                style={{ flex: 1 }}
                resizeMode="cover"
                // source={require('../../assets/Images/bg1.png')}>
                source={Global.isDay() ? require('../../assets/Images/bg1.png') : require('../../assets/Images/bg2.png')}>
                <ScrollView>
                    <View style={{ padding: 20 }}>
                        <Back props={this.props} />
                        <TransparentHeader props={this.props} title={Global.I18n("contactUs")} style={{ marginTop: Global.STATUSBAR_HEIGHT }} />

                    </View>
                    <View style={Style.main}>
                        <Image
                            style={Style.Logoimage}
                            source={require('../../assets/Images/contact_big_icon.png')}
                        />
                        <View style={Style.container}>
                            <Text style={{ textAlign: "center", fontFamily: Global.font("Bold") }}> {Global.I18n("support")} </Text>
                        </View>

                        <View style={Style.containView}>

                            <Text style={{ textAlign: "center", fontFamily: Global.font(), fontSize: 13 }}>
                                {Global.I18n("contact")}
                            </Text>

                        </View>


                        <View style={Style.containView}>
                            <TextInput
                                multiline={true}
                                numberOfLines={6}
                                onChangeText={(description) => this.setState({ description })}
                                value={this.state.description}
                                style={{ backgroundColor: colors.LIGHT_GRAY_BACKGROUND, borderRadius: 5, justifyContent: "flex-start", textAlignVertical: 'top', fontFamily: Global.font(), }}
                                placeholder={Global.I18n("comments")}
                            />
                        </View>
                        <View style={Style.containView}>
                            {this.state.isLoading ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                    source={loader}
                                /></View>
                                :
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={{
                                        backgroundColor: '#f3525c',
                                        width: '100%',
                                        alignItems: 'center',
                                        color: 'blue',
                                        borderRadius: 50,
                                        alignSelf: 'center',
                                        marginVertical: 10,
                                        justifyContent: 'center',
                                        paddingVertical: 15,

                                        // paddingRight: 40,
                                    }}
                                    onPress={this.send.bind(this)}>
                                    <Text style={{ color: '#fff', fontFamily: Global.font() }}>{Global.I18n("send")}</Text>
                                    <Image
                                        style={{
                                            width: 40,
                                            height: 40,
                                            alignSelf: 'center',
                                            resizeMode: 'contain',
                                            position: "absolute",
                                            right: 5
                                        }}
                                        source={require('../../assets/Images/right_arrow_circle.png')}
                                    />
                                </TouchableOpacity>}
                        </View>
                        <View style={Style.containView}>
                            <View style={Style.container}>
                                <Text style={{ textAlign: "center", fontSize: 16, fontFamily: Global.font(), }}> {Global.I18n("assistance")} </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 15 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../../assets/Images/otherIcon/whatsapp.png")} style={{ alignSelf: "center", width: 40, height: 40 }} />
                                <Text style={{ alignSelf: "center", paddingLeft: 10, fontFamily: Global.font(), }}>Whatsapp</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../../assets/Images/otherIcon/fbmessanger.png")} style={{ alignSelf: "center", width: 40, height: 40 }} />
                                <Text style={{ alignSelf: "center", paddingLeft: 10, fontFamily: Global.font(), }}>Messanger</Text>
                            </View>
                        </View>
                        <Modal animationType="fade"
                            transparent={true}
                            visible={this.state.showModel}
                            onRequestClose={() => {
                                console.log()
                            }} >
                            <View style={{
                                flex: 1,
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                justifyContent: "center",
                                alignItems: "center",
                            }} >
                                <View style={{ backgroundColor: "#fff", height: 140, width: "80%", zIndex: 10, borderRadius: 20 }} >
                                    <View style={{ height: 60, alignItems: "center", justifyContent: "center" }} >
                                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "gray" }} >{this.state.msg} </Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                                        <TouchableOpacity onPress={() => this.setState({ showModel: false })} style={{
                                            height: 35, width: "40%", backgroundColor: "#f3525c", justifyContent: "center", alignItems: "center", borderRadius: 5
                                        }} ><Text style={{ color: "#fff", fontSize: 15 }}>Ok</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </ScrollView>

            </ImageBackground >
        );
    }
}
