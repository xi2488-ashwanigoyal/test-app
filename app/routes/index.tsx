import { Outlet } from "remix";
import Sidebar from "~/components/Sidebar";

export default function Index() {
  return (
    <div className="flex w-screen h-screen text-gray-700">
      {/* Component Start */}
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Outlet />
      </div>
      {/* Component End  */}
    </div>
  );
}
