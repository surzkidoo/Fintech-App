import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import PaymentPage from "./Pages/PaymentPage";
import NotificationPage from "./Pages/NotificationPage";
import TransactionPage from "./Pages/TransactionPage";
import AccountPage from "./Pages/AccountPage";
import SettingsPage from "./Pages/SettingsPage";
import Dashboard from "./Components/Dashboard";
import LandingPage from "./Pages/LandingPage";
import SignupPage from "./Pages/SignupPage";
import SigninPage from "./Pages/SigninPage";
import ActivityPage from "./Pages/ActivityPage";
import Calander from "./Pages/Calander";


function App() {
  return (
    <BrowserRouter>

          <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/register" element={<SignupPage/>} />
          <Route path="/login" element={<SigninPage/>} />

            <Route element={<Dashboard/>}>
            <Route path="/dashboard/index" index element={<IndexPage/>} />
            <Route path="/dashboard/payment" element={<PaymentPage/>} />
            <Route path="/dashboard/notification" element={<NotificationPage/>} />
            <Route path="/dashboard/transaction" element={<TransactionPage/>} />
            <Route path="/dashboard/payment" element={<PaymentPage/>} />
            <Route path="/dashboard/activity" element={<ActivityPage/>} />
            <Route path="/dashboard/calander" element={<Calander/>} />
            <Route path="/dashboard/account" element={<AccountPage/>} />
            <Route path="/dashboard/settings" element={<SettingsPage/>} />
            </Route>
          </Routes>
      
    </BrowserRouter>
  );
}

export default App;
