import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Comparison from "./components/pages/Comparison";
import ScrollToTop from "./components/ScrollToTop";
import MyProfile from "./components/pages/MyProfile";
import Reviews from "./components/pages/Reviews";
import { useState, useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/compare" component={Comparison} />
          <Route path="/my-profile" component={user ? MyProfile : SignUp} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
