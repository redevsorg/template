export default async function Navbar() {
  return (
    <div className="navbar bg-primary rounded-full text-black px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Initiatives</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Resources</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold tracking-widest">SAFE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <details>
              <summary>Initiatives</summary>
              <ul className="p-2 bg-primary rounded-t-none ">
                <li>
                  <a>Fundraisers</a>
                </li>
                <li>
                  <a>Volunteer</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Resources</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="hidden md:flex btn rounded-full text-black border-none bg-white hover:bg-white hover:scale-[102%]">
          Get Involved -&gt;
        </a>
      </div>
    </div>
  );
}
