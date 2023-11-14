import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import LinkPage from "./components/LinkPage";
import Unauthorized from "./components/Unauthorized";
import Home from "./components/Home";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Layout/>}/>
        {/* public route */}
        <Route index element={<Login />} />
        <Route path="/LinkPage" element={<LinkPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* private route */}
        <Route path='/' element={<Home/>} />
      </Routes>
    </main>
  );
};

export default App;
