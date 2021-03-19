

/* As a user,I want to be able to:
-type in text
-click submit
-view movies on page

From the technical side:
-detect when submit clicked
-grab user input
-use user input in our api call
-parse the response
-display data accordingly
*/
$(document).ready(()=> {
    
  $("#submit").click(()=> {
  let userInput=$("#search").val()
  alert(userInput)
  $.ajax({

    url: "https://developers.giphy.com/api=8dNpSXbJaCtgq3yx2PXWroLjWrYRBE6r=${userInput}"
  
.done((res)=>{
    let star = res,Search;
    $.each(star, (i, e)=>{
        let star = e.star
        console.log("star", star)
        $("body").append('<img src="${star}" alt="stars"/>')
    }
    
}

  
