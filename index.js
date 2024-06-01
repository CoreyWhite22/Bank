function Spa() {
  const [balance, setBalance] = React.useState(100); // initial balance
  const [users, setUsers] = React.useState([]); // initial users
  
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users, setUsers, balance, setBalance}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/Deposit/" component={Deposit} />
          <Route path="/Withdraw/" component={Withdraw} />
          <Route path="/AllData/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
