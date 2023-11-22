
import { Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Database from "./Pages/Database/Database"
import Query from "./Pages/Query/Query"

function Private () {

     <div>
     <Header/>
      <Routes>
        <Route path="/*" element={<Dashboard/>} />
        <Route path="/database/*" element={<Database/>} />
        <Route path="/query/*" element={<Query/>} />
      </Routes>
      </div>
}

export default Private;