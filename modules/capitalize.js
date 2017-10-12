module.exports = function capitalize(input) {
    return {
        asName() {
            const output = input
                .trim()
                .toLowerCase()
                .replace(/[^a-z-\s]/g, "")
                .replace(/\s+/g, " ")
                .replace(/\b[a-z]/g, letter => letter.toUpperCase())
                .replace(/(-\w)/g, letter => letter.toUpperCase());

            return output;
        },

        asHeading() {
            const filterWord = /\s(A|An|As|At|For|In|Is|Not|Of|On|So|The|With)\b/gi;
            const output = input
                .trim()
                .toLowerCase()
                .replace(/\s+/g, " ")
                .replace(/\b\W?[a-zA-Z]/g, letter => letter.toUpperCase())
                .replace(filterWord, word => word.toLowerCase());

            return output;
        },
    };
};
