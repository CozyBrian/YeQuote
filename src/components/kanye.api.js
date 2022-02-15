export const Quote = () => {
  fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
      console.log(data.quote);
      return(data.quote);
    });
}