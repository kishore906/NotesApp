import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Error 404 Page Not Found</h2>
      <p>Sorry for the Error..</p>
      <p>
        <Link to="/">Visit our HomePage..</Link>
      </p>
    </main>
  );
};

export default Missing;
