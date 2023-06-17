import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

function App() {
  // qeury for GET
  // mutation CREATE UPDATE DELETE
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });
  console.log("render");
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page not found!</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
