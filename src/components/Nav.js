import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home Page</div>
      </Link>
      <Link to="/marvel">
        <div>Marvel</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/form">
        <div>Sign up</div>
       </Link>
    </div>
    
  );
}