import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase.config";

function Login() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const user = auth.currentUser;
  if (user) {
    navigate(from, { replace: true });
  }
  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="flex justify-center py-14">
      <div className="flex flex-col justify-center border p-8 shadow-sm rounded-md bg-[#ebfdff]">
        <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <p className="text-center py-2 font-bold border my-2 bg-white rounded-md">
            Sign in with Phone
          </p>
          <div className="mb-3">
            <PhoneInput
              className="border py-2 px-4 bg-white rounded-md"
              defaultCountry="BD"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div className="mt-6" id="recaptcha-container"></div>
          </div>
          <div className="py-4 flex justify-between">
            <Link to="/">
              <button className="bg-red-500 px-4 py-1 rounded-sm text-white">
                Cancel
              </button>
            </Link>
            &nbsp;
            <button
              type="submit"
              className="bg-green-500 px-2 py-1 rounded-sm text-white"
            >
              Send Otp
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <div className="mb-3">
            <input
              className="px-6 border py-2 w-full rounded-md"
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />

            <div className="mt-6" id="recaptcha-container"></div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 px-2 py-1 rounded-sm text-white"
            >
              Verify Otp
            </button>
          </div>
          <p className="text-gray-500 pt-6">
            Check your phone for getting code!
          </p>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
