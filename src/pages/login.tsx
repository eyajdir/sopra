import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-md shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md flex items-center justify-center">
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Connect with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
