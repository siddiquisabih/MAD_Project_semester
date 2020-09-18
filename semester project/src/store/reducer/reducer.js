import Action from "../action/action"


const initialState = {
    getMenuDetail: false,
    menuData: [],
    updateMenu: false,
    totalPrice: 0,
    totalQuantity: 0,
    cartItems: [],
    isCart: false,
    menuLoader: false
};


export default (state = initialState, action) => {
    switch (action.type) {
        case Action.GET_MENU_DATA:
            return Object.assign({}, state, { getMenuDetail: true, menuData: action.data, menuLoader: false })

        case Action.FAIL_TO_GET_MENU:
            return Object.assign({}, state, { getMenuDetail: false })

        case Action.ADD_ITEM:
            return Object.assign({}, state, { getMenuDetail: true, menuData: action.data })

        case Action.LESS_ITEM:
            return Object.assign({}, state, { getMenuDetail: true, menuData: action.data })

        case Action.CALCULATION_MENU:
            return Object.assign({}, state, { getMenuDetail: true, menuData: action.data.menuItem, totalPrice: action.data.totalPrice, totalQuantity: action.data.totalQty })

        case Action.ADD_REMOVE_CART:
            return Object.assign({}, state, { cartItems: action.data.cartItems })

        case Action.LOAD_CART:
            return Object.assign({}, state, { cartItems: action.data, isCart: true })

        case Action.INCREASE_ITEM:
            return Object.assign({}, state, { cartItems: action.data, isCart: true })

        case Action.DECREASE_ITEM:
            return Object.assign({}, state, { cartItems: action.data, isCart: true })

        case Action.EMPTY_CART:
            return Object.assign({}, state, { cartItems: [], isCart: false })

        case Action.ADD_REMOVE_EXTRA_CHOICES:
            return Object.assign({}, state, { cartItems: action.data })


        case Action.IS_MENU_LOADER:
            return Object({}, state, { menuLoader: true })


        default:
            return state;
    }
}
