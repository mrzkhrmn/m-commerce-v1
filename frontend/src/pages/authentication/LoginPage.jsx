import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useLoginMutation } from "../../redux/api/authApiSlice";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/reducers/authSlice";

export const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData).unwrap();
      dispatch(loginSuccess(formData));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#532B2B] min-h-screen  w-screen flex min-w-[30rem] px-0 xl:px-32">
      <div className="flex flex-1 rounded-[2rem] overflow-hidden relative">
        <div className="bg-white flex-[2_2_0] flex items-center justify-center ">
          <div className="flex flex-col shadow-2xl w-full  max-w-xl p-12 rounded-xl">
            <h2 className="text-3xl font-semibold text-[#F47458] mb-10">
              M-Commerce
            </h2>
            <p className="text-gray-400 mb-8">Let&apos;s find your need!</p>
            <h2 className="text-5xl font-semibold mb-10">Log in</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={formData.email}
                  className="bg-[#FFF6F4] p-2 outline-none focus:ring-1 focus:ring-black/20"
                  type="email"
                  placeholder="Your email here..."
                  id="email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => handleChange(e)}
                  value={formData.password}
                  autoComplete="off"
                  className="bg-[#FFF6F4] p-2  outline-none focus:ring-1 focus:ring-black/20 "
                  type="password"
                  placeholder="Password..."
                  id="password"
                  required
                />
              </div>
              <button
                disabled={isLoginLoading}
                className="bg-[#F47458] hover:bg-[#d9684f] transition duration-200 text-white py-2 disabled:opacity-70"
              >
                {isLoginLoading ? "Logging in..." : "Login"}
              </button>
            </form>
            <p className="text-center mt-6">
              Don&apos;t you have an account?{" "}
              <Link to={"/signup"} className="hover:underline text-blue-500">
                Sign up!
              </Link>
            </p>
            <p className="w-full text-center flex items-center before:bg-black before:flex-1 after:bg-black  after:h-[2px] before:h-[2px] after:flex-1 my-4">
              <span className="px-1"> or </span>
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                disabled={isLoginLoading}
                className="flex gap-2 items-center justify-center w-[135px] bg-[#F47458] hover:bg-[#d9684f] transition duration-200 py-2 disabled:opacity-70"
              >
                <FaGoogle color="white" size={25} />
              </button>
              <button
                disabled={isLoginLoading}
                className="flex gap-2 items-center justify-center w-[135px] bg-blue-500 hover:bg-blue-600  transition duration-200 py-2 disabled:opacity-70"
              >
                <FaFacebook color="white" size={25} />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#ffdac2] xl:block hidden flex-[1_1_0]"></div>
        <div className="xl:block hidden absolute w-[650px] left-[55%] top-[15%]">
          <img src="./login.png" alt="singup image" />
        </div>
      </div>
    </div>
  );
};
