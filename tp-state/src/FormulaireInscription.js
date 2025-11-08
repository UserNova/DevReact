import { useState } from 'react';

function FormulaireInscription() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // empêche le rechargement de la page
    alert(`Prénom : ${prenom}\nEmail : ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prénom :
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email :
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">S’inscrire</button>
    </form>
  );
}

export default FormulaireInscription;
