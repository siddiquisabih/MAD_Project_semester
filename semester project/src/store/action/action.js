

export default class Actions {

    static GET_MENU_DATA = "getMenuData"
    static FAIL_TO_GET_MENU = "failToGET"
    static ADD_ITEM = "addItem"
    static LESS_ITEM = "lessItem"
    static CALCULATION_MENU = "calculationMenu"
    static ADD_REMOVE_CART = "addRemoveCart"
    static LOAD_CART = "loadCart"
    static INCREASE_ITEM = "increaseItem"
    static DECREASE_ITEM = "decreaseItem"
    static EMPTY_CART = "emptyCart"
    static ADD_REMOVE_EXTRA_CHOICES = "addRemoveExtras"
    static IS_MENU_LOADER = "menuLoader"

    static getMenuDetail(value) {
        return {
            type: Actions.GET_MENU_DATA,
            data: value
        }
    }

    static failToGetMenu() {
        return {
            type: Actions.FAIL_TO_GET_MENU
        }
    }


    static addMenuItem(value) {
        return {
            type: Actions.ADD_ITEM,
            data: value
        }
    }

    static lessMenuItem(value) {
        return {
            type: Actions.LESS_ITEM,
            data: value
        }
    }
    static calculationItems(value) {
        return {
            type: Actions.CALCULATION_MENU,
            data: value
        }
    }

    static addRemoveCartItem(value) {
        return {
            type: Actions.ADD_REMOVE_CART,
            data: value
        }
    }

    static loadCartItem(value) {
        return {
            type: Actions.LOAD_CART,
            data: value
        }
    }

    static increaseItem(value) {
        return {
            type: Actions.INCREASE_ITEM,
            data: value
        }
    }

    static decreaseItem(value) {
        return {
            type: Actions.DECREASE_ITEM,
            data: value
        }
    }

    static emptyCartItem() {
        return {
            type: Actions.EMPTY_CART,

        }
    }

    static addRemoveExtra(value) {
        return {
            type: Actions.ADD_REMOVE_EXTRA_CHOICES,
            data: value
        }
    }

    static loadingMenu(value) {
        return {
            type: Actions.IS_MENU_LOADER,
            data: value
        }
    }


}