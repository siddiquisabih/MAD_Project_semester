import React, { Component } from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";


export default class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgw: true,
            Message: true
        };
    }

    bgwhite = () => {
        return (
            <TouchableOpacity
                onPress={this.props.close}
                style={{
                    backgroundColor: 'rgba(52, 52, 52, 0.8)',
                    opacity: 0.9,
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",

                }}
            ></TouchableOpacity>
        );
    };

    Message = () => {
        return (

            <View
                style={{
                    padding: 30,
                    width: "100%",
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                }}
            >
                <View
                    elevation={5}
                    style={{
                        width: "100%"
                    }}
                >
                    <View
                        style={{
                            padding: 10,

                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,

                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >

                        {/* <Image
                            style={{
                                alignSelf: 'center',
                                resizeMode: 'contain',
                            }}
                            source={require('../assets/Images/rate.png')}
                        /> */}

                        <Text style={{ fontSize: 15, padding: 10, alignSelf: "center", textAlign: "center", color: "black" }}>{this.props.msg}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={this.props.close}
                        style={{
                            padding: 10,
                            // borderRadius: 5,
                            borderTopColor: "gray",
                            borderTopWidth: 1,
                            backgroundColor: "white",
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <Text style={{ color: "gray", fontSize: 18 }}>
                            {this.props.buttonHeading}
                        </Text>
                        {/* <TouchableOpacity >
             <Icon type="Entypo" name="cross" style={{ color: "#fff" }} /> 
            </TouchableOpacity> */}
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    render() {
        return (
            <Modal
                style={{

                }}
                visible={this.state.showModel}
            >
                <View
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {this.state.bgw ? this.bgwhite() : null}
                    {this.state.bgw ? this.Message() : null}
                </View>
            </Modal>
        );
    }
}