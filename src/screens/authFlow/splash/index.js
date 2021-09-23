import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Wrappers, Texts } from '../../../components';
import { appStyles } from '../../../services';

function Splash () {
 

    return (
      <Wrappers.MainWrapper style={[appStyles.center]}>
        <Texts.XXLTitle>Splash</Texts.XXLTitle>
      </Wrappers.MainWrapper>
    );
}

export default Splash;
