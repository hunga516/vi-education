import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
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
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;