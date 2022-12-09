import { Link } from 'react-router-dom';

export default function Navigation() {

  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-md">
      <Link to="/" className="font-bold text-3xl">TtT</Link>
      <Link to="/team">Meet the Team</Link>
    </nav>
  )
}
