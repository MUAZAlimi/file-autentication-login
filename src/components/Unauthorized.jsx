import { useNavigate } from "react-router-dom"


const Unauthorized = () => {
    const navigate = useNavigate()
    const goBack = navigate(-1)
  return (
    <section>
      <h1>Unauthorize ⚠️⚠️⚠️</h1>
      <br />
      <p>You do not have access to the requested Page</p>

      <div className="flexGrow">
        <button onClick={goBack}>Go Back</button>
      </div>
    </section>
  )
}

export default Unauthorized
