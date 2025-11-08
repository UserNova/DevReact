import { useState, useEffect } from 'react';

function CompteurAvecEffet() {
  const [compte, setCompte] = useState(0);

  // useEffect se déclenche à chaque fois que 'compte' change
  useEffect(() => {
    document.title = `nbre clic ${compte} `;
  }, [compte]); // dépendance : 'compte'

  return (
    <div>
      <p>Nombre de clics : {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>Cliquer</button>
    </div>
  );
}

export default CompteurAvecEffet;
