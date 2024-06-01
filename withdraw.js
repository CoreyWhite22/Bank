const Withdraw = () => {
  const [withdraw, setWithdraw] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    let input = event.target.value;
    let numberInput = Number(input);
    if (input === '') {
      setStatus('');
      return setValidTransaction(false);
    } else if (numberInput < 0) {
      setStatus('Error: Cannot withdraw a negative number');
      return setValidTransaction(false);
    } else if (isNaN(numberInput)) {
      setStatus('Error: Input is not a number');
      return setValidTransaction(false);
    } else if (numberInput === 0) {
      setStatus('Error: You can\'t withdraw $0!');
      return setValidTransaction(false);
    } else if (numberInput > totalState) {
      setStatus('Error: Insufficient funds');
      return setValidTransaction(false);
    } else {
      setStatus('');
      setValidTransaction(true);
    }
    setWithdraw(numberInput);
  };

  const ctx = React.useContext(UserContext);

const handleSubmit = (event) => {
  let newTotal = totalState - withdraw;
  setTotalState(newTotal);
  ctx.setBalance(ctx.balance - withdraw); // update the balance in the context
  setStatus('Success: Your withdrawal was processed');
  setValidTransaction(false);
  event.preventDefault();
};

React.useEffect(() => {
  setTotalState(ctx.balance);
}, [ctx.balance]);

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      title={`Account Balance $ ${ctx.balance}`}
      status={status}
      body={
        <>
          Enter an amount to withdraw<br/>
          <input className="form-control" id="number-input" type="text" width="200" onChange={handleChange}/><br/>
          <input className="btn btn-light" type="submit" onClick={handleSubmit} disabled={!validTransaction} width="200" value="Submit" id="submit-input"></input> 
        </>
      }
    />
  );
};