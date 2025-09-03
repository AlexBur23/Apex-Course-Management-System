const Header = () => {
  return (
    <header className="w-full h-18 flex items-center justify-between top-0 bg-gray-900 text-green-500">
      <div className="flex items-center">
        <img
          src="/apex.svg"
          alt="The apex logo"
          width={100}
          height={100}
          className="ml-0"
        />
        <h1>Apex Course Management System</h1>
      </div>

      <button className="button">Logout</button>
    </header>
  );
};

export default Header;
