import hh from "hyperscript-helpers";
import { h, diff, patch } from "virtual-dom";
import createElement from "virtual-dom/create-element";

const { div, button } = hh(h);

const MSGS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
};

// impure code below (not avoidable but controllable)
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
