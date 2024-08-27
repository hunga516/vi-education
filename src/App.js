import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes";

import DefaultLayout from "./layouts/DefaultLayout";
import { AuthProvider, LoadingProvider } from "./context";


function App() {



  return (
    <>
      <LoadingProvider>
        <div className="app">
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                {publicRoute.map((route, index) => {
                  const Layout = route.layout ? route.layout : DefaultLayout
                  const Page = route.element
                  return (
                    <Route key={index} path={route.path} element={
                      <Layout>
                        <Page />
                      </Layout>}
                    />
                  )
                })}
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </LoadingProvider>
    </>
  )
}

export default App;