const MSGS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
};

function update(msg, model) {
  switch (msg) {
    case MSGS.ADD:
      return model + 1;
    case MSGS.SUBTRACT:
      return model - 1;
    default:
      return model;
  }
}

module.exports = update;
