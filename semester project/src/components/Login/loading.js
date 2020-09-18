import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Container, Header, Content, Spinner } from "native-base";
import firebase from "../../config/firebase";

export default class loading extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log("data++");
    this.process();
  }

  async process() {
    console.log('process from loading js')
    // firebase.auth().onAuthStateChanged(userid => {
    const userid = await firebase.auth().currentUser
console.log("user id",userid)
      if (userid) {
        console.log("true");
        var ids = userid.uid;
        console.log("ide", ids);
        if (!userid.isAnonymous) {
          firebase
            .database()
            .ref("users/" + ids)
            .once("value")
            .then(snapShot => {
              const dataInString = JSON.stringify(snapShot.val());
              AsyncStorage.setItem("data1", dataInString);
              console.log("dataaaa", snapShot.val());
              var role = snapShot.val().Roll;
              console.log("roleee", role);
              if (role == 1) {
                //Freelancer
                this.props.navigation.navigate("freelancerStack");
              }
              else if (role == 2) {
                console.log("usser", userid.uid);
                console.log("login auth ho k aya hai user loading");
                this.props.navigation.navigate("userStack");
              }
              else if(role==3)
              {
                console.log("agents tack")
                this.props.navigation.navigate("agentStack")
              }
              else if(role==4)
              {
                console.log("vendor tack")
                this.props.navigation.navigate("vendortStack")
              }
            })
            .catch(e => {
              console.log("errrrr", e);
              this.props.navigation.navigate("Login");
            });
        } else {
          console.log("user stack with guest");
          this.props.navigation.navigate("userStack");
        }
      } else {
        console.log("nala");
        this.props.navigation.navigate("Login");
      }
    // });
  } 

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}
      >
        <Spinner size="large" color="#36DAA5" />
      </View>
    );
  }
}
