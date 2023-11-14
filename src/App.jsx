import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import LinkPage from "./components/LinkPage";
import Unauthorized from "./components/Unauthorized";
import Home from "./components/Home";
import Editor from "./components/Editor";
import Admin from "./components/Admin";
import Lounge from "./components/Lounge";
import Missing from "./components/Missing";

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
        <Route path='/editor' element={<Editor/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/lounge' element={<Lounge/>} />
        {/* catch all err */}
        <Route path="*" element={<Missing />}/>
      </Routes>
    </main>
  );
};

export default App;
