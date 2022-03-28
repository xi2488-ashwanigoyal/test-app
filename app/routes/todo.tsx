import Sidebar from "~/components/Sidebar";

const TodoLayout = () => {
  return (
    <div className="flex w-screen h-screen text-gray-700">
        <Sidebar />
      <div className="flex flex-col flex-grow">
        ...
      </div>
      {/* Component End  */}
    </div>
  );
}

export default TodoLayout;