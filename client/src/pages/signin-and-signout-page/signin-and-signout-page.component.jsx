import React from "react";
import { SignInAndSignUpContainer } from './signin-and-signout-page.styles';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from "../../components/sign-up/sign-up.component";
const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);
export default SignInAndSignUpPage;