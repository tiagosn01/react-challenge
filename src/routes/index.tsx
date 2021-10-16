import { Route } from 'react-router';
import Home from '../pages/Home';

function AppRoutes() {
    return (
        <>
            <Route path="/" component={Home} />
        </>
    )
}

export default AppRoutes
