
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Button, { Back, Heart } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    StyleCusSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground, FlatList,
    Animated
} from 'react-native';
import StyleCus from "./Style"
import Style from './Style';
import Global from "../../utils/global";



export default class CustomerMoods extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
            yOffset: 0,
            mood: ""
        };
    }


    renderItem({ item, index }) {
        let des = `Any Sandwich (6 inch) + Cookies
(2 pcs)/Lays Chips + Soft Drink`;
        return (
            <View style={StyleCus.item}>
                <View >

                    <ImageBackground
                        imageStyle={{ borderRadius: 5 }}
                        style={{
                            height: 90,
                            width: 90,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/Images/image1.png')}
                    >
                        <View style={StyleCus.uptoView}>

                            <Text style={StyleCus.upto}>Up to 20% off</Text></View>

                    </ImageBackground>
                </View>
            
                <View style={{ flex: 1, marginLeft: 4, paddingHorizontal: 5, }}>
                    <Text style={StyleCus.title}>Subway - Disco</Text>
                    <View style={{ flex: 1, }}>
                        <Text style={{ color: "#000", fontFamily: Global.font(), fontSize: 10 }}>
                        {des.substr(0, 30) + '...'}
                        </Text>
                        <Text style={{ color: "#a8acb7", fontSize: 9, paddingVertical: 3, fontFamily: Global.font() }}>
                        2.00 AED Delivery free
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", paddingRight: 10, alignItems: "center", justifyContent: "space-between", }}>
                        <View style={StyleCus.row} >
                            <View style={StyleCus.add}>
                                <Text style={StyleCus.addtxt}> 30 min</Text>
                            </View>
                            <Icon name="star" style={StyleCus.icon} />
                            <Text style={{ fontSize: 10 }}> 4.5 ( 2k+ ) </Text>
                        </View>
                        <TouchableOpacity>
                            {/* <Heart function={this.addToFavorite.bind(this)} name={this.state.name} /> */}
                            <Icon name="heart" style={[StyleCus.icon, { fontSize: 18 }]} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View >
        )
    };


    render() {
        let { mood } = this.state
        return (



            <ImageBackground
                style={{ flex: 1 }}
                resizeMode="cover"
                // resizeMode="contain"
                source={require('../../assets/Images/bg1.png')}>
                <View style={{ padding: 10, marginTop: 20 }}>

                    <Text style={StyleCus.h1}>Customer Moods</Text>
                </View>
                <View style={StyleCus.main}>
                    <View style={{ marginTop: 30 }}>
                        <Text style={[StyleCus.sub, { fontSize: 13, fontWeight: "normal", fontFamily: "Poppins-Semi-Bold" }]}>{Global.I18n("feelings")}</Text>
                        <Text style={[StyleCus.p, { fontSize: 12, marginBottom: 10, marginTop: 3 }]}>{Global.I18n("findSomething")}</Text>
                    </View>
                    <View style={StyleCus.center}>
                        <TouchableOpacity style={{ flexDirection: "row" }}
                            onPress={() => this.setState({ mood: "happy" })}
                        >
                            <Image
                                style={{
                                    resizeMode: "contain",
                                    width: 60,
                                    height: 60,
                                }}
                                source={require('../../assets/Images/happy.png')}
                            />
                            {mood == "happy" ?
                                <View style={StyleCus.iconView}>
                                    <Icon name="check" style={{ color: "#fff", fontSize: 16 }} />
                                </View>
                                : null}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ mood: "confuse" })}

                            style={{ flexDirection: "row" }}>
                            <Image
                                style={{
                                    resizeMode: "contain",
                                    width: 60,
                                    height: 60,
                                }}
                                source={require('../../assets/Images/confuse.png')}
                            />
                            {mood == "confuse" ?
                                <View style={StyleCus.iconView}>
                                    <Icon name="check" style={{ color: "#fff", fontSize: 16 }} />
                                </View>
                                : null}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ mood: "hungry" })}

                            style={{ flexDirection: "row" }}>
                            <Image
                                style={{
                                    resizeMode: "contain",
                                    width: 60,
                                    height: 60,
                                }}
                                source={require('../../assets/Images/hungry.png')}
                            />
                            {mood == "hungry" ?
                                <View style={StyleCus.iconView}>
                                    <Icon name="check" style={{ color: "#fff", fontSize: 16 }} />
                                </View>
                                : null}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setState({ mood: "sad" })}

                            style={{ flexDirection: "row" }}>
                            <Image
                                style={{
                                    resizeMode: "contain",
                                    width: 60,
                                    height: 60,
                                }}
                                source={require('../../assets/Images/sad.png')}
                            />
                            {mood == "sad" ?
                                <View style={StyleCus.iconView}>
                                    <Icon name="check" style={{ color: "#fff", fontSize: 14 }} />
                                </View>
                                : null}
                        </TouchableOpacity>


                    </View>
                    <View style={[StyleCus.row, { padding: 5, alignSelf: "center", }]}>
                        <Text style={{ fontFamily: Global.font(), fontSize: 12 }}> {Global.I18n("checkOut")} </Text>
                        <Text style={{ color: "#f3525c", fontWeight: "bold", fontSize: 12 }}>
                            {Global.I18n("hungery")}
                        </Text>
                        <Text style={{ fontFamily: Global.font(), fontSize: 12 }}> {Global.I18n("and")} </Text>
                        <Text style={{ color: "#f3525c", fontWeight: "bold", fontSize: 12 }}>
                            {Global.I18n("happy")}
                        </Text>

                    </View>
                    <FlatList
                        // ListHeaderComponent={this.FlatListHeader}
                        data={[12, 12, 2, 2, 324, 34534, 545]}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={(item, index) => { return index.toString() }}

                        onEndThreshold={0}

                    />
                </View>


            </ImageBackground >






        );
    }
}
