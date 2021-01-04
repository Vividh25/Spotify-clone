import React from "react";
import { loginUrl } from "../spotify";
import "../styles/Login.css";

function Login() {
    return (
        <div className="login">
            <div className="logo__class">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png"
                    alt=""
                />
            </div>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;
