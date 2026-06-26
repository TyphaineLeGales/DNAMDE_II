import "./app.css";

function ColorMode(props) {
  const handleToggle = () => {
    props.toggleColorMode(); //accede à la fonction "toggleClolorMode", que l'on a passé dans les parametres, car il est géré, la fonction est définie dans "App"
    console.log("current mode : ",props.colorMode);
  };

  //console.log(props.colorMode)
  return <button className="color-mode-button" onClick={handleToggle}>color mode : {props.colorMode} </button>;
}

export default ColorMode;
