import './App.css';
import {useQuery} from "@apollo/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setFetchedData} from "./redux-toolkit/fetchedDataSlice";

import Header from "./components/Header/Header";
import {Home, Tours, About, Help, Favourite, Error, Loading} from "./pages/index";
import {TOURS_QUERY} from "./data/gql-query";

function App() {
   const dispatch = useDispatch();
   const fetchedData = [];
   const { data, loading, error } = useQuery(TOURS_QUERY);

   if (loading) return <Loading />;
   if (error) return <Error error={error.message} />
   data.histories.forEach(obj => {
      if (obj.flight !== null && obj.flight.links.flickr_images.length !== 0) fetchedData.push(obj)
   })
   dispatch(setFetchedData(fetchedData))

   return (
    <div className="App">
       <Router>
          <Header />
          <Routes>
             <Route exact path="/" element={<Home />} />
             <Route path="/tours" element={<Tours />} />
             <Route path="/about" element={<About />} />
             <Route path="/help" element={<Help />} />
             <Route path="/favourite" element={<Favourite />} />
             <Route path="*" element={<Error />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
