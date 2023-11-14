import { Link } from "react-router-dom"


const LinkPage = () => {
  return (
    <section>
      <h1>Links</h1>
      <br />
      <h2>Public</h2>
      <br />
      <Link to='./Login'>Login</Link>
      <Link to='./Register'>Register</Link>

      <h2>Private</h2>
      <Link to='/'>Home</Link>
      <Link to='./Editor'>Editor Page</Link>
      <Link to='./Admin'>Admin Page</Link>
    </section>
  )
}

export default LinkPage
