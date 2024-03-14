import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Topbar from "./components/common/Topbar";
import Blogs from "./pages/Blogs";
import PrivacyPolicy from "./pages/footer/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import TodayPrice from "./pages/TodayPrice";
import KycAndAml from "./pages/footer/KycAndAml";
import TermCondition from "./pages/footer/TermCondition";
import Community from "./pages/community/Community";
import CommunityReply from "./pages/community/CommunityReply";
import Login from "./pages/admin/Login";
import SignUp from "./pages/admin/SignUp";
import SinglePage from "./components/blogs/SinglePage";

function App() {
  return (
    <div className="bg-[#1A171E] w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Topbar />}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/market" element={<TodayPrice />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/tearmandcondition" element={<TermCondition />} />
            <Route path="/privacyandpolicy" element={<PrivacyPolicy />} />
            <Route path="/kycandamlpolicy" element={<KycAndAml />} />
            <Route path="/login" element={<Login />} />
            <Route path='/blog/:id' element={<SinglePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/community" element={<Community />}>
              <Route path="/community/reply" element={<CommunityReply />} />

            </Route>

            {/* <Route path="*" element={<PageNotFound/>}/> */}
          </Route>
          {/* <Route path="*" element={<PageNotFound/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
