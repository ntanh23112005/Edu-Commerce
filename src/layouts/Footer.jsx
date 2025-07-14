import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => (
    <Footer className="text-center">
        © {new Date().getFullYear()} Edu-AI Platform. All rights reserved.
    </Footer>
);

export default AppFooter;
