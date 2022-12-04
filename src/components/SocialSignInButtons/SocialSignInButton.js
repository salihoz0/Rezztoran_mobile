import React from 'react';
import CustomButton from '../CustomButton';

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
        text="Google ile Giriş Yap"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Apple ile Giriş Yap"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
