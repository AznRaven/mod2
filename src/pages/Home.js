import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/marvel">
        <div>Marvel</div>
      </Link>
    </>
  );
}
