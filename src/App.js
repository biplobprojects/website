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
import AllProducts from "./components/allProducts/AllProducts";
import AccaciaHoney from "./views/honey/AccaciaHoney";
import JamunHoney from "./views/honey/JamunHoney";
import WildHoney from "./views/honey/WildHoney";
import LitchiHoney from "./views/honey/LitchiHoney";
import TulsiHoney from "./views/honey/TulsiHoney";
import Address from "./views/addresses/Address";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collection />}>
        <Route path="all" element={<AllProducts />} />
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
        <Route path="register" element={<Registration />} />
        <Route index path="login" element={<Login />} />
        <Route path="recover" element={<ForgotPassword />} />
        <Route path = "addressess" element ={<Address/>}/>
      </Route>
      <Route path="cookie-privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/our-usp" element={<USP />} />
      <Route path="/return-refund-policy" element={<RefundPolicy />} />
      <Route path="/accacia-honey" element={<AccaciaHoney />} />
      <Route path="/jamun-honey" element={<JamunHoney />} />
      <Route path = "/wild-honey" element={<WildHoney/>}/>
      <Route path="/litchi-honey" element={<LitchiHoney/>}/>
      <Route path="/tulsi-honey" element={<TulsiHoney/>}/>

    </Routes>
  );
}

export default App;
