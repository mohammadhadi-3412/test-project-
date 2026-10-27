import React from "react";
import { QueryClient ,QueryClientProvider} from "@tanstack/react-query";
import Home from "./components/Home";
import Branch from "./branch";
 

const queryClient= new QueryClient();



function App() {
  return<QueryClientProvider client={queryClient}>
<Branch />
    <Home />
  </QueryClientProvider>
}

export default App;