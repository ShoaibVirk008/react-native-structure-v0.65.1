import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MainWrapper, RegularText, XXLTitle } from '../../../components';
import { appStyles } from '../../../services';

function Signin(){


    return (
      <MainWrapper style={[appStyles.center]}>
        <XXLTitle>Signin</XXLTitle>
      </MainWrapper>
    );
}

export default Signin;
