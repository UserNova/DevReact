import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';
import TexteDynamique from './TexteDynamique';
import FormulaireInscription from './FormulaireInscription';
import CompteurAvecEffet from './CompteurAvecEffet';

function App() {
  return (
    <div>
      <CompteurAvecEffet/>
      <Compteur />
      <MessageBouton />
      <FormulaireNom />
      <CompteurEffet />
      <TexteDynamique />
      <FormulaireInscription/>
    </div>
  );
}


export default App;