import AppContextProvider from "./AppContextProvider";
import Layout from "./Layout";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppContextProvider>
              <Layout />
            </AppContextProvider>
          }
        >
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
