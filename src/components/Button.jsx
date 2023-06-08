function Button(props) {
  console.log("user: ", props);

  return (
    <button
      className="border border-black"  
      onClick={props.handleChangeUser}   
    >  
      {props.children} 
    </button>
  );
} 

export default Button;  