import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-[#B4F461] underline font-semibold" : "hover:underline"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-[#B4F461] underline font-semibold" : "hover:underline"
          }
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/listedBooks"
          className={({ isActive }) =>
            isActive ? "text-[#B4F461] underline font-semibold" : "hover:underline"
          }
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/pagesToRead"
          className={({ isActive }) =>
            isActive ? "text-[#B4F461] underline font-semibold" : "hover:underline"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-xl px-12">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="btn btn-ghost text-xl">
          <span className="text-blue-600 text-3xl font-extrabold">BOI</span>
          <span className="text-orange-600 text-3xl font-extrabold">
            POKA
          </span>
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {links}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-3">
        <button className="btn btn-primary">Sign in</button>
        <button className="btn btn-accent">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;