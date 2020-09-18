import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView, Dimensions, CheckBox, Modal, FlatList, StyleSheet, I18nManager } from 'react-native'
import styles from "./cartStyle"
import modelStyle from "../Categories/style"
import { TransparentHeader } from "../CustomComponent/index"
import Global from "../../utils/global"
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colorConstant';
import Routeskey from '../../navigation/routeskey';
import RoutesKey from '../../navigation/routeskey'
import Constant from '../../utils/constant'
import { MyModal } from '../../utils/Model'
import { Loader } from '../../utils/loader';
import { TextInput } from "../CustomComponent/index"
import loader from "../../assets/Images/authentication/animation.gif"
import { connect } from 'react-redux'
import Midware from '../../store/middleware/midware'
import PushNotification from 'react-native-push-notification';



const mapStateToProps = (state) => {
    return ({
        cartData: state.Reducer.cartItems
    })
}
const mapDispatchToProps = (dispatch) => {
    return ({
        increaseItem: (products, id) => {
            // console.log(createdBy, "createdBy")
            dispatch(Midware.addCartCheckout(products, id))
        },
        decreaseItem: (products, id) => {
            // console.log(createdBy, "createdBy")
            dispatch(Midware.lessCartCheckout(products, id))
        },
        removeCart: () => {
            dispatch(Midware.emptyCartMenu())
        },


    })
}



