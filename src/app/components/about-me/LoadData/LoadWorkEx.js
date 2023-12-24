const LoadWorkEx = () => {
  let work_ex;

  try {
    work_ex = require("@/app/about-me/_posts/work_ex.json");
  } catch (error) {
    work_ex = [];
  }
  return work_ex;
};

export default LoadWorkEx;
