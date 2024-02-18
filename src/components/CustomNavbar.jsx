import Link from "next/link";

const CustomNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="h-8 w-8 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your logo SVG or image here */}
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Your Logo
          </span>
        </div>
        {/* Navigation Links */}
        <div className="flex">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            Home
          </Link>
          <Link
            href="/add-task"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            Add Task
          </Link>
          <Link
            href="/show-task"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            Show Tasks
          </Link>
          <Link
            href="/login"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
