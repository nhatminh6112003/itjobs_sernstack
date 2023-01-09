import moment from "moment";

const formatDate = (dateString) => {
let date = moment(dateString);
let formattedDate = date.format('DD/MM/YYYY');
  return formattedDate
}

export default formatDate