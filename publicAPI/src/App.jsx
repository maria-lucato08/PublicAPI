import { AppRoutes } from './routes/AppRoutes.jsx';

import './Global.css'



import { MainLayout } from './layouts/MainLayout/MainLayout.jsx';
function App() {
  
  return (
    <div>
      <AppRoutes/>
      <MainLayout/>
    </div>
  );
}

export default App
