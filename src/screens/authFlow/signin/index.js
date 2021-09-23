import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Wrappers, Spacers, Texts, Loaders, Logos, Toasts, Icons } from '../../../components';
import { appStyles, routes, sizes } from '../../../services';

function Signin(props) {
  const { navigate } = props.navigation
  Toasts.Success('Success')
  return (
    <Wrappers.Main style={[appStyles.center]}>
      <Logos.Primary />
      <Texts.XLTitle>Sign In</Texts.XLTitle>
      <Spacers.Base />
      <Wrappers.Primary>
        <Icons.WithText
          text="Register Now"
          iconName="arrow-right"
          direction="row-reverse"
          onPress={() => navigate(routes.signup)}
        />
      </Wrappers.Primary>
    </Wrappers.Main>
  );
}

export default Signin;
