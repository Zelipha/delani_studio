$(document).ready(function () {
  $("#hidden1").on("click", function () {
    $("#hidden1").hide(function () {
      $(".hide1").show();
      $(".hide1").css("cursor", "pointer");
    });
  });
  $(".hide1").click(function () {
    $("#hidden1").show();
    $(".hide1").hide();
  });

  $("#hidden2").on("click", function () {
    $("#hidden2").hide(function () {
      $(".hide2").show();
      $(".hide2").css("cursor", "pointer");
    });
  });
  $(".hide2").click(function () {
    $("#hidden2").show();
    $(".hide2").hide();
  });
  $("#hidden3").on("click", function () {
    $("#hidden3").hide(function () {
      $(".hide3").show();
      $(".hide3").css("cursor", "pointer");
    });
  });
  $(".hide3").click(function () {
    $("#hidden3").show();
    $(".hide3").hide();
  });
});
