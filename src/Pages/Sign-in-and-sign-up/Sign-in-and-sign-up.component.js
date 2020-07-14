import React from 'react';
import SignIn from '../../Components/Sign-In/SignIn.component';
import SignUp from '../../Components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
