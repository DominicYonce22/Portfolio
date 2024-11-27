import AppContextProvider from "./AppContextProvider";
import Layout from "./Layout";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio/Portfolio";

import Blog from "./pages/blogs/Blog";
import BlogsLayout from "./pages/blogs/BlogsLayout";

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
          <Route path="blog" element={<BlogsLayout />} />
          <Route path="blog/:id" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
