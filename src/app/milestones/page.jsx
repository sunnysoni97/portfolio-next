import MilestonesLayout from "@/app/components/milestones/MilestonesLayout";
import TimelineOverview from "@/app/components/milestones/TimelineOverview";
import TimelineSlider from "@/app/components/milestones/TimelineSlider";

export const metadata = {
  title: "Milestones",
};

export default function Milestones() {
  return (
    <>
      <MilestonesLayout
        overview={<TimelineOverview />}
        slider={<TimelineSlider />}
      />
    </>
  );
}
