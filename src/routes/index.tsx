
import { Routes, Route} from 'react-router-dom';

import DashBoard from '../pages/DashBoard';
import Repository from '../pages/Repository';

const Routers = () => {
    return (
      <>
        <Routes>
          <Route path='/*'  element={< DashBoard/> } /> 
          <Route path="/repository/*" element={< Repository />} />
        </Routes>
      </>
    );
}



export default Routers;