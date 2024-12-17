const Header = () => {
    return (
      <header className="bg-blue-700 text-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6">
          <h1 className="text-3xl font-bold">📚 Library App</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-gray-300 transition font-medium">Home</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  