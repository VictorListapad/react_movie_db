function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Movie DB
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#" target="_blank">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Navbar };
