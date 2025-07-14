import { Layout } from "antd"
import { Content } from "antd/lib/layout/layout"
import AppHeader from './layouts/Header.jsx'
import AppFooter from './layouts/Footer.jsx'
import { Outlet } from "react-router"

function App() {

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />
        <Content className="container py-4">
          <Outlet />
        </Content>
        <AppFooter />
      </Layout>
    </>
  );
}

export default App
