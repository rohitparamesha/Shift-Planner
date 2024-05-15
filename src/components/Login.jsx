import TextInput from "./TextInput";

const Login = () => {
  return (
    <div className="w-full h-screen bg-[url('../public/assets/images/background_texture.png')] bg-contain flex justify-center items-center">
      <div className="w-96 h-[510px] bg-black rounded-2xl py-6 font-base">
        {/* logo */}
        <div className="flex justify-end pr-6">
          <img
            className="w-[125px]"
            src="../public/assets/images/shift_planner_svg.svg"
            alt=""
          />
        </div>

        {/* login content */}
        <div className="text-white px-12">
          <h2 className="font-amiri font-bold text-[27px] mt-4">
            Let’s join with us
          </h2>
          <p className="font-base text-fade text-xs mt-[2px]">
            “You can sign in or join with us if you’re new to shift planner”
          </p>
          <div className="bg-white text-black flex rounded-full overflow-hidden mt-6">
            <button className="bg-primary py-2 px-6 text-xs rounded-full font-medium w-full">
              Mobile Number
            </button>
            <button className="py-2 px-6 text-xs rounded-full font-medium w-full">
              Email ID
            </button>
          </div>

          <div>
            <TextInput />
          </div>

          <button className="font-base text-xs font-semibold w-full bg-white text-black py-3 rounded-full mt-5">
            Continue
          </button>

          <img
            src="../public/assets/images/or_login.png"
            alt=""
            className="mt-3"
          />
          <p className="font-semibold text-center text-xs mt-2">Login using</p>

          <div className="flex gap-3 border border-gray-400 items-center py-2 mt-3 rounded-md">
            <img
              src="../public/assets/images/google_icon.png"
              alt=""
              className="ml-5"
            />
            <p className="text-sm font-gFont font-normal w-full text-center -ml-5">
              Sign in with Google
            </p>
          </div>

          <p className="text-xs font-medium text-fade mt-3 text-center tracking-wide">
            Are you a team head?
            <span className="text-white underline ml-1">Sign Up.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
