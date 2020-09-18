import React, { Component } from 'react';
import Button from '../../utils/Button';
import Routeskey from "../../navigation/routeskey"
import LoginStyle from './LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity, SafeAreaView,
    ScrollView,
    Platform, CheckBox,
    StyleSheet,
    StatusBar,
    Modal,
    I18nManager

} from 'react-native';
import Alert from "../../utils/Alert"
import Global from "../../utils/global"
import Constant from "../../utils/constant"
import RoutesKey from '../../navigation/routeskey';
import Style from '../CustomerMoods/Style';
import { StackActions } from '@react-navigation/native';
import loader from "../../assets/Images/authentication/animation.gif"
import RNRestart from 'react-native-restart';
import { Loader } from '../../utils/loader';

// import firebase from 'react-native-firebase';


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pass: "",
            showModel: false,
            secure: true,
            terms: false,
            showMsg: false,
            isLoading: false,
            // RTL: false
            isRemember: false,
            isVisible: false,

        };

    }
    async componentDidMount() {}


    onChange(name, val) {
        this.setState({ [name]: val });
    }

    login = () => {
        let { email, pass } = this.state;

        if (email === "" || pass === "") {
            this.setState({ showModel: true, msg: Global.I18n("message1") });
        }
        else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            this.setState({ showModel: true, msg: Global.I18n("emailbad") });
        }
        else {
            Global.saveDataInPhone(
                Constant.USER_DETAIL_KEY,
                "user"
            );
            this.props.navigation.navigate(RoutesKey.HOME);
        }
    }

    changeRemember(value) {
        this.setState({ isRemember: value })
    }

    loginAsGuest() {
        this.props.navigation.navigate(RoutesKey.LOGIN_AS_GUEST);
    }
    render() {
        let { email, pass, secure } = this.state;

        return (
            <ImageBackground
                style={LoginStyle.flex}
                resizeMode="cover"
                // resizeMode="contain"
                source={Global.isDay() ? require('../../assets/Images/bg1.png') : require('../../assets/Images/bg2.png')}>

                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={true}
                />
                <SafeAreaView>
                    <ScrollView>
                        <Image
                            style={LoginStyle.Logoimage}
                        // source={require('../../assets/Images/eatLogo.png')}
                        />
                        <View style={LoginStyle.View}>
                            <View style={{ padding: 10 }}>
                                <Text style={[LoginStyle.Login,]} >{Global.I18n("LOGIN")}</Text>
                                <Text style={LoginStyle.P} >{Global.I18n("login")}</Text>
                            </View>

                            <View style={LoginStyle.TextInputView}>
                                <Image
                                    style={LoginStyle.Icon}
                                    source={require('../../assets/Images/email.png')}
                                />
                                <View style={LoginStyle.Divide}>
                                    <Text style={LoginStyle.FieldTxt}>{Global.I18n("email")}</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"

                                        style={LoginStyle.TextInputStyle}
                                        placeholder={Global.I18n("email")}
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'email')}
                                        value={email}
                                    />
                                </View>

                            </View>
                            <View style={LoginStyle.TextInputView}>
                                <Image
                                    style={LoginStyle.Icon}
                                    source={require('../../assets/Images/password.png')}
                                />
                                <View style={LoginStyle.Divide}>
                                    <Text style={LoginStyle.FieldTxt}>{Global.I18n("password")}</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        secureTextEntry={secure}
                                        style={LoginStyle.TextInputStyle}
                                        placeholder={Global.I18n("enterPass")}
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'pass')}
                                        value={pass}
                                    />
                                </View>
                                {secure ?
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ secure: false });
                                        }}
                                    >
                                        <Icon name="eye" style={LoginStyle.IconStyle} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ secure: true });
                                        }}
                                    >
                                        <Icon name="eye-slash" style={LoginStyle.IconStyle} />
                                    </TouchableOpacity>
                                }

                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <CheckBox
                                        value={this.state.isRemember}
                                        onValueChange={this.changeRemember.bind(this)}
                                        tintColors={{ true: '#f3525c', }}
                                    />
                                    <Text style={{ color: "#393939", fontFamily: Global.font(), fontSize: 10 }}>
                                        {Global.I18n("remember")}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate(RoutesKey.FORGET_PASSWORD)
                                    }}
                                >
                                    <Text style={{ color: "#f3525c", fontFamily: Global.font(), fontSize: 10 }}>
                                        {Global.I18n("forgotPassword")}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                            <View style={{ marginTop: -30 }}>
                                <Button title={Global.I18n("login2")} function={() => {
                                    this.login()
                                }} />
                            </View>

                        <TouchableOpacity onPress={this.loginAsGuest.bind(this)}
                            style={{ alignSelf: "center", flexDirection: "row" }}>
                            <Text style={LoginStyle.P}>{Global.I18n("loginAs")}</Text>
                            <Text style={[LoginStyle.FieldTxt, { fontSize: 12 }]}>{Global.I18n("guest")}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate(RoutesKey.SIGN_UP)
                            }}
                            style={{ paddingVertical: 20, alignSelf: "center", flexDirection: "row" }}>
                            <Text style={LoginStyle.P}>{Global.I18n("dontHaveAccount")}</Text>
                            <Text style={[LoginStyle.FieldTxt, { fontSize: 12 }]}>{Global.I18n("SIGNUP")}</Text>
                        </TouchableOpacity>
                 

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
                                        }} ><Text style={{ color: "#fff", fontSize: 15 }}>{Global.I18n("ok")}</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>


                    </ScrollView>

                </SafeAreaView>

            </ImageBackground >
        );
    }
}

