import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Styles.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:9000/login", {
                username,
                password,
            });
            alert(response.status + " " + response.data);
            navigate("/welcome");
        } catch (err) {
            setMessage(err.response?.data || "default error message");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <div className="form-container">
            <h1>Log In</h1>
            <form onSubmit={handleLogin} className="form">
                <label htmlFor={"username"}>
                    Username
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handleChange(setPassword)}
                    />
                </label>

                <div className="action-box">
                    <button type="submit" disabled={loading}>
                        submit
                    </button>
                    <Link to={"/signup"}>Sign up</Link>
                </div>
                {message && <p style={{ color: "red" }}>{message}</p>}
            </form>
        </div>
    );
}

export default Login;
