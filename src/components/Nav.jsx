import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="Nav">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <h2>React Stock App</h2>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/stocks">
              <h3>Stocks</h3>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h3>About</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
