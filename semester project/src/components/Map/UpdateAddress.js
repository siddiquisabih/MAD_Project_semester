import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native'
import styles from "./style"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SwipeUpDown from 'react-native-swipe-up-down';
import { AddressHeader, Button, TextInput as TextInputs } from "../CustomComponent/index"
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
import { floor, add } from 'react-native-reanimated';
import Constant from '../../utils/constant';
import loader from "../../assets/Images/authentication/animation.gif"
import RoutesKey from '../../navigation/routeskey'
import home from '../home/home';


export default class UpdateAddress extends Component {


    constructor(props) {
        super(props)
        this.state = {
            address: props.route.params.address || {},
            isLoading: false,
            showModel: false,
            bgColorH: "#eff0f1",
            bgColorW: "#eff0f1",
            bgColorO: "#eff0f1",
            label:"Home",

        }

    }
    componentDidMount(){
        console.log(this.state.address)
        var address = this.props.route.params.address;
        if(address.label == "Home"){
            this.setState({bgColorH: "white", bgColorW: "#eff0f1", bgColorO: "#eff0f1" })
        }
       else if(address.label == "Work"){
            this.setState({bgColorW: "white", bgColorH: "#eff0f1", bgColorO: "#eff0f1", })
        }
        else if(address.label == "Other"){
            this.setState({bgColorO: "white", bgColorH: "#eff0f1", bgColorW: "#eff0f1", })
        }
    }
    UNSAFE_componentWillReceiveProps(props){
        this.setState({ address: props.route.params.address });
        var address = props.route.params.address;
        console.log(address)
        if(address.label == "Home"){
            this.setState({bgColorH: "white", bgColorW: "#eff0f1", bgColorO: "#eff0f1" })
        }
       else if(address.label == "Work"){
            this.setState({bgColorW: "white",bgColorH: "#eff0f1", bgColorO: "#eff0f1",  })
        }
        else if(address.label == "Other"){
            this.setState({bgColorO: "white" , bgColorH: "#eff0f1", bgColorW: "#eff0f1",})
        }
    }
    onChange(name, val) {
        var address = this.state.address;
        address[name] = val;
        this.setState({ address: address });
    }


    updateAddress = () => {
        var address = this.state.address
        if (address.houseNumber === "" || address.floorUnit === "" || address.streetBlock === "" || address.area === "" || address.city === "") {
            this.setState({ showModel: true, msg: Global.I18n("message4") })
        }
        else {
            this.props.navigation.navigate(RoutesKey.MY_ADDRESS);
        }
    }
    render() {
        let { address } = this.state;
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
                        }, this.props.color ? { backgroundColor: "#f3525c" } : { backgroundColor: "#ffa5ab" }]}
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
                        latitude: address.latitude,
                        longitude: address.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
                <View style={{  paddingTop: 30, marginTop: "-90%", backgroundColor: "white", borderRadius: 50, height:"auto" }} >

                    <ScrollView>
                        <View style={styles.Box}>
                <Text style={styles.Heading}>{Global.I18n("updateAddress")}</Text>
                            <View style={[styles.CodeBox, { paddingHorizontal: 20, paddingVertical: 10 }]}>
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
                                        <Text style={{ color: "#f3525c", fontWeight: "bold" }}>{Global.I18n("houseNumber")}</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={{
                                                color: 'grey',
                                                marginRight: 10,
                                            }}
                                            placeholder={Global.I18n("houseNumber")}
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, "houseNumber")}
                                            value={this.state.address.houseNumber}
                                        />
                                    </View>
                                </View>
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
                                        <Text style={{ color: "#f3525c", fontWeight: "bold" }}>{Global.I18n("floor")}</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={{
                                                color: 'grey',
                                                marginRight: 10,
                                            }}
                                            placeholder={Global.I18n("floor")}
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, "floorUnit")}
                                            value={this.state.address.floorUnit}
                                        />
                                    </View>
                                </View>
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
                                        <Text style={{ color: "#f3525c", fontWeight: "bold" }}>{Global.I18n("street")}</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={{
                                                color: 'grey',
                                                marginRight: 10,
                                            }}
                                            placeholder={Global.I18n("street")}
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, "streetBlock")}
                                            value={this.state.address.streetBlock}
                                        />
                                    </View>
                                </View>
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
                                        <Text style={{ color: "#f3525c", fontWeight: "bold" }}>{Global.I18n("area")}</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={{
                                                color: 'grey',
                                                marginRight: 10,
                                            }}
                                            placeholder={Global.I18n("area")}
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, "area")}
                                            value={this.state.address.area}
                                        />
                                    </View>
                                </View>
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
                                        <Text style={{ color: "#f3525c", fontWeight: "bold" }}>{Global.I18n("City")}</Text>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={{
                                                color: 'grey',
                                                marginRight: 10,
                                            }}
                                            placeholder={Global.I18n("City")}
                                            placeholderTextColor="#b2b2b2"
                                            onChangeText={this.onChange.bind(this, "city")}
                                            value={this.state.address.city}
                                        />
                                    </View>
                                </View>
                                <View style={{ padding: 15, flexDirection: "row", justifyContent: "space-evenly" }}>
                                            <TouchableOpacity style={{ width: "30%" }} onPress={() => { this.setState({ bgColorH: "white", bgColorW: "#eff0f1", bgColorO: "#eff0f1" , label:"Home" }) }}>
                                                <Text style={[styles.budgetBox, { backgroundColor: this.state.bgColorH }]}>{Global.I18n("home")}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ width: "30%" }} onPress={() => { this.setState({ bgColorH: "#eff0f1", bgColorW: "white", bgColorO: "#eff0f1", label:"Work" }) }}>
                                                <Text style={[styles.budgetBox, { backgroundColor: this.state.bgColorW }]}>{Global.I18n("work")}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ width: "30%" }} onPress={() => { this.setState({ bgColorH: "#eff0f1", bgColorW: "#eff0f1", bgColorO: "white", label:"Other" }) }}>
                                                <Text style={[styles.budgetBox, { backgroundColor: this.state.bgColorO }]}>{Global.I18n("other")}</Text>
                                            </TouchableOpacity>
                                        </View>

                            </View>

                            {this.state.isLoading?
                                <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                    style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                    source={loader}
                                /></View>
                                : null}
                            <View>
                                {!this.state.isLoading?
                                <TouchableOpacity
                                    onPress={this.updateAddress}
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
                                    <Text style={{ color: '#fff' }}>{Global.I18n("updateAddress")}</Text>
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
                                </TouchableOpacity>: null}
                            </View>

                        </View>
                    </ScrollView>
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
                                    <View style={{  height:60, alignItems:"center", justifyContent:"center"   }} >
                                      <Text style={{textAlign:"center", fontWeight:"bold" , color:"gray"}} >{this.state.msg} </Text>
                                    </View> 
                                    <View style={{  flex:1, justifyContent:"center", alignItems:"center" }} >
                                    <TouchableOpacity onPress={() => this.setState({ showModel: false })} style={{
                                         height: 35, width: "40%", backgroundColor: "#f3525c" , justifyContent:"center", alignItems:"center", borderRadius:5}} ><Text style={{color:"#fff" , fontSize:15}}>{Global.I18n("ok")}</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
            </View>
        )
    }
}


