import './App.css';

import Functional from './components/Functional';
import ClassComponet from './components/ClassComponet';
import ParentCompoent from './components/ParentCompoent';
import ConditionalRendering from './components/ConditionalRendering';
import LoopingComponent from './components/LoopingComponent';
import FormHandling from './FormHandling';
import LifeCycleMethodsA from './components/LifeCycleMethodsA';
import Fragments from './components/Fragments';
import PureComponetParent from './components/PureComponetParent';

function App() {
  return (
    <div>
      {/* <Functional name="Funational component" location="hyd">
            <p>Hello i am inside functional tag </p>
            <p>test</p>
      </Functional>
      <ClassComponet name="Class component" location="canada" />
      <ParentCompoent/>
      <ConditionalRendering/>
      <LoopingComponent/>
      <FormHandling/>
      <LifeCycleMethodsA/>
      <Fragments/> */}
      <PureComponetParent/>
    </div>
  );
}

export default App;
