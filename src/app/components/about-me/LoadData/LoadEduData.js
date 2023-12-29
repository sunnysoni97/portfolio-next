const LoadEduData = () => {
  let eduData;

  try {
    eduData = require("@/app/about-me/_posts/edu_data.json");
  } catch (error) {
    eduData = [];
  }
  return eduData;
};

export default LoadEduData;
