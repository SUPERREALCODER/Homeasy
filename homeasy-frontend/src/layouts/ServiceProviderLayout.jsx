import { Outlet } from "react-router-dom";
// import Dashboard from "../pages/service_provider/Dashboard";

const ServiceProviderLayout = () => {
  return (
    <>
      {/* <Dashboard /> */}
      <Outlet />
    </>
  );
};

export default ServiceProviderLayout;
