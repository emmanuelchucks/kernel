module.exports = (date) => {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return {
    humanize: () => {
      let [day, month, year] = date.split("-");

      month = months[month - 1];
      /0/.test(day.charAt(0)) ? day = day.replace(day.charAt(0), "") : false;
      year.length < 4 ? year = `'${year}` : false;
      
      return `${month} ${day}, ${year}`;
    },

    unhumanize: () => {
      date = date.replace(/[,.]/g, "");

      let [month, day, year] = date.split(" ");

      month = (months.indexOf(month)) + 1;
      day.length < 2 ? day = `0${day}` : false;
      month.toString().length < 2 ? month = `0${month}` : false;

      return `${day}-${month}-${year}`;
    }
  };
};
