import logo from "../../assets/logo.png";

import * as Styles from "./styles";
import "./index.css";

const SignIn: React.FC = () => {

    return (
        <Styles.Container className="sign-in-page">
            <Styles.Logo src={logo} alt="NdrewCoding Logo" />
            <Styles.Input type="text" defaultValue="test@gmail.com" />
            <Styles.Input type="password" defaultValue="12345678" />
            <Styles.Button onClick={() => { }}>
                Sign In
            </Styles.Button>
        </Styles.Container>
    );
}

export default SignIn;