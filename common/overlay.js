toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "0",
  "extendedTimeOut": "0",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

var username = "";
var password = "";
var url = "https://teamcity.immerselearning.com/httpAuth/app/rest";

$.ajaxSetup({
  headers: {
    "Authorization": "Basic " + btoa(username + ":" + password)
  }
});

$.ajax({
  type: "GET",
  dataType: "json",
  url: url + "/builds/buildType:Develop-Unity3D,running:true",
  success: function(data) {
    toastr["warning"]("There is a build running, you should probably wait for it to finish");
  },
  error: function(data) {
  }
});

$.ajax({
  type: "GET",
  dataType: "json",
  url: url + "/builds/buildType:Develop-Archway,running:true",
  success: function(data) {
    toastr["warning"]("There is a build running, you should probably wait for it to finish");
  },
  error: function(data) {
  }
});
