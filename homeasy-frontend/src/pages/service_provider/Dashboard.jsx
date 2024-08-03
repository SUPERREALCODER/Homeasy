import { useAuth } from "../../context/AuthContext";
import useFetchUser from "../../hooks/useFetchUser";

const Dashboard = () => {
  const { logout } = useAuth();
  const user = useFetchUser();
  return (
    <>
      <div className="text-xl text-center font-medium max-w-full mx-auto bg-slate-100">
        <div className="w-full min-h-screen">
          Dashboard Page For Service Provider
          <h1 className="text-3xl">Welcome {user?.name}!</h1>
          <button
            onClick={logout}
            className="bg-blue-500 px-6 py-2 rounded-lg text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
