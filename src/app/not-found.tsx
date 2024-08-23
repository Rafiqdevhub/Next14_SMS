import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mb-8">
          Page Not Found
        </p>
        <Link
          href="/"
          className="px-6 py-2 text-lg font-medium text-white bg-blue-600 rounded hover:bg-blue-500 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
