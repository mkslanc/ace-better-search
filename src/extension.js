const config = ace.require("ace/config");
import * as searchbox from "./searchbox.js";

config.setModuleLoader("ace/ext/searchbox", async function () {
    return searchbox;
});
