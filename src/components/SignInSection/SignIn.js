import { Container } from "react-bootstrap";
import { SignInSection, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from "./SignInElements";

const SignIn = () => {
    return (
        <SignInSection>
            <Container>
                <FormWrap>
                    <Icon to="/">DCO BANK</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign In to your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot my password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </SignInSection>
    );
};

export default SignIn;
