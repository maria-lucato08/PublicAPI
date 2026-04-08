import { Routes, Route} from 'react-router-dom'
import { Colors, Drinks, HistoryFacts, Spinners } from '../pages';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/colors' element={<Colors />} />
            <Route path='/drinks' element={<Drinks />} />
            <Route path='/history-facts' element={<HistoryFacts />} />
            <Route path='/spinners' element={<Spinners />} />
        </Routes>
    );
};

export { AppRoutes };