import { StyleSheet, Dimensions, Platform } from 'react-native';
import Global from "../../utils/global"
const imageWidth = Dimensions.get('window').width / 1;
const imageWidth1 = Dimensions.get('window').width / 1.5;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

console.log(Global.font())


export default LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  View: {
    alignSelf: 'center',
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "center"
  },
  flex: {
    flex: 1,
    // alignItems: 'center'
  },
  FieldTxt: { color: "#f3525c", fontWeight: "bold" },
  Login: { color: "#575757", fontSize: 18, fontFamily: Global.font("Bold") },
  P: { color: "#575757", fontSize: 12, fontFamily: Global.font()},
  Divide: { flex: 1, paddingHorizontal: 10 },
  TextInputView: {
    marginVertical: 10,

    flexDirection: 'row',
    width: '100%',
    alignItems: "center",
    borderBottomColor: "#b2b2b2",
    borderBottomWidth: 1,
    height: 40,

  },
  TextInputStyle: {
    color: 'grey',
    marginRight: 10,

  },
  Icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  IconStyle: {
    fontSize: 20,
    color: "#b2b2b2",
    alignSelf: 'center',
  },
  Sicon: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  Logoimage: {
    width: imageWidth,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 30
  },

  Logo: {
    marginVertical: "20%",
    width: imageWidth,
    height: 80,
    alignSelf: 'center',
    resizeMode: 'contain',
  },

});
