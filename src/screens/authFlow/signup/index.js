import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MainWrapper, XXLTitle } from '../../../components';
import { appStyles } from '../../../services';

function Signup() {

  return (
    <MainWrapper style={[appStyles.center]}>
      <XXLTitle>Signup</XXLTitle>
    </MainWrapper>
  );
}

export default Signup;
