export const getParsedDate = (fsDate) => {
  const date = fsDate.toDate();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
      minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const strDate = year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  // return date.toISOString()
  return strDate
  }
;
