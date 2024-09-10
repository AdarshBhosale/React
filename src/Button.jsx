// eslint-disable-next-line react/prop-types
function Button({ textColor = "black", buttonName }) {
    return <button style={{ color: textColor }}>{buttonName}</button>;
  }
  
  export default Button;
  