import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Collection from "./views/collection/Collection";
import Honey from "./components/honey/Honey";
import SaffronProduct from "./components/saffron/SaffronProduct";
import ShilajitProduct from "./components/shilajit/ShilajitProduct";
import Vinegar from "./components/vinegar/Vinegar";
import ImmuityAndStrength from "./components/immunityAndStrength/ImmuityAndStrength";
import Cart from "./views/cart/Cart";
import OurStory from "./views/ourstory/OurStory";
import Contact from "./views/contact/Contact";
import TermsCondition from "./views/termscondition/TermsCondition";
import Registration from "./views/loginRegister/Registration";
import Login from "./views/loginRegister/Login";
import ForgotPassword from "./views/loginRegister/ForgotPassword";
import PrivacyPolicy from "./views/privacyPolicy/PrivacyPolicy";
import About from "./views/about/About";
import USP from "./views/usp/USP";
import RefundPolicy from "./views/refundPolicy/RefundPolicy";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collection />}>
        <Route path="honey" element={<Honey />} />
        <Route path="saffron" element={<SaffronProduct />} />
        <Route path="shilajit" element={<ShilajitProduct />} />
        <Route path="vinegar" element={<Vinegar />} />
        <Route path="immunityandStrength" element={<ImmuityAndStrength />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/ourstory" element={<OurStory />} />
      <Route path="/terms-conditions" element={<TermsCondition />} />
      <Route path="/account">
        <Route path="/account/register" element={<Registration />} />
        <Route index path="/account/login" element={<Login/>} />
        <Route  path="/account/recover" element={<ForgotPassword/>} />
      </Route>
      <Route  path="cookie-privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/about-us" element={<About/>}/>
      <Route path="/our-usp" element={<USP/>}/>
      <Route path='/return-refund-policy' element={<RefundPolicy/>}/>

    </Routes>
  );
}

export default App;
