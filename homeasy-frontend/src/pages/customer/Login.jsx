import { FaGoogle } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { useAuth } from "../../context/AuthContext";
const Login = () => {
  const { LoginAsCustomer, LoginAsServiceProvider } = useAuth();

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="min-h-screen flex items-center justify-center gap-4">
          <button
            type="submit"
            className="dark:text-white border-2 border-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-800 hover:text-white hover:dark:text-gray-800 dark:hover:bg-gray-200 active:text-white active:scale-95 duration-150 flex items-center"
            onClick={LoginAsCustomer}
          >
            <FaGoogle className="mr-4" />
            Login With Google As a Customer
          </button>
          <button
            type="submit"
            className="dark:text-white border-2 border-gray-600 px-4 py-2 rounded-lg font-medium bg-gray-800 text-white active:scale-95 duration-150 flex items-center"
            onClick={LoginAsServiceProvider}
          >
            <GrUserWorker className="mr-4" />
            Login With Google As a Service Provider
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
