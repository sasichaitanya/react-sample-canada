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
import RefDemo from './components/RefDemo';
import ClassRefComponentParent from './components/ClassRefComponentParent';
import PortalDemo from './components/PortalDemo';
import ComponentForErrorCheck from './components/ComponentForErrorCheck';
import ErrorBoundry from './components/ErrorBoundry';
import HocClickSample from './components/HocClickSample';
import HocHoverSample from './components/HocHoverSample';
import HttpGetSample from './components/HttpGetSample';
import HttpSamplePost from './components/HttpSamplePost';

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
      <Fragments/>
      <PureComponetParent/>
      <RefDemo/>
      <ClassRefComponentParent/>
      <PortalDemo/> */}

      {/* <ErrorBoundry>
        <ComponentForErrorCheck name="hellooo" />
      </ErrorBoundry>
      <ErrorBoundry>
        <ComponentForErrorCheck name="wrong" />
      </ErrorBoundry> */}

      {/* <HocClickSample name="Click me"/>
      <HocHoverSample name="Hover me"/> */}

      {/* <HttpGetSample/> */}
      <HttpSamplePost/>
    </div>
  );
}

export default App;
