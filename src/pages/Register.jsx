import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const firstInput = isNaN(emailPhone)
    ? { email: emailPhone }
    : { phone: emailPhone };
  const navigate = useNavigate();
  const handleSigningUp = () => {
    fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...firstInput,
        username,
        password,
      }),
    })
      .then((data) => {
        data.json();
        console.log(data);
        navigate("/login");
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <section className="flex flex-col gap-6 items-center md:pb-8 md:pt-6 py-10 justify-center px-8 md:px-14 sm:px-12">
      <div className="flex flex-row w-[720px] h-fit bg-whitew my-4 rounded-md border-blackw border-2 border-opacity-5 overflow-hidden">
        <div className="w-1/2 h-full flex flex-col items-center gap-8 py-8">
          <h2 className="text-3xl flex flex-row font-semibold ">
            <div>Registering in </div>
            <div> </div>
            <div className={`font-["K2D"] text-primary ml-2`}> Bookly!</div>
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-xl font-normal text-blackw pl-2 pb-1"
              >
                Name
              </label>
              <input
                type="text"
                className="text-sm w-64 px-2.5 py-3 outline-none rounded-lg border border-blackw border-opacity-10"
                id="username"
                placeholder="Enter your name"
                value={username}
                onInput={(e) => setUsername(e.currentTarget.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="emailPhone"
                className="text-xl font-normal text-blackw pl-2 pb-1"
              >
                Email/Phone Number
              </label>
              <input
                type="text"
                className="text-sm w-64 px-2.5 py-3 outline-none rounded-lg border border-blackw border-opacity-10"
                id="emailPhone"
                placeholder="Enter your email or phone number"
                value={emailPhone}
                onInput={(e) => setEmailPhone(e.currentTarget.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-xl font-normal text-blackw pl-2 pb-1"
              >
                Password
              </label>
              <input
                type="text"
                className="text-sm w-64 px-2.5 py-3 outline-none rounded-lg border border-blackw border-opacity-10"
                id="password"
                placeholder="Enter your password"
                value={password}
                onInput={(e) => setPassword(e.currentTarget.value)}
              />
              <div className="flex justify-between mt-0.5 px-0.5">
                <div className="flex items-center mt-1">
                  <input
                    type="checkbox"
                    name=""
                    id="remember"
                    className=" cursor-pointer"
                  />
                  <label
                    htmlFor="remember"
                    className="text-xs opacity-50 pl-1 cursor-pointer select-none "
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              className="text-center text-lg font-semibold bg-primary text-whitew rounded-lg w-64 shadow-md shadow-primary py-3"
              onClick={handleSigningUp}
            >
              Register
            </button>
            <div className="flex flex-row items-center gap-2 ">
              <hr className="w-[108px] h-1 bg-gray-500 rounded-sm" />
              <div className="text-gray-500 font-bold">OR</div>
              <hr className="w-[108px] h-1 bg-gray-500 rounded-sm" />
            </div>
            <button className="text-center text-lg bg-whitew text-blackw rounded-lg w-64 shadow-md shadow-gray-400 py-3 border border-gray-800 border-opacity-5">
              Continue with Google
            </button>
            <div className="text-sm flex gap-1 justify-between">
              <div className="text-blackw font-medium">have an account?</div>
              <Link
                className="underline text-purple-600 font-semibold"
                to="/login"
              >
                Log in now!
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[616px] w-1/2">
          <img src="/library.png" alt="" className="h-full object-fill" />
        </div>
      </div>
    </section>
  );
}
