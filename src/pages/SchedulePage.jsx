import ScheduleGrid from "../components/ScheduleGrid";
import CampaignFilter from "../components/CampaignFilter";

export default function SchedulePage() {
  return (
    <div className="space-y-4">

      <CampaignFilter/>

      <ScheduleGrid />

    </div>
  );
}