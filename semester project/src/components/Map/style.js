import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import colors from '../../utils/colorConstant'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundColor: "transparent"

    },
    Box: {
        width: "90%",
        borderRadius: 60,
        backgroundColor: "white",
        elevation: 3,
        paddingHorizontal: "10%",
        paddingTop: "10%",
        // opacity:1
        // alignItems: "center",
        // justifyContent: "center",
    },
    budgetBox: {
        backgroundColor: colors.LIGHT_GRAY_BACKGROUND,
        // width: "30%",
        textAlign: "center",
        paddingVertical: 5,
        borderRadius: 50,
        borderColor: "#f3525c",
        borderWidth: 1,
        color: "#f3525c"
    },
    Heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#b2b2b2",
        textAlign: "left",
        paddingHorizontal: 20

    },
    CodeBox: {
        // paddingVertical: 10
    },
    map: {
        flex: 1
    },
    Box: {
        flex: 1,
        // backgroundColor: "yellow",
        // height: "40%",




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

    }
})


export default styles