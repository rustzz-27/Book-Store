document.querySelector("#user-data").addEventListener("submit", function () {
  event.preventDefault();
  let userHTML = "";
  var input = this.elements.username.value;
  var userdetailsHTML = [
    {
      Name: null,
      Email: null,
    },
  ];
  for (let i = 0; i < users.length; i++) {
    if (input === users[i].name) {
      userdetailsHTML["Name"] = users[i].name;
      userdetailsHTML["Email"] = users[i].email;
      for (let j = 0; j < users[i].bookIds.length; j++) {
        console.log(users[i].bookIds[j]);
        for (let k = 0; k < bookstore.length; k++) {
          if (users[i].bookIds[j] === bookstore[k]._id) {
            //console.log(bookstore[k]);
            userHTML +=
              '<table><tbody><tr><td><div><img src="' +
              bookstore[k].thumbnailUrl +
              '" alt="" onerror="this.src=\'/images/noImage.jpg\'""/></div></td><td><table><tbody><tr><td><strong>Title : </strong></td><td>' +
              bookstore[k].title +
              "</td></tr><tr><td><strong>pageCount : </strong></td><td>" +
              bookstore[k].pageCount +
              "</td></tr><tr><td><strong>publishedDate: </strong></td><td>" +
              (bookstore[k].publishedDate
                ? bookstore[k].publishedDate.$date
                : "") +
              '</td></tr><tr><td valign="top"><strong>Description : </strong></td><td>' +
              bookstore[k].shortDescription +
              "</td></tr><tr><td><strong>Authors : </strong></td><td>" +
              bookstore[k].authors +
              "</td></tr><tr><td><strong>Categories : </strong></td><td>" +
              bookstore[k].categories +
              "</td></tr></tbody></table></td></tr></tbody></table>";
          }
        }
      }
    }
  }
  document.getElementById("user-purchase").innerHTML = userHTML;
  document.getElementById("userdetails").innerHTML =
    "<strong>Name: </strong>" +
    userdetailsHTML["Name"] +
    "<br/>" +
    "<strong>Email: </strong>" +
    userdetailsHTML["Email"];
});
