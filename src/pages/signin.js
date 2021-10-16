import React from "react";
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';

export default function SignIn() {
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>

                    <Form.Base  method="POST">
                    <Form.Input
                        placeholder="Email address"
                        value=""
                    />
                    <Form.Input
                        type="password"
                        value=""
                        autoComplete="off"
                        placeholder="Password"
                    />
                    <Form.Submit disabled="" type="submit" data-testid="sign-in">
                        Sign In
                    </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
}