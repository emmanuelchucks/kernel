module.exports = function(date) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return {
        humanize() {
            let [day, month, year] = date.split("-");

            month = months[month - 1];
            /0/.test(day.charAt(0)) && (day = day.replace(day.charAt(0), ""));
            year.length < 4 && (year = `'${year}`);

            return `${month} ${day}, ${year}`;
        },

        unhumanize() {
            let [month, day, year] = date.replace(/[,.'-]/g, "").split(" ");

            month = months.indexOf(month) + 1;
            day.length < 2 && (day = `0${day}`);
            String(month).length < 2 && (month = `0${month}`);

            return `${day}-${month}-${year}`;
        }
    };
};
