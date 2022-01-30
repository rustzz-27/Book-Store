document.addEventListener("DOMContentLoaded", function () {
  let bookstoreHTML = "";
  for (let i = 0; i < bookstore.length; i++) {
    bookstoreHTML +=
      '<table><tbody><tr><td><div><img src="' +
      bookstore[i].thumbnailUrl +
      '" alt="" onerror="this.src=\'/images/noImage.jpg\'""/></div></td><td><table><tbody><tr><td><strong>Title : </strong></td><td>' +
      bookstore[i].title +
      "</td></tr><tr><td><strong>pageCount : </strong></td><td>" +
      bookstore[i].pageCount +
      "</td></tr><tr><td><strong>publishedDate: </strong></td><td>" +
      (bookstore[i].publishedDate ? bookstore[i].publishedDate.$date : "") +
      '</td></tr><tr><td valign="top"><strong>Description : </strong></td><td>' +
      bookstore[i].shortDescription +
      "</td></tr><tr><td><strong>Authors : </strong></td><td>" +
      bookstore[i].authors +
      "</td></tr><tr><td><strong>Categories : </strong></td><td>" +
      bookstore[i].categories +
      "</td></tr></tbody></table></td></tr></tbody></table>";
  }
  document.getElementById("books").innerHTML = bookstoreHTML;
});
