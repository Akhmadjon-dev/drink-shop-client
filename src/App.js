import React, { Suspense } from "react";
import "./App.css";
import Sidebar from "./containers/Sidebar";
import routes from "./containers/routes";
import { Route, Routes } from "react-router-dom";

function App() {
  const user = null;

  if (user) {
    return (
      <div className="app">
        <Sidebar />
        <div className="app__content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.private.map((item) => {
                const { path, element: Component } = item;
                return <Route key={path} path={path} element={<Component />} />;
              })}
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  } else {
    return<Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.public.map((item) => {
          const { path, element: Component } = item;
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Suspense>;
  }
}

export default App;
