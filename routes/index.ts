import route from "primate/route";
import response from "primate/response";
import Race from "@/stores/Race";

export default route({
  async get() {
    const races = await Race.find({
      sort: { post_time: "desc" },
    });

    return response.view("Index.vue", { races });
  },
});
