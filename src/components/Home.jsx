import { Link } from "react-router-dom"


const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>You are logged in</p>
      <br />
        <Link to='./Editor'>Go to the Editor Page</Link>
      <br />
        <Link to='./Admin'>Go to the Admin Page</Link>
      <br />
        <Link to='./Lounge'>Go to the Lounge Page</Link>
      <br />
        <Link to='./LinkPage'>Go to the Link Page</Link>
    </section>
  )
}

export default Home
