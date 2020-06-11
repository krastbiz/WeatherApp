const regex = new RegExp(/\{.*?\}/g);

const storageHelper = {

  getStorageArray: function (key) {
    const values = this.getRawArray(key);
    if (!values) {
      return [];
    }

    const result = values
                    .map(w => w.replace("{", "").replace("}", ""));

    return result;
  },

  getRawArray: function (key) {
    const values = localStorage.getItem(key);
    if (!values) {
      return [];
    }

    return values.match(regex);
  },

  updateStorageArray: function (key, newValue) {
    const array = this.getRawArray(key);
    if (array.length < 1) {
      localStorage.setItem(key, escapeWord(newValue));
      return;
    }

    const idx = array.findIndex((s) => getWord(s.toLowerCase()) === newValue.toLowerCase());
    if (idx === -1) {
      array.push(escapeWord(newValue));
      localStorage.setItem(key, array);
    }
  }
}

const escapeWord = (word) => {
  return `{${word}}`;
}

const getWord = (escapedWord) => {
  return escapedWord.replace("{", "").replace("}","");
}

export default storageHelper;