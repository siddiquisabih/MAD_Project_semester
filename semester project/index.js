import { AppRegistry } from 'react-native';
// import App from './src/components/Verification/Verification';
// import App from './src/components/Categories/Categories';
// import App from './src/components/ChangeNumber/ChangeNumber';
// import App from './src/components/Profile/Profile';
// import App from './src/components/PaymentMethod/PaymentMedthod';
// import App from './src/components/MyAddresses/MyAddresses';


// import App from './src/components/Notification/Notification';

// import App from './App';
// import App from './src/components/CustomerMoods/CustomerMoods';

// import App from './App';
// import App from './src/components/Restaurant/Restaurant';
// import App from './src/components/Order/CanceledList';
// import App from "./src/components/EstimatedDeliveryTime/EstimatedDeliveryTime"
// import App from "./src/components/Map/Map"
// import App from "./src/components/search/searchRestaurant"
// import App from "./src/components/home/home"
// import App from "./src/components/search/searchRestaurant"
// import App from "./src/components/orderDetail/OrderDetail"
// import App from "./src/components/orderDeliverd/OrderDeliver"
// import App from "./src/components/cart/cart"
// import App from "./src/components/About/About"
// import App from "./src/components/Verification/Verification"
import App from './App';
import { name as appName } from './app.json';
console.disableYellowBox = true

import { gestureHandlerRootHOC } from 'react-native-gesture-handler'



// AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
AppRegistry.registerComponent(appName, () => App)