import { useNavigate } from "react-router-dom";

const ErrorPage = ({ error }) => {
  const navigate = useNavigate();
  
  // Optional: Default error message if error object is undefined
  const errorMessage = error ? error.statusText || error.message : "An unexpected error occurred.";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-md text-gray-500 italic mb-6">{errorMessage}</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 btn bg-highlight text-white rounded-lg hover:text-highlight"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
