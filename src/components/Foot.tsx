import { Link } from 'react-router-dom';

export default function Foot() {
  return (
    <div className="footer">
      <div className="heading-text">
        <Link to="/">
          <div className="heading">Distill</div>
        </Link>
        <p>is dedicated to clear explanations of machine learning</p>
      </div>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/prize">Submit</Link>
        <Link to="/submit">Prize</Link>
        <Link to="/prize">Archive</Link>
        <Link to="/submit">GitHub</Link>
      </div>
    </div>
  );
}
