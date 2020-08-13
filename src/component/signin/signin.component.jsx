import React from 'react';

import CustomButton from './../custom-button/custom-button.component';
import FormInput from './../form-input/form-input.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import './signin.styles.scss';

class SigninComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: ''});
        } catch (error) {
          console.log(error);
        }

    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value }) //dynamically set state
    }
    render() {
        return (
          <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onClick={this.handleSubmit}>
              <FormInput
                name='email'
                type='email'
                value={this.state.email}
                label='email'
                required
                handleChange={this.handleChange}
              />
              <FormInput
                name='password'
                type='password'
                value={this.state.password}
                required
                label='password'
                handleChange={this.handleChange}
              />

              <div className='buttons'>
                <CustomButton type='submit'>sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  sign in with google
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SigninComponent;