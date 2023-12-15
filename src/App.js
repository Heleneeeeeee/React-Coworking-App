import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import CoworkingsPage from "./page/CoworkingsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/coworkings" element={<CoworkingsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
