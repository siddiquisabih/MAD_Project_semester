import React, { Component } from 'react';
import Button from '../../utils/Button';

import LoginStyle from './LoginStyle';

import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Platform, SafeAreaView,
  StyleSheet,
  Share
} from 'react-native';
import RoutesKey from '../../navigation/routeskey';

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  componentDidMount() { }

  login() {
    let { email, password } = this.state;

    let chk = this.validateEmail(email);
    if ((email, password)) {
      if (chk) {
        this.setState({ loader: true, conditionFlage: true });
        this.props.loginUser({
          email,
          password,
        });
      } else {
        this.setState({ showModel: true, msg: 'Incorrect Email' });
      }
    } else {
      this.setState({ showModel: true, msg: 'Fill all field' });
    }
  }

  onChange(name, val) {
    this.setState({ [name]: 3 });
  }
  render() {
    let { loader, secure } = this.state;
    console.log('data jo a rha he render', this.props);
    return (
      <ImageBackground
        style={{ flex: 1, alignItems: 'center' }}
        resizeMode="cover"
        // resizeMode="contain"
        source={require('../../assets/Images/bg5.png')}>
        <TouchableOpacity onPress={() => {
          Share.share({
            message: 'Share BUS STOP',
            url: '#',
            title: 'BUS STOP'
          }, {
            // Android only:
            dialogTitle: 'Share Us',
            // iOS only:
            excludedActivityTypes: [
              'com.apple.UIKit.activity.PostToTwitter'
            ]
          })
        }} style={LoginStyle.share1}>
          <Text style={LoginStyle.color}>Share</Text>
        </TouchableOpacity>
        <Image
          style={[LoginStyle.Logoimage, { marginTop: "20%" }]}
          source={require('../../assets/Images/icon.png')}
        />

        <Button bg={false} title="Login" function={this.func1} />
        <Button bg={true} title="Signup" function={this.func} />
        <Text style={{ color: "#fff", position: "absolute", bottom: 20 }}>Powered By The App Guys</Text>
      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  button: {
    flexDirection: 'column',
    flex: 10,
    paddingBottom: 10,
  },

  ButtonStyle: {
    backgroundColor: '#07adb9',
    width: '90%',
    alignItems: 'center',
    color: 'blue',
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 10,
    justifyContent: 'center',
    paddingVertical: 15,
  },
});

export default Splash;
