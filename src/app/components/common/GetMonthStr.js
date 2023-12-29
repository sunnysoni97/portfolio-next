const GetMonthStr = (monthNum) => {
  const date = new Date();
  date.setMonth(monthNum - 1);
  return date.toLocaleString("en-US", { month: "long" });
};

export default GetMonthStr;
