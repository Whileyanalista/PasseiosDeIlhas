import { NetlifyNextPlugin } from "@netlify/plugin-nextjs";

export const onBuild = async ({ constants }) => {
  console.log("Netlify Forms migration applied");
};
