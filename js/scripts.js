// function clearForm() {
//   $("#quizForm").val("");
// }

$(document).ready(function() {
  $("#quizForm").submit(function(event) {
    var gender = $("#userGender").val();
    var age = $("#userAge").val();
    var sign = $("#userSign").val();
    var pokemon = $("#userPokemon").val();
    var interest = $("#userInterest").val();
    console.log("gender: " + gender + " age: " + age +" sign "+sign +" "+ pokemon+" interest: "+interest);

    $(".hideResults").hide();
    if (gender === "Female" && age === "young" && interest === "Male") {
      $("#fym").toggle();
    } else if (interest != "Male") {
      $("#fyf").toggle();
    } else if (gender === "Female" && age === "mid" && interest === "Male") {
      $("#fmm").toggle();
    } else if (interest != "Male") {
      $("#fmf").show();
    } else if (gender === "Female" && age === "old" && interest === "Male") {
      $("#fom").show();
    } else if (interest != "Male") {
      $("#fof").show();
    } else if (gender === "Male" && age === "young" && interest === "Female") {
      $("#myf").show();
    } else if (interest != "Female") {
      $("#mym").show();
    } else if (gender === "Male" && age === "mid" && interest === "Female") {
      $("#mmf").show();
    } else if (interest != "Female") {
      $("#mmm").show();
    } else if (gender === "Male" && age === "old" && interest === "Female") {
      $("#mof").show();
    } else if (interest != "Female") {
      $("#mom").show();
    }



    event.preventDefault();
    // clearForm();
  });
});
