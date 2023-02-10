import { useState } from "react";
import "./Auth.css";
import {
  signOut,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth } from "../config/firebase";

const Auth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setuser] = useState(null);

  console.log("AUTH", auth.currentUser);

  console.log(otp.length);

  const logOut = () => {
    signOut(auth);
  };

  const sendOtp = async () => {
    try {
      let recaptchaVerifier = await new RecaptchaVerifier(
        "recaptcha",
        { size: "invisible" },
        auth
      );

      let confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        recaptchaVerifier
      );

      await console.log(confirmation);

      setuser(confirmation);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async () => {
    console.log(user);
    if (otp.length === 6) {
      let result = await user.confirm(otp);
    }
  };

  return (
    <div className="auth_login">
      <input
        type="num"
        placeholder="enter phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={sendOtp}>Send Otp</button>
      <div id="recaptcha"></div>

      <input
        type="text"
        placeholder="enter otp"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Confirm Otp</button>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
};

export default Auth;
