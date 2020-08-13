import React from 'react';

import SigninComponent from '../../component/signin/signin.component';
import SignUp from '../../component/sign-up/sign-up.component';
import './signin-signup.styles.scss';

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SigninComponent />
        <SignUp />
    </div>
)

export default SignInAndSignUp;