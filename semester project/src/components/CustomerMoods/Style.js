import { StyleSheet, Dimensions, Platform } from 'react-native';
import Global from "../../utils/global";

export default Style = StyleSheet.create({
    h1: { justifyContent: "center", alignSelf: "center", color: "#fff", fontSize: 18,fontFamily: Global.font(), },
    sub: { justifyContent: "center", fontWeight: "bold", alignSelf: "center", color: "#000", fontSize: 18 },
    p: { justifyContent: "center", alignSelf: "center", color: "#c9cbd2", fontSize: 18 ,fontFamily: Global.font(),},
    center: { justifyContent: "space-around", padding: 5, alignItems: "center", flexDirection: "row" },
    iconView: { right: 7, borderRadius: 18 / 2, alignItems: "center", justifyContent: "center", backgroundColor: "#5baa5b", width: 18, height: 18, marginLeft: -10 },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    main: {
        padding: 10,
        flex: 1,
        paddingTop: 30,
        marginTop: 10,
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        

    },
    heading: {
        color: "#aaaeb9",
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,

    },
    container: {
        flex: 1,
        // marginHorizontal: 6
    },
    item: {
        paddingVertical: 5,
        backgroundColor: "#fff",
        marginVertical: 2,
        borderBottomColor: "#f9f9f9",
        borderBottomWidth: 2,
        flexDirection: "row"
    },
    icon: { color: "#f3525c", fontSize: 10 },

    header: {
        fontSize: 24,
        // backgroundColor: "#fff"
    },
    title: {
        fontSize: 12,
        fontFamily:Global.font(),
    },
    view: { justifyContent: "center", alignItems: "center", borderRadius: 20, flexDirection: "row", justifyContent: "space-around", borderWidth: 1, padding: 3, margin: 2, borderColor: "#5baa5b" },
    addtxt: { paddingHorizontal: 5, color: "#fff", fontFamily:Global.font() ,  fontSize:10},
    add: { borderRadius: 20, margin: 2, backgroundColor: "#f3525c" },
    upto: { color: "#fff",  fontSize: 10, paddingVertical: 3,fontFamily:Global.font("Bold") },
    uptoView: { top: 10, width: "80%", backgroundColor: "#f3525c", alignItems: "center" },
    row: { flexDirection: "row", alignItems: "center" },
    iconText:{
        fontSize:10,
        fontFamily: Global.font(),
    }
});
