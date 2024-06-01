function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <Card 
    bgcolor="primary"
      header="All Data in Store"
      title={`Account Balance $ ${ctx.balance}`}
     
      text={
        <>
          <div>Users:</div>
          {ctx.users.map((user, index) => (
            <div key={index}>
              <div>-</div>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
              <div>Password: {user.password}</div>
              <div>-</div>
            </div>
          ))}
        </>
      }
    />
  );
}