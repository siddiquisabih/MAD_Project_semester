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
    Modal,
    Dimensions, StatusBar
} from 'react-native';
import Alert from "../../utils/Alert"
import Global from "../../utils/global"
import Constant from "../../utils/constant"
import RoutesKey from '../../navigation/routeskey';
import loader from "../../assets/Images/authentication/animation.gif"
import eatLogo from "../../assets/Images/eatLogo.png"

export default class Forgetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: '',
            showModel: false,
            secure: true,
            isLoading: false
        };
    }
    componentDidMount() { }



    forgetPassword = () => {
        let { email } = this.state;
        if (email === "") {
            this.setState({ showModel: true, msg: Global.I18n("enterEmail") })
        }
        else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            this.setState({ showModel: true, msg: Global.I18n("emailbad") });
        }
        else {
            this.props.navigation.navigate(RoutesKey.RESET_PASSWORD);
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }




    render() {
        let { email, pass, secure } = this.state;


        return (
            <ImageBackground
                style={[LoginStyle.flex, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}
                resizeMode="cover"
                // resizeMode="contain"
                // source={require('../../assets/Images/bg1.png')}>
                source={Global.isDay() ? require('../../assets/Images/bg1.png') : require('../../assets/Images/bg2.png')}>
                <SafeAreaView>
                    <ScrollView>

                        <Image
                            style={LoginStyle.Logoimage}
                        // source={eatLogo}
                        />
                        <Back props={this.props} />
                        <View style={[LoginStyle.View]}>
                            <View style={{ padding: 10 }}>
                                <Text style={LoginStyle.Login} >{Global.I18n("forgetPass")}</Text>
                                <Text style={LoginStyle.P} >{Global.I18n("recoverPass")} </Text>
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
                                        value={email}
                                    />
                                </View>
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
                                <Button title={Global.I18n("continue")} function={() => {
                                    this.forgetPassword()
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

