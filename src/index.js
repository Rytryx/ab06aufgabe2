import update from "./Update.js";
import view from "./view.js";
import app from "./App.js";

const initModel = 0;

const rootNode = document.getElementById("app");
app(initModel, update, view, rootNode);
