import { useState } from 'react';

function TexteDynamique() {
  const messages = ["Premier clic", "Deuxième clic", "Troisième clic"];
  const [index, setIndex] = useState(0);

  function changerTexte() {
    // Passer au message suivant, revenir au début si on est à la fin
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  }

  return (
    <div>
      <p>{messages[index]}</p>
      <button onClick={changerTexte}>Cliquez ici</button>
    </div>
  );
}

export default TexteDynamique;
