import React, { Component } from 'react';
import Button, { Back } from '../../utils/Button';
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
    Modal

} from 'react-native';
import Alert from "../../utils/Alert"
import Global from "../../utils/global"
import Constant from "../../utils/constant"
import RoutesKey from '../../navigation/routeskey';
import loader from "../../assets/Images/authentication/animation.gif"


export default class ResetPassword extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pass: '',
            showModel: false,
            secure: true,
            isLoading: false
        };
    }
    componentDidMount() { }


    resetPassword = () => {
        let { code, pass, cpass } = this.state;
        if (code === "" || pass === "" || cpass === "") {
            this.setState({ showModel: true, msg: Global.I18n("message1") });
        }
        else {
            this.props.navigation.navigate(RoutesKey.LOGIN)
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }




    render() {
        let { email, pass, secure, cpass, code } = this.state;


        return (
            <ImageBackground
                style={LoginStyle.flex}
                resizeMode="cover"
                // resizeMode="contain"
                // source={require('../../assets/Images/bg1.png')}>
                source={Global.isDay() ? require('../../assets/Images/bg1.png') : require('../../assets/Images/bg2.png')}>
            
                <SafeAreaView>
                    <ScrollView>

                        <Image
                            style={LoginStyle.Logoimage}
                            // source={require('../../assets/Images/eatLogo.png')}
                        />
                        <Back props={this.props} />
                        <View style={LoginStyle.View}>
                            <View style={{ padding: 10 }}>
                                <Text style={LoginStyle.Login} >{Global.I18n("resetPass")}</Text>
                                <Text style={LoginStyle.P}>{Global.I18n("codeResetInfo")}</Text>
                            </View>

                            <View style={LoginStyle.TextInputView}>
                                <Image
                                    style={LoginStyle.Icon}
                                    source={require('../../assets/Images/reset-code.png')}
                                />
                                <View style={LoginStyle.Divide}>
                                    <Text style={LoginStyle.FieldTxt}>{Global.I18n("reseCode")}</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"

                                        style={LoginStyle.TextInputStyle}
                                        placeholder={Global.I18n("enterResetCode")}
                                        keyboardType="phone-pad"
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'code')}
                                        value={code}
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
                                        <Image
                                            style={LoginStyle.Icon}
                                            source={require('../../assets/Images/eye.png')}
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ secure: true });
                                        }}
                                    >
                                        <Image
                                            style={LoginStyle.Icon}
                                            source={require('../../assets/Images/eye.png')}
                                        />
                                    </TouchableOpacity>
                                }

                            </View>
                            <View style={LoginStyle.TextInputView}>
                                <Image
                                    style={LoginStyle.Icon}
                                    source={require('../../assets/Images/password.png')}
                                />
                                <View style={LoginStyle.Divide}>
                                    <Text style={LoginStyle.FieldTxt}>{Global.I18n("confirmPass")}</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        secureTextEntry={secure}
                                        style={LoginStyle.TextInputStyle}
                                        placeholder={Global.I18n("confirmPass")}
                                        placeholderTextColor="#b2b2b2"
                                        onChangeText={this.onChange.bind(this, 'cpass')}
                                        value={cpass}
                                    />
                                </View>
                                {secure ?
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ secure: false });
                                        }}
                                    >
                                        <Image
                                            style={LoginStyle.Icon}
                                            source={require('../../assets/Images/eye.png')}
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ secure: true });
                                        }}
                                    >
                                        <Image
                                            style={LoginStyle.Icon}
                                            source={require('../../assets/Images/eye.png')}
                                        />
                                    </TouchableOpacity>
                                }

                            </View>
                            {this.state.isLoading ?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                    source={loader}
                                /></View>
                                : null}

                        </View>
                        {!this.state.isLoading ?
                            <View style={{ marginTop: -30 }}>
                                <Button title={Global.I18n("resetPassword")} function={() => {
                                    this.resetPassword()
                                }} />

                            </View> : null}


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
                                        <Text style={{ textAlign: "center", fontFamily: Global.font("Bold"), color: "gray" }} >{this.state.msg} </Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                                        <TouchableOpacity onPress={() => this.setState({ showModel: false })} style={{
                                            height: 35, width: "40%", backgroundColor: "#f3525c", justifyContent: "center", alignItems: "center", borderRadius: 5
                                        }} ><Text style={{ color: "#fff", fontSize: 15, fontFamily: Global.font() }}>{Global.I18n("ok")}</Text></TouchableOpacity>
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

