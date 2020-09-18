

import React, { Component } from 'react';

import {
    View,
    Text,
    StyleCusSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground, FlatList,
    Animated, Modal
} from 'react-native';
import loader from "../assets/Images/authentication/animation.gif"

export class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Modal animationType="fade"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    console.log()
                }} >
                <View style={{
                    flex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}><Image
                        style={{ height: 100, width: 100, }}
                        source={loader}
                    /></View>

                </View>
            </Modal>
            // <View>
            //        {this.props.isVisible ?
            //         <View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 , zIndex:2}}>
            //             <View style={{
            //                 flex: 1,
            //                 backgroundColor: "rgba(0, 0, 0, 0.5)",
            //                 justifyContent: "center",
            //                 alignItems: "center",
                            
            //             }} >
            //                 <View style={{ justifyContent: "center", alignItems: "center" }}><Image
            //                     style={{ height: 100, width: 100, }}
            //                     source={loader}
            //                 /></View>

            //             </View>
            //             </View>:null}
            // </View>
        );
    }
}
