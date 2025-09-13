import { Link, Routes, Route, Outlet } from "react-router";
import GirlsPage from "./Grade8aGirls";
import BoysPage from "./Grade8aBoys";
import "../Grade.css";

const grade = "Grade-8a";

function Grade8a() {
  return (
    <div className="grade8a-container">
      <h1>{grade}</h1>
      <nav>
        <Link to="girls">Girls 👧</Link>
        <Link to="boys">Boys 👦</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Grade8a;
