/*        <CustomButton
          text="Sign In with Google"
          onPress={onRegisterPressed}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onRegisterPressed}
          bgColor="#e3e3e3"
          fgColor="#363636"
        /> */

import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
  const onSignInGoogle = () => {
    console.warn('Sign in Google');
  };

  const onSignInApple = () => {
    console.warn('Sign in Apple');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
