import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/"><div className='heading'>Distill</div></Link>
      <div className="nav-links">
        <Link to="/about">ABOUT</Link>
        <Link to="/prize">PRIZE</Link>
        <Link to="/submit">SUBMIT</Link>
      </div>
    </div>
  );
}
