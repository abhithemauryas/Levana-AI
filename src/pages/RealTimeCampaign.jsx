import CampaignCard from "../components/CampaignCard";
import CampaignFilter from "../components/CampaignFilter";


export default function RealTimeCampaign() {
  const campaigns = new Array(9).fill(0);

  return (
    <>
    <div className="space-y-6">

      {/* FILTER BAR */}
      <CampaignFilter />

      {/* CARDS GRID */}
      <div className="grid grid-cols-12 gap-5">
        {campaigns.map((_, i) => (
          <CampaignCard key={i} />
        ))}
      </div>

    </div> 
    </>
   
  );
}