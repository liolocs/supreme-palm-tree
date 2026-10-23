import config from "primate/config";
import vue from "@primate/vue";
import tailwind from "@primate/tailwind";

export default config({
  entrypoints: {
    css: "master.css"
  },

  modules: [
    vue(),
    tailwind()
  ],
});
