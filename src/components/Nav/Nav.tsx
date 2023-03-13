import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/homepage">Homepage</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/random">Random Outfit</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/library">Closet</Link>
        </li>
      </ul>
    </nav>
  );
}
