function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link" href="#">
          Home
          <span className="nav-description">This is the home page</span>
        </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/CreateAccount/">
            Create Account
            <span className="nav-description">Create a new account here</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Deposit/">
            Deposit
            <span className="nav-description">Deposit money into your account</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Withdraw/">
            Withdraw
            <span className="nav-description">Withdraw money from your account</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/AllData/">
            AllData
            <span className="nav-description">View all data</span>
          </a>
        </li>          
      </ul>
    </nav>
    </>
  );
}