const LoadSliderData = () => {
  let sliderData;

  try {
    sliderData = require("@/app/milestones/_posts/slider_data.json");
  } catch (error) {
    sliderData = [];
  }
  return sliderData;
};

export default LoadSliderData;
