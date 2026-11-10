
function Header() {
    return (
        <header className="header flex items-center gap-3 bg-white px-6 py-4">
            <div className="logo bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                SMS
            </div>
            <div>
                <h2 className=" header-title  text-lg font-bold">Student Management System</h2>
                <p className="ml-auto text-xs text-gray-500 text-gray-900">Manage your students efficiently</p>
            </div>
            <div>
                
            </div>
            <p className="registered ml-auto text-xs text-gray-500">
                5 Students Registered
            </p>
        </header>
    );
}

export default Header;