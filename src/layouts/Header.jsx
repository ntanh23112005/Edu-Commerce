import { Layout } from 'antd';
import { NavLink } from 'react-router';

const { Header } = Layout;

const AppHeader = () => {

    return (
        <Header style={{ backgroundColor: '#001529', paddingInline: 0, height: 'auto' }}>
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-2 gap-2">
                <h4 className="m-0 text-white text-center text-md-start">Edu-Commerce</h4>

                <nav className="d-flex flex-wrap justify-content-center gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-decoration-none mr-3 transition-colors ${isActive ? 'text-warning font-bold' : 'text-white hover:text-gray'}`
                        }>
                        Trang chủ
                    </NavLink>
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            `text-decoration-none mr-3 transition-colors ${isActive ? 'text-warning font-bold' : 'text-white hover:text-gray'}`
                        }>
                        Yêu thích
                    </NavLink>
                    <NavLink
                        to="/histories"
                        className={({ isActive }) =>
                            `text-decoration-none transition-colors ${isActive ? 'text-warning font-bold' : 'text-white hover:text-gray'}`
                        }>
                        Lịch sử xem
                    </NavLink>
                </nav>
            </div>
        </Header>
    );
};

export default AppHeader
