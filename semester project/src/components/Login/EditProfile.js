import React, { Component } from 'react';
import Button, { Back, Heart } from '../../utils/Button';
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
import loader from "../../assets/Images/authentication/animation.gif"

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            email: "sabih@gmail.com",
            phone: "923435345345",
            name: "Sabih Siddiui",
            showModel: false,
            secure: true,
            secure1: true,
            terms: false,
            isLoading: false,
            isModalTrue: false,
            userData: {}
        };
    }

    editProfile = () => {
        let { name, phone, user, userData } = this.state;
        if (name === "" || phone === "") {
            this.setState({ showModel: true, msg: Global.I18n("message1") });
        }
        else {
            this.props.navigation.navigate(RoutesKey.PROFILE);
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }

    render() {
        // console.log(name)
        let { email, name, phone, } = this.state;
        return (
            <ImageBackground
                style={[LoginStyle.flex, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}
                resizeMode="cover"
                // resizeMode="contain"
                // source={require('../../assets/Images/bg1.png')}>
                source={Global.isDay() ? require('../../assets/Images/bg1.png') : require('../../assets/Images/bg2.png')}>
                <SafeAreaView style={{ flex: 1, }} >

                    <ScrollView>

                        <Image
                            style={LoginStyle.Logoimage}
                            // source={require('../../assets/Images/eatLogo.png')}
                        />
                        <Back props={this.props} />
                        <View style={{ height: Dimensions.get("window").height }} >
                            <View style={[LoginStyle.View, { paddingVertical: 30, marginTop: 40, }]}>
                                <View style={{ padding: 5, marginBottom: 20 }}>
                                    <Text style={LoginStyle.Login} >{Global.I18n("editProfile")}</Text>
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
                                        source={require('../../assets/Images/email.png')}
                                    />
                                    <View style={LoginStyle.Divide}>
                                        <Text style={LoginStyle.FieldTxt}>{Global.I18n("email")}</Text>
                                        <TextInput
                                            editable={false}
                                            underlineColorAndroid="transparent"
                                            style={LoginStyle.TextInputStyle}
                                            placeholder="Enter your email"
                                            placeholderTextColor="#b2b2b2"
                                            value={email}
                                        />
                                    </View>
                                </View>
                                  
                            </View>
                                <View style={{ marginTop: -30 }}>
                                    <Button title={Global.I18n("editProfile")} function={() => {
                                        this.editProfile()
                                    }} />
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