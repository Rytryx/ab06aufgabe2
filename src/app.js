const hh = require("hyperscript-helpers");
const { h, diff, patch } = require("virtual-dom");
const createElement = require("virtual-dom/create-element");
const update = require("./Update.js");
const view = require("./view.js");

const { div, button } = hh(h);

const MSGS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
};

// Impure code below (not avoidable but controllable)
function app(initModel, update, view, node) {
  let model = initModel;
  let currentView = view(dispatch, model);
  let rootNode = createElement(currentView);
  node.appendChild(rootNode);
  function dispatch(msg) {
    model = update(msg, model);
    const updatedView = view(dispatch, model);
    const patches = diff(currentView, updatedView);
    rootNode = patch(rootNode, patches);
    currentView = updatedView;
  }
}

const initModel = 0;

const rootNode = document.getElementById("app");
app(initModel, update, view, rootNode);
