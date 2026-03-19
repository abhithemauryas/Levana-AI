
import ChartSection from "../components/ChartSection";
import ActiveIntegration from "../components/ActiveIntegration";
import LeadSource from "../components/LeadSource";
import LeadMatrix from "../components/LeadMatrix";
import ProfileSection from "../components/ProfileSection";

import CampaignStatus from "../components/CampaignStatus";
import AgentActivity from "../components/AgentActivity";
import AgentSchedule from "../components/AgentSchedule";
import WorldMap from "../components/WorldMap";
import EmployeeCards from "../components/EmployeeCards";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <ChartSection />
        <ProfileSection/>
      </div>

      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0d1322] via-[#1b1e3a] to-[#5b1a6b]">
        <div className="grid grid-cols-12 gap-4">
          <ActiveIntegration />
          <LeadSource />
          <LeadMatrix />
        </div>
      </div>
      {/* Campaign Status */}
      <CampaignStatus />
        {/* Agent Activity + Schedule */}
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-3">
          <AgentActivity />
        </div>

        <div className="col-span-9">
          <AgentSchedule />
        </div>
      </div>
       {/* Map + Employees */}
      <div className="grid grid-cols-12 gap-4 mt-4">

<WorldMap />     {/* col-span-5 */}

<EmployeeCards /> {/* col-span-7 */}

</div>
    </>
  );
}