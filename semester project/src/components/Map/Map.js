import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, Modal, Platform, Button } from 'react-native'
import styles from "./style"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SwipeUpDown from 'react-native-swipe-up-down';
import { AddressHeader, TextInput as TextInputs } from "../CustomComponent/index"

import Alert from "../../utils/Alert"


import { TransparentHeader } from "../CustomComponent/index"
import Global from "../../utils/global"
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import colors from '../../utils/colorConstant';
import { Back } from '../../utils/Button';
import { floor, onChange } from 'react-native-reanimated';
import Constant from '../../utils/constant';
import loader from "../../assets/Images/authentication/animation.gif"
import RoutesKey from '../../navigation/routeskey';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlacesInput from 'react-native-places-input';
import Geolocation from '@react-native-community/geolocation';

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openModel: false,
            houseNo: "",
            floor: "",
            street: "",
            area: "",
            city: "",
            isLoading: false,
            showModel: false,
            latitude: 24.8990823,
            longitude: 67.0122793,
            place: {},
            bgColorH: "white",
            bgColorW: "#eff0f1",
            bgColorO: "#eff0f1",
            label: "Home"
        }

    }

    componentDidMount() {
        Geolocation.getCurrentPosition((info) => {
            this.setState({ latitude: info.coords.latitude, longitude: info.coords.longitude })
        })

    }
    onChange(name, val) {
        console.log(name, val)
        // this.setState({ [name]: val });
    }



    switchModel() {
        this.setState({ openModel: true })
    }
    houseNo = (name, val) => {
        this.setState({ houseNo: val });
    }
    floor = (name, val) => {
        this.setState({ floor: val });
    }
    street = (name, val) => {
        this.setState({ street: val });
    }
    area = (name, val) => {
        this.setState({ area: name });
    }
    city = (name, val) => {
        this.setState({ city: val });
    }


    saveData = () => {
        let { houseNo, floor, street, area, city, label, latitude, longitude } = this.state;
        if (houseNo === "" || floor === "" || street === "" || area === "" || city === "") {
            this.setState({ showModel: true, msg: Global.I18n("message4") })
        }
        else {
            this.props.navigation.navigate(RoutesKey.MY_ADDRESS);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"dark-content"}
                    translucent={true}
                />
                <View style={{ padding: 30, position: "absolute", top: 30, zIndex: 9999999 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[{
                            marginTop: 30,
                            // position: "absolute", top: 20, left: 10,
                            width: 30, marginRight: 15, marginLeft: 15,
                            height: 30, alignSelf: "center",
                            borderRadius: 30 / 2,
                            alignItems: "center",
                            justifyContent: "center", alignItems: "center"
                        }, this.props.color ? { backgroundColor: "#f3525c" } : { backgroundColor: Global.isDay() ? "#ffa5ab" : "#989898" }]}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }
                        }>

                        <Image
                            style={{
                                width: 20,
                                height: 20,
                                alignSelf: 'center',
                                resizeMode: 'contain',
                                position: "absolute", right: 5
                            }}
                            source={require('../../assets/Images/back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    showsUserLocation={true}
                // onMapReady={this.onMapReady}
                >
                    <MapView.Marker
                        coordinate={{
                            "latitude": this.state.latitude,
                            "longitude": this.state.longitude
                        }}
                        title={"Your Location"}
                        draggable />
                </MapView>

                <AntDesign size={20} name="search1" color="#f3626b" style={{ alignSelf: "center" }} />
                {/* <PlacesInput
                    googleApiKey="AIzaSyBfgiE8iKcdetHmj7hpaLKrrah6FILXRZ4"
                    placeHolder={Global.I18n("searchLocation")}
                    language={"en-US"}
                    onSelect={place => {
                        this.setState({ place, place, latitude: place.result.geometry.location.lat, longitude: place.result.geometry.location.lng, area: place.result.formatted_address })
                    }}
                /> */}
                {
                    this.state.openModel === false ?
                        <View style={{ flex: 1, paddingTop: 30, backgroundColor: "white", borderRadius: 70, position: "absolute", bottom: 0, width: "100%" }} >
                            <ScrollView>
                                <View style={styles.Box}>
                                    <Text style={styles.Heading}>{Global.I18n("addAddress")} </Text>
                                    <View style={styles.CodeBox}>
                                        <Text style={[styles.Heading, { color: "red" }]}>{Global.I18n("society")}</Text>

                                        {/* <TextInput iconImage={require("../../assets/Images/maps-and-flags.png")} heading="" placeholder={"Search"} /> */}
                                        <View
                                            style={{
                                                marginVertical: 10,
                                                flexDirection: 'row',
                                                width: '90%',
                                                alignItems: "center",
                                                borderColor: "#b2b2b2",
                                                // borderWidth: 1,
                                                height: 47,
                                                marginHorizontal: 20,
                                                // elevation: 1,
                                                paddingHorizontal: 10,
                                                paddingVertical: 3,
                                                backgroundColor: "white",


                                                shadowColor: 'white',
                                                shadowOffset: { width: 0, height: 10 },
                                                shadowOpacity: 0.8,
                                                shadowRadius: 2,
                                                elevation: 3,



                                            }}
                                        >
                                            <AntDesign size={20} name="search1" color="#f3626b" style={{ alignSelf: "center" }} />




                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                style={{
                                                    color: 'grey',
                                                    marginRight: 10,

                                                }}
                                                placeholder={"Search"}
                                                placeholderTextColor="#b2b2b2"
                                                onChangeText={(val) => { }}
                                                value={""}
                                            />

                                        </View>
                                        <TouchableOpacity
                                            onPress={this.switchModel.bind(this)}
                                            style={{
                                                backgroundColor: "#f3525c",
                                                paddingVertical: 10,
                                                marginTop: 10
                                                // paddingHorizontal: -45
                                            }}
                                        ><Text style={{
                                            color: "#fff",
                                            textAlign: "center",
                                            padding: 10

                                        }}
                                        >Apply Location</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        :
                        <View style={{ flex: 1, paddingTop: 30, marginTop: "-90%", backgroundColor: "white", borderRadius: 50 }} >
                            <ScrollView>
                                <View style={styles.Box}>
                                    <Text style={styles.Heading}>{Global.I18n("addAddress")}</Text>

                                    <View style={[styles.CodeBox, { paddingHorizontal: 20, paddingVertical: 10 }]}>

                                        <TextInputs heading={Global.I18n("houseNumber")} placeholder={Global.I18n("houseNumber")} iconNotAvailable={true}
                                            onChange={this.houseNo} val={this.state.houseNo} />
                                        <TextInputs heading={Global.I18n("floor")} placeholder={Global.I18n("floor")} iconNotAvailable={true}
                                            onChange={this.floor} val={this.state.floor} />
                                        <TextInputs heading={Global.I18n("street")} placeholder={Global.I18n("street")} iconNotAvailable={true}
                                            onChange={this.street} val={this.state.street} />
                                        <View style={{
                                            marginVertical: 10,
                                            flexDirection: 'row',
                                            width: '90%',
                                            alignItems: "center",
                                            borderBottomColor: "#b2b2b2",
                                            borderBottomWidth: 1,
                                            height: 40,
                                        }}>
                                            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                                <Text style={{ color: "#f3525c", fontFamily: Global.font("Bold") }}>{Global.I18n("area")}</Text>
                                                <TextInput
                                                    underlineColorAndroid="transparent"
                                                    style={{
                                                        color: 'grey',
                                                        marginRight: 10,
                                                        fontFamily: Global.font() 
                                                    }}
                                                    placeholder={Global.I18n("area")}
                                                    placeholderTextColor="#b2b2b2"
                                                    onChangeText={this.area}
                                                    value={this.state.area}
                                                />
                                            </View>
                                        </View>
                                        <TextInputs heading={Global.I18n("City")} placeholder={Global.I18n("City")} iconNotAvailable={true}
                                            onChange={this.city} val={this.state.city} />
                                        <Text style={[styles.Heading, { paddingLeft: 10 }]}>{Global.I18n("label")}</Text>
                                        <View style={{ padding: 15, flexDirection: "row", justifyContent: "space-evenly" }}>
                                            <TouchableOpacity style={{ width: "30%" }} onPress={() => { this.setState({ bgColorH: "white", bgColorW: "#eff0f1", bgColorO: "#eff0f1", label: "Home" }) }}>
                                                <Text style={[styles.budgetBox, { backgroundColor: this.state.bgColorH }]}>{Global.I18n("home")}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ width: "30%" }} onPress={() => { this.setState({ bgColorH: "#eff0f1", bgColorW: "white", bgColorO: "#eff0f1", label: "Work" }) }}>
                                                <Text style={[styles.budgetBox, { backgroundColor: this.state.bgColorW }]}>{Global.I18n("work")}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ width: "30%" }} onPress={() => { this.setState({ bgColorH: "#eff0f1", bgColorW: "#eff0f1", bgColorO: "white", label: "Other" }) }}>
                                                <Text style={[styles.budgetBox, { backgroundColor: this.state.bgColorO }]}>{Global.I18n("other")}</Text>
                                            </TouchableOpacity>
                                        </View>

                                        {this.state.isLoading ?
                                            <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                                style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                                source={loader}
                                            /></View>
                                            : null}
                                    </View>
                                    {!this.state.isLoading ?
                                        <View>
                                            <TouchableOpacity
                                                onPress={this.saveData}
                                                activeOpacity={1}
                                                style={{
                                                    backgroundColor: Global.isDay() ? '#F3525C' : "#393939",
                                                    width: '100%',
                                                    alignItems: 'center',
                                                    color: 'blue',
                                                    borderRadius: 50,
                                                    alignSelf: 'center',
                                                    marginVertical: 10,
                                                    justifyContent: 'center',
                                                    paddingVertical: 15,
                                                    // paddingRight: 40,
                                                    width: "80%"
                                                }}
                                            >
                                                <Text style={{ color: '#fff' }}>{Global.I18n("save")}</Text>
                                                <Image
                                                    style={{
                                                        width: 40,
                                                        height: 40,
                                                        alignSelf: 'center',
                                                        resizeMode: 'contain',
                                                        position: "absolute",
                                                        right: 5
                                                    }}
                                                    // source={require('../../assets/Images/right_arrow_circle.png')}
                                                    source={Global.isDay() ? require('../../assets/Images/right_arrow_circle.png') : require('../../assets/Images/right-arrow.png')}

                                                />
                                            </TouchableOpacity>
                                        </View> : null}
                                </View>


                            </ScrollView>
                        </View>
                    // <FullComponent saveData={this.saveData.bind(this)} onChange={this.onChange.bind(this)} area={this.state.area}
                    //     houseNo={this.houseNo} floor={this.floor} street={this.street} areaFunc={this.area} city={this.city} state={this.state} isLoading={this.state.isLoading} />
                }
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
            </View>
        )
    }
}
const FullComponent = (props) => {
    var bgColorH = props.state.bgColorH;
    var bgColorW = props.state.bgColorW;
    var bgColorO = props.state.bgColorO;
    return (
        <View style={{ flex: 1, paddingTop: 30, marginTop: "-90%", backgroundColor: "white", borderRadius: 50 }} >
            <ScrollView>
                <View style={styles.Box}>
                    <Text style={styles.Heading}>ADD A NEW ADDRESS</Text>

                    <View style={[styles.CodeBox, { paddingHorizontal: 20, paddingVertical: 10 }]}>

                        <TextInputs heading="HOUSE NUMBER" placeholder={"Flate B-11"} iconNotAvailable={true}
                            onChange={props.houseNo} />
                        <TextInputs heading="FLOOR/UNIT#" placeholder={"2nd Floor"} iconNotAvailable={true}
                            onChange={props.floor} />
                        <TextInputs heading="STREET/BLOCK" placeholder={"Block 7"} iconNotAvailable={true}
                            onChange={props.street} />
                        <View style={{
                            marginVertical: 10,
                            flexDirection: 'row',
                            width: '90%',
                            alignItems: "center",
                            borderBottomColor: "#b2b2b2",
                            borderBottomWidth: 1,
                            height: 40,
                        }}>
                            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                <Text style={{ color: "#f3525c", fontWeight: "bold" }}>Area</Text>
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    style={{
                                        color: 'grey',
                                        marginRight: 10,
                                    }}
                                    placeholder="Area"
                                    placeholderTextColor="#b2b2b2"
                                    onChangeText={props.areaFunc}
                                    value={props.area}
                                />
                            </View>
                        </View>
                        {/* <TextInputs heading="AREA" placeholder={"Abu Dhabi Industrial Area"} val={props.place.result ? props.place.result.formatted_address : ""}
                            iconNotAvailable={true} onChange={props.area} /> */}
                        <TextInputs heading="CITY" placeholder={"Abu Dhabi"} iconNotAvailable={true}
                            onChange={props.city} />
                        <Text style={[styles.Heading, { paddingLeft: 10 }]}>LABEL</Text>
                        <View style={{ padding: 15, flexDirection: "row", justifyContent: "space-evenly" }}>
                            {/* <TouchableOpacity style={{ width: "30%" }} onPress={() => { props.setState({bgColorH:"white", bgColorW:"#eff0f1", bgColorO:"#eff0f1" }) }}> */}
                            {/* <TouchableOpacity style={{ width: "30%" }} onPress={() => { bgColorH= "white"; bgColorW="#eff0f1", bgColorO="#eff0f1"; }}> */}
                            <TouchableOpacity style={{ width: "30%" }} >
                                <Text style={[styles.budgetBox, { backgroundColor: bgColorH }]}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: "30%" }} onPress={() => { bgColorH = "#eff0f1"; bgColorW = "white"; bgColorO = "#eff0f1" }}>
                                <Text style={[styles.budgetBox, { backgroundColor: bgColorW }]}>Work</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: "30%" }} onPress={() => { bgColorH = "#eff0f1"; bgColorW = "#eff0f1"; bgColorO = "white" }}>
                                <Text style={[styles.budgetBox, { backgroundColor: bgColorO }]}>Other</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <Text style={styles.budgetBox}>Work</Text>
                        <Text style={styles.budgetBox}>Other</Text> */}
                        {props.isLoading ?
                            <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                source={loader}
                            /></View>
                            : null}
                    </View>
                    {!props.isLoading ?
                        <View>
                            <TouchableOpacity
                                onPress={props.saveData}
                                activeOpacity={1}
                                style={{
                                    backgroundColor: colors.RED_THEME_COLOR,
                                    width: '100%',
                                    alignItems: 'center',
                                    color: 'blue',
                                    borderRadius: 50,
                                    alignSelf: 'center',
                                    marginVertical: 10,
                                    justifyContent: 'center',
                                    paddingVertical: 15,
                                    // paddingRight: 40,
                                    width: "80%"
                                }}
                            >
                                <Text style={{ color: '#fff' }}>Save and continue</Text>
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
                                // source={Global.isDay() ? require('../../assets/Images/right_arrow_circle.png'): require('../../assets/Images/right-arrow.png')}

                                />
                            </TouchableOpacity>
                        </View> : null}
                </View>


            </ScrollView>
        </View>


    )
}
const MiniComponent = (props) => {

    return (
        <View style={{ flex: 1, paddingTop: 30, backgroundColor: "white", borderRadius: 70, position: "absolute", bottom: 0, width: "100%" }} >

            <View style={styles.Box}>
                <Text style={styles.Heading}>ADD A NEW ADDRESS </Text>
                <View style={styles.CodeBox}>

                    <Text style={[styles.Heading, { color: "red" }]}>AREA/SOCIETY </Text>

                    {/* <TextInput iconImage={require("../../assets/Images/maps-and-flags.png")} heading="" placeholder={"Search"} onChange={props.onChange} /> */}

                    <View
                        style={{
                            marginVertical: 10,
                            flexDirection: 'row',
                            width: '90%',
                            alignItems: "center",
                            borderColor: "#b2b2b2",
                            // borderWidth: 1,
                            height: 47,
                            marginHorizontal: 20,
                            // elevation: 1,
                            paddingHorizontal: 10,
                            paddingVertical: 3,
                            backgroundColor: "white",
                            shadowColor: 'white',
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 3,

                        }}
                    >
                        <AntDesign size={20} name="search1" color="#f3626b" style={{ alignSelf: "center" }} />
                        <TextInput
                            underlineColorAndroid="transparent"

                            style={{
                                color: 'grey',
                                marginRight: 10,
                            }}
                            placeholder={"Search"}
                            placeholderTextColor="#b2b2b2"
                        />
                        {/* <PlacesInput
                            googleApiKey="AIzaSyBfgiE8iKcdetHmj7hpaLKrrah6FILXRZ4"
                            placeHolder={"Some Place holder"}
                            language={"en-US"}
                            onSelect={}
                            onSelect={place => {
                                this.props.goToPoint(get(place, 'result.geometry.location.lat'), get(place, 'result.geometry.location.lng'))
                            }}
                            iconResult={<Ionicons name="md-pin" size={25} style={styles.placeIcon} />}
                        /> */}

                    </View>
                    <TouchableOpacity
                        onPress={props.switchModel}
                        style={{
                            backgroundColor: "#f3525c",
                            paddingVertical: 10,
                            marginTop: 10
                            // paddingHorizontal: -45
                        }}
                    ><Text style={{
                        color: "#fff",
                        textAlign: "center",
                        padding: 10

                    }}
                    >Apply Location</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}