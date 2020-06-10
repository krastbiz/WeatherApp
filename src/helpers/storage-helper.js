
const storageHelper = {

  getStorageArray: function (key) {
    const values = localStorage.getItem(key);
    if (!values) {
      return [];
    }

    return values.split(",");
  },

  updateStorageArray: function (key, newValue) {
    const array = this.getStorageArray(key);
    if (array.length < 1) {
      localStorage.setItem(key, newValue);
    }

    const idx = array.findIndex((s) => s.toLowerCase() === newValue.toLowerCase());
    if (idx === -1) {
      array.push(newValue);
    }
    localStorage.setItem(key, array);
  }
}

export default storageHelper;