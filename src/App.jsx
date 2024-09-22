import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SuberHereos from "./pages/SuberHereos";
import RQSuberHereos from "./pages/RQSuberHereos";
import Navbar from "./components/Navbar";
import { QueryClient , QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuberHeroPage } from "./components/RQSuberHero.page";
import { DependentQueries } from "./components/DependentQueries.page";
import { PaginatedQueries } from "./components/PaginatedQueries.page";
const queryClient = new QueryClient();
function App() {
  return (
    <>
        <QueryClientProvider client={queryClient}> 
      <Navbar />
      <div className="container-fluid">
        <div className="mt-5 mx-2 border border-dark p-3">
          <Routes>
          <Route path="/rq-dependent" element={<DependentQueries email={"vishwas@example.com"} />} />
          <Route path="/rq-paginated" element={<PaginatedQueries />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/superhereos" element={<SuberHereos />} />
            <Route path="/rqsuberhereos" element={<RQSuberHereos />} />
            <Route path="/rqsuberhereos/:heroId" element={<RQSuberHeroPage />} />
          </Routes>
        </div>
      </div>
      <ReactQueryDevtools  initialIsOpen={false} position="bottom-right"/> 
      </QueryClientProvider>
    </>
  );
}

export default App;
