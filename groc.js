function grocery() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      // console.log(response);
      var groce = response.groce;
      console.log(groce);
      var output = "";
      for (i = 0; i < groce.length; i++) {
        output += `
      <tr>
        <td>${groce[i].serialnumber}</td>
        <td>${groce[i].itemname}</td>
        <td>${groce[i].quantity}</td>
        <td>${groce[i].unit}</td>
        <td>${groce[i].department}</td>
        <td>${groce[i].notes}</td>
      </tr>`;
      }
      document.querySelector("table .table-hover").innerHTML = output;
      document.querySelector("div .heading").remove();
      document.querySelector("div .my").classList.remove("my");
      document.querySelector("table thead").classList.add("table-warning");
      document.querySelector("table .table-hover").classList.add("table-info");
    }
  };

  xhttp.open("GET", "test.json", true);
  xhttp.send();
}