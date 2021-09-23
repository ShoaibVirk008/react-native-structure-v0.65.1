import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Wrappers, Texts, Spacers } from '../../../components';
import { appStyles, routes } from '../../../services';

function Signup(props) {
  const {navigate,goBack}=props.navigation

  return (
    <Wrappers.MainWrapper style={[appStyles.center]}>
      <Texts.XXLTitle>Signup</Texts.XXLTitle>
      <Spacers.DoubleBase />
      <Texts.RegularText onPress={()=>goBack()}>Go Back</Texts.RegularText>
    </Wrappers.MainWrapper>
  );
}

export default Signup;
