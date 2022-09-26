const Alert = (props) => {
  const buttonClick = () => {
    console.log('Clicked');
    if (props.state !== '') {
      console.log(props.state);
    } else {
      console.log('Input field is empty.');
    }
  };

  return (
    <div>
      <button onClick={buttonClick}>Button</button>
      <input onChange={props.handleChange} value={props.state}></input>
    </div>
  );
};

export default Alert;
