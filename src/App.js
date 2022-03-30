import React, { Suspense } from "react";
import "./App.css";
import Sidebar from "./containers/Sidebar";
import routes from "./containers/routes";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.token);
  console.log(user);

  if (user) {
    return (
      <div className="app">
        <Sidebar />
        <div className="app__content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.private.map((item) => {
                const { path, element: Component } = item;
                return <Route key={path} path={path} element={(path === '*' ? Component : <Component />)} />;
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
          return <Route key={path} path={path} element={(path === '*' ? Component : <Component />)} />;
        })}
      </Routes>
    </Suspense>;
  }
}

export default App;
