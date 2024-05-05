import './App.css'
import React, {useEffect} from "react";

const CLIENT_ID = "Ov23lirDCiQG63ws4YNm";

function App() {

    const [rerender, setRerender] = React.useState(false);
    const [user, setUser] = React.useState({});

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get("code");

        if (code && localStorage.getItem("accessToken") === null) {
            const getAccessToken = async () => {
                await fetch("http://localhost:8080/getAccessToken?code=" + code, {
                    method: "GET",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data && data.access_token) {
                            localStorage.setItem("accessToken", data.access_token);
                            setRerender(!rerender);
                            getUserData();
                        }
                    });
            }

            getAccessToken();
        } else {
            getUserData();
        }
    }, []);

    async function getUserData() {
        await fetch("http://localhost:8080/getUserData", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then((res) => res.json())
            .then((data) => setUser(data))
    }

    function loginWithGithub() {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);
    }

    function logout() {
        localStorage.clear();
        setRerender(!rerender);
    }

    return (
        <>
            {localStorage.getItem('accessToken') && user ? (
                <>
                    <h1>You are logged in</h1>
                    <img style={{borderRadius: '50%'}} width={200} height={200} src={user.avatar_url} alt='avatar'/>
                    <h2>User info:</h2>
                    {user.login && <h3>The name: {user.login}</h3>}
                    {user.email && <h3>Email: {user.email}</h3>}
                    {user.location && <h3>The location: {user.location}</h3>}
                    <p>
                        {user.html_url && <a href={user.html_url}>Link to GitHub Profile</a>}
                    </p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <button onClick={loginWithGithub}>Login with GitHub</button>
            )}
        </>
    )
}

export default App
