import { NetlifyNextPlugin } from "@netlify/plugin-next.js";

export const onBuild = async ({ constants }) => {
  console.log("Netlify Forms migration applied");
};
