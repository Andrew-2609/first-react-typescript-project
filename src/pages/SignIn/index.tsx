import logo from "../../assets/logo.png";

import { Container, Logo, Input, Button } from "./styles";

const SignIn: React.FC = () => {

    return (
        <Container className="sign-in-page">
            <Logo src={logo} alt="NdrewCoding Logo" />
            <Input type="text" defaultValue="test@gmail.com" />
            <Input type="password" defaultValue="12345678" />
            <Button onClick={() => { }}>
                Sign In
            </Button>
        </Container>
    );
}

export default SignIn;