const TodoForm = () => {
  return (
    <form className="flex flex-col bg-white rounded shadow-lg pl-12 pb-12 pr-12 mt-12">
      <label className="font-semibold text-xs" htmlFor="usernameField">
        Title
      </label>
      <input className="flex items-center h-12 w-96 px-4 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
      <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
        Content
      </label>
      <textarea className="flex items-center h-20 px-4 bg-gray-200 w-96 mt-2 rounded focus:outline-none focus:ring-2 p-1" />
      <button className="flex items-center justify-center h-12 w-96 px-6 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
        Publish
      </button>
    </form>
  )
}

export default TodoForm