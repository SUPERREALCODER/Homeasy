import { FaGoogle } from "react-icons/fa6";
const Login = () => {
  const handleSignUp = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="min-h-screen flex items-center justify-center gap-4">
          <button
            type="submit"
            className="dark:text-white border-2 border-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white hover:dark:text-gray-800 dark:hover:bg-gray-200 active:text-white active:scale-95 duration-150 flex items-center"
            onClick={handleSignUp}
          >
            <FaGoogle className="mr-4" />
            Login With Google
          </button>
          <button
            type="submit"
            className="dark:text-white border-2 border-gray-600 px-4 py-2 rounded-lg font-medium bg-gray-800 text-white active:scale-95 duration-150 flex items-center"
            onClick={handleSignUp}
          >
            <FaGoogle className="mr-4" />
            Sign Up With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
