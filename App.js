/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { CustomText, CustomView, CustomCheckBox, CustomButton, CustomRadioButtonGroup, CustomImage, CustomSwitch, CustomBackgroundImage, CustomTextInput, CustomTouchableOpacity, CustomDropdown } from './src';
// import DropDown from './DropDownSelect/dropDown';
// import CheckBox from './Checkbox/Checkbox';
// import DropDownSearch from './DropDownSelect/dropDown';
// import FastImage from 'react-native-fast-image'
//const ENABLED_IMAGE = require('./images/image.png');
// const DISABLE_IMAGE = require('./images/checkbox_off.png');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      data: [
        'Javascript',
        'Java',
        'Ruby', 'React Native', 'PHP', 'Python', 'Go'
      ],
      items: [
        {
          label: 'Default value is same as label',
          color: 'yellow'
        },
        {
          label: 'Value is different',
          value: "I'm not same as label",
          color: 'red'
        },
        {
          label: 'Color',

        },
        {
          disabled: true,
          label: 'Disabled',
        },
        {
          label: 'Size',
          size: 32,
        },
      ],
    }
  }

  onPress = data => this.setState({ data });

  optionSelected = (selected) => {
    this.setState({ selected });
  }

  render() {
    const { selected, data } = this.state;
    return (

      // <CustomBackgroundImage theme="Image"
      //   source={{ uri: 'https://images.pexels.com/photos/34950/pexels-photo.jpg' }}>
      <CustomView theme="Background">
        <CustomDropdown theme="Regular" />
        {/* <CustomImage theme="ContainMode"
          source={{ uri: 'https://images.pexels.com/photos/34950/pexels-photo.jpg' }} /> */}
        <CustomTouchableOpacity theme="Container">
          <CustomText theme="SuccessMessage">Hii</CustomText>
        </CustomTouchableOpacity>
        <CustomTextInput theme="Regular"
          placeholder="search here" />
        <CustomSwitch theme="Regular" />
        {/* <CustomTouchableOpacity theme="Container">
            <CustomText theme="SuccessMessage">Hii</CustomText>
          </CustomTouchableOpacity> */}
        <CustomCheckBox theme="Regular"
          checked={selected}
          onChange={(selected) => this.optionSelected(!selected)}
        />
        <CustomRadioButtonGroup theme="Regular"
          radioButtons={this.state.items} onPress={this.onPress} />
        <CustomButton theme="BottomStickButton">
          test
        </CustomButton>
      </CustomView>
      // </CustomBackgroundImage >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    marginTop: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  },
  thiss: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  thisss: {
    top: 40,
    bottom: 40,
  },
  scrollView: {
    marginBottom: 50
  },
  image: {
    width: 300,
    height: 60,
    resizeMode: 'contain'
  }
});

