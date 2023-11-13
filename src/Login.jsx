import { useEffect, useState, useRef } from "react";

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
      userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg("")
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!username || !password) {
            setErrMsg('Invalid Entry');
            return;
          }
          console.log(username, password)
          setSuccess(true)
          username("")
          password("")
      }
    
    
  return (
    <>
        {success ? ( 
        <section>
        <h1>Success</h1>
        <p>
          <a href="./Login">Sign in</a>
        </p>
      </section>

    ) :(
        <section>
            <p ref={errRef} className={ errMsg ? "errMsg": "offscreen"} aria-live="assertive">
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
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                    />
                </label>
                <label>
                    Password:
                    <input 
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    />
                </label>
                <button
                
                >
                    Sign in
                </button>
            </form>
            <p>
                 Need an Acount ? <br />
                 <span className="line">
                    <a href="./Login">
                        Sign in
                    </a>
                 </span>
            </p>
        </section>     
    )} 
    </>
  )
}

export default Login
