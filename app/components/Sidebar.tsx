const Sidebar = () => {
    return (<div className="flex flex-col w-56 border-r border-gray-300">
        <button className="relative text-sm focus:outline-none group">
            <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
                <h1 className="text-lg font-medium">XKE: Remix</h1>
            </div></button>
        <div className="flex flex-col flex-grow p-4 overflow-auto">
            <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
                <span className="leading-none">List Todo</span>
            </a>
            <a className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300" href="#">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="ml-2 leading-none">New</span>
            </a>
        </div>
    </div>
    )
}

export default Sidebar