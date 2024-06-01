function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function handleCreate(){
    let errors = [];
    let validationResult;
  
    validationResult = validate(name, 'name');
    if (validationResult !== true) errors.push(validationResult);
  
    validationResult = validate(email, 'email');
    if (validationResult !== true) errors.push(validationResult);
  
    validationResult = validate(password, 'password');
    if (validationResult !== true) errors.push(validationResult);
    
    if (errors.length > 0) {
      setStatus('Error: ' + errors.join(', '));
      setTimeout(() => setStatus(''),3000);
      return;
    }
  
    ctx.users.push({name,email,password});
    setShow(false);
  }    
  
  function validate(field, label){
    if (!field) {
      return label + ' is required';
    }
    if (label === 'password' && field.length < 8) {
      return 'password must be at least 8 characters long';
    }
    return true;
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name && !email && !password}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}