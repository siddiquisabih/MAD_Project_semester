import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import colors from "../../utils/colorConstant"
import Global from "../../utils/global"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column"

    },
    Box: {
        flex: 1,
        backgroundColor: "white",
        // height: "40%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: -40,


    },
    circleTop: {
        alignSelf: "center",
        borderRadius: 100 / 2,
        borderWidth: 3,
        borderColor: "white",
        justifyContent: "center", alignItems: "center",
        backgroundColor: "yellow"
    },
    icon: {
        width: 25, height: 25,
        alignSelf: "center", justifyContent: "center",
        backgroundColor: "#393939",
        borderRadius: 100,
    },

    icon2: {
        width: 45, height: 45,
        justifyContent: "center",

        borderRadius: 100,

    },
    item: {
        // backgroundColor: "red",
        // padding: 20,
        // marginVertical: 2,
        borderBottomColor: "gray",
        borderBottomWidth: 0.4,
        flexDirection: "row",
        marginLeft: "7%",
        marginRight: "5%",
        paddingVertical: 10
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#575757"

    },

    asd: { color: "#f3525c", fontWeight: "bold", fontSize: 12, textAlign: "center" },
    sumaryBox: {
        width: "90%",
        backgroundColor: colors.LIGHT_GRAY_BACKGROUND,
        padding: 12,
        paddingBottom: 0,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 15,
        fontFamily: Global.font()
    },
    deliverBox: {
        width: "90%",
        backgroundColor: colors.LIGHT_GRAY_BACKGROUND,
        padding: 12,
        paddingBottom: 0,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 15,
        borderTopColor: "lightgray",
        borderTopWidth: 1
    },

})


export default styles