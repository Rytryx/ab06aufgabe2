let model = 0; // Initialisieren Sie das Modell mit einem Startwert.

function getModel() {
  return model;
}

function setModel(newValue) {
  model = newValue;
}

module.exports = {
  getModel,
  setModel,
};
