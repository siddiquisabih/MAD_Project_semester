import Global from "../../utils/global"
import Constant from "../../utils/constant"
import Action from "../action/action"



class Midware {

    static getMenuDetail(createdBy) {
        console.log(createdBy)
        return (dispatch) => {
            Global.appGetRequest(Constant.SHOP_MENUS + createdBy)
                .then((res) => {
                    console.log(res)
                    if (res.success) {
                        console.log(res)
                        console.log('in middleware')
                        var temp = res.data;
                        var categoriesWithProducts = []
                        for (let i = 0; i < temp.categories.length; i++) {
                            if (temp.categories[i].products.length > 0) {
                                categoriesWithProducts.push(temp.categories[i]);
                            }
                        }
                        for (var i = 0; i < categoriesWithProducts.length; i++) {
                            for (let j = 0; j < categoriesWithProducts[i].products.length; j++) {
                                if (categoriesWithProducts[i].products[j].qty === undefined) {
                                    categoriesWithProducts[i].products[j].qty = 0
                                    // newArray.push(categoriesWithProducts[i])
                                }
                            }
                        }
                        dispatch(Action.getMenuDetail(categoriesWithProducts))
                    } else {
                        dispatch(Action.failToGetMenu())
                    }
                })
        }
    }


    static increaseMenuItem(data, _id) {
        return (dispatch) => {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].products.length; j++) {
                    if (_id == data[i].products[j]._id) {
                        data[i].products[j].qty = data[i].products[j].qty + 1
                    }
                }
            }
            dispatch(Action.addMenuItem(data))
        }
    }
    static lessMenuItem(data, _id) {
        return (dispatch) => {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].products.length; j++) {
                    if (_id == data[i].products[j]._id) {
                        if (data[i].products[j].qty != 0) {
                            data[i].products[j].qty = data[i].products[j].qty - 1
                        }
                    }
                }
            }
            dispatch(Action.lessMenuItem(data))
        }
    }


    static updateTotalsMenu(data) {
        return (dispatch) => {
            var totalQty = 0
            var totalPrice = 0
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].products.length; j++) {
                    if (data[i].products[j].qty != 0) {
                        totalQty = totalQty + data[i].products[j].qty
                        totalPrice = totalPrice + (data[i].products[j].qty * data[i].products[j].price)
                    }
                }
            }
            var sentData = {
                menuItem: data,
                totalQty: totalQty,
                totalPrice: totalPrice,
            }
            dispatch(Action.calculationItems(sentData))
        }
    }


    static addRemoveCartMenu(data) {
        return (dispatch) => {
            var cartItems = [];
            for (let i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].products.length; j++) {
                    if (data[i].products[j].qty > 0) {
                        cartItems.push(data[i].products[j]);
                        Global.saveDataInPhone(Constant.MY_CART, cartItems)
                    }
                }
            }
            var sentData = {
                cartItems: cartItems,
                data: data
            }
            dispatch(Action.addRemoveCartItem(sentData))
        }
    }

    static loadCartMenu() {
        return (dispatch) => {
            Global.getDataFromPhone(Constant.MY_CART)
                .then((res) => {
                    if (res) {
                        console.log(res, "cartData")
                        dispatch(Action.loadCartItem(res))
                    }
                })
        }
    }


    static addCartCheckout(products, id) {
        console.log(products)
        return (dispatch) => {
            var newData = []
            // var subTotal = 0
            for (let i = 0; i < products.length; i++) {
                if (products[i]._id === id) {
                    products[i].qty = products[i].qty + 1
                }
                // subTotal = subTotal + (products[i].qty * products[i].price)
                newData.push(products[i])
            }
            dispatch(Action.increaseItem(newData))
            Global.saveDataInPhone(Constant.MY_CART, newData)
        }
    }

    static lessCartCheckout(products, id) {
        return (dispatch) => {
            var newData = []
            for (let i = 0; i < products.length; i++) {
                if (products[i]._id === id && products[i].qty != 0) {
                    products[i].qty = products[i].qty - 1
                }
                newData.push(products[i])
            }
            dispatch(Action.decreaseItem(newData))
            Global.saveDataInPhone(Constant.MY_CART, newData)
        }
    }


    static emptyCartMenu() {
        return (dispatch) => {
            Global.removeStorage(Constant.MY_CART)
            dispatch(Action.emptyCartItem())
        }
    }


    static addRemoveExtraChoices(data) {
        return (dispatch) => {
            console(data, "extras")
        }
    }


    static loadingStartMidware(isActive) {
        return (dispatch) => {
            dispatch(Action.loadingMenu(isActive))
        }
    }

}

export default Midware