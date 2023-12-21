const LoadOverviewData = () => {
  let overviewData;

  try {
    overviewData = require("@/app/milestones/_posts/timeline_data.json");
  } catch (error) {
    overviewData = [];
  }
  return overviewData;
};

export default LoadOverviewData;
