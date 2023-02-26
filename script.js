function dohvati() {
  document.getElementById("temp").innerHTML = "";
  const year = document.getElementById("year").value;
  const code = document.getElementById("code").value;
  try {
    fetch("https://date.nager.at/api/v3/publicholidays/" + year + "/" + code)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw Error("Error");
        }
        return response.json();
      })

      .then((data) => {
        console.log(data);
        for (a in data) {
          document.getElementById("temp").innerHTML +=
            data[a].localName + " " + data[a].date + "<br>";
        }
      });
  } catch (error) {
    console.log(error);
  }
}
