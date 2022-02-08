import './App.css';
import Functional from './components/Functional';
import ClassComponet from './components/ClassComponet';
import ParentCompoent from './components/ParentCompoent';
import ConditionalRendering from './components/ConditionalRendering';

function App() {
  return (
    <div>
      {/* <Functional name="Funational component" location="hyd">
            <p>Hello i am inside functional tag </p>
            <p>test</p>
      </Functional>
      <ClassComponet name="Class component" location="canada" />
      <ParentCompoent/> */}
      <ConditionalRendering/>
    </div>
  );
}

export default App;
