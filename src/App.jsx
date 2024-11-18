import CarouselProvider from "./CarouselProvider";
import Layout from "./Layout";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <CarouselProvider>
                <Home />
              </CarouselProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
