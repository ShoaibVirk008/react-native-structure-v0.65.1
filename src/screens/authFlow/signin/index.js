import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Wrappers, Spacers, Texts } from '../../../components';
import { appStyles, routes, sizes } from '../../../services';

function Signin(props) {
const {navigate}=props.navigation

  return (
    <Wrappers.MainWrapper style={[appStyles.center]}>
      <Texts.XXLTitle>Signin</Texts.XXLTitle>
      <Spacers.DoubleBase />
      <Texts.RegularText onPress={()=>navigate(routes.signup)}>Go to Signup</Texts.RegularText>
    </Wrappers.MainWrapper>
  );
}

export default Signin;
