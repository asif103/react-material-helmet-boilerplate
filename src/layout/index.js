import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default layout;