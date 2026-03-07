import { Routes, Route} from 'react-router-dom'
import { Colors, Drinks, HistoryFacts } from '../pages';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/colors' element={<Colors />} />
            <Route path='/drinks' element={<Drinks />} />
            <Route path='/history-facts' element={<HistoryFacts />} />
        </Routes>
    );
};

export { AppRoutes };