import { Link } from "react-router-dom";

export default function FooterLink({ title, links }) {
  return (
    <div>
      <h2 className="mb-2 font-semibold uppercase">{title}</h2>
      <ul className="text-gray-500 font-medium flex flex-col gap-1">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="hover:underline">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
