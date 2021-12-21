
import './App.css';
import ListaDeNotas from './components/ListaDeNotas';

function App() {
  return (
    <section>
    <form>
      <input type='text' placeholder='teste'/>

      <textarea placeholder='escreva aqui'/>
        <button>Criar nota</button>
    </form>
    <ListaDeNotas/>
    </section>
    
  );
}

export default App;
