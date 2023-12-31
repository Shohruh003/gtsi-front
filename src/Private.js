
import { Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Database from "./Pages/Database/Database"
import Query from "./Pages/Query/Query"
import Header from "./components/Header/Header"
import { useContext } from "react"
import { ThemeContext } from "./context/themeContext"

function Private () {
  const {isDarkMode} = useContext(ThemeContext)


     return (
      <div className={`private ${isDarkMode ? 'darkmode' : ''}`}>
        <div className="container">
          <div className="private_inner">
            <Header/>
            <Routes>
              <Route path="/*" element={<Dashboard/>} />
              <Route path="/database/*" element={<Database/>} />
              <Route path="/query/*" element={<Query/>} />
            </Routes>
          </div>
        </div>
      </div>
     )
}

export default Private;