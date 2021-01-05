import "./App.css";
import "./components/Login";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            setToken(_token);
            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                console.log("Here's the user =>", user);
            });
            console.log("I have a token =>", token);
        }
    }, []);
    return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
