import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes";

import DefaultLayout from "./layouts/DefaultLayout";
import { createContext, useEffect, useState } from "react";

export const loadingContext = createContext()

function App() {


  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 2000);
  }, [])

  return (
    <>
      <loadingContext.Provider value={isLoading} >
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
      </loadingContext.Provider>
    </>
  )
}

export default App;