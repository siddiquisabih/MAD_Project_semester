import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconInfo from 'react-native-vector-icons/Feather';

import {
    Text,
    View,
    TextInput, Image,
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    Platform,
    StyleSheet,
} from 'react-native';
import RoutesKey from '../navigation/routeskey';
import Global from "../utils/global";
export class Heart extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() { }

    render() {
        return (
            <View style={{
                position: "absolute", top: 20, right: 10,
                marginRight: 10,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "space-around", alignItems: "center",
                flexDirection: "row",
                // paddingHorizontal: 5


            }}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ marginRight: 20 }}
                    onPress={this.props.function}>

                    <Icon name={this.props.name ? this.props.name : "heart-o"} style={[{ fontSize: 20 }],
                        this.props.name ? { color: "#f3525c" , fontSize: 20 } : { color: "#fff" , fontSize: 20}} />

                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={this.props.function}>
                    <IconInfo name="info" style={{ color: "#fff", fontSize: 20 }} />
                </TouchableOpacity>
            </View>
        );
    }
}
export class Back extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount() {
    }
    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={[{
                    marginTop: 30,
                    position: "absolute", top: 20, left: 10,
                    width: 30, marginRight: 15, marginLeft: 15,
                    height: 30, alignSelf: "center",
                    borderRadius: 30 / 2,
                    alignItems: "center",
                    justifyContent: "center", alignItems: "center"
                // }, this.props.color ? { backgroundColor: "#f3525c" } : { backgroundColor: "#ffa5ab" }]}
            }, this.props.color ? { backgroundColor: "#f3525c" } : { backgroundColor: Global.isDay() ? "#ffa5ab" :"#989898"  }]}
                onPress={() => this.props.props.navigation.goBack()}>
                {/* onPress={() => this.props.backURL ? this.props.props.navigation.navigate(this.props.backURL) : this.props.props.navigation.goBack()}>  */}

                <Image
                    style={{
                        width: 20,
                        height: 20,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                        position: "absolute", right: 5
                    }}
                    source={require('../assets/Images/back.png')}
                />
            </TouchableOpacity>
        );
    }
}

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

     }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.ButtonStyle}
                onPress={this.props.function}>
                <Text style={{ color: '#fff', fontFamily:Global.font() ,  }}>{this.props.title}</Text>

                <Image
                    style={{
                        width: 40,
                        height: 40,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                        position: "absolute", right: 5
                    }}
                    
                    source={require('../assets/Images/right-arrow.png')}
                    // source={require('../assets/Images/right-arrow.png')}
                    
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    button: {
        flexDirection: 'column',
        flex: 10,
        paddingBottom: 10,
    },

    ButtonStyle: {
        backgroundColor: Global.isDay() ? '#393939': "#F3525C",
        width: '70%',
        alignItems: 'center',
        color: 'blue',
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical: 10,
        justifyContent: 'center',
        paddingVertical: 15,
    },

});

export default Button;



export class RadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { PROP } = [{_id:"ssfs453sfs" , cardNumber:34534534543} , {_id:"fgfdgs45jfdf3454dfst" , cardNumber:8678353424234234}];
		const { value } = this.state;

		return (
			<View>
				{this.props.data.map(res => {
					return (
						<View key={res._id} style={styleRadioButton.container}>
							<TouchableOpacity
								style={styleRadioButton.radioCircle}
								onPress={() => {
                                    this.setState({
                                        value: res._id,
									});
								}}>
                                  {value === res._id && <View style={styleRadioButton.selectedRb} />}
							</TouchableOpacity>
                                <Text style={styleRadioButton.radioText}>{res.cardNumber}</Text>
						</View>
					);
				})}
                <Text> Selected: {this.state.value} </Text>
			</View>
		);
	}
}

const styleRadioButton = StyleSheet.create({
	container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});