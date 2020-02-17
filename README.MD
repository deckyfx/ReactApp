*Install in mac osx*

**Install Homebrew**
```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```

**Install Nodejs**
```brew install node```

**Install Yarn**
```brew install yarn```

**Install Watchman**
```brew install watchman```

**Install nvm**
```npm install nvm -g```

**Install specific version of nodejs version**
```nvm install v10.19.0```

**Install expo and react native cli globally**
```npm install expo-cli react-native-cli -g```

**Init react native project**
```expo init ReactNativeApp```

**cd to the directory**

**install theme & icons**
```yarn add react-native-paper react-native-vector-icons --save```

**Realm && Redux**
```yarn add redux redux-toolkit react-redux immutable rxjs redux-observable @redux-offline/redux-offline@native redux-persist realm @bankify/redux-persist-realm --save```

**navigation**
```yarn add @react-navigation/native @react-navigation/stack react-native-reanimated@~1.4.0 react-native-gesture-handler react-native-screens@2.0.0-alpha.12 react-native-safe-area-context@0.6.0 @react-native-community/masked-view@0.1.5 react-navigation react-navigation-stack react-navigation-drawer --save```

**background task and queue**
```yarn add react-native-queue react-native-background-task react-native-background-fetch --save```
```https://medium.com/hackernoon/easy-os-background-tasks-in-react-native-bc4476c48b8a```

**net info**
```yarn add @react-native-community/netinfo@4.6.0 --save```

**App Permission**
```yarn add react-native-permissions --save```

**Misc components***
```yarn add react-native-community/react-native-tab-view osdnk/reanimated-bottom-sheet react-native-community/react-native-datetimepicker recyclerlistview@beta  react-native-svg@9.13.3 react-native-maps @react-native-community/async-storage@next @react-native-community/async-storage-backend-web@next --save```

**pod install**
```cd ios && pod install```

**Run app**
```yarn start && yarn android && yarn ios```

```https://facebook.github.io/react-native/docs/hermes```

**Add Electron platform**

```yarn add -D @expo/electron-adapter @expo/webpack-config react-native-web babel-loader --save```

```yarn expo-electron customize```

```yarn expo-electron start```

**clear cache**
```watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && npm install && npm start -- --reset-cache```

```yarn install```