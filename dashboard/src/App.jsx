import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Body from './components/Body/Body'
import Userlist from './pages/Users/Userlist'
import Userupdate from './pages/Users/Userupdate'
import Profilelist from './pages/Profiles/Profilelist'
import Profileupdate from './pages/Profiles/Profileupdate'
import Photolist from './pages/Photos/Photolist'
import Photoupdate from './pages/Photos/Photoupdate'
import Preferencelist from './pages/Preferences/Preferencelist'
import Preferenceupdate from './pages/Preferences/Preferenceupdate'
import Matchlist from './pages/Matches/Matchtlist'
import Matchupdate from './pages/Matches/Matchupdate'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Subscriptionlist from './pages/Subscription/Subscriptionlist'
import Subscriptionupdate from './pages/Subscription/Subscrptionupdate'
import Messagelist from './pages/Messages/Messagelist'
import Messageupdate from './pages/Messages/Messageupdate'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <div>
          <Sidebar/>

        </div>
        <div>
          < Body/>
          <Routes>
              <Route path="/userlist" element={<Userlist/>}/>
              <Route path="/userlist/userupdate" element={<Userupdate/>}/>

              <Route path="/profilelist" element={<Profilelist/>}/>
              <Route path="/profilelist/profileupdate" element={<Profileupdate/>}/>

              <Route path="/photolist" element={<Photolist/>}/>
              <Route path="/photolist/photoupdate" element={<Photoupdate/>}/>

              <Route path="/preferencelist" element={<Preferencelist/>}/>
              <Route path="/preferencelist/preferenceupdate" element={<Preferenceupdate/>}/>

              <Route path="/matchlist" element={<Matchlist/>}/>
              <Route path="/matchlist/matchupdate" element={<Matchupdate/>}/>

              <Route path="/subscriptionlist" element={<Subscriptionlist/>}/>
              <Route path="/subscriptionlist/subscriptionupdate" element={<Subscriptionupdate/>}/>

              <Route path="/messagelist" element={<Messagelist/>}/>
              <Route path="/messagelist/messageupdate" element={<Messageupdate/>}/>

          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
