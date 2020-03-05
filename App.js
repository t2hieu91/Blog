import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProviderState } from "./src/context/BlogContextState";
import { Provider } from "./src/context/BlogContextReducer";
import IndexScreen from "./src/screens/IndexScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  }, {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
