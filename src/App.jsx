import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import DataPool from "./pages/DataPool";
import RealTimeCampaign from "./pages/RealTimeCampaign";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Wrapper */}
        <Route path="/" element={<AdminLayout />}>

          {/* Pages */}
          <Route index element={<Dashboard />} />
          <Route path="data-pool" element={<DataPool/>} />
          <Route path="realtime" element={ <RealTimeCampaign/> } />
          <Route path="realtime" element={<RealTimeCampaign />} />
          <Route path="scheduled" element={<div>Scheduled Campaign</div>} />
          <Route path="employees" element={<div>Employees</div>} />
          <Route path="ai-agents" element={<div>AI Agents</div>} />
          <Route path="organization" element={<div>Organization</div>} />
          <Route path="projects" element={<div>Projects</div>} />

          <Route path="ai-integration" element={<div>AI Integration</div>} />
          <Route path="general-integration" element={<div>General Integration</div>} />
          <Route path="lead-management" element={<div>Lead Management</div>} />
          <Route path="user-management" element={<div>User Management</div>} />
          <Route path="settings" element={<div>Settings</div>} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;