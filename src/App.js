import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/guest/HomePage";
import CoworkingsPage from "./page/guest/CoworkingsPage";
import DashboardPage from "./page/admin/DashboardPage";
import CoworkingDetailsPage from "./page/guest/CoworkingDetailsPage"
import LoginPage from "./page/guest/LoginPage";
import AdminCoworkingsPage from "./page/admin/AdminCoworkingsPage";
import AdminCoworkingsCreate from "./page/admin/AdminCoworkingCreate";
import AdminCoworkingUpdate from "./page/admin/AdminCoworkingUpdate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/coworkings" element={<CoworkingsPage />}/>
        <Route path="/coworking/details/:id" element={<CoworkingDetailsPage />}/>
        
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/admin" element={<DashboardPage />}/>
        <Route path="/admin/coworkings" element={<AdminCoworkingsPage />}/>
        <Route path="/admin/coworkings/create" element={<AdminCoworkingsCreate />}/>
        <Route path="/admin/coworkings/update/:id" element={<AdminCoworkingUpdate />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
