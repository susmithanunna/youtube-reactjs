import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css'
import Sidebar from './components/sidebar'
import Searchbar from './components/Searchbar'
import Home from './components/Home';
import Shorts from './components/Shorts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
export const store = createContext();
function App() {
  
  let StudentData = [
    {
      name: "Susmitha",
      rollno: "21a81a05o1",
      branch: "cse"
    },
    {
      name: "Radha",
      rollno: "21a81a05o1",
      branch: "cse"
    }
  ]
  const [data, setData] = useState(StudentData)
  return (
    <>
      <BrowserRouter>
        <store.Provider value={[data, setData]}>
          <div class="container-fuild ">
            <div class="row">

              <Sidebar />
              <div class="col-md-9">
                <Searchbar data={StudentData} />
                <Routes>
                  <Route path='/Home' element={<Home />} />
                  <Route path='/Shorts' element={<Shorts />} />
                </Routes>
              </div>
            </div>

          </div>
        </store.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
