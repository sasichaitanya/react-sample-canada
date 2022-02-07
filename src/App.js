import './App.css';
import Functional  from './components/Functional';
import ClassComponet from './components/ClassComponet';

function App() {
  return (
    <div>
      <Functional name="Funational component" location="hyd"/>
      <ClassComponet name="Class component" location="canada"/>
    </div>
  );
}

export default App;
