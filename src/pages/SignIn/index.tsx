import logo from "../../assets/logo.png";

import * as Styles from "./styles";
import "./index.css";

const SignIn: React.FC = () => {

    return (
        <Styles.Container className="sign-in-page">
            <img src={logo} alt="NdrewCoding Logo" />
            <input type="text" defaultValue="test@gmail.com" />
            <input type="password" defaultValue="12345678" />
            <button onClick={() => { }}>
                Sign In
            </button>
        </Styles.Container>
    );
}

export default SignIn;