class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [],
            address: { area: "" },
            userData: { email: "" },
            allPayments: [],
            isSelected: false,
            showModel: false,
            msg: "",
            payment: {},
            selectPayment: false,
            itemQuantity: 0,
            isVisible: false,
            restaurantData: {},
            isLoading: false,
            request: false,
            isVoucher: false,
            voucher: { price: 0 },
            validationCode: "",
            showMsg: false,
            restaurant: { deliveryFees: 0 },
            voucherText: Global.I18n("haveVoucher"),


            //sabih work
            voucherTotal: 0,
            voucherData: {},
            paymentSelected: null,

        }
    }

    
    async placeOrder() {
        PushNotification.localNotificationSchedule({
            message: `Your order has been sent successfully`,
            date: new Date(Date.now() + (1 * 1000))
        });
        this.props.navigation.navigate(RoutesKey.YOUR_ORDER)  
    }


    onChange = (name, val) => {
        this.setState({ validationCode: val });
    }

    onValidate() {
        this.setState({ request: false })
    }
    // sabih work


    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={true}
                />

                <ImageBackground
                    resizeMethod="scale"
                    // source={require("../../assets/Images/Verification.png")}
                    source={Global.isDay() ? require("../../assets/Images/Verification.png") : require("../../assets/Images/Verification2.png")}
                    style={{ flex: 1 }}
                >
                    <ScrollView style={{ flex: 1 }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[{
                                marginTop: 15,
                                position: "absolute", top: 20, left: 10,
                                width: 30, marginRight: 15, marginLeft: 15,
                                height: 30, alignSelf: "center",
                                borderRadius: 30 / 2,
                                alignItems: "center",
                                justifyContent: "center", alignItems: "center",
                                backgroundColor: "#ffa5ab"
                            }, this.props.color ? { backgroundColor: "#f3525c" } : { backgroundColor: Global.isDay() ? "#ffa5ab" : "#989898" }]}
                            onPress={() => this.props.navigation.goBack()}>
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
                        <TransparentHeader fun={() => { this.props.navigation.navigate(Routeskey.HOME) }} title={Global.I18n("MyCart")} style={{ marginTop: Global.STATUSBAR_HEIGHT }} />
                        <Loader visible={this.state.isVisible} />
                        <View style={[styles.Box, { top: 50, marginBottom: 50 }]}>

                            <View style={{ marginTop: "12%" }}>
                                <Text style={{ color: "#b4b8c2", paddingHorizontal: "8%", fontFamily: Global.font("Bold") }}>{Global.I18n("myCartItems")}</Text>
                            </View>
                      
                            <View style={{ alignItems: "center", marginTop: 15 }}>

                      

                                <View style={[styles.sumaryBox, { paddingTop: 0 }]}>
                                    <Text style={{ color: "#a8acb7", fontFamily: Global.font() }}>{Global.I18n("deliveryFee")}</Text>
                                    <Text style={{ fontSize: 12 }}>{this.state.restaurant.deliveryFees ? this.state.restaurant.deliveryFees + " AED" : "0.00 AED"}</Text>
                                </View>

                                <TouchableOpacity style={{ width: "90%", backgroundColor: colors.LIGHT_GRAY_BACKGROUND, paddingHorizontal: 12, paddingBottom: 0 }}
                                    onPress={() => this.setState({ request: true })}>
                                    <Text style={{ color: "#f3525c", textAlign: "left", paddingBottom: 5, fontFamily: Global.font() }}>{this.state.voucherText}</Text>
                                </TouchableOpacity>
                                <View style={{ width: "90%", height: 80, paddingBottom: 0, }}>
                                    <ImageBackground style={{ flex: 1 }} source={require('../../assets/Images/recipt_bottom_panel.png')}>
                                        <View style={{ width: "100%", flex: 1, padding: 12, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                                            <Text style={{ color: "white", fontFamily: Global.font() }}>{Global.I18n("total")}</Text>
                                            <Text style={{ color: "white", fontFamily: Global.font() }}>60 AED</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>

                      
                                <View style={styles.deliverBox}>

                                    <Text style={{ color: "#a8acb7", fontFamily: Global.font() }}>{Global.I18n("deliveryTime")}</Text>
                                    <Text style={{ fontSize: 12, fontFamily: Global.font() }}>30 min</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: "5%" }}>
                                <Text style={{ color: "#b4b8c2", paddingHorizontal: "8%", fontFamily: Global.font("Bold") }}>{Global.I18n("paymentMethod")}</Text>
                            </View>

                            <View style={{ flexDirection: "row", padding: 15 }}>
                                <Image source={require("../../assets/Images/otherIcon/plus_red.png")} style={{ marginLeft: 15, marginRight: 5 }} />
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.PAYMWNT_METHOD)}>
                                    <Text style={{ fontFamily: Global.font() }}>{Global.I18n("addPayment")}</Text>
                                </TouchableOpacity>
                            </View>

                            {this.state.allPayments.map(res => {
                                return (
                                    <View key={res._id} style={styleRadioButton.container}>
                                        <TouchableOpacity
                                            style={styleRadioButton.radioCircle}
                                            onPress={() => {
                                                this.setState({
                                                    payment: res,
                                                    value: res._id
                                                });
                                            }}>
                                            {this.state.value === res._id && <View style={styleRadioButton.selectedRb} />}
                                        </TouchableOpacity>

                                        <Text style={styleRadioButton.radioText}>{res.cardNumber}</Text>
                                        <TouchableOpacity onPress={this.deletePayment.bind(this, res)}>
                                            <AntDesign size={22} name="closecircleo" color="#f3525c" />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                            {/* <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", marginLeft: 20, marginRight: 10 }}>
                                <RadioButton data={this.state.allPayments} />
                            </View> */}
                            <View style={{ flexDirection: "row", marginBottom: 20, padding: 15, marginLeft: 5 }}>
                                <CheckBox
                                    value={this.state.isSelected}
                                    onValueChange={() => this.setState({ isSelected: !this.state.isSelected, })}
                                    style={{ alignSelf: "center", }}
                                    tintColors={{ true: '#f3525c', }}
                                />
                                <Text style={{ margin: 8, fontFamily: Global.font() }}>{Global.I18n("cash")}</Text>
                            </View>


                            <View style={{ flexDirection: "row", padding: 15 }}>
                                <Text style={{ color: "lightgray", paddingLeft: 15, fontFamily: Global.font() }}>{Global.I18n("orderTerms")}</Text>
                            </View>

                            <View style={{ flexDirection: "row", padding: 15, paddingTop: 0 }}>

                                <Text style={{ color: "lightgray", paddingLeft: 15, fontFamily: Global.font() }}>{Global.I18n("demand")}</Text>
                            </View>

                        </View>
                        <MyModal showModel={this.state.showModel} message={this.state.msg} />
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.request}
                            onRequestClose={() => {
                                this.setState({ request: false })
                            }}
                        >
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                                <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ request: false })} style={{ width: "100%", backgroundColor: `rgba(0, 0, 0, ${0.7})`, position: "absolute" }} >
                                    <View style={{ height: 1000 }}></View>
                                </TouchableOpacity>

                                <View style={modelStyle.Box}>
                                    <Text style={modelStyle.Heading}>{Global.I18n("voucherValidation")}</Text>
                                    <View style={modelStyle.CodeBox}>
                                        <TextInput heading={Global.I18n("validationCode")} placeholder={Global.I18n("enterCode")} iconNotAvailable={true} type="phone-pad" val={this.state.validationCode} onChange={this.onChange} onChangeKey={"validationCode"} />
                                        {this.state.showMsg ?
                                            <View>
                                                <Text style={{ fontFamily: Global.font("Italic"), color: "red" }}>{this.state.errorMsg}</Text>
                                            </View> : null}
                                        {this.state.isLoading ?
                                            <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                                                style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                                                source={loader}
                                            /></View>
                                            : null}
                                    </View>
                                    {!this.state.isLoading ?
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
                                            onPress={this.onValidate.bind(this)}
                                        >
                                            <Text style={{ color: '#fff' }}>{Global.I18n("validate")}</Text>

                                        </TouchableOpacity> : null}
                                </View>
                            </View>
                        </Modal>
                    </ScrollView>

                    <View style={{ alignItems: "center", width: "100%", }}>
                        <View style={{ width: "100%", backgroundColor: "#f3525c", padding: 12, alignItems: "center", }}>
                            <View style={{ width: "100%", backgroundColor: "#f3525c", padding: 12, alignItems: "center", flexDirection: "row", justifyContent: "space-evenly" }}>
                                <View style={{ backgroundColor: "white", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                                    <Text style={{ color: "black", fontFamily: Global.font() }}>6</Text>
                                </View>

                                <TouchableOpacity onPress={this.placeOrder.bind(this)}>
                                    <Text style={{ color: "white", fontFamily: Global.font("Bold") }}>{Global.I18n("placeOrder")}</Text>
                                </TouchableOpacity>
                                <Text style={{ color: "white", fontWeight: "bold", fontFamily: Global.font() }}>60 AED</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>



            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)



const styleRadioButton = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexDirection: "row", padding: 5,
        marginLeft: 20, marginRight: 10
    },
    radioText: {
        marginRight: 20,
        fontSize: 16,
        color: '#000',
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#f3525c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: '#f3525c',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});
