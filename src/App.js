
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Menu from './components/menu';
import Phase from './components/phase';
import Equipement from './components/equipement';
import Interlock from './components/interlock';
import Description from './components/description';
import Parameter from './components/parameter';
import Signals from './components/signals';
import Alarmprompt from './components/alarmprompt';

const App = () => (
  <>

    <Nav />
    <Routes>
      <Route exact path="/" element={<Menu />} />
      <Route exact path="/phase" element={<Phase />} />
      <Route exact path="/equipemen-module" element={<Equipement />} />
      <Route exact path="/interlock-module" element={<Interlock />} />
      <Route exact path="/description" element={<Description />} />
      <Route exact path="/parameter" element={<Parameter />} />
      <Route exact path="/signals" element={<Signals />} />
      <Route exact path="/alarmprompt" element={<Alarmprompt />} />
    </Routes>

    
  </>
);

export default App;
