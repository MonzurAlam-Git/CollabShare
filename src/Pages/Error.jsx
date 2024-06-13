import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold">Error</h1>
      <Link to="/" className="btn btn-error">
        Home
      </Link>
    </div>
  );
};

export default Error;
