import React, { Component } from 'react';
import Button from '../../utils/Button';
import Routeskey from "../../navigation/routeskey"
import LoginStyle from './LoginStyle';
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
    Dimensions,
    Modal,
    StatusBar
} from 'react-native';
import Alert from "../../utils/Alert"
import Global from "../../utils/global"
import Constant from "../../utils/constant"
import RoutesKey from '../../navigation/routeskey';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Loader } from '../../utils/loader';


export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pass: '',
            phone: "",
            name: "",
            showModel: false,
            secure: true,
            secure1: true,
            terms: false,
            isLoading: false,
            isModalTrue: false,
            isVisible: false,
        };
    }

    componentDidMount() { }

    signUp = () => {
        let { email, name, phone, pass, cpass, terms } = this.state;
        if (email === "" || name === "" || phone === "" || pass === "" || cpass === "" || !terms) {
            this.setState({ showModel: true, msg: Global.I18n("message1") });
        }
        else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            this.setState({ showModel: true, msg: Global.I18n("emailbad") });
        }
        else if (pass.length < 6) {
            this.setState({ showModel: true, msg: Global.I18n("message2") });
        }
        else {
            Global.saveDataInPhone(
                Constant.USER_DETAIL_KEY,
                "user"
            );
            this.props.navigation.navigate(RoutesKey.HOME);
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }


    render() {
        let { email, name, phone, pass, cpass, secure, secure1 } = this.state;

        return (
            <ImageBackground
                style={[LoginStyle.flex, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}
                resizeMode="cover"
                // resizeMode="contain"
                source={Global.isDay() ? require('../../assets/Images/bg1.png') : require('../../assets/Images/bg2.png')}>

                <SafeAreaView style={{ flex: 1, }} >
                    <ScrollView>
                        <Loader visible={this.state.isVisible} />
                        <View style={{ height: Dimensions.get("window").height }} >
                            <View style={[LoginStyle.View, { paddingVertical: 30, marginTop: 40, }]}>
                                <View style={{ padding: 5, marginBottom: 20 }}>
                                    <Text style={LoginStyle.Login} >{Global.I18n("SIGNUP")}</Text>
                                    <Text style={LoginStyle.P} >{Global.I18n("signUp")}</Text>
                                </View>
                                <View style={[LoginStyle.TextInputView,]}>
                                    <Image
                                        style={LoginStyle.Icon}
                                        source={require('../../assets/Images/user.png')}
                                    />
                                    <View style={[LoginStyle.Divide,]}>
                                        <Text style={LoginStyle.FieldTxt}>{Global.I18n("name")}</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={LoginStyle.TextInputStyle}
                                            placeholder={Global.I18n("name")}
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, 'name')}
                                            value={name}
                                        />
                                    </View>

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
                                            placeholder="jamesdean@gmail.com"
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, 'email')}
                                        // value={email}
                                        />
                                    </View>

                                </View>
                                <View style={LoginStyle.TextInputView}>
                                    <Image
                                        style={LoginStyle.Icon}
                                        source={require('../../assets/Images/call.png')}
                                    />
                                    <View style={LoginStyle.Divide}>
                                        <Text style={LoginStyle.FieldTxt}>{Global.I18n("phone")}</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            keyboardType="phone-pad"
                                            style={LoginStyle.TextInputStyle}
                                            placeholder="+971 - 4555189"
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, 'phone')}
                                            value={phone}
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
                                <View style={LoginStyle.TextInputView}>
                                    <Image
                                        style={LoginStyle.Icon}
                                        source={require('../../assets/Images/password.png')}
                                    />
                                    <View style={LoginStyle.Divide}>
                                        <Text style={LoginStyle.FieldTxt}>{Global.I18n("confirmPass")} </Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            secureTextEntry={secure1}
                                            style={LoginStyle.TextInputStyle}
                                            placeholder={Global.I18n("confirmPass")}
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, 'cpass')}
                                            value={cpass}
                                        />
                                    </View>
                                    {secure1 ?
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setState({ secure1: false });
                                            }}
                                        >
                                            <Icon name="eye" style={LoginStyle.IconStyle} />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setState({ secure1: true });
                                            }}
                                        >
                                            <Icon name="eye-slash" style={LoginStyle.IconStyle} />

                                        </TouchableOpacity>
                                    }

                                </View>

                                <View style={{ marginLeft: -10, flexDirection: "row", alignItems: "center", }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <CheckBox

                                            value={this.state.terms}
                                            onValueChange={() =>
                                                this.setState({ terms: !this.state.terms })
                                            }
                                        />
                                        <Text style={{ color: "#393939", fontFamily: Global.font(), fontSize: 12 }}>
                                            {Global.I18n("agree")}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.TERMS)}>
                                        <Text style={{ color: "#f3525c", fontFamily: Global.font(), fontSize: 12 }}>
                                            {Global.I18n("terms")}
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: "#393939", fontFamily: Global.font(), fontSize: 12 }}>{Global.I18n("and")}  </Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.PRIVACY)}>
                                        <Text style={{ color: "#f3525c", fontFamily: Global.font(), fontSize: 12 }} > {Global.I18n("privacy")} </Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: "#393939", fontFamily: Global.font(), fontSize: 12 }}>{Global.I18n("policy")} </Text>
                                </View>

                            </View>
                            <View style={{ marginTop: -30 }}>
                                <Button title={Global.I18n("SIGNUP")} function={() => {
                                    this.signUp()
                                }} />
                            </View>

                            <View style={{ width: "70%", marginBottom: 5, alignItems: "center", alignSelf: "center", flexDirection: "row" }}>
                                <View style={{ borderWidth: 1, borderColor: "#b2b2b2", alignSelf: "center", width: "30%" }}></View>
                                <Text style={LoginStyle.P}>{Global.I18n("signupWith")}  </Text>
                                <View style={{ borderWidth: 1, borderColor: "#b2b2b2", alignSelf: "center", width: "30%" }}></View>

                            </View>
                            <View style={{ width: "40%", alignSelf: "center", justifyContent: "space-around", padding: 5, flexDirection: "row", marginVertical: 10 }}>
                                <TouchableOpacity>
                                    <Image
                                        style={LoginStyle.Sicon}
                                        source={require('../../assets/Images/twitter.png')}
                                    />

                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={LoginStyle.Sicon}
                                        source={require('../../assets/Images/gmail-plus.png')}
                                    />

                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image
                                        style={LoginStyle.Sicon}
                                        source={require('../../assets/Images/facebook.png')}
                                    />

                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate(RoutesKey.LOGIN)
                                }}
                                style={{ paddingVertical: 5, alignSelf: "center", flexDirection: "row" }}>
                                <Text style={LoginStyle.P}>{Global.I18n("alreadyAccount")} </Text>
                                <Text style={[LoginStyle.FieldTxt, { fontSize: 12 }]}>{Global.I18n("LOGIN")}</Text>
                            </TouchableOpacity>
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


