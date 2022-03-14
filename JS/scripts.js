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

  $(document).ready(function () {
    $("#works1").hover(function () {
      $(".img_title1,").css("visibility", "visible");
    });
    // $(".works").mouseout(function () {
    // $(".img_title1").css("visibility", "hidden");
    // });
  });
  //   $(document).ready(function () {
  //     $("#jim-img").mouseover(function () {
  //       $("#description4").css("display", "block");
  //     });
  //     $("#jim-img").mouseout(function () {
  //       $("#description4").css("display", "none");
  //     });
  //   });
  //   $(document).ready(function () {
  //     $("#elena-img").mouseover(function () {
  //       $("#description5").css("display", "block");
  //     });
  //     $("#elena-img").mouseout(function () {
  //       $("#description5").css("display", "none");
  //     });
  //   });
  //   $(document).ready(function () {
  //     $("#calc-img").mouseover(function () {
  //       $("#description6").css("display", "block");
  //     });
  //     $("#calc-img").mouseout(function () {
  //       $("#description6").css("display", "none");
  //     });
  //   });
  //   $(document).ready(function () {
  //     $("#burned-img").mouseover(function () {
  //       $("#description7").css("display", "block");
  //     });
  //     $("#burned-img").mouseout(function () {
  //       $("#description7").css("display", "none");
  //     });
  //   });
  //   $(document).ready(function () {
  //     $("#giraffe-img").mouseover(function () {
  //       $("#description8").css("display", "block");
  //     });
  //     $("#giraffe-img").mouseout(function () {
  //       $("#description8").css("display", "none");
  //     });
  //   });
});
