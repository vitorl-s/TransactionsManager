# TransactionsManager

TransactionsManager is a app made in React Native to list your last transactions and show your balance.

### How to run

Clone repository and install dependencies:
```sh
git clone https://github.com/vitorl-s/TransactionsManager.git
cd TransactionsManager
yarn
```

Run the app:
```sh
cd ios
pod install
cd ..
npx react-native run-ios
```

or

```sh
npx react-native run-android
```

The app should be running/installing on the simulator or on your device by now.

## How to run tests


```sh
cd TransactionsManager
yarn test -u
```
<i> Note: If tests fail, change node version to 10.22.0 </i>

## Solution plan

The solution involves using React Native base components with stylesheet to show transactions and balance, to add transactions and format date type react-native-datepicker and momentjs were used. To store the transactions items redux and redux-persist were used. To navigate between screens react-navigation was necessary.

## Contributing

Would like to help this project? Found a bug that you would like to report or a missing feature that you would like to work on? Great! Check the [Contribution guide](./CONTRIBUTING.md) so you can start easily.
