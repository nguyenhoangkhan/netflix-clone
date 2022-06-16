import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/";
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, idx) => {
              const Page = route.component;
              return <Route key={idx} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
