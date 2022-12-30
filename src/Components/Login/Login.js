import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init"

const auth = getAuth(app)
const Login = () => {
  const [signInWithGoogle,user] = useSignInWithGoogle(auth)
  return (
    <div>
      <div className=" w-3/5 mx-auto bg-gray-500 py-5 mt-5 rounded-lg">
        <button onClick={()=>signInWithGoogle()} className="text-white px-3 py-2 bg-purple-700">Sign In With Google</button>
        <p className="text-center text-2xl text-white font-semibold">
          Please Login Now
        </p>
        <form>
          <input
            className="w-4/5 mx-auto border-2 rounded-lg px-2 py-3 my-1 "
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <br />
          <input
            className="w-4/5 mx-auto overflow-hidden border-2 rounded-lg px-2 py-3 my-1 "
            type="password"
            name="password"
            placeholder="Set Password"
          />
          <br />
          <input
            className="bg-purple-700 text-yellow-500 px-4 py-2 mt-2 rounded-lg font-semibold"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
