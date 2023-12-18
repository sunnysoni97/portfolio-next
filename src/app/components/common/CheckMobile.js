import { useMediaQuery } from "@mantine/hooks";
import postcssConfig from "../../../../postcss.config";

const CheckMobile = () => {
  const isMobile = useMediaQuery(
    `(max-width:${postcssConfig.plugins["postcss-simple-vars"].variables["mantine-breakpoint-sm"]})`,
    false
  );

  return isMobile;
};

export default CheckMobile;
