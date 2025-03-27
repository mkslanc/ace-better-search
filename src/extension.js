import ace from "./global-ace.js";

ace.config.setModuleLoader("ace/ext/searchbox", async function () {
    return import("./searchbox.js");
});
