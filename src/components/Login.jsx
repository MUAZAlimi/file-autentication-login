import { useEffect, useState, useRef, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const Login = () => {
  const LOGIN_URL = "/auth";
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data))
      const accessToken = response?.data.accessToken
      const roles = response?.data?.roles

      setAuth(user, pwd, roles, accessToken)

      setSuccess(true);
      user("");
      pwd("");
    } catch (error) {
        if (!error.response) {
            setErrMsg('No Server Resonse')
        }else if (error.response?.status === 400) {
            setErrMsg('missing username or password')
        }else if (error.response?.status === 401) {
            setErrMsg('unauthorized')
        }else{
            setErrMsg('login failed')
        }
        errRef.current.focus();
    }
    // if(!user || !password) {
    //     setErrMsg('Invalid Entry');
    //     return;
    //   }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Login successfully</h1>
          <p>
            <a href="/">Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>sign in</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </label>
            <button>Sign in</button>
          </form>
          <p>
            Need an Acount ? <br />
            <span className="line">
              <a href="./Login">Sign in</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
