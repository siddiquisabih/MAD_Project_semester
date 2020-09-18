import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import loader from "../assets/Images/authentication/animation.gif"
import Global from './global';

export class MyModal extends Component {

    constructor(props) {
        super(props);
        this.state={
            showModel: props.showModel
        }
    }

    UNSAFE_componentWillReceiveProps(props){
          this.setState({showModel: props.showModel})
    }
    
    render() {
        return (
            <Modal animationType="fade"
                transparent={true}
                visible={this.state.showModel }
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
                            <Text style={{ textAlign: "center", color: "gray", fontFamily:Global.font("Bold") }} >{this.props.message} </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                            <TouchableOpacity onPress={() => this.setState({ showModel: false })} style={{
                                height: 35, width: "40%", backgroundColor: "#f3525c", justifyContent: "center", alignItems: "center", borderRadius: 5
                            }} ><Text style={{ color: "#fff", fontSize: 15, fontFamily:Global.font() }}>{Global.I18n("ok")}</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}
