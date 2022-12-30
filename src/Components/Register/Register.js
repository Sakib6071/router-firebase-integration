import React from "react";

const Register = () => {
  return (
    <div>
      <div className=" w-3/5 mx-auto bg-gray-500 py-5 mt-5 rounded-lg">
        <p className="text-center text-2xl text-white font-semibold">
          Please Register Now
        </p>
        <form>
          <input
            className="w-4/5 mx-auto border-2 rounded-lg px-2 py-3 my-1 "
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
          <br />
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
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
