import logo from "../assets/logo.png";

import "./index.css";

const SignIn: React.FC = () => {

    return (
        <div className="sign-in-page">
            <img src={logo} alt="NdrewCoding Logo" />
            <input type="text" defaultValue="test@gmail.com" />
            <input type="password" defaultValue="12345678" />
            <button onClick={() => { }}>
                Sign In
            </button>
        </div>
    );
}

export default SignIn;