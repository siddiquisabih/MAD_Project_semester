import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, Image, ImageBackground, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Routeskey from "../../navigation/routeskey"
import { StackActions } from '@react-navigation/native';
import RoutesKey from '../../navigation/routeskey';
import Global from '../../utils/global';
import Constant from '../../utils/constant';
const imageWidth = Dimensions.get('window').width / 1;

export default class Splash extends Component {
    async componentDidMount() {
        Global.getDataFromPhone("RTL").then((res) => {
            if (res == null) {
                Global.saveDataInPhone("RTL", false);
            }
        })
        const data = await new Promise(resolve =>
            setTimeout(() => resolve('result'), 3000),
        );
        data &&
            Global.getDataFromPhone(Constant.USER_DETAIL_KEY).then((res) => {
                if (res != null) {
                    this.props.navigation.navigate(RoutesKey.HOME)
                }
                else {
                    this.props.navigation.navigate(RoutesKey.LOGIN)
                }
            })
    }

    render() {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                // resizeMode="cover"
                source={require("../../assets/Images/SplashIcon/delivery_bg.png")}
            >

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                    <Animatable.Image
                        duration={600}
                        animation="lightSpeedIn"
                        source={require('../../assets/Images/SplashIcon/delivery_logo.png')}
                        style={{
                            width: 150,
                            // height: 150,
                            alignSelf: 'center',
                            justifyContent: "center",
                            resizeMode: 'contain',
                        }}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
