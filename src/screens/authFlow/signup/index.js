import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Wrappers, Spacers, Texts, Loaders, Logos, Toasts, Icons } from '../../../components';
import { appStyles, routes, sizes } from '../../../services';

function Signup(props) {
  const {navigate,goBack}=props.navigation

  return (
    <Wrappers.Main style={[appStyles.center]}>
      <Logos.Primary />
      <Texts.XLTitle>Sign Up</Texts.XLTitle>
      <Spacers.Base />
      <Wrappers.Primary>
        <Icons.WithText
          text="Go Back"
          iconName="arrow-left"
          //direction="row-reverse"
          onPress={() => goBack()}
        />
      </Wrappers.Primary>
    </Wrappers.Main>
  );
}

export default Signup;
