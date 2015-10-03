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

toastr["warning"]("You have been warned", "Pouet");

var username = "";
var password = "";

$.ajaxSetup({
  headers: {
    "Authorization": "Basic " + btoa(username + ":" + password)
  }
});

$.ajax({
  type: "GET",
  dataType: "json",
  url: "https://teamcity.immerselearning.com/httpAuth/app/rest/changes/id:12485",
  success: function(data) {
    console.log(data);
    toastr["warning"](data.version);
  },
  error: function(data) {
    console.error("dammit? " + data.responseText);
  }
});
