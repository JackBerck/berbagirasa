import { Link } from "react-router-dom";

export default function NavLink({ children, url, addClass = "" }) {
  return (
    <li>
      <Link to={url} className={`block py-2 px-3 rounded ${addClass}`}>
        {children}
      </Link>
    </li>
  );
}
