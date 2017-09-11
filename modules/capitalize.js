module.exports = (input) => {
  return {
    asName: () => {
      input = input.toLowerCase();
      input = input.replace(/[^a-z-\s]/g, "");
      input = input.replace(/\s+/g, " ");
      input = input.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
      input = input.replace(/(-\w)/g, (letter) => letter.toUpperCase());

      return input;
    },

    asHeading: () => {
      let filterWord = /\s(A|An|As|At|For|In|Is|Not|Of|On|So|The|With)\s/gi;

      input = input.toLowerCase();
      input = input.replace(/\s+/g, " ");
      input = input.replace(/\b\W?[a-zA-Z]/g, (letter) => letter.toUpperCase());
      input = input.replace(filterWord, (word) => word.toLowerCase());

      return input;
    }
  };
};
