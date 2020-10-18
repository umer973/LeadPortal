function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Masters/category/category.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Masters/category/category.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMastersCategoryCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12\" id=\"contents\" style=\"height: 92vh;\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-md-2 offset-0 col-md-8 col-12\" style=\"min-height: 85vh;margin-top: 2%;\">    \r\n    <div class=\"card\">\r\n        <div class=\"card-header\">\r\n            <b>Edit details</b>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <form autocomplete=\"off\" id=\"formmap\" method=\"POST\">                     \r\n                <div class=\"modal-body\">            \r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"row\"> \r\n                            <div class=\"col-12\">                                                \r\n                                \r\n                                <input class=\"form-control\" id=\"FormInfo\" name=\"FormInfo\" type=\"text\" value=\"/n/++pkEo7pQMEtPZvvKV72IQngWqzisBdoT2f9FYdkE/yGujw78A6XhWfcGQaY6Z4rMUiCOFd4s/6iFi+oOFg==&amp;&amp;pdrBrRW4tRmqhmXdGeW/poZAXCojf9QcCFd8UPNOvBUzaa4GLCy4j+eF8j3ZGM9knP57OifTphFN9ci6wNUcn8S209dbbR8GGq5xU/32rF8=&amp;&amp;Users&amp;&amp;Update&amp;&amp;5f8a948f3d0d0000ac005405\" style=\"display: none;\">                               \r\n                                <div class=\"row\">                                        \r\n                                    <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>User Name*</label>\r\n                                            <input class=\"form-control\" id=\"Name\" name=\"Name\" type=\"text\" value=\"Abid\" required=\"\">\r\n                                        </div>\r\n                                    </div> \r\n                                    <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Mobile No*</label>\r\n                                            <input class=\"form-control\" id=\"ContactNumber\" name=\"ContactNumber\" type=\"text\" value=\"7889315238\" required=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Email ID*</label>\r\n                                            <input class=\"form-control\" id=\"EmailID\" name=\"EmailID\" type=\"email\" value=\"abidkhanday92@gmail.com\" required=\"\">\r\n                                        </div>\r\n                                    </div> \r\n                                    <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Password*</label>\r\n                                            <input class=\"form-control\" id=\"Password\" name=\"Password\" type=\"password\" value=\"Welcome\" required=\"\">\r\n                                        </div>\r\n                                    </div> \r\n                                    <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Job Role</label>\r\n                                            <input class=\"form-control\" id=\"JobRole\" name=\"JobRole\" type=\"text\" value=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Working Hours</label>\r\n                                            <input class=\"form-control\" id=\"WorkingHour\" name=\"WorkingHour\" type=\"number\" min=\"1\" max=\"12\" value=\"\">\r\n                                        </div>\r\n                                    </div>\r\n                                                                        <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Status</label>                                            \r\n                                            <select class=\"form-control\" id=\"Status\" name=\"Status\">\r\n                                                                                                        <option value=\"Active\" selected=\"\">Active</option>\r\n                                                                                                            <option value=\"Block\">Block</option>\r\n                                                             \r\n                                            </select>                                            \r\n                                        </div>\r\n                                    </div> \r\n                                    <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Admin authorities</label>\r\n                                            <select class=\"form-control\" id=\"IsCompanyAdmin\" name=\"IsCompanyAdmin\">\r\n                                                                                                        <option value=\"Yes\" selected=\"\">Yes</option>\r\n                                                                                                            <option value=\"No\">No</option>\r\n                                                             \r\n                                            </select>\r\n                                        </div>\r\n                                    </div> \r\n                                    <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Data visibility</label>\r\n                                            <select class=\"form-control\" id=\"DataVisibility\" name=\"DataVisibility\">\r\n                                                                                                        <option value=\"\" selected=\"\"></option>\r\n                                                                                                            <option value=\"Own\">Own</option>\r\n                                                                                                            <option value=\"All\">All</option>\r\n                                                             \r\n                                            </select>\r\n                                        </div>\r\n                                    </div> \r\n                                    <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>User Type</label>\r\n                                            <select class=\"form-control\" id=\"AuthUserType\" name=\"AuthUserType\">\r\n                                                                                                        <option value=\"\" selected=\"\"></option>\r\n                                                                                                            <option value=\"Company Head\">Company Head</option>\r\n                                                                                                            <option value=\"Team Lead\">Team Lead</option>\r\n                                                                                                            <option value=\"Executive\">Executive</option>\r\n                                                             \r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Report To</label>\r\n                                            <select class=\"form-control\" id=\"UserParent\" name=\"UserParent\">\r\n                                                                                                        <option value=\"\" selected=\"\"></option>\r\n                                                             \r\n                                            </select>\r\n                                        </div>\r\n                                    </div>                                                                   \r\n                                    <div class=\"col-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Landing Page</label>\r\n                                            <input class=\"form-control\" id=\"LandingPage\" name=\"LandingPage\" type=\"text\" value=\"\">\r\n                                        </div>\r\n                                    </div>  \r\n                                                             \r\n                                </div>                                                                                 \r\n                            </div>                                                                                        \r\n                        </div>                                        \r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">            \r\n                    <button class=\"btn btn-dark\" id=\"buttonSave\" type=\"submit\">Save</button>            \r\n                </div>                                                                    \r\n        </form></div>            \r\n         \r\n        </div>        \r\n    </div>\r\n</div>\r\n\r\n<script type=\"text/javascript\">\r\n    \r\n    $('#formmap').on('submit', function(e) \r\n    {        \r\n        document.getElementById('buttonSave').innerHTML=\"Please wait saving user....\";\r\n        document.getElementById('buttonSave').disabled = true;\r\n        e.preventDefault();\r\n        var post_data = $('#formmap').serialize();        \r\n        $.ajax({\r\n            url : 'https://www.bytepaper.com/Cloud/Functions/CRUD.php',\r\n            type: \"POST\",\r\n            data: post_data,\r\n            success: function (data) \r\n            {                                                \r\n                swal({text: \"User saved successfully !\",timer: 2000,icon:\"success\",button:false}); \r\n                $('#newProduct').modal('hide');\r\n                setTimeout(function()\r\n                { \r\n                  window.location = window.location.href;\r\n                }, 200);           \r\n            },\r\n            error: function (jXHR, textStatus, errorThrown) \r\n            {\r\n                swal(errorThrown);\r\n            }\r\n        });\r\n    });\r\n\r\n</script>  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/Accounts/create-account/create-account.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/Accounts/create-account/create-account.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectAccountsCreateAccountCreateAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n      <div class=\"col-12\" id=\"contents\" style=\"height: 92vh;\">\r\n        <div class=\"row\">\r\n        \r\n        <div class=\"offset-1 col-10\" style=\"margin-top: 2%;\">  \r\n        <div class=\"col-12\">    \r\n          <h4 class=\"card-title mb-0\">\r\n              Active Users\r\n          </h4> \r\n          <br>\r\n          <div class=\"row\">                            \r\n                                  <div class=\"col-lg-3\" style=\"cursor: pointer\" onclick=\"viewUser('5f8a948f3d0d0000ac005405')\">\r\n                          <div class=\"brand-card\">                                                    \r\n                           \r\n                              <br>\r\n                              <!-- <i class=\"icon-people font-5xl icons\"></i> -->\r\n                              <div>                  \r\n                              <div style=\"background: #f1f1f1;height: 100px;width: 100px;border-radius: 50px;background-image: url(https://www.bytepaper.com/Cloud/assets/Profile/defaultnew.png);background-size: cover;cursor: pointer;background-position: center;\"></div>     \r\n                              </div>\r\n                           \r\n                            <div class=\"brand-card-body\">\r\n                              <div>                              \r\n                                  <div class=\"text-value\" style=\"font-size: 14px\">Abid</div>\r\n                                  <div class=\"text-muted\">Login : 17-10-2020<br></div>\r\n                              </div>                                                         \r\n                            </div>\r\n                                                            <div class=\"card-header bg-success\">View Details</div>\r\n                                                          \r\n                          </div>\r\n                      </div>\r\n                      \r\n                                  <div id=\"adduser\" class=\"col-lg-3\" style=\"cursor: pointer\" onclick=\"addnew()\">\r\n                          <div class=\"brand-card\">                                                    \r\n                          \r\n                              <br>\r\n                              <img height=\"100px\" style=\"border-radius: 50px\" title=\"\" src=\"https://www.bytepaper.com/Cloud/assets/Profile/plus.png\">\r\n                          \r\n                            <div class=\"brand-card-body\">\r\n                              <div>                              \r\n                                  <div class=\"text-value\">2 left</div>\r\n                                  <div class=\"text-muted small\">You can add 2 more users<br></div>\r\n                              </div>                                                         \r\n                            </div>\r\n                            <div class=\"card-header\">+ Add more users</div>\r\n                          </div>\r\n                      </div>\r\n                       \r\n          </div>\r\n        </div>\r\n        </div>\r\n        \r\n        \r\n        <!-- /.modal add new lead-->\r\n        <div class=\"modal fade\" id=\"addnew\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-md\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"col-sm-10\">\r\n            <h4 class=\"modal-title\" id=\"modal-title\">Add new user</h4>\r\n          </div>      \r\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>      \r\n        </div>\r\n        <!-- modal body starts -->\r\n        <form id=\"form\" method=\"POST\">                     \r\n            <div class=\"modal-body\">            \r\n              <div class=\"col-lg-12\">\r\n                <div class=\"row\"> \r\n                  <div class=\"col-12\">                                                \r\n                    <input class=\"form-control\" id=\"FormInfo\" name=\"FormInfo\" type=\"text\" value=\"OcGNa40t89TfgzVo5ibZUgRAlogF0cecWjRGI85OVHYo6q/cycxD267v6wCAThkoiW7C6M/K42MgVYRjxO3qRw==&amp;&amp;Kxz2UMG+FBfk/iANt9PHKhCPCX5LMYT9TbLhvwwjMT+tSXtFcmtQqOwbZ8xV7tSUT1FTXmIm6N1oB2FUYGttTVfHhRxCRWqmzYpaLInxWN4=&amp;&amp;Users&amp;&amp;New\" style=\"display: none;\">\r\n                    <input class=\"form-control\" id=\"ProfilePic\" name=\"ProfilePic\" type=\"text\" value=\"defaultnew.png\" style=\"display: none;\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group col-sm-12\">\r\n                          <label>Name*</label>\r\n                          <input class=\"form-control\" id=\"Name\" name=\"Name\" type=\"text\" required=\"\">\r\n                      </div>\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <label>Mobile no.*</label>\r\n                          <input class=\"form-control\" id=\"ContactNumber\" name=\"ContactNumber\" type=\"text\" required=\"\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <label>Email ID*</label>\r\n                          <input class=\"form-control\" id=\"EmailID\" name=\"EmailID\" type=\"email\" required=\"\">\r\n                        </div>\r\n                      </div>                                                       \r\n                    </div>                                                                                        \r\n                  </div>                \r\n                </div>\r\n              </div>                                                                     \r\n            </div>\r\n            <div class=\"modal-footer\">            \r\n              <button class=\"btn btn-dark\" id=\"buttonSave\" type=\"submit\">Save</button>            \r\n            </div>\r\n        </form>      \r\n        </div>\r\n        </div>\r\n        </div>\r\n        \r\n        \r\n        <div class=\"modal fade\" id=\"buynew\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-md\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"col-sm-10\">\r\n            <h4 class=\"modal-title\" id=\"modal-title\">Buy more users</h4>\r\n          </div>      \r\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>      \r\n        </div>\r\n        <!-- modal body starts -->                      \r\n        <div class=\"modal-body\">            \r\n          <div class=\"col-lg-12\">\r\n            <div class=\"row\"> \r\n              <div class=\"col-12\">                                                              \r\n                <div class=\"row\">                \r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">                              \r\n                      <label for=\"name\">Select Plan</label>                                    \r\n                      <select class=\"form-control\" id=\"userPlan\" name=\"userPlan\" onchange=\"applyPlan(this.value)\">\r\n                          <!-- <option value=\"Monthly\">Monthly</option> -->\r\n                          <option value=\"Yearly\">Yearly</option>                            \r\n                      </select>                                                      \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group col-sm-12\">\r\n                      <label>Price</label>\r\n                      <input class=\"form-control\" id=\"Price\" name=\"Price\" type=\"text\" value=\"2500\" required=\"\" readonly=\"\">\r\n                  </div>\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Number of users you want to buy</label>\r\n                      <input class=\"form-control\" id=\"Number\" name=\"Number\" type=\"number\" min=\"1\" max=\"100\" value=\"1\" required=\"\" onkeyup=\"calcprice()\" onchange=\"calcprice()\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>Total Amount</label>\r\n                      <input class=\"form-control\" id=\"Total\" name=\"Total\" type=\"number\" value=\"2500\" required=\"\" readonly=\"\">\r\n                    </div>\r\n                  </div>                                                       \r\n                </div>                                                                                        \r\n              </div>                \r\n            </div>\r\n          </div>                                                                     \r\n        </div>\r\n        <div class=\"modal-footer\">            \r\n          <button class=\"btn btn-success\" id=\"buttonSave\" type=\"button\" onclick=\"reqBuy()\">Buy</button>            \r\n        </div>        \r\n        </div>\r\n        </div>\r\n        </div>\r\n        \r\n        \r\n        \r\n        <script type=\"text/javascript\">\r\n        \r\n        function applyPlan(val)\r\n        {\r\n        if(val==\"Monthly\")\r\n        {\r\n        document.getElementById('Price').value = \"250\";\r\n        document.getElementById('Total').value = document.getElementById('Price').value*document.getElementById('Number').value;\r\n        }\r\n        else\r\n        {\r\n        if(\"591561922\"==\"535580444\" || \"591561922\"==\"984097290\")    \r\n        {\r\n        document.getElementById('Price').value = \"1000\";\r\n        document.getElementById('Total').value = document.getElementById('Price').value*document.getElementById('Number').value;\r\n        }\r\n        else if(\"591561922\"==\"997830200\")\r\n        {\r\n        document.getElementById('Price').value = \"1500\";\r\n        document.getElementById('Total').value = document.getElementById('Price').value*document.getElementById('Number').value;\r\n        }\r\n        else\r\n        {\r\n        document.getElementById('Price').value = \"2500\";\r\n        document.getElementById('Total').value = document.getElementById('Price').value*document.getElementById('Number').value;\r\n        }\r\n        \r\n        }\r\n        }\r\n        \r\n        \r\n        function addnew()\r\n        {\r\n        document.getElementById(\"form\").reset();    \r\n        $('#addnew').modal('show');\r\n        document.getElementById(\"modal-title\").innerHTML=\"Add new user\";          \r\n        }\r\n        \r\n        function buynew()\r\n        {      \r\n        $('#buynew').modal('show');            \r\n        }\r\n        \r\n        function calcprice()\r\n        {\r\n        document.getElementById('Total').value = document.getElementById('Number').value*document.getElementById('Price').value;\r\n        }\r\n        \r\n        function viewUser(id)\r\n        {\r\n        window.location=\"?Users&UserDetail&\"+id+\"&\"+\"01-10-2020\"+\"&\"+\"31-10-2020\"+\"&\"+\"2020-10-17\";\r\n        }\r\n        \r\n        function reqBuy()\r\n        {\r\n        window.location=\"https://www.bytepaper.com/Cloud/Apps/Instamojo/buyUsers.php?Amount=\"+document.getElementById('Total').value+\"&Company=\"+\"DelhiVery&Mobile=\"+\"7889315238&Email=\"+\"abidkhanday92@gmail.com&Plan=\"+document.getElementById('userPlan').value+\"&LicenseNumber=\"+\"591561922\";\r\n        }\r\n        \r\n        $(document).ready(function () \r\n        {\r\n        $('#form').on('submit', function(e) \r\n        {        \r\n        document.getElementById('buttonSave').innerHTML=\"Please wait adding User....\";\r\n        document.getElementById('buttonSave').disabled = true;\r\n        e.preventDefault();\r\n        var post_data = $('#form').serialize();        \r\n        $.ajax({\r\n            url : 'https://www.bytepaper.com/Cloud/Functions/CRUD.php',\r\n            type: \"POST\",\r\n            data: post_data,\r\n            success: function (data) \r\n            {                                                \r\n                if(data==\"Existing User\")\r\n                {\r\n                  swal({text: \"User with this email id already exists !\",timer: 2000}); \r\n                  window.location=window.location.href;\r\n                }\r\n                else\r\n                {\r\n                  swal({text: \"User added successfully !\",timer: 100}); \r\n                  $('#addnew').modal('hide');\r\n                  window.location=window.location.href;                            \r\n                }               \r\n            },\r\n            error: function (jXHR, textStatus, errorThrown) \r\n            {\r\n                swal(errorThrown);\r\n            }\r\n        });\r\n        });\r\n        }); \r\n        \r\n        </script>  </div>\r\n        </div>\r\n        \r\n        <audio id=\"myAudio\">\r\n        <source src=\"https://www.bytepaper.com/Cloud/assets/notification.ogg\" type=\"audio/ogg\">\r\n        <source src=\"https://www.bytepaper.com/Cloud/assets/notification.mp3\" type=\"audio/mpeg\">\r\n        Your browser does not support the audio element.\r\n        </audio>\r\n        \r\n        \r\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"https://www.bytepaper.com/Cloud/assets/js/toastify.css?17.1\">   \r\n        <script type=\"text/javascript\" src=\"https://www.bytepaper.com/Cloud/assets/js/toastify.js\"></script>  \r\n        \r\n        \r\n            ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/Accounts/manage-account/manage-account.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/Accounts/manage-account/manage-account.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectAccountsManageAccountManageAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n            <!-- <div class=\"row mb-2\">\r\n          <div class=\"col-sm-6\">\r\n            <h1>Project Add</h1>\r\n          </div>\r\n        </div> -->\r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n<section class=\"content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row \">\r\n            <div class=\"col-md-12\">\r\n\r\n                <div class=\"card card-info\">\r\n                    <div class=\"card-header\">\r\n                      <h3 class=\"card-title\">Manage Account</h3>\r\n                    </div>\r\n                   <form [formGroup]=\"managraccount\" >\r\n                    <div class=\"card-body\">\r\n                        <div id=\"example1_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 col-md-6\">\r\n                                    <div class=\"dataTables_length\" id=\"example1_length\"><label>Show <select\r\n                                                name=\"example1_length\" aria-controls=\"example1\"\r\n                                                class=\"custom-select custom-select-sm form-control form-control-sm\">\r\n                                                <option value=\"10\">10</option>\r\n                                                <option value=\"25\">25</option>\r\n                                                <option value=\"50\">50</option>\r\n                                                <option value=\"100\">100</option>\r\n                                            </select> entries</label></div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"card-tools\">\r\n                                        <div class=\"input-group input-group-sm\">\r\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Search \">\r\n                                          <div class=\"input-group-append\">\r\n                                            <div class=\"btn btn-primary\">\r\n                                              <i class=\"fas fa-search\"></i>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div></div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\"\r\n                                        role=\"grid\" aria-describedby=\"example1_info\">\r\n                                        <thead>\r\n                                            <tr role=\"row\">\r\n                                                <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                    aria-sort=\"descending\" style=\"width: 203.4px;\">Name</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\"\r\n                                                    colspan=\"1\" aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    UserName</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\"\r\n                                                    colspan=\"1\"\r\n                                                    aria-label=\"Platform(s): activate to sort column ascending\"\r\n                                                    style=\"width: 233px;\">Email</th>\r\n                                                <!-- <th>  <img src={{orm.img}} alt=\"delete\" height=30px\" width=\"30px\"></th> -->\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\"\r\n                                                    colspan=\"1\" aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    Role</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\"\r\n                                                    colspan=\"1\"\r\n                                                    aria-label=\"Engine version: activate to sort column ascending\"\r\n                                                    style=\"width: 500.6px;\">Action</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr role=\"row\" class=\"odd\">\r\n                                                <td class=\"sorting_1\">Webkit</td>\r\n                                                <td>Safari 1.2</td>\r\n                                                <td>OSX.3</td>\r\n                                                <td>OSX.3</td>\r\n                                                <td class=\"project-actions text-right\">\r\n                                                    <a class=\"btn btn-danger btn-sm\" href=\"#\">\r\n                                                        <i class=\"fas fa-folder\">\r\n                                                        </i>\r\n                                                        Block\r\n                                                    </a>\r\n                                                    <a class=\"btn btn-info btn-sm\" href=\"#\">\r\n                                                        <i class=\"fas fa-folder\">\r\n                                                        </i>\r\n                                                        UnBlock\r\n                                                    </a>\r\n                                                </td>\r\n                                               \r\n                                            </tr>\r\n                                        </tbody>\r\n\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 col-md-5\">\r\n                                    <div class=\"dataTables_info\" id=\"example1_info\" role=\"status\" aria-live=\"polite\">\r\n                                        Showing 1 to 10\r\n                                        of 57 entries</div>\r\n                                </div>\r\n                                <div class=\"col-sm-12 col-md-7\">\r\n                                    <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example1_paginate\">\r\n                                        <ul class=\"pagination\">\r\n                                            <li class=\"paginate_button page-item previous disabled\"\r\n                                                id=\"example1_previous\"><a href=\"#\" aria-controls=\"example1\"\r\n                                                    data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a></li>\r\n                                            <li class=\"paginate_button page-item active\"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"1\" tabindex=\"0\"\r\n                                                    class=\"page-link\">1</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"example1\"\r\n                                                    data-dt-idx=\"2\" tabindex=\"0\" class=\"page-link\">2</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"example1\"\r\n                                                    data-dt-idx=\"3\" tabindex=\"0\" class=\"page-link\">3</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"example1\"\r\n                                                    data-dt-idx=\"4\" tabindex=\"0\" class=\"page-link\">4</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"example1\"\r\n                                                    data-dt-idx=\"5\" tabindex=\"0\" class=\"page-link\">5</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"example1\"\r\n                                                    data-dt-idx=\"6\" tabindex=\"0\" class=\"page-link\">6</a></li>\r\n                                            <li class=\"paginate_button page-item next\" id=\"example1_next\"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"7\" tabindex=\"0\"\r\n                                                    class=\"page-link\">Next</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    </form>\r\n                </div>\r\n               \r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-brand/add-brand.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-brand/add-brand.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectIGMCAddBrandAddBrandComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n            <!-- <div class=\"row mb-2\">\r\n          <div class=\"col-sm-6\">\r\n            <h1>Project Add</h1>\r\n          </div>\r\n        </div> -->\r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n    <!-- <section class=\"content\">\r\n        <div class=\"container-fluid\"> -->\r\n            <div class=\"row \">\r\n                <div class=\"col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-info btn-sm adddesign\"\r\n                    data-toggle=\"modal\" data-target=\"#openbrandModal\">\r\n                    Add Brand\r\n                </button>\r\n                </div>\r\n               \r\n                </div>\r\n            <!-- </div></section> -->\r\n    <!-- Main content -->\r\n  \r\n    <!-- /.content  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-->\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row \">\r\n                <div class=\"col-md-12\">\r\n\r\n                    <div class=\"card card-info\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Brands List</h3>\r\n                        </div>\r\n                        <!-- /.card-header -->\r\n                        <div class=\"card-body\">\r\n                            <div id=\"example1_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-md-6\">\r\n                                        <div class=\"dataTables_length\" id=\"example1_length\"><label>Show <select\r\n                                                    name=\"example1_length\" aria-controls=\"example1\" [(ngModel)]=\"search\"\r\n                                                   \r\n                                                    class=\"custom-select custom-select-sm form-control form-control-sm\">\r\n                                                    <option value=\"5\">5</option>\r\n                                                    <option value=\"10\">10</option>\r\n                                                    <option value=\"15\">15</option>\r\n                                                    <option value=\"20\">20</option>\r\n                                                </select> entries</label></div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card-tools\">\r\n                                            <div class=\"input-group input-group-sm\">\r\n                                                <input type=\"text\" class=\"form-control\" (keyup)=\"keyupFunction($event)\" placeholder=\"Search\">\r\n                                                <div class=\"input-group-append\">\r\n                                                    <div class=\"btn btn-primary\">\r\n                                                        <i class=\"fas fa-search\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <table id=\"example1\" class=\"table table-bordered table-striped dataTable\"\r\n                                            role=\"grid\" aria-describedby=\"example1_info\">\r\n                                            <thead>\r\n                                                <tr role=\"row\">\r\n                                                    <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                        aria-sort=\"descending\" style=\"width: 203.4px;\">Brand</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Browser: activate to sort column ascending\"\r\n                                                        style=\"width: 262.6px;\">\r\n                                                        Description</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Platform(s): activate to sort column ascending\"\r\n                                                        style=\"width: 233px;\">Image</th>\r\n                                                    <!-- <th>  <img src={{orm.img}} alt=\"delete\" height=30px\" width=\"30px\"></th> -->\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Engine version: activate to sort column ascending\"\r\n                                                        style=\"width: 500.6px;\">Action</th>\r\n\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr role=\"row\" class=\"odd\" *ngFor=\"let brand of resultData;let i=index\">\r\n\r\n                                                    <ng-container *ngIf=\"search>=i\">\r\n                                                        <td class=\"sorting_1\">{{brand.brandname}}</td>\r\n                                                        <td>{{brand.description}}</td>\r\n                                                        <td>{{brand.ImagePath}}</td>\r\n                                                        <td class=\"project-actions text-right\">\r\n                                                            <a class=\"btn btn-primary btn-sm\">\r\n                                                                <i class=\"fas fa-folder\">\r\n                                                                </i>\r\n                                                                View\r\n                                                            </a>\r\n                                                            <a class=\"btn btn-info btn-sm\" (click)=\"onEdit(i)\">\r\n                                                                <i class=\"fas fa-pencil-alt\">\r\n                                                                </i>\r\n                                                                Edit\r\n                                                            </a>\r\n                                                         \r\n                                                                <!-- Button HTML (to Trigger Modal) -->\r\n                                                            \r\n                                                                <button type=\"button\" class=\"btn btn-danger btn-sm\"  (click)=\"openConfirmationDialog()\"\r\n                                                                data-toggle=\"modal\" data-target=\"#myModal\">\r\n                                                                <i class=\"fas fa-trash\">\r\n                                                                </i>\r\n                                                                Delete\r\n                                                            </button>\r\n                                \r\n                                                        </td>\r\n                                                    </ng-container>\r\n\r\n                                                </tr>\r\n                                            </tbody>\r\n\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-md-5\">\r\n                                        <div class=\"dataTables_info\" id=\"example1_info\" role=\"status\"\r\n                                            aria-live=\"polite\">Showing 1 to {{search}}\r\n                                            of {{resultData.length}} entries</div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12 col-md-7\">\r\n                                        <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example1_paginate\">\r\n                                            <ul class=\"pagination\">\r\n                                                <li class=\"paginate_button page-item previous disabled\"\r\n                                                    id=\"example1_previous\"><a href=\"#\" aria-controls=\"example1\"\r\n                                                        data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a></li>\r\n\r\n                                                <li class=\"paginate_button page-item active\"\r\n                                                    *ngFor=\"let count of resultData;let i=index\">\r\n                                                    <ng-container *ngIf=\"i<4\">\r\n                                                        <a href=\"#\" aria-controls=\"example1\" data-dt-idx=\"1\"\r\n                                                            tabindex=\"0\" class=\"page-link\">{{i+1}}</a>\r\n                                                    </ng-container>\r\n                                                </li>\r\n\r\n\r\n                                                <li class=\"paginate_button page-item next\" id=\"example1_next\"><a\r\n                                                        href=\"#\" aria-controls=\"example1\" data-dt-idx=\"7\" tabindex=\"0\"\r\n                                                        class=\"page-link\">Next</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.row -->\r\n                </div><!-- /.container-fluid -->\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- /.card-body -->\r\n</div>\r\n\r\n<!-- Add Modal -->\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"openbrandModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Brand</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n               <!-- form start -->\r\n               <form [formGroup]=\"addbrandForm\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <input placeholder=\"Enter BrandName\" id=\"brandname\"\r\n                                    formControlName=\"brandname\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.brandname.errors }\" />\r\n                                <div *ngIf=\"submitted && f.brandname.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.brandname.errors.required\">Brand Name is required</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"custom-file\">\r\n                                        <input type=\"file\" class=\"custom-file-input\" id=\"ImagePath\"\r\n                                            formControlName=\"imagepath\">\r\n                                        <label class=\"custom-file-label\" for=\"exampleInputFile\">Choose Image\r\n                                        </label>\r\n                                    </div>\r\n                                    <!-- <div class=\"input-group-append\">\r\n                                    <span class=\"input-group-text\" id=\"\">Upload</span>\r\n                                </div> -->\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <textarea class=\"form-control\" rows=\"3\" formControlName=\"description\"\r\n                                    placeholder=\"Enter Description ...\"></textarea>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n                <!-- /.card-body -->\r\n\r\n            \r\n            </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onBrandSave()\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Add</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ///////////////////Delete Modal/////////////////// -->\r\n<div class=\"modal fade\" id=\"DeleteModal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Modal title</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Modal body text goes here.</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\">Yes</button>\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ///////////////////End Delete Modal///////////////////-->\r\n\r\n<!-- Delete Modal -->\r\n<div class=\"text-center\">\r\n\t<!-- Button HTML (to Trigger Modal) -->\r\n\t<a href=\"#myModal\" class=\"trigger-btn\" data-toggle=\"modal\">Click to Open Confirm Modal</a>\r\n</div>\r\n\r\n<!-- Modal HTML -->\r\n<div id=\"myModal\" class=\"modal fade\">\r\n\t<div class=\"modal-dialog modal-confirm\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<div class=\"icon-box\">\r\n\t\t\t\t\t<i class=\"material-icons\">&#xE5CD;</i>\r\n\t\t\t\t</div>\t\t\t\t\r\n\t\t\t\t<h4 class=\"modal-title\">Are you sure?</h4>\t\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<p>Do you really want to delete these records? This process cannot be undone.</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Cancel</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-category/add-category.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-category/add-category.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectIGMCAddCategoryAddCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12\" id=\"contents\" style=\"height: 92vh;\">\r\n    <div class=\"row\">\r\n      <div class=\"offset-md-2 offset-0 col-md-8 col-12\" style=\"min-height: 85vh;margin-top: 2%;\">    \r\n      <div class=\"card\">\r\n          <div class=\"card-header\">\r\n              <b>Add User</b>\r\n          </div>\r\n          <div class=\"card-body\">\r\n              <form autocomplete=\"off\" id=\"formmap\" method=\"POST\">                     \r\n                  <div class=\"modal-body\">            \r\n                      <div class=\"col-lg-12\">\r\n                          <div class=\"row\"> \r\n                              <div class=\"col-12\">                                                \r\n                                  \r\n                                  <input class=\"form-control\" id=\"FormInfo\" name=\"FormInfo\" type=\"text\" value=\"/n/++pkEo7pQMEtPZvvKV72IQngWqzisBdoT2f9FYdkE/yGujw78A6XhWfcGQaY6Z4rMUiCOFd4s/6iFi+oOFg==&amp;&amp;pdrBrRW4tRmqhmXdGeW/poZAXCojf9QcCFd8UPNOvBUzaa4GLCy4j+eF8j3ZGM9knP57OifTphFN9ci6wNUcn8S209dbbR8GGq5xU/32rF8=&amp;&amp;Users&amp;&amp;Update&amp;&amp;5f8a948f3d0d0000ac005405\" style=\"display: none;\">                               \r\n                                  <div class=\"row\">                                        \r\n                                      <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>User Name*</label>\r\n                                              <input class=\"form-control\" id=\"Name\" name=\"Name\" type=\"text\" value=\"\" required=\"\">\r\n                                          </div>\r\n                                      </div> \r\n                                      <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>Mobile No*</label>\r\n                                              <input class=\"form-control\" id=\"ContactNumber\" name=\"ContactNumber\" type=\"text\" value=\"\" required=\"\">\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>Email ID*</label>\r\n                                              <input class=\"form-control\" id=\"EmailID\" name=\"EmailID\" type=\"email\" value=\"\" required=\"\">\r\n                                          </div>\r\n                                      </div> \r\n                                      <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>Password*</label>\r\n                                              <input class=\"form-control\" id=\"Password\" name=\"Password\" type=\"password\" value=\"\" required=\"\">\r\n                                          </div>\r\n                                      </div> \r\n                                      <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>Job Role</label>\r\n                                              <input class=\"form-control\" id=\"JobRole\" name=\"JobRole\" type=\"text\" value=\"\">\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>Working Hours</label>\r\n                                              <input class=\"form-control\" id=\"WorkingHour\" name=\"WorkingHour\" type=\"number\" min=\"1\" max=\"12\" value=\"\">\r\n                                          </div>\r\n                                      </div>\r\n                                                                          <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>Status</label>                                            \r\n                                              <select class=\"form-control\" id=\"Status\" name=\"Status\">\r\n                                                                                                          <option value=\"Active\" selected=\"\">Active</option>\r\n                                                                                                              <option value=\"Block\">Block</option>\r\n                                                               \r\n                                              </select>                                            \r\n                                          </div>\r\n                                      </div> \r\n                                      <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>Admin authorities</label>\r\n                                              <select class=\"form-control\" id=\"IsCompanyAdmin\" name=\"IsCompanyAdmin\">\r\n                                                                                                          <option value=\"Yes\" selected=\"\">Yes</option>\r\n                                                                                                              <option value=\"No\">No</option>\r\n                                                               \r\n                                              </select>\r\n                                          </div>\r\n                                      </div> \r\n                                      <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>Data visibility</label>\r\n                                              <select class=\"form-control\" id=\"DataVisibility\" name=\"DataVisibility\">\r\n                                                                                                          <option value=\"\" selected=\"\"></option>\r\n                                                                                                              <option value=\"Own\">Own</option>\r\n                                                                                                              <option value=\"All\">All</option>\r\n                                                               \r\n                                              </select>\r\n                                          </div>\r\n                                      </div> \r\n                                      <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>User Type</label>\r\n                                              <select class=\"form-control\" id=\"AuthUserType\" name=\"AuthUserType\">\r\n                                                                                                          <option value=\"\" selected=\"\"></option>\r\n                                                                                                              <option value=\"Company Head\">Company Head</option>\r\n                                                                                                              <option value=\"Team Lead\">Team Lead</option>\r\n                                                                                                              <option value=\"Executive\">Executive</option>\r\n                                                               \r\n                                              </select>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"col-md-6 col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>Report To</label>\r\n                                              <select class=\"form-control\" id=\"UserParent\" name=\"UserParent\">\r\n                                                                                                          <option value=\"\" selected=\"\"></option>\r\n                                                               \r\n                                              </select>\r\n                                          </div>\r\n                                      </div>                                                                   \r\n                                      <div class=\"col-12\">\r\n                                          <div class=\"form-group\">\r\n                                              <label>Landing Page</label>\r\n                                              <input class=\"form-control\" id=\"LandingPage\" name=\"LandingPage\" type=\"text\" value=\"\">\r\n                                          </div>\r\n                                      </div>  \r\n                                                               \r\n                                  </div>                                                                                 \r\n                              </div>                                                                                        \r\n                          </div>                                        \r\n                      </div>\r\n                  </div>\r\n                  <div class=\"modal-footer\">            \r\n                      <button class=\"btn btn-dark\" id=\"buttonSave\" type=\"submit\">Save</button>            \r\n                  </div>                                                                    \r\n          </form></div>            \r\n           \r\n          </div>        \r\n      </div>\r\n  </div>\r\n  \r\n  <script type=\"text/javascript\">\r\n      \r\n      $('#formmap').on('submit', function(e) \r\n      {        \r\n          document.getElementById('buttonSave').innerHTML=\"Please wait saving user....\";\r\n          document.getElementById('buttonSave').disabled = true;\r\n          e.preventDefault();\r\n          var post_data = $('#formmap').serialize();        \r\n          $.ajax({\r\n              url : 'https://www.bytepaper.com/Cloud/Functions/CRUD.php',\r\n              type: \"POST\",\r\n              data: post_data,\r\n              success: function (data) \r\n              {                                                \r\n                  swal({text: \"User saved successfully !\",timer: 2000,icon:\"success\",button:false}); \r\n                  $('#newProduct').modal('hide');\r\n                  setTimeout(function()\r\n                  { \r\n                    window.location = window.location.href;\r\n                  }, 200);           \r\n              },\r\n              error: function (jXHR, textStatus, errorThrown) \r\n              {\r\n                  swal(errorThrown);\r\n              }\r\n          });\r\n      });\r\n  \r\n  </script>  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-dealer/add-dealer.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-dealer/add-dealer.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectIGMCAddDealerAddDealerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <div class=\"container-fluid\">  \r\n      </div>\r\n    </section>\r\n    \r\n    <div class=\"row \">\r\n        <div class=\"col-md-3 adddesign\">\r\n            <button type=\"button\" class=\"btn btn-info btn-sm \"\r\n            data-toggle=\"modal\" data-target=\"#opendealerModal\">\r\n            Add Dealer\r\n        </button>\r\n        \r\n        </div>\r\n        </div>\r\n   \r\n<!-- /.content -->\r\n<section class=\"content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row \">\r\n            <div class=\"col-md-12\">\r\n\r\n                <div class=\"card card-info\">\r\n                    <div class=\"card-header\">\r\n                        <h3 class=\"card-title\">Dealer List</h3>\r\n                    </div>\r\n                    <!-- /.card-header -->\r\n                    <div class=\"card-body\">\r\n                        <div id=\"example1_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 col-md-6\">\r\n                                    <div class=\"dataTables_length\" id=\"example1_length\"><label>Show <select\r\n                                                name=\"example1_length\" aria-controls=\"example1\"\r\n                                                class=\"custom-select custom-select-sm form-control form-control-sm\">\r\n                                                <option value=\"10\">10</option>\r\n                                                <option value=\"25\">25</option>\r\n                                                <option value=\"50\">50</option>\r\n                                                <option value=\"100\">100</option>\r\n                                            </select> entries</label></div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"card-tools\">\r\n                                        <div class=\"input-group input-group-sm\">\r\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Search \">\r\n                                          <div class=\"input-group-append\">\r\n                                            <div class=\"btn btn-primary\">\r\n                                              <i class=\"fas fa-search\"></i>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div></div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\"\r\n                                        role=\"grid\" aria-describedby=\"example1_info\">\r\n                                        <thead>\r\n                                            <tr role=\"row\">\r\n                                                <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                    aria-sort=\"descending\" style=\"width: 203.4px;\">Name</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    Address</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Platform(s): activate to sort column ascending\"\r\n                                                    style=\"width: 233px;\">Phone No</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Platform(s): activate to sort column ascending\"\r\n                                                    style=\"width: 233px;\">Email</th>\r\n                                                <!-- <th>  <img src={{orm.img}} alt=\"delete\" height=30px\" width=\"30px\"></th> -->\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Engine version: activate to sort column ascending\"\r\n                                                    style=\"width: 500.6px;\">Action</th>\r\n\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr role=\"row\" class=\"odd\">\r\n                                                <td class=\"sorting_1\">Webkit</td>\r\n                                                <td>Safari 1.2</td>\r\n                                                <td>OSX.3</td>\r\n                                                <td>OSX.5</td>\r\n                                                <td class=\"project-actions text-right\">\r\n                                                    <a class=\"btn btn-primary btn-sm\" href=\"#\">\r\n                                                        <i class=\"fas fa-folder\">\r\n                                                        </i>\r\n                                                        View\r\n                                                    </a>\r\n                                                    <a class=\"btn btn-info btn-sm\" href=\"#\">\r\n                                                        <i class=\"fas fa-pencil-alt\">\r\n                                                        </i>\r\n                                                        Edit\r\n                                                    </a>\r\n                                                    <a class=\"btn btn-danger btn-sm\" href=\"#\">\r\n                                                        <i class=\"fas fa-trash\">\r\n                                                        </i>\r\n                                                        Delete\r\n                                                    </a>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 col-md-5\">\r\n                                    <div class=\"dataTables_info\" id=\"example1_info\" role=\"status\"\r\n                                        aria-live=\"polite\">Showing 1 to 10\r\n                                        of 57 entries</div>\r\n                                </div>\r\n                                <div class=\"col-sm-12 col-md-7\">\r\n                                    <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example1_paginate\">\r\n                                        <ul class=\"pagination\">\r\n                                            <li class=\"paginate_button page-item previous disabled\"\r\n                                                id=\"example1_previous\"><a href=\"#\" aria-controls=\"example1\"\r\n                                                    data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a></li>\r\n                                            <li class=\"paginate_button page-item active\"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"1\" tabindex=\"0\"\r\n                                                    class=\"page-link\">1</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"2\" tabindex=\"0\"\r\n                                                    class=\"page-link\">2</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"3\" tabindex=\"0\"\r\n                                                    class=\"page-link\">3</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"4\" tabindex=\"0\"\r\n                                                    class=\"page-link\">4</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"5\" tabindex=\"0\"\r\n                                                    class=\"page-link\">5</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"6\" tabindex=\"0\"\r\n                                                    class=\"page-link\">6</a></li>\r\n                                            <li class=\"paginate_button page-item next\" id=\"example1_next\"><a\r\n                                                    href=\"#\" aria-controls=\"example1\" data-dt-idx=\"7\" tabindex=\"0\"\r\n                                                    class=\"page-link\">Next</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /.row -->\r\n            </div><!-- /.container-fluid -->\r\n        </div>\r\n    </div>\r\n</section>\r\n</div>\r\n<!-- Add Modal -->\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"opendealerModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Brand</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n               <!-- form start -->\r\n               <form [formGroup]=\"adddealerForm\" >\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <input placeholder=\"Enter Name\" id=\"name\" formControlName=\"name\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\r\n                                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.name.errors.required\">Name is required</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <input placeholder=\"Enter address\" id=\"address\"\r\n                                    formControlName=\"address\" class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\r\n                                <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.address.errors.required\">Address is required</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <input placeholder=\"Enter Phone\" id=\"phone\" formControlName=\"phone\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\r\n                                <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.phone.errors.required\">Phone is required</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <input placeholder=\"Enter Email\" id=\"email\" formControlName=\"email\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                                        <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                                    </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                 \r\n                </div>\r\n                <!-- /.card-body -->\r\n\r\n              \r\n            </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onDealerSave()\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Add</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-hsn/add-hsn.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-hsn/add-hsn.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectIGMCAddHsnAddHsnComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n\r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n       \r\n    <div class=\"row \">\r\n        <div class=\"col-md-3 adddesign\">\r\n            <button type=\"button\" class=\"btn btn-info btn-sm \"\r\n            data-toggle=\"modal\" data-target=\"#openhsnModal\">\r\n            Add HSN\r\n        </button>\r\n        \r\n        </div>\r\n        </div>\r\n    <!-- /.content  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-->\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row \">\r\n                <div class=\"col-md-12\">\r\n\r\n                    <div class=\"card card-info\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">HSN COde List</h3>\r\n                        </div>\r\n                        <!-- /.card-header -->\r\n                        <div class=\"card-body\">\r\n                            <div id=\"example1_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-md-6\">\r\n                                        <div class=\"dataTables_length\" id=\"example1_length\"><label>Show <select\r\n                                                    name=\"example1_length\" aria-controls=\"example1\"\r\n                                                    class=\"custom-select custom-select-sm form-control form-control-sm\">\r\n                                                    <option value=\"10\">10</option>\r\n                                                    <option value=\"25\">25</option>\r\n                                                    <option value=\"50\">50</option>\r\n                                                    <option value=\"100\">100</option>\r\n                                                </select> entries</label></div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card-tools\">\r\n                                            <div class=\"input-group input-group-sm\">\r\n                                              <input type=\"text\" class=\"form-control\" placeholder=\"Search \">\r\n                                              <div class=\"input-group-append\">\r\n                                                <div class=\"btn btn-primary\">\r\n                                                  <i class=\"fas fa-search\"></i>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div></div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <table id=\"example1\" class=\"table table-bordered table-striped dataTable\"\r\n                                            role=\"grid\" aria-describedby=\"example1_info\">\r\n                                            <thead>\r\n                                                <tr role=\"row\">\r\n                                                    <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                        aria-sort=\"descending\" style=\"width: 203.4px;\">Brand</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Browser: activate to sort column ascending\"\r\n                                                        style=\"width: 262.6px;\">\r\n                                                        Description</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Platform(s): activate to sort column ascending\"\r\n                                                        style=\"width: 233px;\">Image</th>\r\n                                                    <!-- <th>  <img src={{orm.img}} alt=\"delete\" height=30px\" width=\"30px\"></th> -->\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Engine version: activate to sort column ascending\"\r\n                                                        style=\"width: 500.6px;\">Action</th>\r\n\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr role=\"row\" class=\"odd\">\r\n                                                    <td class=\"sorting_1\">Webkit</td>\r\n                                                    <td>Safari 1.2</td>\r\n                                                    <td>OSX.3</td>\r\n                                                    <td class=\"project-actions text-right\">\r\n                                                        <a class=\"btn btn-primary btn-sm\" href=\"#\">\r\n                                                            <i class=\"fas fa-folder\">\r\n                                                            </i>\r\n                                                            View\r\n                                                        </a>\r\n                                                        <a class=\"btn btn-info btn-sm\" href=\"#\">\r\n                                                            <i class=\"fas fa-pencil-alt\">\r\n                                                            </i>\r\n                                                            Edit\r\n                                                        </a>\r\n                                                        <a class=\"btn btn-danger btn-sm\" href=\"#\">\r\n                                                            <i class=\"fas fa-trash\">\r\n                                                            </i>\r\n                                                            Delete\r\n                                                        </a>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-md-5\">\r\n                                        <div class=\"dataTables_info\" id=\"example1_info\" role=\"status\"\r\n                                            aria-live=\"polite\">Showing 1 to 10\r\n                                            of 57 entries</div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12 col-md-7\">\r\n                                        <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example1_paginate\">\r\n                                            <ul class=\"pagination\">\r\n                                                <li class=\"paginate_button page-item previous disabled\"\r\n                                                    id=\"example1_previous\"><a href=\"#\" aria-controls=\"example1\"\r\n                                                        data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a></li>\r\n                                                <li class=\"paginate_button page-item active\"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"1\" tabindex=\"0\"\r\n                                                        class=\"page-link\">1</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"2\" tabindex=\"0\"\r\n                                                        class=\"page-link\">2</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"3\" tabindex=\"0\"\r\n                                                        class=\"page-link\">3</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"4\" tabindex=\"0\"\r\n                                                        class=\"page-link\">4</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"5\" tabindex=\"0\"\r\n                                                        class=\"page-link\">5</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"6\" tabindex=\"0\"\r\n                                                        class=\"page-link\">6</a></li>\r\n                                                <li class=\"paginate_button page-item next\" id=\"example1_next\"><a\r\n                                                        href=\"#\" aria-controls=\"example1\" data-dt-idx=\"7\" tabindex=\"0\"\r\n                                                        class=\"page-link\">Next</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.row -->\r\n                </div><!-- /.container-fluid -->\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- /.card-body -->\r\n</div>\r\n\r\n<!-- Add Modal -->\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"openhsnModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Brand</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n               <!-- form start -->\r\n               <form [formGroup]=\"addhsnForm\" >\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <input placeholder=\"Enter HSN COde\" id=\"hsnname\" formControlName=\"hsnname\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.hsnname.errors }\" />\r\n                                <div *ngIf=\"submitted && f.hsnname.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.hsnname.errors.required\">HSN Code is required</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /.card-body -->\r\n\r\n            </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onHsnSave()\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Add</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-product/add-product.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-product/add-product.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectIGMCAddProductAddProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row \">\r\n                <!-- left column -->\r\n                <div class=\"col-md-12\">\r\n                    <!-- general form elements -->\r\n                    <div class=\"card card-info\">\r\n                        <div class=\"card-header\">\r\n                          <h3 class=\"card-title\">Add Product</h3>\r\n                        </div>\r\n                            <form [formGroup]=\"addproductForm\" >\r\n                            <div class=\"card-body\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <!--  test\r\n                                            <mat-form-field>\r\n                                            <input matInput placeholder=\"Enter Title\" formControlName=\"title\">\r\n                                           <mat-error *ngFor=\"let validation of validation_messages.title\">\r\n                                                <mat-error class=\"error-message\" *ngIf=\"addproductForm.get('title').hasError(validation.type) \r\n                                                && (addproductForm.get('title').dirty || addproductForm.get('title').touched)\">{{validation.message}}</mat-error>\r\n                                              </mat-error> \r\n                                          </mat-form-field>-->\r\n                                          <label class=\"form-check-label\" for=\"exampleCheck2\">Enter Title</label>\r\n                                            <input placeholder=\"Enter Title\" id=\"title\" autocomplete=\"off\" formControlName=\"title\"\r\n                                                class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.title.errors.required\">Title is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <label class=\"form-check-label\" for=\"exampleCheck2\">Enter Description</label>\r\n                                            <textarea class=\"form-control\"  autocomplete=\"off\" rows=\"3\"\r\n                                                placeholder=\"Enter Description ...\"></textarea>\r\n                                             <!-- <mat-form-field>\r\n                                                <textarea matInput placeholder=\"Enter Description ...\" formControlName=\"title\" >       \r\n                                                </textarea>\r\n                                              </mat-form-field>  -->\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                              <!-- <mat-form-field>\r\n                                            <input matInput placeholder=\"Enter CostPrice\" formControlName=\"costprice\">\r\n                                          </mat-form-field> -->\r\n                                          \r\n                                          <label class=\"form-check-label\" for=\"exampleCheck2\">Enter CostPrice</label>\r\n                                            <input placeholder=\"Enter CostPrice\" id=\"costprice\" autocomplete=\"off\"\r\n                                                formControlName=\"costprice\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.costprice.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.costprice.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.costprice.errors.required\">cost price is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                             <!-- <mat-form-field>\r\n                                            <input matInput placeholder=\"Enter sellingPrice\" formControlName=\"sellingPrice\">\r\n                                          </mat-form-field> -->\r\n                                          <label class=\"form-check-label\" for=\"exampleCheck2\">Enter sellingprice</label>\r\n                                            <input placeholder=\"Enter sellingPrice\" id=\"sellingprice\"\r\n                                                formControlName=\"sellingprice\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.sellingprice.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.sellingprice.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.sellingprice.errors.required\">sellingPrice is required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                              <!-- <mat-form-field>\r\n                                            <input matInput placeholder=\"Enter CGST\" formControlName=\"cgst\">\r\n                                          </mat-form-field> -->\r\n                                          <label class=\"form-check-label\" for=\"exampleCheck2\">Enter CGST</label>\r\n                                            <input placeholder=\"Enter CGST\" id=\"cgst\" autocomplete=\"off\" formControlName=\"cgst\"\r\n                                                class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.cgst.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.cgst.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.cgst.errors.required\">CGST is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                             <!-- <mat-form-field>\r\n                                            <input matInput placeholder=\"Enter SGST\" formControlName=\"sgst\">\r\n                                          </mat-form-field> -->\r\n                                          <label class=\"form-check-label\" for=\"exampleCheck2\">Enter SGST</label>\r\n                                            <input placeholder=\"Enter SGST\" id=\"sgst\" formControlName=\"sgst\"\r\n                                                class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.sgst.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.sgst.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.sgst.errors.required\">SGST is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <!-- <label>Select Category</label> -->\r\n                                            <!-- <mat-form-field>\r\n                                                <mat-select >\r\n                                                    <mat-option value=\"0\">--Select Category--</mat-option>\r\n                                                    <mat-option value=\"1\">Option 1</mat-option>\r\n                                                    <mat-option value=\"2\">Option 2</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field> -->\r\n                                            <label class=\"form-check-label\" for=\"exampleCheck2\">Enter Category</label>\r\n                                                <select formControlName=\"category\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.category.errors }\">\r\n                                                <option value=\"0\">--Select Category--</option>\r\n                                                <option>option 1</option>\r\n                                                <option>option 2</option>\r\n                                                <option>option 3</option>\r\n                                                <option>option 4</option>\r\n                                                <option>option 5</option>\r\n                                                <!-- <option *ngFor=\"let summary of summaries\" value={{summary}}>\r\n                                                {{summary}}\r\n                                            </option> -->\r\n                                            </select>\r\n                                                <div *ngIf=\"submitted && f.category.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.category.errors.required\">Category is required</div>\r\n                                                </div>\r\n                                            \r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <label class=\"form-check-label\" for=\"exampleCheck2\">Enter Brand</label>\r\n                                            <select formControlName=\"brand\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.brand.errors }\">\r\n                                                <option value=\"0\">--Select Brand--</option>\r\n                                                <option>option 1</option>\r\n                                                <option>option 2</option>\r\n                                                <option>option 3</option>\r\n                                                <option>option 4</option>\r\n                                                <option>option 5</option>\r\n                                                <!-- <option *ngFor=\"let summary of summaries\" value={{summary}}>\r\n                                                {{summary}}\r\n                                            </option> -->\r\n                                            </select>\r\n                                                <div *ngIf=\"submitted && f.brand.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.brand.errors.required\">Brand is required</div>\r\n                                                </div>\r\n                                             <!-- <mat-form-field>\r\n                                                <mat-select >\r\n                                                    <mat-option value=\"0\">--Select Brand--</mat-option>\r\n                                                    <mat-option value=\"1\">Option 1</mat-option>\r\n                                                    <mat-option value=\"2\">Option 2</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field> -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <label class=\"form-check-label\" for=\"exampleCheck2\">Choose Image</label>\r\n                                            <div class=\"input-group\">\r\n                                                <div class=\"custom-file\">\r\n                                                    <input type=\"file\" formControlName=\"image\"class=\"custom-file-input\" id=\"chooseimage\">\r\n                                                    <label class=\"custom-file-label\" for=\"exampleInputFile\">Choose Image\r\n                                                    </label>\r\n                                                    <div *ngIf=\"submitted && f.image.errors\" class=\"invalid-feedback\">\r\n                                                        <div *ngIf=\"f.image.errors.required\">Image is required</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\" id=\"\">Upload</span>\r\n                                            </div> -->\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                              <!-- <mat-form-field>\r\n                                            <input matInput placeholder=\"Enter Pieces\" formControlName=\"pieces\">\r\n                                          </mat-form-field> -->\r\n                                          <label class=\"form-check-label\" for=\"exampleCheck2\">Enter Pieces</label>\r\n                                            <input type=\"number\" placeholder=\"Enter Pieces\" id=\"pieces\"\r\n                                                formControlName=\"pieces\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.pieces.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.pieces.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.pieces.errors.required\">Pieces is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <!-- <mat-form-field>\r\n                                                <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n                                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                                <mat-datepicker #picker></mat-datepicker>\r\n                                              </mat-form-field> -->\r\n                                            <!-- <label>Expiry Date</label> -->\r\n                                            <!-- <div class=\"input-group\">\r\n                                                <div class=\"input-group-prepend\">\r\n                                                    <span class=\"input-group-text\">\r\n                                                        <i class=\"fa fa-calendar\"></i>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <input type=\"text\" placeholder=\"Expiry Date\"\r\n                                                    formControlName=\"expirydate\" class=\"form-control float-right\"\r\n                                                    id=\"expirydate\">\r\n                                            </div> -->\r\n                                            <label class=\"form-check-label\" for=\"exampleCheck2\">Enter Expirydate</label>\r\n                                            <div class=\"input-group\">\r\n                                                <input type=\"text\"\r\n                                                      placeholder=\"Expiry Date\"  formControlName=\"expirydate\"\r\n                                                      class=\"form-control\"\r\n                                                      bsDatepicker [ngClass]=\"{ 'is-invalid': submitted && f.expirydate.errors }\" />\r\n                                                      <div *ngIf=\"submitted && f.expirydate.errors\" class=\"invalid-feedback\">\r\n                                                          <div *ngIf=\"f.expirydate.errors.required\">Expiry Date is required</div>\r\n                                                      </div>\r\n                                              </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                             <!-- <mat-form-field>\r\n                                                <mat-select >\r\n                                                    <mat-option value=\"0\">--Select HSN--</mat-option>\r\n                                                    <mat-option value=\"1\">Option 1</mat-option>\r\n                                                    <mat-option value=\"2\">Option 2</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field> -->\r\n                                            <label class=\"form-check-label\" for=\"exampleCheck2\">Enter HSN</label>\r\n                                            <select formControlName=\"hsn\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.hsn.errors }\">\r\n                                                <option value=\"0\">--Select HSN--</option>\r\n                                                <option>option 1</option>\r\n                                                <option>option 2</option>\r\n                                                <option>option 3</option>\r\n                                                <option>option 4</option>\r\n                                                <option>option 5</option>\r\n                                                <!-- <option *ngFor=\"let summary of summaries\" value={{summary}}>\r\n                                                {{summary}}\r\n                                            </option> -->\r\n                                            </select>\r\n                                                <div *ngIf=\"submitted && f.hsn.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.hsn.errors.required\">HSN is required</div>\r\n                                                </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                             <!-- <mat-form-field>\r\n                                            <input matInput placeholder=\"Enter SGST\" formControlName=\"weight\">\r\n                                          </mat-form-field> -->\r\n                                          <label class=\"form-check-label\" for=\"exampleCheck2\">Enter weight</label>\r\n                                            <input placeholder=\"Enter weight in gms, kgs\" id=\"weight\"\r\n                                                formControlName=\"weight\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.weight.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.weight.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.weight.errors.required\">weight is required</div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <label class=\"form-check-label\" for=\"exampleCheck2\">Enter Company Discount</label>\r\n                                                <input type=\"number\" placeholder=\"Enter Company Discount\" id=\"companydiscount\"\r\n                                                formControlName=\"companydiscount\" class=\"form-control\"/>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- /.card-body -->\r\n\r\n                            <div class=\"card-footer float-right\">\r\n                                <button type=\"button\" (click)=\"onSave()\" class=\"btn btn-info \">Save</button>\r\n                                <button type=\"button\" (click)=\"onSaveAndContinue()\"\r\n                                    class=\"btn btn-info buttonalign\">Save And Continue</button>\r\n                                    <!-- <button mat-button  (click)=\"onSave()\">Save</button>\r\n                                    <button mat-button  (click)=\"onSaveAndContinue()\">Save And Continue</button> -->\r\n\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!-- /.card -->\r\n                </div>\r\n                <!--/.col (left) -->\r\n                <!-- right column -->\r\n\r\n                <!--/.col (right) -->\r\n            </div>\r\n            <!-- /.row -->\r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n    <!-- /.content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectOfficeExpensesAddExpenseTypeAddExpenseTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n            <!-- <div class=\"row mb-2\">\r\n          <div class=\"col-sm-6\">\r\n            <h1>Project Add</h1>\r\n          </div>\r\n        </div> -->\r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row \">\r\n                <button type=\"button\" class=\"btn btn-info btn-sm\"\r\n                data-toggle=\"modal\" data-target=\"#openexpensesModal\">\r\n               \r\n                Add Expense Category\r\n            </button>\r\n                </div></div></section>\r\n   \r\n    \r\n\r\n    <!-- /.content  -->\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row \">\r\n                <div class=\"col-md-12\">\r\n\r\n                    <div class=\"card card-info\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Expenses List</h3>\r\n                        </div>\r\n                        <!-- /.card-header -->\r\n                        <div class=\"card-body\">\r\n                            <div id=\"example1_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                                <div class=\"row\">\r\n                                  \r\n                                    <div class=\"col-sm-12 col-md-6\">\r\n                                        <div class=\"dataTables_length\" id=\"example1_length\"><label>Show entries <select\r\n                                                    name=\"example1_length\" aria-controls=\"example1\"\r\n                                                    class=\"custom-select custom-select-sm form-control form-control-sm\">\r\n                                                    <option value=\"10\">10</option>\r\n                                                    <option value=\"25\">25</option>\r\n                                                    <option value=\"50\">50</option>\r\n                                                    <option value=\"100\">100</option>\r\n                                                </select> </label></div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card-tools\">\r\n                                            <div class=\"input-group input-group-sm\">\r\n                                              <input type=\"text\" class=\"form-control\" placeholder=\"Search \">\r\n                                              <div class=\"input-group-append\">\r\n                                                <div class=\"btn btn-primary\">\r\n                                                  <i class=\"fas fa-search\"></i>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div></div>\r\n                                    <!-- <div class=\"col-sm-12 col-md-6\">\r\n                                        <div id=\"example1_filter\" class=\"dataTables_filter\"><label>Search:<input\r\n                                                    type=\"search\" class=\"form-control form-control-sm\" placeholder=\"\"\r\n                                                    aria-controls=\"example1\"></label></div>\r\n                                    </div> -->\r\n                                   \r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12\">\r\n                                        <table id=\"example1\" class=\"table table-bordered table-striped dataTable\"\r\n                                            role=\"grid\" aria-describedby=\"example1_info\">\r\n                                            <thead>\r\n                                                <tr role=\"row\">\r\n                                                    <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                        aria-sort=\"descending\" style=\"width: 203.4px;\">Category Type</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Browser: activate to sort column ascending\"\r\n                                                        style=\"width: 262.6px;\">\r\n                                                        Description</th>\r\n                                                        <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                        aria-sort=\"descending\" style=\"width: 203.4px;\">OnDate</th>\r\n                                                        <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                        aria-sort=\"descending\" style=\"width: 203.4px;\">Amount</th>\r\n                                                    <!-- <th>  <img src={{orm.img}} alt=\"delete\" height=30px\" width=\"30px\"></th> -->\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Engine version: activate to sort column ascending\"\r\n                                                        style=\"width: 500.6px;\">Action</th>\r\n\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr role=\"row\" class=\"odd\">\r\n                                                    <td class=\"sorting_1\">Webkit</td>\r\n                                                    <td>Safari 1.2</td>\r\n                                                    <td>OSX.3</td>\r\n                                                    <td>OSX.3</td>\r\n                                                    <td class=\"project-actions text-right\">\r\n                                                       \r\n                                                        <a class=\"btn btn-info btn-sm\" href=\"#\">\r\n                                                            <i class=\"fas fa-pencil-alt\">\r\n                                                            </i>\r\n                                                            Edit\r\n                                                        </a>\r\n                                                        <button type=\"button\" class=\"btn btn-info btn-sm\"\r\n                                                        data-toggle=\"modal\" data-target=\"#DeleteModal\">\r\n                                                        Delete\r\n                                                    </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-md-5\">\r\n                                        <div class=\"dataTables_info\" id=\"example1_info\" role=\"status\"\r\n                                            aria-live=\"polite\">Showing 1 to 10\r\n                                            of 57 entries</div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12 col-md-7\">\r\n                                        <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example1_paginate\">\r\n                                            <ul class=\"pagination\">\r\n                                                <li class=\"paginate_button page-item previous disabled\"\r\n                                                    id=\"example1_previous\"><a href=\"#\" aria-controls=\"example1\"\r\n                                                        data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a></li>\r\n                                                <li class=\"paginate_button page-item active\"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"1\" tabindex=\"0\"\r\n                                                        class=\"page-link\">1</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"2\" tabindex=\"0\"\r\n                                                        class=\"page-link\">2</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"3\" tabindex=\"0\"\r\n                                                        class=\"page-link\">3</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"4\" tabindex=\"0\"\r\n                                                        class=\"page-link\">4</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"5\" tabindex=\"0\"\r\n                                                        class=\"page-link\">5</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"6\" tabindex=\"0\"\r\n                                                        class=\"page-link\">6</a></li>\r\n                                                <li class=\"paginate_button page-item next\" id=\"example1_next\"><a\r\n                                                        href=\"#\" aria-controls=\"example1\" data-dt-idx=\"7\" tabindex=\"0\"\r\n                                                        class=\"page-link\">Next</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.row -->\r\n                </div><!-- /.container-fluid -->\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- /.card-body -->\r\n</div>\r\n\r\n<!-- Add Modal -->\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"openexpensesModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Expenses</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"addexpensesForm\" >\r\n                    <div class=\"card-body\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                        <select formControlName=\"categorytype\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.category.errors }\">\r\n                                        <option value=\"0\">--Expenses Type--</option>\r\n                                        <option>option 1</option>\r\n                                        <option>option 2</option>\r\n                                        <option>option 3</option>\r\n                                        <option>option 4</option>\r\n                                        <option>option 5</option>\r\n                                        <!-- <option *ngFor=\"let summary of summaries\" value={{summary}}>\r\n                                        {{summary}}\r\n                                    </option> -->\r\n                                    </select>\r\n                                        <div *ngIf=\"submitted && f.categorytype.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.categorytype.errors.required\">Category Type is required</div>\r\n                                        </div>\r\n                                    \r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <textarea class=\"form-control\" rows=\"3\"  formControlName=\"description\"\r\n                                        placeholder=\"Enter Description ...\"></textarea>\r\n                                   \r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\"\r\n                                              placeholder=\"Date\"  formControlName=\"ondate\"\r\n                                              class=\"form-control\"\r\n                                              bsDatepicker [ngClass]=\"{ 'is-invalid': submitted && f.ondate.errors }\" />\r\n                                              <div *ngIf=\"submitted && f.ondate.errors\" class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.ondate.errors.required\">Date is required</div>\r\n                                              </div>\r\n                                      </div>\r\n                                </div>\r\n                                \r\n                                <div class=\"col-md-6\">\r\n                                    <input placeholder=\"Enter Amount\" id=\"amount\"\r\n                                        formControlName=\"amount\" class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.amount.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.amount.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.amount.errors.required\">Amount is required</div>\r\n                                    </div>\r\n                                </div>\r\n                              \r\n                            </div>\r\n                        </div>\r\n                        \r\n            \r\n                    </div>\r\n                    <!-- /.card-body -->\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onAddExpenses()\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Add</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- ///////////////////Delete Modal/////////////////// -->\r\n<div class=\"modal fade\" id=\"DeleteModal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Modal title</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Modal body text goes here.</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\">Yes</button>\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ///////////////////End Delete Modal///////////////////-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/OfficeExpenses/expenses-report/expenses-report.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/OfficeExpenses/expenses-report/expenses-report.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectOfficeExpensesExpensesReportExpensesReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>expenses-report works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/allproductdetails/allproductdetails.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/allproductdetails/allproductdetails.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectProductDetailsAllproductdetailsAllproductdetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n\r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row \">\r\n                <div class=\"col-md-12\">\r\n\r\n                    <div class=\"card card-info\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Product Details</h3>\r\n                        </div>\r\n                        <!-- /.card-header -->\r\n                        <div class=\"card-body\">\r\n                            <div id=\"example1_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"card-tools\">\r\n                                            <div class=\"input-group input-group-sm\">\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                    placeholder=\"Search Product By Name\">\r\n                                                <div class=\"input-group-append\">\r\n                                                    <div class=\"btn btn-primary\">\r\n                                                        <i class=\"fas fa-search\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                   \r\n                                    <div class=\"col-md-3 \"></div>\r\n                                    <div class=\"col-md-3 float-right\">\r\n                                                <a href=\"invoice-print.html\" target=\"_blank\" class=\"btn btn-info btn-sm float-right\"><i\r\n                                                    class=\"fa fa-print\"></i> Print</a>\r\n                                                <button type=\"button\" class=\"btn btn-info btn-sm float-right\"\r\n                                                    style=\"margin-right: 5px;\">\r\n                                                    <i class=\"fa fa-download\"></i> Generate PDF\r\n                                                </button>\r\n                                    </div>\r\n                                </div>\r\n                              \r\n                                        <!-- this row will not appear when printing -->\r\n                                        <!-- <div class=\"row no-print\">\r\n                                            <div class=\"col-12\">\r\n                                              \r\n                                            </div>\r\n                                        </div> -->\r\n                                        <div class=\"row\">\r\n                                        <table id=\"example1\" class=\"table table-bordered table-striped dataTable\"\r\n                                            role=\"grid\" aria-describedby=\"example1_info\">\r\n                                            <thead>\r\n                                                <tr role=\"row\">\r\n                                                    <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                    aria-sort=\"descending\" style=\"width: 203.4px;\">Product Name</th>\r\n                                                    <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                        aria-sort=\"descending\" style=\"width: 203.4px;\">HSN Code</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Browser: activate to sort column ascending\"\r\n                                                        style=\"width: 262.6px;\">\r\n                                                        No. of Pieces</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Browser: activate to sort column ascending\"\r\n                                                        style=\"width: 262.6px;\">\r\n                                                        Remaining Items</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Browser: activate to sort column ascending\"\r\n                                                        style=\"width: 262.6px;\">\r\n                                                        Buying Date</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Browser: activate to sort column ascending\"\r\n                                                        style=\"width: 262.6px;\">\r\n                                                        Cost Price</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Browser: activate to sort column ascending\"\r\n                                                        style=\"width: 262.6px;\">\r\n                                                        Selling Price</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                        rowspan=\"1\" colspan=\"1\"\r\n                                                        aria-label=\"Browser: activate to sort column ascending\"\r\n                                                        style=\"width: 262.6px;\">\r\n                                                        Expiry Date</th>\r\n                                                    <th >\r\n                                                     <div class=\"form-check\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\">\r\n                                                            <label class=\"form-check-label\">All</label>\r\n                                                          </div>\r\n                                                    </th>\r\n                                                    <!-- <th>  <img src={{orm.img}} alt=\"delete\" height=30px\" width=\"30px\"></th> -->\r\n\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr role=\"row\" class=\"odd\">\r\n                                                    <td class=\"sorting_1\">Webkit</td>\r\n                                                    <td>Safari 1.2</td>\r\n                                                    <td>OSX.3</td>\r\n                                                    <td>Safari 1.2</td>\r\n                                                    <td>OSX.3</td>\r\n                                                    <td>OSX.3</td>\r\n                                                    <td>Safari 1.2</td>\r\n                                                    <td>OSX.3</td>\r\n                                                    <td > \r\n                                                        <div class=\"form-check\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\">\r\n                                                           \r\n                                                          </div> </td>\r\n\r\n                                                </tr>\r\n                                            </tbody>\r\n\r\n                                        </table></div>\r\n                    \r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-12 col-md-5\">\r\n                                        <div class=\"dataTables_info\" id=\"example1_info\" role=\"status\"\r\n                                            aria-live=\"polite\">Showing 1 to 10\r\n                                            of 57 entries</div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12 col-md-7\">\r\n                                        <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example1_paginate\">\r\n                                            <ul class=\"pagination\">\r\n                                                <li class=\"paginate_button page-item previous disabled\"\r\n                                                    id=\"example1_previous\"><a href=\"#\" aria-controls=\"example1\"\r\n                                                        data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a></li>\r\n                                                <li class=\"paginate_button page-item active\"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"1\" tabindex=\"0\"\r\n                                                        class=\"page-link\">1</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"2\" tabindex=\"0\"\r\n                                                        class=\"page-link\">2</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"3\" tabindex=\"0\"\r\n                                                        class=\"page-link\">3</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"4\" tabindex=\"0\"\r\n                                                        class=\"page-link\">4</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"5\" tabindex=\"0\"\r\n                                                        class=\"page-link\">5</a></li>\r\n                                                <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                        aria-controls=\"example1\" data-dt-idx=\"6\" tabindex=\"0\"\r\n                                                        class=\"page-link\">6</a></li>\r\n                                                <li class=\"paginate_button page-item next\" id=\"example1_next\"><a\r\n                                                        href=\"#\" aria-controls=\"example1\" data-dt-idx=\"7\" tabindex=\"0\"\r\n                                                        class=\"page-link\">Next</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.row -->\r\n                </div><!-- /.container-fluid -->\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/expired-products/expired-products.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/expired-products/expired-products.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectProductDetailsExpiredProductsExpiredProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n\r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n    <!-- Main content -->\r\n<section class=\"content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row \">\r\n            <div class=\"col-md-12\">\r\n\r\n                <div class=\"card card-info\">\r\n                    <div class=\"card-header\">\r\n                        <h3 class=\"card-title\">Expired Product List</h3>\r\n                    </div>\r\n                    <!-- /.card-header -->\r\n                    <div class=\"card-body\">\r\n                        <div id=\"example1_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 col-md-1\">\r\n                                   Entries\r\n                                </div>\r\n                                <div class=\"col-sm-12 col-md-2 pl0\">\r\n                                    <div class=\"dataTables_length\" id=\"example1_length\"><select\r\n                                                name=\"example1_length\" aria-controls=\"example1\"\r\n                                                class=\"custom-select custom-select-sm form-control form-control-sm\">\r\n                                                <option value=\"10\">10</option>\r\n                                                <option value=\"25\">25</option>\r\n                                                <option value=\"50\">50</option>\r\n                                                <option value=\"100\">100</option>\r\n                                            </select> </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"card-tools\">\r\n                                        <div class=\"input-group input-group-sm\">\r\n                                          <input type=\"text\" class=\"form-control\" placeholder=\"Search \">\r\n                                          <div class=\"input-group-append\">\r\n                                            <div class=\"btn btn-primary\">\r\n                                              <i class=\"fas fa-search\"></i>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div></div>\r\n                                      <div class=\"col-md-3\"></div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\"\r\n                                        role=\"grid\" aria-describedby=\"example1_info\">\r\n                                        <thead>\r\n                                            <tr role=\"row\">\r\n                                                <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                rowspan=\"1\" colspan=\"1\"\r\n                                                aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                aria-sort=\"descending\" style=\"width: 203.4px;\">Product Name</th>\r\n                                                <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                    aria-sort=\"descending\" style=\"width: 203.4px;\">Hsn No</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    Pieces Left</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    selling Price</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                   Buying Date</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                   Expiry Date</th>\r\n                                                <!-- <th>  <img src={{orm.img}} alt=\"delete\" height=30px\" width=\"30px\"></th> -->\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Engine version: activate to sort column ascending\"\r\n                                                    style=\"width: 500.6px;\">Action</th>\r\n\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr role=\"row\" class=\"odd\">\r\n                                                <td class=\"sorting_1\">Webkit</td>\r\n                                                <td>Safari 1.2</td>\r\n                                                <td>OSX.3</td>\r\n                                                <td>OSX.3</td>\r\n                                                <td>OSX.3</td>\r\n                                                <td>Safari 1.2</td>\r\n                                               \r\n                                                <td class=\"project-actions text-right\">\r\n                                                    <button type=\"button\" class=\"btn btn-info btn-sm\"\r\n                                                    data-toggle=\"modal\" data-target=\"#openexpiredModal\">\r\n                                                    <i class=\"fas fa-folder\">\r\n                                                    </i>\r\n                                                    Return Expired\r\n                                                </button>\r\n                                                    <button type=\"button\" class=\"btn btn-danger btn-sm\" \r\n                                                    data-toggle=\"modal\" data-target=\"#deleteModal\">\r\n                                                    <i class=\"fas fa-trash\">\r\n                                                    </i>\r\n                                                    Delete\r\n                                                </button>\r\n\r\n                                                   \r\n\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 col-md-5\">\r\n                                    <div class=\"dataTables_info\" id=\"example1_info\" role=\"status\"\r\n                                        aria-live=\"polite\">Showing 1 to 10\r\n                                        of 57 entries</div>\r\n                                </div>\r\n                                <div class=\"col-sm-12 col-md-7\">\r\n                                    <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example1_paginate\">\r\n                                        <ul class=\"pagination\">\r\n                                            <li class=\"paginate_button page-item previous disabled\"\r\n                                                id=\"example1_previous\"><a href=\"#\" aria-controls=\"example1\"\r\n                                                    data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a></li>\r\n                                            <li class=\"paginate_button page-item active\"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"1\" tabindex=\"0\"\r\n                                                    class=\"page-link\">1</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"2\" tabindex=\"0\"\r\n                                                    class=\"page-link\">2</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"3\" tabindex=\"0\"\r\n                                                    class=\"page-link\">3</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"4\" tabindex=\"0\"\r\n                                                    class=\"page-link\">4</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"5\" tabindex=\"0\"\r\n                                                    class=\"page-link\">5</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"6\" tabindex=\"0\"\r\n                                                    class=\"page-link\">6</a></li>\r\n                                            <li class=\"paginate_button page-item next\" id=\"example1_next\"><a\r\n                                                    href=\"#\" aria-controls=\"example1\" data-dt-idx=\"7\" tabindex=\"0\"\r\n                                                    class=\"page-link\">Next</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /.row -->\r\n            </div><!-- /.container-fluid -->\r\n        </div>\r\n    </div>\r\n</section>\r\n</div>\r\n\r\n\r\n<!-- Add Modal -->\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"openexpiredModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Return</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"retuenExpiredForm\">\r\n                    <div class=\"card-body\">\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                   \r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Auto Complete Here</label>\r\n                                      <input placeholder=\"Enter Title\" id=\"title\" autocomplete=\"off\" formControlName=\"title\"\r\n                                          class=\"form-control\"\r\n                                          [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" />\r\n                                      <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"f.title.errors.required\">Title is required</div>\r\n                                      </div>\r\n                                  </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Pieces</label>\r\n                                    <input type=\"number\" placeholder=\"Enter Pieces\" id=\"pieces\" formControlName=\"pieces\"\r\n                                        class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.pieces.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.pieces.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.pieces.errors.required\">Pieces is required</div>\r\n                                    </div>\r\n                                </div>\r\n                              \r\n                            </div>\r\n                        </div>\r\n                     \r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Expiry Date</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" placeholder=\"Automatic Expiry Date\" formControlName=\"expirydate\"\r\n                                            class=\"form-control\" bsDatepicker\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.expirydate.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.expirydate.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.expirydate.errors.required\">Expiry Date is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Return Date</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" placeholder=\"Return Date\" formControlName=\"returndate\"\r\n                                            class=\"form-control\" bsDatepicker\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.returndate.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.returndate.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.returndate.errors.required\">Return Date is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.card-body -->\r\n\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Add</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Delete Modal -->\r\n\r\n<!-- Modal HTML -->\r\n<div id=\"deleteModal\" class=\"modal fade\">\r\n    <div class=\"modal-dialog modal-confirm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <div class=\"icon-box\">\r\n                    <i class=\"material-icons\">&#xE5CD;</i>\r\n                </div>\r\n                <h4 class=\"modal-title\">Are you sure?</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Do you really want to delete these records? This process cannot be undone.</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/manageproduct/manageproduct.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/manageproduct/manageproduct.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectProductDetailsManageproductManageproductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n\r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row \">\r\n                <div class=\"col-md-12\">\r\n\r\n                    <div class=\"card card-info\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"card-title\">Product Details</h3>\r\n                        </div>\r\n                        <!-- /.card-header -->\r\n                        <form [formGroup]=\"manageproductForm\">\r\n                            <div class=\"card-body\">\r\n                                <div id=\"example1_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-3\">\r\n                                                <div class=\"input-group\">\r\n                                                    <input type=\"text\" placeholder=\"From Date\"\r\n                                                        formControlName=\"fromdate\" class=\"form-control\" bsDatepicker\r\n                                                        [ngClass]=\"{ 'is-invalid': submitted && f.fromdate.errors }\" />\r\n                                                    <div *ngIf=\"submitted && f.fromdate.errors\"\r\n                                                        class=\"invalid-feedback\">\r\n                                                        <div *ngIf=\"f.fromdate.errors.required\">From Date is required\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-3\">\r\n                                                <div class=\"input-group\">\r\n                                                    <input type=\"text\" placeholder=\"To Date\" formControlName=\"todate\"\r\n                                                        class=\"form-control\" bsDatepicker\r\n                                                        [ngClass]=\"{ 'is-invalid': submitted && f.todate.errors }\" />\r\n                                                    <div *ngIf=\"submitted && f.todate.errors\" class=\"invalid-feedback\">\r\n                                                        <div *ngIf=\"f.todate.errors.required\">To Date is required</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-1\">\r\n                                                <button type=\"button\" (click)=\"onSearch()\"\r\n                                                    class=\"btn btn-info \">Search</button>\r\n                                            </div>\r\n                                            <div class=\"col-md-5 float-right\">\r\n                                                <div class=\"col-md-6\"> <label>Show entries</label></div>\r\n                                                <div class=\"col-md-6 \">\r\n                                                    <div class=\"dataTables_length\" id=\"example1_length\"> <select\r\n                                                            name=\"example1_length\" aria-controls=\"example1\"\r\n                                                            class=\"custom-select custom-select-sm form-control form-control-sm\">\r\n                                                            <option value=\"10\">10</option>\r\n                                                            <option value=\"25\">25</option>\r\n                                                            <option value=\"50\">50</option>\r\n                                                            <option value=\"100\">100</option>\r\n                                                        </select> </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-3\">\r\n                                            <div class=\"card-tools\">\r\n                                                <div class=\"input-group input-group-sm\">\r\n                                                    <input type=\"text\" class=\"form-control\"\r\n                                                        placeholder=\"Search Product\">\r\n                                                    <div class=\"input-group-append\">\r\n                                                        <div class=\"btn btn-primary\">\r\n                                                            <i class=\"fas fa-search\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <label> Total Purchase:200</label>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 \"></div>\r\n                                        <div class=\"col-md-3 float-right\">\r\n                                            <button (click)=\"allproductdetails()\" class=\"btn btn-primary btn-sm\" data-toggle=\"tooltip\"\r\n                                                                title=\"View Item Details\">\r\n                                                                <i class=\"fas fa-folder\">\r\n                                                                </i> All Product Details</button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <table id=\"example1\" class=\"table table-bordered table-striped dataTable\"\r\n                                                role=\"grid\" aria-describedby=\"example1_info\">\r\n                                                <thead>\r\n                                                    <tr role=\"row\">\r\n                                                        <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                            rowspan=\"1\" colspan=\"1\"\r\n                                                            aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                            aria-sort=\"descending\" style=\"width: 203.4px;\">Product Name\r\n                                                        </th>\r\n                                                        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                            rowspan=\"1\" colspan=\"1\"\r\n                                                            aria-label=\"Browser: activate to sort column ascending\"\r\n                                                            style=\"width: 262.6px;\">\r\n                                                            CGST</th>\r\n                                                        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                            rowspan=\"1\" colspan=\"1\"\r\n                                                            aria-label=\"Browser: activate to sort column ascending\"\r\n                                                            style=\"width: 262.6px;\">\r\n                                                            SGST</th>\r\n                                                        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                            rowspan=\"1\" colspan=\"1\"\r\n                                                            aria-label=\"Browser: activate to sort column ascending\"\r\n                                                            style=\"width: 262.6px;\">\r\n                                                            Category</th>\r\n                                                        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                            rowspan=\"1\" colspan=\"1\"\r\n                                                            aria-label=\"Browser: activate to sort column ascending\"\r\n                                                            style=\"width: 262.6px;\">\r\n                                                            Brand</th>\r\n                                                        <!-- <th>  <img src={{orm.img}} alt=\"delete\" height=30px\" width=\"30px\"></th> -->\r\n                                                        <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                            rowspan=\"1\" colspan=\"1\"\r\n                                                            aria-label=\"Engine version: activate to sort column ascending\"\r\n                                                            style=\"width: 500.6px;\">Action</th>\r\n\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr role=\"row\" class=\"odd\">\r\n                                                        <td class=\"sorting_1\">Webkit</td>\r\n                                                        <td>Safari 1.2</td>\r\n                                                        <td>OSX.3</td>\r\n                                                        <td>Safari 1.2</td>\r\n                                                        <td>OSX.3</td>\r\n                                                        <td class=\"project-actions text-right\">\r\n                                                            <!-- Button trigger modal -->\r\n                                                            <button type=\"button\" class=\"btn btn-info btn-sm\"\r\n                                                                data-toggle=\"modal\" data-target=\"#addModal\">\r\n                                                                <i class=\"fas fa-folder\">\r\n                                                                </i>\r\n                                                                Add\r\n                                                            </button>\r\n                                                            <button type=\"button\" class=\"btn btn-info btn-sm\"\r\n                                                                data-toggle=\"modal\" data-target=\"#editModal\">\r\n                                                                <i class=\"fas fa-pencil-alt\">\r\n                                                                </i>\r\n                                                                Edit\r\n                                                            </button>\r\n                                                                <button (click)=\"viewmoredetails()\" class=\"btn btn-primary btn-sm\" data-toggle=\"tooltip\"\r\n                                                                title=\"View Item Details\">\r\n                                                                <i class=\"fas fa-folder\">\r\n                                                                </i> More Details</button>\r\n\r\n                                \r\n                                                             \r\n                                                          \r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-12 col-md-5\">\r\n                                            <div class=\"dataTables_info\" id=\"example1_info\" role=\"status\"\r\n                                                aria-live=\"polite\">Showing 1 to 10\r\n                                                of 57 entries</div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-12 col-md-7\">\r\n                                            <div class=\"dataTables_paginate paging_simple_numbers\"\r\n                                                id=\"example1_paginate\">\r\n                                                <ul class=\"pagination\">\r\n                                                    <li class=\"paginate_button page-item previous disabled\"\r\n                                                        id=\"example1_previous\"><a href=\"#\" aria-controls=\"example1\"\r\n                                                            data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a>\r\n                                                    </li>\r\n                                                    <li class=\"paginate_button page-item active\"><a href=\"#\"\r\n                                                            aria-controls=\"example1\" data-dt-idx=\"1\" tabindex=\"0\"\r\n                                                            class=\"page-link\">1</a></li>\r\n                                                    <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                            aria-controls=\"example1\" data-dt-idx=\"2\" tabindex=\"0\"\r\n                                                            class=\"page-link\">2</a></li>\r\n                                                    <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                            aria-controls=\"example1\" data-dt-idx=\"3\" tabindex=\"0\"\r\n                                                            class=\"page-link\">3</a></li>\r\n                                                    <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                            aria-controls=\"example1\" data-dt-idx=\"4\" tabindex=\"0\"\r\n                                                            class=\"page-link\">4</a></li>\r\n                                                    <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                            aria-controls=\"example1\" data-dt-idx=\"5\" tabindex=\"0\"\r\n                                                            class=\"page-link\">5</a></li>\r\n                                                    <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                            aria-controls=\"example1\" data-dt-idx=\"6\" tabindex=\"0\"\r\n                                                            class=\"page-link\">6</a></li>\r\n                                                    <li class=\"paginate_button page-item next\" id=\"example1_next\"><a\r\n                                                            href=\"#\" aria-controls=\"example1\" data-dt-idx=\"7\"\r\n                                                            tabindex=\"0\" class=\"page-link\">Next</a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <!-- /.row -->\r\n                </div><!-- /.container-fluid -->\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>\r\n\r\n\r\n<!-- Add Modal -->\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Products</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"addproductForm\">\r\n                    <div class=\"card-body\">\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <input type=\"number\" placeholder=\"Enter Pieces\" id=\"pieces\" formControlName=\"pieces\"\r\n                                        class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.pieces.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.pieces.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.pieces.errors.required\">Pieces is required</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n\r\n                                    <input placeholder=\"Enter weight in gms, kgs\" id=\"weight\" formControlName=\"weight\"\r\n                                        class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.weight.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.weight.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.weight.errors.required\">weight is required</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <input placeholder=\"Enter CostPrice\" id=\"costprice\" formControlName=\"costprice\"\r\n                                        class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.costprice.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.costprice.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.costprice.errors.required\">cost price is required</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n\r\n                                    <input placeholder=\"Enter sellingPrice\" id=\"sellingprice\"\r\n                                        formControlName=\"sellingprice\" class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.sellingprice.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.sellingprice.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.sellingprice.errors.required\">sellingPrice is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n\r\n                                    <input placeholder=\"Enter CGST\" id=\"cgst\" formControlName=\"cgst\"\r\n                                        class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.cgst.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.cgst.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.cgst.errors.required\">CGST is required</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <!-- <mat-form-field>\r\n                                    <input matInput placeholder=\"Enter SGST\" formControlName=\"sgst\">\r\n                                  </mat-form-field> -->\r\n                                    <input placeholder=\"Enter SGST\" id=\"sgst\" formControlName=\"sgst\"\r\n                                        class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.sgst.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.sgst.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.sgst.errors.required\">SGST is required</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" placeholder=\"Expiry Date\" formControlName=\"expirydate\"\r\n                                            class=\"form-control\" bsDatepicker\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.expirydate.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.expirydate.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.expirydate.errors.required\">Expiry Date is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n\r\n\r\n                                    <select formControlName=\"hsn\" class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.hsn.errors }\">\r\n                                        <option value=\"0\">--Select HSN--</option>\r\n                                        <option>option 1</option>\r\n                                        <option>option 2</option>\r\n                                        <option>option 3</option>\r\n                                        <option>option 4</option>\r\n                                        <option>option 5</option>\r\n                                        <!-- <option *ngFor=\"let summary of summaries\" value={{summary}}>\r\n                                        {{summary}}\r\n                                    </option> -->\r\n                                    </select>\r\n                                    <div *ngIf=\"submitted && f.hsn.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.hsn.errors.required\">HSN is required</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col-md-6\">\r\n                                    <input type=\"number\" placeholder=\"Enter Company Discount\" id=\"companydiscount\"\r\n                                        formControlName=\"companydiscount\" class=\"form-control\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.card-body -->\r\n\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Add</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Edit Modal -->\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form [formGroup]=\"addproductForm\">\r\n                    <div class=\"card-body\">\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Enter Pieces</label>\r\n                                    <input type=\"number\" placeholder=\"Enter Pieces\" id=\"pieces\" formControlName=\"pieces\"\r\n                                        class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.pieces.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.pieces.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.pieces.errors.required\">Pieces is required</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Enter weight</label>\r\n                                    <input placeholder=\"Enter weight in gms, kgs\" id=\"weight\" formControlName=\"weight\"\r\n                                        class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.weight.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.weight.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.weight.errors.required\">weight is required</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Enter CostPrice</label>\r\n                                    <input placeholder=\"Enter CostPrice\" id=\"costprice\" formControlName=\"costprice\"\r\n                                        class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.costprice.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.costprice.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.costprice.errors.required\">cost price is required</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Enter sellingPrice</label>\r\n                                    <input placeholder=\"Enter sellingPrice\" id=\"sellingprice\"\r\n                                        formControlName=\"sellingprice\" class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.sellingprice.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.sellingprice.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.sellingprice.errors.required\">sellingPrice is required\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Enter CGST</label>\r\n                                    <input placeholder=\"Enter CGST\" id=\"cgst\" formControlName=\"cgst\"\r\n                                        class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.cgst.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.cgst.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.cgst.errors.required\">CGST is required</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Enter SGST</label>\r\n                                    <input placeholder=\"Enter SGST\" id=\"sgst\" formControlName=\"sgst\"\r\n                                        class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.sgst.errors }\" />\r\n                                    <div *ngIf=\"submitted && f.sgst.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.sgst.errors.required\">SGST is required</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Enter Expiry Date</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input type=\"text\" placeholder=\"Expiry Date\" formControlName=\"expirydate\"\r\n                                            class=\"form-control\" bsDatepicker\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.expirydate.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.expirydate.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.expirydate.errors.required\">Expiry Date is required</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Select HSN</label>\r\n                                    <select formControlName=\"hsn\" class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.hsn.errors }\">\r\n                                        <option value=\"0\">--Select HSN--</option>\r\n                                        <option>option 1</option>\r\n                                        <option>option 2</option>\r\n                                        <option>option 3</option>\r\n                                        <option>option 4</option>\r\n                                        <option>option 5</option>\r\n                                        <!-- <option *ngFor=\"let summary of summaries\" value={{summary}}>\r\n                                        {{summary}}\r\n                                    </option> -->\r\n                                    </select>\r\n                                    <div *ngIf=\"submitted && f.hsn.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.hsn.errors.required\">HSN is required</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col-md-6\">\r\n                                    <label class=\"form-check-label\" for=\"exampleCheck2\">Enter CompanyDiscount</label>\r\n                                    <input type=\"number\" placeholder=\"Enter Company Discount\" id=\"companydiscount\"\r\n                                        formControlName=\"companydiscount\" class=\"form-control\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.card-body -->\r\n\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Delete Modal -->\r\n<div class=\"text-center\">\r\n    <!-- Button HTML (to Trigger Modal) -->\r\n    <a href=\"#myModal\" class=\"trigger-btn\" data-toggle=\"modal\">Click to Open Confirm Modal</a>\r\n</div>\r\n\r\n<!-- Modal HTML -->\r\n<div id=\"myModal\" class=\"modal fade\">\r\n    <div class=\"modal-dialog modal-confirm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <div class=\"icon-box\">\r\n                    <i class=\"material-icons\">&#xE5CD;</i>\r\n                </div>\r\n                <h4 class=\"modal-title\">Are you sure?</h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Do you really want to delete these records? This process cannot be undone.</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/moredetails/moredetails.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/moredetails/moredetails.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectProductDetailsMoredetailsMoredetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n         \r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n<section class=\"content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row \">\r\n            <div class=\"col-md-12\">\r\n\r\n                <div class=\"card card-info\">\r\n                    <div class=\"card-header\">\r\n                        <h3 class=\"card-title\">Product Details</h3>\r\n                    </div>\r\n                    <!-- /.card-header -->\r\n                    <div class=\"card-body\">\r\n                        <div id=\"example1_wrapper\" class=\"dataTables_wrapper dt-bootstrap4\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <p>Name Of Product Here</p>\r\n                                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\"\r\n                                        role=\"grid\" aria-describedby=\"example1_info\">\r\n                                        <thead>\r\n                                            <tr role=\"row\">\r\n                                                <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Rendering engine: activate to sort column ascending\"\r\n                                                    aria-sort=\"descending\" style=\"width: 203.4px;\">HSN Code</th>\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    No. of Pieces</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    Remaining Items</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    Buying Date</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    Cost Price</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    Selling Price</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    Expiry Date</th>\r\n                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Browser: activate to sort column ascending\"\r\n                                                    style=\"width: 262.6px;\">\r\n                                                    Company Discount</th>\r\n                                                <!-- <th>  <img src={{orm.img}} alt=\"delete\" height=30px\" width=\"30px\"></th> -->\r\n                                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\"\r\n                                                    rowspan=\"1\" colspan=\"1\"\r\n                                                    aria-label=\"Engine version: activate to sort column ascending\"\r\n                                                    style=\"width: 500.6px;\">Action</th>\r\n\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr role=\"row\" class=\"odd\">\r\n                                                <td class=\"sorting_1\">Webkit</td>\r\n                                                <td>Safari 1.2</td>\r\n                                                <td>OSX.3</td>\r\n                                                <td>Safari 1.2</td>\r\n                                                <td>OSX.3</td>\r\n                                                <td>OSX.3</td>\r\n                                                <td>Safari 1.2</td>\r\n                                                <td>OSX.3</td>\r\n                                                <td class=\"project-actions text-right\">\r\n                                                   \r\n                                                    <a class=\"btn btn-info btn-sm\" href=\"#\">\r\n                                                        <i class=\"fas fa-pencil-alt\">\r\n                                                        </i>\r\n                                                        Edit\r\n                                                    </a>\r\n                                                  \r\n                                                  \r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12 col-md-5\">\r\n                                    <div class=\"dataTables_info\" id=\"example1_info\" role=\"status\"\r\n                                        aria-live=\"polite\">Showing 1 to 10\r\n                                        of 57 entries</div>\r\n                                </div>\r\n                                <div class=\"col-sm-12 col-md-7\">\r\n                                    <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example1_paginate\">\r\n                                        <ul class=\"pagination\">\r\n                                            <li class=\"paginate_button page-item previous disabled\"\r\n                                                id=\"example1_previous\"><a href=\"#\" aria-controls=\"example1\"\r\n                                                    data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a></li>\r\n                                            <li class=\"paginate_button page-item active\"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"1\" tabindex=\"0\"\r\n                                                    class=\"page-link\">1</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"2\" tabindex=\"0\"\r\n                                                    class=\"page-link\">2</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"3\" tabindex=\"0\"\r\n                                                    class=\"page-link\">3</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"4\" tabindex=\"0\"\r\n                                                    class=\"page-link\">4</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"5\" tabindex=\"0\"\r\n                                                    class=\"page-link\">5</a></li>\r\n                                            <li class=\"paginate_button page-item \"><a href=\"#\"\r\n                                                    aria-controls=\"example1\" data-dt-idx=\"6\" tabindex=\"0\"\r\n                                                    class=\"page-link\">6</a></li>\r\n                                            <li class=\"paginate_button page-item next\" id=\"example1_next\"><a\r\n                                                    href=\"#\" aria-controls=\"example1\" data-dt-idx=\"7\" tabindex=\"0\"\r\n                                                    class=\"page-link\">Next</a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- /.row -->\r\n            </div><!-- /.container-fluid -->\r\n        </div>\r\n    </div>\r\n</section>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/product-reports/product-reports.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/product-reports/product-reports.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectProductDetailsProductReportsProductReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>product-reports works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/return-expired/return-expired.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/return-expired/return-expired.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectProductDetailsReturnExpiredReturnExpiredComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>return-expired works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/SalesPayment/add-bill/add-bill.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/SalesPayment/add-bill/add-bill.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectSalesPaymentAddBillAddBillComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <div class=\"container-fluid\">\r\n\r\n        </div><!-- /.container-fluid -->\r\n    </section>\r\n    <!-- /.content  -->\r\n    <section class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row \">\r\n                <div class=\"col-md-12\">\r\n\r\n                    <div class=\"card card-info\">\r\n                        <div class=\"modal-body\">\r\n                            <!-- form start -->\r\n                            <div class=\"form-group row\">\r\n                                <div class=\" col-md-1\">\r\n                                  \r\n                                </div>\r\n                                <div class=\"form-check col-md-3\">\r\n                                    <input class=\"form-check-input\" type=\"radio\" value=\"1\">\r\n                                    <label class=\"form-check-label\">New User</label>\r\n                                </div>\r\n                                <div class=\"form-check col-md-3\">\r\n                                    <input class=\"form-check-input\" type=\"radio\" value=\"2\">\r\n                                    <label class=\"form-check-label\">Existing</label>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <select formControlName=\"role\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.role.errors }\">\r\n                                    <option value=\"0\">--Select Customer Type--</option>\r\n                                    <option>option 1</option>\r\n                                    <option>option 2</option>\r\n                                    <option>option 3</option>\r\n                                    <option>option 4</option>\r\n                                    <option>option 5</option>\r\n                                    <!-- <option *ngFor=\"let summary of summaries\" value={{summary}}>\r\n                                    {{summary}}\r\n                                </option> -->\r\n                                </select>\r\n                                    <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.role.errors.required\">Role is required</div>\r\n                                    </div>\r\n                        </div>\r\n\r\n                            </div>\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"form-group row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                        <input placeholder=\"Enter Name\" id=\"name\" formControlName=\"name\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.name.errors.required\">Name is required</div>\r\n                                        </div></div>\r\n                                    \r\n                                   \r\n                                        <div class=\"col-sm-6\">\r\n                                        <input placeholder=\"Enter Address\" id=\"address\" formControlName=\"address\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\r\n                                        <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"f.address.errors.required\">Address is required</div>\r\n                                        </div></div>\r\n                                    </div>\r\n                                    <div class=\"form-group row\">\r\n                                        <!-- <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label> -->\r\n                                        <div class=\"col-md-6\">\r\n                                            <input placeholder=\"Enter Email\" id=\"email\" formControlName=\"email\"\r\n                                                class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                                                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                                                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <input placeholder=\"Enter Contact\" id=\"contact\" formControlName=\"contact\" class=\"form-control\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.contact.errors }\" />\r\n                                            <div *ngIf=\"submitted && f.contact.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.address.contact.required\">Contact is required</div>\r\n                                            </div></div>\r\n                                    \r\n                                        </div>\r\n                                </div>\r\n                                <!-- /.card-body -->\r\n                               \r\n                                \r\n                                  \r\n                          \r\n                        \r\n                            \r\n                        </div>\r\n                    </div>\r\n                    <!-- /.row -->\r\n                </div>\r\n                <!-- /.container-fluid -->\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- /.card-body -->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/SalesPayment/return-items/return-items.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/SalesPayment/return-items/return-items.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectSalesPaymentReturnItemsReturnItemsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>return-items works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/SalesPayment/sales-report/sales-report.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Project/SalesPayment/sales-report/sales-report.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectSalesPaymentSalesReportSalesReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>sales-report works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<router-outlet></router-outlet>\r\n\r\n<app-loader></app-loader>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-10 col-12\" style=\"height: calc(100vh - 46px);padding: 2% 5% 0% 2%\">  \r\n  <div class=\"col-12 text-left\" style=\"color: black;height: 13vh;\">\r\n    <h3 class=\"display-10\">DelhiVery</h3>\r\n    <p class=\"lead\">591561922</p>      \r\n  </div>  \r\n  <div id=\"applist\" class=\"row\">  \r\n      <div class=\"col-12\">\r\n              \r\n                        <div>\r\n                              \r\n          <div style=\"padding: 1%\">\r\n    <div class=\"card-group mb-4\">\r\n                            <div class=\"card\">\r\n                        <div class=\"card-body\">         \r\n                            <div class=\"text-value\" id=\"Followup\">0</div>\r\n                            <small class=\"text-muted text-uppercase font-weight-bold\">Followup</small>\r\n                        </div>\r\n                    </div>\r\n                                    <div class=\"card\">\r\n                        <div class=\"card-body\">         \r\n                            <div class=\"text-value\" id=\"Creation\">0</div>\r\n                            <small class=\"text-muted text-uppercase font-weight-bold\">Creation</small>\r\n                        </div>\r\n                    </div>\r\n                                    <div class=\"card\">\r\n                        <div class=\"card-body\">         \r\n                            <div class=\"text-value\" id=\"Updation\">0</div>\r\n                            <small class=\"text-muted text-uppercase font-weight-bold\">Updation</small>\r\n                        </div>\r\n                    </div>\r\n                                    <div class=\"card\">\r\n                        <div class=\"card-body\">         \r\n                            <div class=\"text-value\" id=\"Deletion\">0</div>\r\n                            <small class=\"text-muted text-uppercase font-weight-bold\">Deletion</small>\r\n                        </div>\r\n                    </div>\r\n                                    <div class=\"card\">\r\n                        <div class=\"card-body\">         \r\n                            <div class=\"text-value\" id=\"Deal Win\">0</div>\r\n                            <small class=\"text-muted text-uppercase font-weight-bold\">Deal Win</small>\r\n                        </div>\r\n                    </div>\r\n                                    <div class=\"card\">\r\n                        <div class=\"card-body\">         \r\n                            <div class=\"text-value\" id=\"Deal Lose\">0</div>\r\n                            <small class=\"text-muted text-uppercase font-weight-bold\">Deal Lose</small>\r\n                        </div>\r\n                    </div>\r\n                                    <div class=\"card\">\r\n                        <div class=\"card-body\">         \r\n                            <div class=\"text-value\" id=\"Lead Drop\">0</div>\r\n                            <small class=\"text-muted text-uppercase font-weight-bold\">Lead Drop</small>\r\n                        </div>\r\n                    </div>\r\n                  \r\n    </div>\r\n</div>\r\n<div class=\"timeline\" id=\"timeline\" style=\"margin-left: -47%;padding: 1%\"><div class=\"container right\" style=\"width: 100%\"><div class=\"content\"><div style=\"width: 100%;\">No activities found</div></div></div></div>\r\n\r\n<script type=\"text/javascript\">\r\n    if(screen.width<500)\r\n    {\r\n        document.getElementById('timeline').style.marginLeft =  \"0%\";\r\n    }  \r\n    function actDetail(det)\r\n    {\r\n        window.location = \"?Insights&\"+det;\r\n    }\r\n\r\n    if(document.getElementById(\"\"))\r\n    {\r\n        document.getElementById(\"\").className = \"card bg-light\";   \r\n    }\r\n</script>\r\n\r\n\r\n<script type=\"text/javascript\">\r\n    setTimeout( function() \r\n    {         \r\n        getProspectActivity();\r\n    }, 1000); \r\n\r\n     \r\n    function getProspectActivity()\r\n    {\r\n         \r\n        if(\"Yes\"==\"No\")\r\n        {\r\n            url = \"https://www.bytepaper.com/Cloud/Functions/caller.php?listActivity&-&591561922&-&\"+\"17-10-2020\"+\"&-&\"+\"abidkhanday92@gmail.com\";\r\n        }\r\n        else\r\n        {\r\n            url = \"https://www.bytepaper.com/Cloud/Functions/caller.php?listActivity&-&591561922&-&\"+\"17-10-2020\";\r\n        }\r\n\r\n        var req = new XMLHttpRequest();\r\n        req.open('GET', url);\r\n\r\n        req.onload = function () \r\n        {\r\n            if (req.status == 200) \r\n            {                \r\n                psum = req.response;\r\n                \r\n                parsedJSON = JSON.parse(psum);\r\n\r\n                var timelineContent = \"\";\r\n\r\n                var actionArray = [];\r\n\r\n                actionArray[\"Created\"] = 0\r\n                actionArray[\"Updated\"] = 0\r\n                actionArray[\"Deleted\"] = 0\r\n                actionArray[\"Followup\"] = 0\r\n                actionArray[\"Deal Won\"] = 0\r\n                actionArray[\"Deal Lost\"] = 0\r\n                actionArray[\"Prospect Dropped\"] = 0\r\n\r\n                if(parsedJSON.length==0)\r\n                {\r\n                    timelineContent='<div class=\"container right\" style=\"width: 100%\">'+\r\n                                        '<div class=\"content\">'+\r\n                                            '<div style=\"width: 100%;\">No activities found</div>'+\r\n                                        '</div>'+                                                \r\n                                    '</div>';\r\n                }\r\n\r\n                for(var i=0;i<parsedJSON.length;i++)\r\n                {                    \r\n                    var text = decodeURIComponent(parsedJSON[i].Text);\r\n\r\n                    text = text.replace(/\\+/g,\" \");\r\n\r\n                    actionArray[parsedJSON[i].Action]++;\r\n\r\n                    if(text.includes(\"mp3\"))\r\n                    {\r\n                        text='<audio onclick=\"event.stopPropagation();\" controls><source src=\"'+text+'\"></audio>';\r\n                    }\r\n                    else if(text.includes(\"wav\"))\r\n                    {\r\n                        text='<audio onclick=\"event.stopPropagation();\" controls><source src=\"'+text+'\"></audio>';\r\n                    }\r\n                    else if(text.includes(\"servetel\"))\r\n                    {\r\n                        text='<audio controls><source src=\"'+text+'\" type=\\'audio/mpeg\\'></audio>';\r\n                    }\r\n                    else if(text.includes(\"myoperator\"))\r\n                    {\r\n                        text='<audio onclick=\"event.stopPropagation();\" controls><source src=\"'+text+'\"></audio>';\r\n                    }\r\n\r\n                    if(text.includes(\"Reminder Created\") || text.includes(\"Task Created\"))\r\n                    {\r\n                        text=\"<a style='text-decoration:none' href='?Sales&Tasks&\"+\"\"+\"'>\"+text+\"</a>\";\r\n                    }\r\n\r\n                    var maincont = '';\r\n\r\n                    if(parsedJSON[i].ProsName)\r\n                    {\r\n                        if(parsedJSON[i].Table==\"Deal\")\r\n                        {\r\n                            maincont='<div style=\"width: 100%;\" class=\"small text-muted pull-left\"><b><a href=\"?Sales&DealDetail&'+parsedJSON[i].actID+'\">'+parsedJSON[i].ProsName+'</a></b></div>';\r\n                        }\r\n                        else if(parsedJSON[i].Table==\"Ticket\")\r\n                        {\r\n                            maincont='<div style=\"width: 100%;\" class=\"small text-muted pull-left\"><b><a href=\"?Support&TicketDetail&'+parsedJSON[i].actID+'\">Ticket No : '+parsedJSON[i].TicketNo+\" | \"+parsedJSON[i].ProsName+'</a></b></div>';\r\n                        }\r\n                        else\r\n                        {\r\n                            maincont='<div style=\"width: 100%;\" class=\"small text-muted pull-left\"><b><a href=\"?Sales&ProspectDetail&'+parsedJSON[i].actID+'\">'+parsedJSON[i].ProsName+'</a></b></div>';\r\n                        }\r\n                    }\r\n\r\n                    var upic=\"\";\r\n                    if(parsedJSON[i].UserPic)\r\n                    {\r\n                        upic = '<div class=\"col-md-2 col-12\">'+\r\n                                        '<div class=\"avatar float-right\">'+\r\n                                        '<img class=\"img-avatar\" style=\"height:40px;width:80px\" title=\"'+parsedJSON[i].UsName+'\" src=\"'+parsedJSON[i].UserPic+'\" alt=\"\"/>'+\r\n                                        '</div>'+\r\n                                    '</div>';\r\n                    }\r\n\r\n                    timelineContent+=\r\n                        '<div class=\"container right\" style=\"width: 100%\">'+\r\n                            '<div class=\"content\" style=\"min-height: 5vh\">'+\r\n                                '<div class=\"row\">'+\r\n                                    '<div class=\"col-md-10 col-12\">'+\r\n                                        '<div style=\"width: 100%;\">'+text+'</div>'+\r\n                                        '<div style=\"width: 100%;\" class=\"small text-muted pull-left\">'+parsedJSON[i].DateTime+'</div>'+\r\n                                        maincont+\r\n                                    '</div>'+\r\n                                    upic+\r\n                                '</div>'+\r\n                            '</div>'+\r\n                        '</div>';\r\n                    \r\n                }\r\n\r\n                document.getElementById('timeline').innerHTML = timelineContent;  \r\n                 \r\n                document.getElementById('Creation').innerHTML = actionArray[\"Created\"];           \r\n                document.getElementById('Updation').innerHTML = actionArray[\"Updated\"];           \r\n                document.getElementById('Deletion').innerHTML = actionArray[\"Deleted\"];           \r\n                document.getElementById('Followup').innerHTML = actionArray[\"Followup\"];           \r\n                document.getElementById('Deal Win').innerHTML = actionArray[\"Deal Won\"];           \r\n                document.getElementById('Deal Lose').innerHTML = actionArray[\"Deal Lost\"];           \r\n                document.getElementById('Lead Drop').innerHTML = actionArray[\"Prospect Dropped\"];           \r\n            } \r\n        };\r\n\r\n        req.onerror = function () \r\n        {\r\n            console.log('Network Error');\r\n        };\r\n\r\n        req.send();       \r\n    }\r\n</script>   \r\n        </div>  \r\n        <br>   \r\n      </div>                               \r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDialogDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">{{ title }}</h4>\r\n  </div>\r\n  \r\n  <div class=\"modal-body\">\r\n    {{ message }}\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{ btnCancelText }}</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"accept()\">{{ btnOkText }}</button>\r\n  </div>\r\n\r\n\r\n  \r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"main-footer\">\r\n    <strong>Copyright &copy; 2014-2018 <a href=\"http://adminlte.io\">AdminLTE.io</a>.</strong>\r\n    All rights reserved.\r\n    <div class=\"float-right d-none d-sm-inline-block\">\r\n      <b>Version</b> 1.0\r\n    </div>\r\n  </footer>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"main-header navbar navbar-expand bg-white navbar-light border-bottom\">\r\n    <!-- Left navbar links -->\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fa fa-bars\"></i></a>\r\n      </li>\r\n      <li class=\"nav-item d-none d-sm-inline-block\">\r\n        <a href=\"index3.html\" class=\"nav-link\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item d-none d-sm-inline-block\">\r\n        <a href=\"#\" class=\"nav-link\">Contact</a>\r\n      </li>\r\n    </ul>\r\n  \r\n    <!-- SEARCH FORM -->\r\n    <form class=\"form-inline ml-3\">\r\n      <div class=\"input-group input-group-sm\">\r\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-navbar\" type=\"submit\">\r\n            <i class=\"fa fa-search\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  \r\n    <!-- Right navbar links -->\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <!-- <button type=\"button\"  class=\"btn btn-info \">Logout</button> -->\r\n      <!-- Messages Dropdown Menu -->\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\">\r\n          <!-- <i class=\"fa fa-comments-o\"></i> -->\r\n          <span class=\"badge badge-danger navbar-badge\">IGMC</span>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            <!-- Message Start -->\r\n            <div class=\"media\">\r\n              <div class=\"media-body\">\r\n                <h3 class=\"dropdown-item-title\">\r\n                 LogOut\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <!-- Message End -->\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            <!-- Message Start -->\r\n            <div class=\"media\">\r\n              \r\n                <div class=\"media-body\">\r\n                  <h3 class=\"dropdown-item-title\">\r\n                   Change Password\r\n                  </h3>\r\n                </div>\r\n             \r\n            </div>\r\n            <!-- Message End -->\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <!-- <a href=\"#\" class=\"dropdown-item dropdown-footer\">See All Messages</a> -->\r\n        </div>\r\n      </li>\r\n      <!-- Notifications Dropdown Menu -->\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\">\r\n          <i class=\"fa fa-bell-o\"></i>\r\n          <span class=\"badge badge-warning navbar-badge\">15</span>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\r\n          <span class=\"dropdown-item dropdown-header\">15 Notifications</span>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            <i class=\"fa fa-envelope mr-2\"></i> 4 new messages\r\n            <span class=\"float-right text-muted text-sm\">3 mins</span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            <i class=\"fa fa-users mr-2\"></i> 8 friend requests\r\n            <span class=\"float-right text-muted text-sm\">12 hours</span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item\">\r\n            <i class=\"fa fa-file mr-2\"></i> 3 new reports\r\n            <span class=\"float-right text-muted text-sm\">2 days</span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#\" class=\"dropdown-item dropdown-footer\">See All Notifications</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-widget=\"control-sidebar\" data-slide=\"true\" href=\"#\">\r\n          <i class=\"fa fa-th-large\"></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout/layout.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout/layout.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body id=\"mainAppBody\" style=\"overflow: hidden;\"\r\n  class=\"app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show brand-minimized pace-done\">\r\n  <div class=\"pace  pace-inactive\">\r\n    <div class=\"pace-progress\" data-progress-text=\"100%\" data-progress=\"99\"\r\n      style=\"transform: translate3d(100%, 0px, 0px);\">\r\n      <div class=\"pace-progress-inner\"></div>\r\n    </div>\r\n    <div class=\"pace-activity\"></div>\r\n  </div>\r\n\r\n  <header class=\"app-header navbar\">\r\n    <button class=\"navbar-toggler sidebar-toggler d-lg-none mr-auto\" type=\"button\" data-toggle=\"sidebar-show\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <span style=\"font-weight: bold\">\r\n      <a href=\"/Cloud/Apps/\"\r\n        style=\"text-decoration: none;color: black;font-family: Changa;font-size: 20px;\">Bytepaper </a>\r\n    </span>\r\n\r\n\r\n    <ul class=\"nav navbar-nav ml-auto\" role=\"tablist\">\r\n      <li class=\"nav-item d-md-down-none\">\r\n        <a style=\"cursor: pointer;\" class=\"nav-link\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n          &nbsp;&nbsp;<span style=\"color: blue\">Need help?</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\"><a style=\"cursor: pointer;\" class=\"nav-link\"\r\n            data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          </a><a class=\"dropdown-item\" href=\"#\">\r\n            <div class=\"message\">\r\n              <div>\r\n                <small class=\"text-muted float-right mt-1\">Account manager</small>\r\n                <br><br>\r\n              </div>\r\n              <div class=\" font-weight-bold\">\r\n                For a dedicated account manager you need a paid account.\r\n                <br>\r\n                To subscribe Bytepaper, click on link below.\r\n                <br><br>\r\n                <span style=\"color: blue;cursor: pointer;\" onclick=\"subs()\">Subscribe Now</span>\r\n              </div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a style=\"cursor: pointer;\" class=\"nav-link\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n          <i class=\"icon-layers text-dark\"></i>&nbsp;&nbsp;My Applications&nbsp;&nbsp;\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\"><a style=\"cursor: pointer;\" class=\"nav-link\"\r\n            data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          </a><a class=\"dropdown-item\" href=\"/Cloud/Apps/?Users&amp;Users\">\r\n            <i class=\"icon-layers text-dark\"></i> Users </a>\r\n\r\n        </div>\r\n\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown d-md-down-none\">\r\n        <a style=\"cursor: pointer;\" onclick=\"asideToggle()\" class=\"nav-link navbar-toggler aside-menu-toggler\"\r\n          data-toggle=\"aside-menu-lg-show\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n           <i class=\"fa fa-bell-o font-md\"></i>&nbsp;&nbsp;&nbsp;\r\n          <span class=\"badge badge-pill badge-danger\" id=\"badgeRem\" style=\"font-size: 10px\">0</span>\r\n        </a>\r\n      </li>\r\n       \r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <div style=\"float: left;padding-top: 10px\" class=\"d-md-down-none\">\r\n            Abid </div>\r\n          <div class=\"img-avatar\"\r\n            style=\"background: #f1f1f1;height: 40px;width: 40px;border-radius: 20px;background-image: url(https://www.bytepaper.com/Cloud/assets/Profile/defaultnew.png);background-size: cover;cursor: pointer;background-position: center;float: right;\">\r\n          </div>\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\">\r\n          <a class=\"dropdown-item\" href=\"../logout.php\">\r\n            <i class=\"fa fa-lock\"></i> Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <button class=\"navbar-toggler aside-menu-toggler d-md-down-none\" type=\"button\" data-toggle=\"aside-menu-lg-show\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <button class=\"navbar-toggler aside-menu-toggler d-lg-none d-md-down-none\" type=\"button\"\r\n      data-toggle=\"aside-menu-show\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </header>\r\n\r\n\r\n  <script type=\"text/javascript\">\r\n    function subs() {\r\n      // window.open(\"https://imjo.in/dhxRB7\",\"_blank\");\r\n\r\n      var plan = 'Yearly';\r\n      var amount = '7000';\r\n\r\n      window.location = \"https://www.bytepaper.com/Cloud/Apps/Instamojo/SubscribeApp.php?Amount=\" + amount + \"&Company=\" + \"DelhiVery&Mobile=\" + \"7889315238&Email=\" + \"abidkhanday92@gmail.com&Purpose=Sales&Plan=\" + plan;\r\n    }\r\n  </script>\r\n\r\n  <script type=\"text/javascript\">\r\n\r\n    function playsound() {\r\n      var x = document.getElementById(\"myAudio\");\r\n\r\n      var playPromise = x.play();\r\n\r\n      if (playPromise !== undefined) {\r\n        playPromise.then(_ => {\r\n\r\n        })\r\n          .catch(error => {\r\n\r\n          });\r\n      }\r\n    }\r\n\r\n    $(document).ready(function () {\r\n      notifytoast();\r\n    });\r\n\r\n    function notifytoast(type) {\r\n    }\r\n\r\n  </script>\r\n  <div class=\"app-body\">\r\n    <div class=\"sidebar\">\r\n      <nav class=\"sidebar-nav ps\">\r\n        <ul class=\"nav\">\r\n          <li class=\"nav-item open\">\r\n            <a class=\"nav-link active\" href=\"\">\r\n              My Applications\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" style=\"cursor: pointer;\" (click)=\"navigate()\">\r\n              <i class=\"nav-icon icon-layers\"></i> Users\r\n\r\n            </a>\r\n          </li>\r\n          <!-- <li class=\"nav-item\"> -->\r\n          <!-- <a class=\"nav-link\" style=\"cursor: pointer;\" onclick=\"openApp('Orders')\"> -->\r\n          <!-- <i class=\"nav-icon icon-layers\"></i> Orders -->\r\n          <!-- </a> -->\r\n          <!-- </li>          -->\r\n\r\n          <script type=\"text/javascript\">\r\n            if (\"\" == \"Yes\") {\r\n              document.getElementById('moreApp').style.display = \"\";\r\n            }\r\n          </script>\r\n\r\n          <br>\r\n          <!-- <li class=\"nav-title\">Insights</li>                     -->\r\n          <li class=\"nav-item px-3 d-compact-none d-minimized-none\">\r\n            <div class=\"text-uppercase mb-1\">\r\n              <br>\r\n              <small>\r\n                <b>Login this month</b>\r\n              </small>\r\n            </div>\r\n            <div class=\"progress progress-xs\">\r\n              <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 3%\" aria-valuenow=\"3\"\r\n                aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n            </div>\r\n            <small class=\"text-muted\">1 days</small>\r\n          </li>\r\n          <br>\r\n\r\n        </ul>\r\n        <div class=\"ps__rail-x\" style=\"left: 0px; bottom: 0px;\">\r\n          <div class=\"ps__thumb-x\" tabindex=\"0\" style=\"left: 0px; width: 0px;\"></div>\r\n        </div>\r\n        <div class=\"ps__rail-y\" style=\"top: 0px; right: 0px;\">\r\n          <div class=\"ps__thumb-y\" tabindex=\"0\" style=\"top: 0px; height: 0px;\"></div>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n    <main class=\"main\">\r\n      <div class=\"col-12\">\r\n        <div class=\"row\" id=\"mainContentHolder\">\r\n          <style type=\"text/css\">\r\n            .scroll-box {\r\n              overflow-y: auto;\r\n            }\r\n\r\n            .scroll-box::-webkit-scrollbar {\r\n              width: .0em;\r\n            }\r\n          </style>\r\n         \r\n        </div>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </main>\r\n    <aside class=\"aside-menu\">\r\n      <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#timeline\" role=\"tab\" aria-selected=\"true\">\r\n            <i class=\"fa fa-bell\"></i>\r\n          </a>\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#messages\" role=\"tab\" aria-selected=\"false\">\r\n        <i class=\"icon-speech\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#settings\" role=\"tab\" aria-selected=\"false\">\r\n      <i class=\"icon-settings\"></i>\r\n      </a>\r\n    </li> -->\r\n      </ul>\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane active show\" id=\"timeline\" role=\"tabpanel\">\r\n\r\n        </div>\r\n        <!-- <div class=\"tab-pane p-3\" id=\"messages\" role=\"tabpanel\">       \r\n    </div>  \r\n    <div class=\"tab-pane p-3\" id=\"settings\" role=\"tabpanel\">\r\n    </div> -->\r\n      </div>\r\n    </aside>\r\n\r\n    <script type=\"text/javascript\">\r\n      function openDeatail(id, table, type, tktid) {\r\n        if (table == \"Deal\") {\r\n          window.location = \"?Sales&DealDetail&\" + id + \"&&\" + type;\r\n        }\r\n        else if (table == \"Prospect\") {\r\n          window.location = \"?Sales&ProspectDetail&\" + id + \"&\" + type + \"&\" + 20;\r\n        }\r\n        else if (table == \"Tickets\") {\r\n          window.location = \"?Support&TicketDetail&\" + tktid + \"&\" + type + \"&\" + 20;\r\n        }\r\n        else {\r\n          window.location = \"?Sales&Tasks&\";\r\n        }\r\n      }\r\n    </script>\r\n  </div>\r\n\r\n  <script type=\"text/javascript\">\r\n    function validateSession() {\r\n      var AppURL = \"https://www.bytepaper.com/Cloud/\";\r\n      var jsonData = httpGet(AppURL + \"Functions/caller.php?validateSession&-&Ztl2J+hu6i8SqQVMwWr5YSSud26m4QAfqmDCRGTSx3RbXJkamS+5JmOypQBV1ic+OP+ocTpssEApcaq+3ZGGWA==\");\r\n\r\n\r\n\r\n      if (jsonData == \"Dead\") {\r\n        swal({ title: \"Session Expired\", text: \" Please login again to continue\", animation: \"slide-from-bottom\", timer: 2000, showConfirmButton: false });\r\n        setTimeout(function () { window.location = \"http://www.bytepaper.com/Cloud\" }, 2000);\r\n      }\r\n\r\n    }          \r\n  </script>\r\n\r\n  <script type=\"text/javascript\">\r\n    validateSession();\r\n  // setInterval(function()\r\n  // {            \r\n  //   validateSession();       \r\n  // }, 60000);\r\n  </script>\r\n\r\n  <script type=\"text/javascript\">\r\n      // if(localStorage.asideToggle==\"Open\")\r\n      // {        \r\n        // document.getElementById('mainAppBody').className+=\" aside-menu-lg-show\";               \r\n      // }\r\n\r\n  </script>\r\n\r\n  <script src=\"../assets/vendors/jquery/js/jquery.min.js?1.5\"></script>\r\n  <script src=\"../assets/vendors/popper.js/js/popper.min.js?1.5\"></script>\r\n  <script src=\"../assets/vendors/bootstrap4/js/bootstrap.min.js?1.5\"></script>\r\n  <script src=\"../assets/vendors/pace-progress/js/pace.min.js?1.5\"></script>\r\n  <script src=\"../assets/vendors/perfect-scrollbar/js/perfect-scrollbar.min.js?1.5\"></script>\r\n  <script src=\"../assets/vendors/@coreui/coreui/js/coreui.min.js?1.5\"></script>\r\n  <script type=\"text/javascript\" src=\"../assets/js/toastify.js\"></script>\r\n  <script src=\"../assets/js/tooltips.js\"></script>\r\n\r\n\r\n  <script type=\"text/javascript\">\r\n\r\n    $(document).ready(function () {\r\n      $('#formUpdate').on('submit', function (e) {\r\n        e.preventDefault();\r\n        var post_data = $('#formUpdate').serialize();\r\n        $.ajax({\r\n          url: 'https://www.bytepaper.com/Cloud/Functions/CRUD.php',\r\n          type: \"POST\",\r\n          data: post_data,\r\n          success: function (data) {\r\n            swal({ text: \"Company details updated successfully !\", timer: 1000 });\r\n            if (\"Sales CRM\" == \"Sales CRM\") {\r\n              httpGet(\"https://www.bytepaper.com/Cloud/Functions/caller.php?freeSubscription&-&Sales CRM\");\r\n              swal({ title: \"Trial version activated\", icon: \"success\" });\r\n              setTimeout(function () {\r\n                window.location = \"https://www.bytepaper.com/Cloud/Applications/?Sales%20CRM&Dashboard\";\r\n              }, 2000);\r\n            }\r\n            else {\r\n              setTimeout(function () {\r\n                window.location = window.location.href;\r\n              }, 2000);\r\n            }\r\n          },\r\n          error: function (jXHR, textStatus, errorThrown) {\r\n            swal(errorThrown);\r\n          }\r\n        });\r\n      });\r\n    });\r\n\r\n\r\n\r\n  </script>\r\n\r\n\r\n\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/sidebar.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/sidebar.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\r\n  <!-- Brand Logo -->\r\n  <a href=\"index3.html\" class=\"brand-link\">\r\n    <img src=\"assets/dist/img/AdminLTELogo.png\" alt=\"AdminLTE Logo\" class=\"brand-image img-circle elevation-3\"\r\n      style=\"opacity: .8\">\r\n    <span class=\"brand-text font-weight-light\">IGMC</span>\r\n  </a>\r\n\r\n  <!-- Sidebar -->\r\n  <div class=\"sidebar\">\r\n    <!-- Sidebar user panel (optional) -->\r\n    <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\r\n      <div class=\"image\">\r\n        <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle elevation-2\" alt=\"User Image\">\r\n      </div>\r\n      <div class=\"info\">\r\n        <a  class=\"d-block\">Welcome {{loggedUser}}</a>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Sidebar Menu -->\r\n    <nav class=\"mt-2\">\r\n\r\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" *ngFor=\"let mod of modules\" data-widget=\"treeview\" role=\"menu\"\r\n        data-accordion=\"false\">\r\n        <li class=\"nav-item has-treeview\">\r\n          <a  class=\"nav-link\">\r\n            <i class=\"nav-icon fa fa-tree\"></i>\r\n            <p>\r\n              {{mod.ModuleName}}\r\n              <i class=\"fa fa-angle-left right\"></i>\r\n            </p>\r\n          </a>\r\n          <ul class=\"nav nav-treeview\" >\r\n            <li class=\"nav-item\" *ngFor=\"let pages of mod.Pages\">\r\n              <a class=\"nav-link\" (click)=\"currentRoute(pages.path)\">\r\n                <i class=\"fa fa-circle-o nav-icon\"></i>\r\n                <p>{{pages.PageName}}</p>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n\r\n      </ul>\r\n  </nav>\r\n    <!-- /.sidebar-menu -->\r\n  </div>\r\n  <!-- /.sidebar -->\r\n</aside>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [class.hidden]=\"!show\">\r\n    <div class=\"loader-overlay\">\r\n      <div *ngIf=\"show\" class=\"loader\">\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\" style=\"padding: 0px;min-height: 100vh\">      \r\n  <div class=\"row\">\r\n    <div class=\"col-md-8 d-none d-md-block\" style=\"background-image: url(https://www.bytepaper.com/Cloud/assets/login_call.png);background-repeat: no-repeat;background-size: cover;background-position: center; padding: 0px;min-height: 100vh\">\r\n      <!-- <br/><br/><br/>\r\n      <center>\r\n        <h3> Bytepaper</h3>\r\n      </center> -->\r\n    </div>\r\n    <div class=\"col-md-4 col-12 justify-content-center\" style=\"padding: 3% 3%;min-height: 100vh;border-left:1px solid #D1D1D2\">\r\n      <div class=\"card-body\">                        \r\n      \r\n          <img src=\"https://www.bytepaper.com/Cloud/assets/webimg/bytepaper.png\" style=\"width: 150px\">\r\n        \r\n        <br><br>\r\n        <h4 id=\"head\">Sign in to your account</h4>\r\n        <br>\r\n        <div id=\"knownUser\" style=\"display: none;\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-12\">\r\n                            \r\n                <div id=\"img\" style=\"background: #f1f1f1;height: 100px;width: 100px;border-radius: 50px;background-size:cover;background-position: center;\"></div>\r\n              \r\n            </div>\r\n          </div>\r\n          <p><b><span id=\"namee\"></span></b></p>          \r\n        </div>            \r\n        <p class=\"text-muted\"></p>\r\n                   \r\n          <div class=\"input-group mb-3\">                 \r\n            <input class=\"form-control\" type=\"email\" name=\"emailid\" id=\"emailid\" placeholder=\"Email ID\" autofocus=\"\" style=\"display: block;\">\r\n          </div>\r\n          <div class=\"input-group mb-4\">                  \r\n            <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" autofocus=\"\">\r\n          </div>\r\n          <div class=\"input-group mb-4\" style=\"display:none\">                  \r\n            <input class=\"form-control\" type=\"text\" id=\"ipadr\" name=\"ipadr\" placeholder=\"\" autofocus=\"\">\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">                      \r\n              <a href=\"#\" onclick=\"changeUser()\"><button class=\"btn btn-link px-0\" type=\"button\">Change user</button></a>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n              <!-- <a href=\"forgot.php\"><button class=\"btn btn-link px-0\" type=\"button\">Forgot password?</button></a> -->\r\n              <br>                      \r\n            </div>                    \r\n            <div class=\"col-12\">                      \r\n              <br>\r\n              <button class=\"btn btn-success px-4\" (click)=\"login()\">Log In</button>\r\n            </div>\r\n          </div>\r\n               \r\n        <hr>\r\n        <br>\r\n        <a href=\"GetStarted/?Sales CRM\"><button class=\"btn btn-link px-0\" type=\"button\">Don't have an account? Sign up</button></a>\r\n        <br>\r\n        \r\n      </div>            \r\n    </div>\r\n  </div>      \r\n</div>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12\" id=\"contents\" style=\"height: 92vh;\">\n    <div class=\"row\">\n\n        <div class=\"offset-1 col-10\" style=\"margin-top: 2%;\">\n            <div class=\"col-12\">\n                <h4 class=\"card-title mb-0\">\n                    Active Users\n                </h4>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-lg-3\" style=\"cursor: pointer\" onclick=\"viewUser('5f8a948f3d0d0000ac005405')\">\n                        <div class=\"brand-card\">\n\n                            <br>\n                            <!-- <i class=\"icon-people font-5xl icons\"></i> -->\n                            <div>\n                                <div\n                                    style=\"background: #f1f1f1;height: 100px;width: 100px;border-radius: 50px;background-image: url(https://www.bytepaper.com/Cloud/assets/Profile/defaultnew.png);background-size: cover;cursor: pointer;background-position: center;\">\n                                </div>\n                            </div>\n\n                            <div class=\"brand-card-body\">\n                                <div>\n                                    <div class=\"text-value\" style=\"font-size: 14px\">Abid</div>\n                                    <div class=\"text-muted\">Login : 17-10-2020<br></div>\n                                </div>\n                            </div>\n                            <div class=\"card-header bg-success\">View Details</div>\n\n                        </div>\n                    </div>\n\n                    <div id=\"adduser\" class=\"col-lg-3\" style=\"cursor: pointer\" >\n                        <div class=\"brand-card\">\n\n                            <br>\n                            <img height=\"100px\" style=\"border-radius: 50px\" title=\"\"\n                                src=\"https://www.bytepaper.com/Cloud/assets/Profile/plus.png\">\n\n                            <div class=\"brand-card-body\">\n                                <div>\n                                    <div class=\"text-value\">2 left</div>\n                                    <div class=\"text-muted small\">You can add 2 more users<br></div>\n                                </div>\n                            </div>\n                            <div class=\"card-header\"(click)=\"addNewUser()\">Add more users</div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n\n       <script type=\"text/javascript\">\n\n            function applyPlan(val) {\n                if (val == \"Monthly\") {\n                    document.getElementById('Price').value = \"250\";\n                    document.getElementById('Total').value = document.getElementById('Price').value * document.getElementById('Number').value;\n                }\n                else {\n                    if (\"591561922\" == \"535580444\" || \"591561922\" == \"984097290\") {\n                        document.getElementById('Price').value = \"1000\";\n                        document.getElementById('Total').value = document.getElementById('Price').value * document.getElementById('Number').value;\n                    }\n                    else if (\"591561922\" == \"997830200\") {\n                        document.getElementById('Price').value = \"1500\";\n                        document.getElementById('Total').value = document.getElementById('Price').value * document.getElementById('Number').value;\n                    }\n                    else {\n                        document.getElementById('Price').value = \"2500\";\n                        document.getElementById('Total').value = document.getElementById('Price').value * document.getElementById('Number').value;\n                    }\n\n                }\n            }\n\n\n            function addnew() {\n                document.getElementById(\"form\").reset();\n                $('#addnew').modal('show');\n                document.getElementById(\"modal-title\").innerHTML = \"Add new user\";\n            }\n\n            function buynew() {\n                $('#buynew').modal('show');\n            }\n\n            function calcprice() {\n                document.getElementById('Total').value = document.getElementById('Number').value * document.getElementById('Price').value;\n            }\n\n            function viewUser(id) {\n                window.location = \"?Users&UserDetail&\" + id + \"&\" + \"01-10-2020\" + \"&\" + \"31-10-2020\" + \"&\" + \"2020-10-17\";\n            }\n\n            function reqBuy() {\n                window.location = \"https://www.bytepaper.com/Cloud/Apps/Instamojo/buyUsers.php?Amount=\" + document.getElementById('Total').value + \"&Company=\" + \"DelhiVery&Mobile=\" + \"7889315238&Email=\" + \"abidkhanday92@gmail.com&Plan=\" + document.getElementById('userPlan').value + \"&LicenseNumber=\" + \"591561922\";\n            }\n\n            $(document).ready(function () {\n                $('#form').on('submit', function (e) {\n                    document.getElementById('buttonSave').innerHTML = \"Please wait adding User....\";\n                    document.getElementById('buttonSave').disabled = true;\n                    e.preventDefault();\n                    var post_data = $('#form').serialize();\n                    $.ajax({\n                        url: 'https://www.bytepaper.com/Cloud/Functions/CRUD.php',\n                        type: \"POST\",\n                        data: post_data,\n                        success: function (data) {\n                            if (data == \"Existing User\") {\n                                swal({ text: \"User with this email id already exists !\", timer: 2000 });\n                                window.location = window.location.href;\n                            }\n                            else {\n                                swal({ text: \"User added successfully !\", timer: 100 });\n                                $('#addnew').modal('hide');\n                                window.location = window.location.href;\n                            }\n                        },\n                        error: function (jXHR, textStatus, errorThrown) {\n                            swal(errorThrown);\n                        }\n                    });\n                });\n            });\n\n        </script>\n    </div>\n</div>\n\n<audio id=\"myAudio\">\n    <source src=\"https://www.bytepaper.com/Cloud/assets/notification.ogg\" type=\"audio/ogg\">\n    <source src=\"https://www.bytepaper.com/Cloud/assets/notification.mp3\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n</audio>\n\n\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://www.bytepaper.com/Cloud/assets/js/toastify.css?17.1\">\n<script type=\"text/javascript\" src=\"https://www.bytepaper.com/Cloud/assets/js/toastify.js\"></script>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/CommonSevices/api.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/CommonSevices/api.service.ts ***!
    \**********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppCommonSevicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiService = function ApiService(http) {
      _classCallCheck(this, ApiService);

      this.http = http;
      this.BaseUrl = 'http://warals1.ddns.net:8006//Api/';
    };

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/CommonSevices/module.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/CommonSevices/module.service.ts ***!
    \*************************************************/

  /*! exports provided: ModuleService */

  /***/
  function srcAppCommonSevicesModuleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModuleService", function () {
      return ModuleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ModuleService =
    /*#__PURE__*/
    function () {
      function ModuleService(http) {
        _classCallCheck(this, ModuleService);

        this.http = http;
      }

      _createClass(ModuleService, [{
        key: "loadModules",
        value: function loadModules() {
          var Modules = [{
            "ModuleId": 1,
            "ModuleName": "Maters",
            "Pages": [{
              "path": "addproduct",
              "PageName": "Add Product"
            }, {
              "path": "addbrand",
              "PageName": "Add Brand"
            }, {
              "path": "addcategory",
              "PageName": "Add Category"
            }, {
              "path": "adddealer",
              "PageName": "Add Dealer"
            }, {
              "path": "addhsn",
              "PageName": "Add HSN"
            }]
          }, {
            "ModuleId": 2,
            "ModuleName": "ProductDetails",
            "path": "",
            "Pages": [{
              "path": "manageproduct",
              "PageName": "Manage Product"
            }, {
              "path": "expiredproducts",
              "PageName": "Expired Products"
            }, {
              "path": "moredetails",
              "PageName": "More Details"
            }, {
              "path": "allproductdetails",
              "PageName": "All Details"
            }]
          }, {
            "ModuleId": 3,
            "ModuleName": "Expenses",
            "path": "",
            "Pages": [{
              "path": "addexpenses",
              "PageName": "Add Expenses"
            }]
          }, {
            "ModuleId": 4,
            "ModuleName": "Accounts",
            "path": "",
            "Pages": [{
              "path": "createaccount",
              "PageName": "Create Account"
            }, {
              "path": "manageaccount",
              "PageName": "Manage Account"
            }]
          }, {
            "ModuleId": 5,
            "ModuleName": "Sales/Reports",
            "path": "",
            "Pages": [{
              "path": "addbill",
              "PageName": "Add Bill"
            }]
          }, {
            "ModuleId": 6,
            "ModuleName": "User Account",
            "path": ""
          }];
          return Modules;
        }
      }]);

      return ModuleService;
    }();

    ModuleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ModuleService);
    /***/
  },

  /***/
  "./src/app/Masters/category/category.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/Masters/category/category.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMastersCategoryCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01hc3RlcnMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Masters/category/category.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/Masters/category/category.component.ts ***!
    \********************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppMastersCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoryComponent =
    /*#__PURE__*/
    function () {
      function CategoryComponent() {
        _classCallCheck(this, CategoryComponent);
      }

      _createClass(CategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoryComponent;
    }();

    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Masters/category/category.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.component.css */
      "./src/app/Masters/category/category.component.css")).default]
    })], CategoryComponent);
    /***/
  },

  /***/
  "./src/app/Project/Accounts/accounts.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Project/Accounts/accounts.module.ts ***!
    \*****************************************************/

  /*! exports provided: AccountsModule */

  /***/
  function srcAppProjectAccountsAccountsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsModule", function () {
      return AccountsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-account/create-account.component */
    "./src/app/Project/Accounts/create-account/create-account.component.ts");
    /* harmony import */


    var _manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./manage-account/manage-account.component */
    "./src/app/Project/Accounts/manage-account/manage-account.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); //import { AccountsRoutingModule } from './accounts-routing.module';


    var AccountsModule = function AccountsModule() {
      _classCallCheck(this, AccountsModule);
    };

    AccountsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_3__["CreateAccountComponent"], _manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_4__["ManageAccountComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"] // AccountsRoutingModule
      ]
    })], AccountsModule);
    /***/
  },

  /***/
  "./src/app/Project/Accounts/create-account/create-account.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/Project/Accounts/create-account/create-account.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectAccountsCreateAccountCreateAccountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvQWNjb3VudHMvY3JlYXRlLWFjY291bnQvY3JlYXRlLWFjY291bnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Project/Accounts/create-account/create-account.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Project/Accounts/create-account/create-account.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CreateAccountComponent */

  /***/
  function srcAppProjectAccountsCreateAccountCreateAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function () {
      return CreateAccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/loader.service */
    "./src/app/loader.service.ts");
    /* harmony import */


    var _create_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-account.service */
    "./src/app/Project/Accounts/create-account/create-account.service.ts");

    var CreateAccountComponent =
    /*#__PURE__*/
    function () {
      function CreateAccountComponent(router, formBuilder, service, loaderservice) {
        _classCallCheck(this, CreateAccountComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loaderservice = loaderservice;
        this.submitted = false;
      }

      _createClass(CreateAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createaccountForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onCreateAccount",
        value: function onCreateAccount() {
          var _this = this;

          if (this.createaccountForm.valid) {
            this.submitted = true;
            console.log(this.createaccountForm.valid);
            this.submitted = true;
            this.router.navigate(['/CreateAccount']);
            this.createaccountarray = JSON.parse(JSON.stringify(this.createaccountForm.getRawValue()));
            console.log(this.createaccountarray, "Account Form");
            this.loaderservice.show();
            setTimeout(function () {
              _this.loaderservice.hide();
            }, 5000); // // Calling API
            // this.loaderserice.show();
            // this.service.postLogin(this.user).subscribe(response => {
            //   let result: any = response;
            //   console.log(result);
            // this.postmodal.Mode=1
            // this.postmodal.CurdType="Insert",
            // this.postmodal.SaveData.tbladdproduct.push(this.createaccountarray)
            // console.log(this.postmodal);

            alert("Data saved in an Array");
          } else {
            this.submitted = true;
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createaccountForm.value));
            return;
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.createaccountForm.controls;
        }
      }]);

      return CreateAccountComponent;
    }();

    CreateAccountComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _create_account_service__WEBPACK_IMPORTED_MODULE_5__["CreateAccountService"]
      }, {
        type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }];
    };

    CreateAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/Accounts/create-account/create-account.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-account.component.css */
      "./src/app/Project/Accounts/create-account/create-account.component.css")).default]
    })], CreateAccountComponent);
    /***/
  },

  /***/
  "./src/app/Project/Accounts/create-account/create-account.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/Project/Accounts/create-account/create-account.service.ts ***!
    \***************************************************************************/

  /*! exports provided: CreateAccountService */

  /***/
  function srcAppProjectAccountsCreateAccountCreateAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAccountService", function () {
      return CreateAccountService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CreateAccountService = function CreateAccountService() {
      _classCallCheck(this, CreateAccountService);
    };

    CreateAccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CreateAccountService);
    /***/
  },

  /***/
  "./src/app/Project/Accounts/manage-account/manage-account.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/Project/Accounts/manage-account/manage-account.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectAccountsManageAccountManageAccountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvQWNjb3VudHMvbWFuYWdlLWFjY291bnQvbWFuYWdlLWFjY291bnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Project/Accounts/manage-account/manage-account.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Project/Accounts/manage-account/manage-account.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ManageAccountComponent */

  /***/
  function srcAppProjectAccountsManageAccountManageAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageAccountComponent", function () {
      return ManageAccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ManageAccountComponent =
    /*#__PURE__*/
    function () {
      function ManageAccountComponent(router, formBuilder) {
        _classCallCheck(this, ManageAccountComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
      }

      _createClass(ManageAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.manageaccountForm = this.formBuilder.group({// name: ['', Validators.required],
            // username: ['', Validators.required],
            // email: ['', Validators.required],
            // password: ['', Validators.required],
            // role: ['', Validators.required]
          });
        }
      }]);

      return ManageAccountComponent;
    }();

    ManageAccountComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ManageAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/Accounts/manage-account/manage-account.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-account.component.css */
      "./src/app/Project/Accounts/manage-account/manage-account.component.css")).default]
    })], ManageAccountComponent);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-brand/add-brand.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/Project/IGMC/add-brand/add-brand.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectIGMCAddBrandAddBrandComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-item.active .page-link {\r\n    z-index: 3;\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n}\r\n\r\n/* position */\r\n\r\n.toast-center-center {\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n.toast-top-center {\r\n    top: 0;\r\n    right: 0;\r\n    width: 100%;\r\n  }\r\n\r\n.toast-bottom-center {\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 100%;\r\n  }\r\n\r\n.toast-top-full-width {\r\n    top: 0;\r\n    right: 0;\r\n    width: 100%;\r\n  }\r\n\r\n.toast-bottom-full-width {\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 100%;\r\n  }\r\n\r\n.toast-top-left {\r\n    top: 12px;\r\n    left: 12px;\r\n  }\r\n\r\n.toast-top-right {\r\n    top: 12px;\r\n    right: 12px;\r\n  }\r\n\r\n.toast-bottom-right {\r\n    right: 12px;\r\n    bottom: 12px;\r\n  }\r\n\r\n.toast-bottom-left {\r\n    bottom: 12px;\r\n    left: 12px;\r\n  }\r\n\r\n/* toast styles */\r\n\r\n.toast-title {\r\n    font-weight: bold;\r\n  }\r\n\r\n.toast-message {\r\n    word-wrap: break-word;\r\n  }\r\n\r\n.toast-message a,\r\n  .toast-message label {\r\n    color: #FFFFFF;\r\n  }\r\n\r\n.toast-message a:hover {\r\n    color: #CCCCCC;\r\n    text-decoration: none;\r\n  }\r\n\r\n.toast-close-button {\r\n    position: relative;\r\n    right: -0.3em;\r\n    top: -0.3em;\r\n    float: right;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #FFFFFF;\r\n    text-shadow: 0 1px 0 #ffffff;\r\n    /* opacity: 0.8; */\r\n  }\r\n\r\n.toast-close-button:hover,\r\n  .toast-close-button:focus {\r\n    color: #000000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    opacity: 0.4;\r\n  }\r\n\r\n/*Additional properties for button version\r\n   iOS requires the button element instead of an anchor tag.\r\n   If you want the anchor version, it requires `href=\"#\"`.*/\r\n\r\nbutton.toast-close-button {\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: 0;\r\n  }\r\n\r\n.toast-container {\r\n    pointer-events: none;\r\n    position: fixed;\r\n    z-index: 999999;\r\n  }\r\n\r\n.toast-container * {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n.toast-container .ngx-toastr {\r\n    position: relative;\r\n    overflow: hidden;\r\n    margin: 0 0 6px;\r\n    padding: 15px 15px 15px 50px;\r\n    width: 300px;\r\n    border-radius: 3px 3px 3px 3px;\r\n    background-position: 15px center;\r\n    background-repeat: no-repeat;\r\n    background-size: 24px;\r\n    box-shadow: 0 0 12px #999999;\r\n    color: #FFFFFF;\r\n  }\r\n\r\n.toast-container .ngx-toastr:hover {\r\n    box-shadow: 0 0 12px #000000;\r\n    opacity: 1;\r\n    cursor: pointer;\r\n  }\r\n\r\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\r\n\r\n.toast-info {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\r\n\r\n.toast-error {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\r\n\r\n.toast-success {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\r\n\r\n.toast-warning {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n.toast-container.toast-top-center .ngx-toastr,\r\n  .toast-container.toast-bottom-center .ngx-toastr {\r\n    width: 300px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n.toast-container.toast-top-full-width .ngx-toastr,\r\n  .toast-container.toast-bottom-full-width .ngx-toastr {\r\n    width: 96%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n.ngx-toastr {\r\n    background-color: #030303;\r\n    pointer-events: auto;\r\n  }\r\n\r\n.toast-success {\r\n    background-color: #51A351;\r\n  }\r\n\r\n.toast-error {\r\n    background-color: #BD362F;\r\n  }\r\n\r\n.toast-info {\r\n    background-color: #2F96B4;\r\n  }\r\n\r\n.toast-warning {\r\n    background-color: #F89406;\r\n  }\r\n\r\n.toast-progress {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    height: 4px;\r\n    background-color: #000000;\r\n    opacity: 0.4;\r\n  }\r\n\r\n/* Responsive Design */\r\n\r\n@media all and (max-width: 240px) {\r\n    .toast-container .ngx-toastr.div {\r\n      padding: 8px 8px 8px 50px;\r\n      width: 11em;\r\n    }\r\n    .toast-container .toast-close-button {\r\n      right: -0.2em;\r\n      top: -0.2em;\r\n    }\r\n  }\r\n\r\n@media all and (min-width: 241px) and (max-width: 480px) {\r\n    .toast-container .ngx-toastr.div {\r\n      padding: 8px 8px 8px 50px;\r\n      width: 18em;\r\n    }\r\n    .toast-container .toast-close-button {\r\n      right: -0.2em;\r\n      top: -0.2em;\r\n    }\r\n  }\r\n\r\n@media all and (min-width: 481px) and (max-width: 768px) {\r\n    .toast-container .ngx-toastr.div {\r\n      padding: 15px 15px 15px 50px;\r\n      width: 25em;\r\n    }\r\n  }\r\n\r\n.adddesign{\r\n    margin-left: 24px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvamVjdC9JR01DL2FkZC1icmFuZC9hZGQtYnJhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQSxhQUFhOztBQUNiO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0VBQ2xDOztBQUNBO0lBQ0UsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7RUFDYjs7QUFDQTtJQUNFLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztFQUNiOztBQUNBO0lBQ0UsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7RUFDYjs7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaOztBQUVBLGlCQUFpQjs7QUFDakI7SUFDRSxpQkFBaUI7RUFDbkI7O0FBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0FBQ0E7O0lBRUUsY0FBYztFQUNoQjs7QUFDQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjs7QUFDQTs7SUFFRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0FBQ0E7OzJEQUV5RDs7QUFDekQ7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0FBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0FBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsY0FBYztFQUNoQjs7QUFDQTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7QUFDQSxpSEFBaUg7O0FBQ2pIO0lBQ0UscWxCQUFxbEI7RUFDdmxCOztBQUNBLGtIQUFrSDs7QUFDbEg7SUFDRSw2akJBQTZqQjtFQUMvakI7O0FBQ0EsMkdBQTJHOztBQUMzRztJQUNFLHdkQUF3ZDtFQUMxZDs7QUFDQSwwSEFBMEg7O0FBQzFIO0lBQ0Usc29CQUFzb0I7RUFDeG9COztBQUNBOztJQUVFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztBQUNBOztJQUVFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG9CQUFvQjtFQUN0Qjs7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztBQUNBLHNCQUFzQjs7QUFDdEI7SUFDRTtNQUNFLHlCQUF5QjtNQUN6QixXQUFXO0lBQ2I7SUFDQTtNQUNFLGFBQWE7TUFDYixXQUFXO0lBQ2I7RUFDRjs7QUFDQTtJQUNFO01BQ0UseUJBQXlCO01BQ3pCLFdBQVc7SUFDYjtJQUNBO01BQ0UsYUFBYTtNQUNiLFdBQVc7SUFDYjtFQUNGOztBQUNBO0lBQ0U7TUFDRSw0QkFBNEI7TUFDNUIsV0FBVztJQUNiO0VBQ0Y7O0FBRUE7SUFDRSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9Qcm9qZWN0L0lHTUMvYWRkLWJyYW5kL2FkZC1icmFuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4O1xyXG59XHJcblxyXG4vKiBwb3NpdGlvbiAqL1xyXG4udG9hc3QtY2VudGVyLWNlbnRlciB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICAudG9hc3QtdG9wLWNlbnRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudG9hc3QtYm90dG9tLWNlbnRlciB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudG9hc3QtdG9wLWZ1bGwtd2lkdGgge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50b2FzdC10b3AtbGVmdCB7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gIH1cclxuICAudG9hc3QtdG9wLXJpZ2h0IHtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gIH1cclxuICAudG9hc3QtYm90dG9tLXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuICAudG9hc3QtYm90dG9tLWxlZnQge1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLyogdG9hc3Qgc3R5bGVzICovXHJcbiAgLnRvYXN0LXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAudG9hc3QtbWVzc2FnZSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIC50b2FzdC1tZXNzYWdlIGEsXHJcbiAgLnRvYXN0LW1lc3NhZ2UgbGFiZWwge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC50b2FzdC1tZXNzYWdlIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNDQ0NDQ0M7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC50b2FzdC1jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IC0wLjNlbTtcclxuICAgIHRvcDogLTAuM2VtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XHJcbiAgICAvKiBvcGFjaXR5OiAwLjg7ICovXHJcbiAgfVxyXG4gIC50b2FzdC1jbG9zZS1idXR0b246aG92ZXIsXHJcbiAgLnRvYXN0LWNsb3NlLWJ1dHRvbjpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbiAgLypBZGRpdGlvbmFsIHByb3BlcnRpZXMgZm9yIGJ1dHRvbiB2ZXJzaW9uXHJcbiAgIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxyXG4gICBJZiB5b3Ugd2FudCB0aGUgYW5jaG9yIHZlcnNpb24sIGl0IHJlcXVpcmVzIGBocmVmPVwiI1wiYC4qL1xyXG4gIGJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICAudG9hc3QtY29udGFpbmVyIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gIH1cclxuICAudG9hc3QtY29udGFpbmVyICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwIDAgNnB4O1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHggY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4ICM5OTk5OTk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0cjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTJweCAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvaW5mby1jaXJjbGUuc3ZnICovXHJcbiAgLnRvYXN0LWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgfVxyXG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cclxuICAudG9hc3QtZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMTIxLjYgMzEzLjFjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMzOCAzNzcuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDI1NiAzMTJsLTY1LjEgNjUuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDEzNC40IDMzOGMtNC43LTQuNy00LjctMTIuMyAwLTE3bDY1LjYtNjUtNjUuNi02NS4xYy00LjctNC43LTQuNy0xMi4zIDAtMTdsMzkuNi0zOS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGw2NSA2NS43IDY1LjEtNjUuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsMzkuNiAzOS42YzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMTIgMjU2bDY1LjYgNjUuMXonLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgfVxyXG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2NoZWNrLnN2ZyAqL1xyXG4gIC50b2FzdC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICB9XHJcbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvZXhjbGFtYXRpb24tdHJpYW5nbGUuc3ZnICovXHJcbiAgLnRvYXN0LXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzU3NicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIH1cclxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsXHJcbiAgLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tY2VudGVyIC5uZ3gtdG9hc3RyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyLFxyXG4gIC50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGggLm5neC10b2FzdHIge1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAubmd4LXRvYXN0ciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgfVxyXG4gIC50b2FzdC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MUEzNTE7XHJcbiAgfVxyXG4gIC50b2FzdC1lcnJvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQzNjJGO1xyXG4gIH1cclxuICAudG9hc3QtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY5NkI0O1xyXG4gIH1cclxuICAudG9hc3Qtd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5NDA2O1xyXG4gIH1cclxuICAudG9hc3QtcHJvZ3Jlc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICB9XHJcbiAgLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAyNDBweCkge1xyXG4gICAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xyXG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xyXG4gICAgICB3aWR0aDogMTFlbTtcclxuICAgIH1cclxuICAgIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgIHJpZ2h0OiAtMC4yZW07XHJcbiAgICAgIHRvcDogLTAuMmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XHJcbiAgICAgIHdpZHRoOiAxOGVtO1xyXG4gICAgfVxyXG4gICAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcclxuICAgICAgcmlnaHQ6IC0wLjJlbTtcclxuICAgICAgdG9wOiAtMC4yZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcclxuICAgICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcclxuICAgICAgd2lkdGg6IDI1ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWRkZGVzaWdue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHggIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-brand/add-brand.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Project/IGMC/add-brand/add-brand.component.ts ***!
    \***************************************************************/

  /*! exports provided: AddBrandComponent */

  /***/
  function srcAppProjectIGMCAddBrandAddBrandComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBrandComponent", function () {
      return AddBrandComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/loader.service */
    "./src/app/loader.service.ts");
    /* harmony import */


    var _add_brand_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-brand.service */
    "./src/app/Project/IGMC/add-brand/add-brand.service.ts");
    /* harmony import */


    var src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/dialog/dialog.service */
    "./src/app/dialog/dialog.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var AddBrandComponent =
    /*#__PURE__*/
    function () {
      function AddBrandComponent(router, formBuilder, toastr, service, loaderservice, dialog) {
        _classCallCheck(this, AddBrandComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.service = service;
        this.loaderservice = loaderservice;
        this.dialog = dialog;
        this.submitted = false;
        this.createbrandarray = [];
        this.resultData = [];
        this.search = 5;
        this.searchArray = [];
        this.buttonMode = "Save";
      }

      _createClass(AddBrandComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllBrands();
          this.addbrandForm = this.formBuilder.group({
            brandname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imagepath: [''],
            description: [''],
            brandid: [0]
          });
        }
      }, {
        key: "getAllBrands",
        value: function getAllBrands() {
          var _this2 = this;

          this.loaderservice.show();
          this.service.getBrand().subscribe(function (res) {
            var result = res;

            if (result.StatusCode == 200) {
              _this2.resultData = result.Result;
              console.log(_this2.resultData);
            } else {
              alert(result.StatusCode);
            }
          }, function (err) {
            _this2.toastr.error('Internal Server Error', 'Major Error'), alert('An error occurred');
          });
          this.loaderservice.hide();
        }
      }, {
        key: "onBrandSave",
        value: function onBrandSave() {
          var _this3 = this;

          if (this.addbrandForm.valid) {
            this.submitted = true;
            this.createbrandarray = JSON.parse(JSON.stringify(this.addbrandForm.getRawValue()));
            console.log(this.createbrandarray, "Brand Form");
            var postDataArray = {
              "Mode": 0,
              "dsdata": {
                "Brand": [this.createbrandarray]
              }
            };
            this.loaderservice.show();
            this.service.postbrand(postDataArray).subscribe(function (response) {
              var result = response;

              if (result.StatusCode == 200) {
                if (result.Result != null) {
                  _this3.toastr.success('Data Saved', 'Toastr fun!');

                  alert("Data Saved");
                  setTimeout(function () {
                    return _this3.toastr.success('Data Saved');
                  });

                  _this3.getAllBrands();
                } else {}

                _this3.loaderservice.hide();
              } else {
                alert("Internal Server Error");

                _this3.toastr.error('Internal Server Error', 'Major Error', {
                  timeOut: 3000
                });

                _this3.loaderservice.hide();
              }
            }, function (err) {
              alert('An error occured please try again');

              _this3.loaderservice.hide();
            });
          } else {
            this.submitted = true;
          }
        }
      }, {
        key: "keyupFunction",
        value: function keyupFunction(event) {
          if (event.target.value != '') {
            var _this$createbrandarra, _this$createbrandarra2;

            this.searchArray = (_this$createbrandarra = this.createbrandarray.filter(function (x) {
              return x.brandname.toLowerCase().includes(event.target.value);
            }), _this$createbrandarra2 = _toArray(_this$createbrandarra), _this$createbrandarra);
          } else {
            var _this$createbrandarra3, _this$createbrandarra4;

            this.searchArray = (_this$createbrandarra3 = this.createbrandarray, _this$createbrandarra4 = _toArray(_this$createbrandarra3), _this$createbrandarra3);
          }
        }
      }, {
        key: "onEdit",
        value: function onEdit(index) {
          console.log(index); //this.addbrandForm.controls.BrandName.setValue(index.BrandName)

          var editRow = this.resultData[index];
          console.log(editRow, "Testtttt");
          this.addbrandForm.patchValue(editRow);
          this.buttonMode = "Update";
        }
      }, {
        key: "onDelete",
        value: function onDelete(data) {
          console.log(data);
        }
      }, {
        key: "openConfirmationDialog",
        value: function openConfirmationDialog(data) {
          var _this4 = this;

          this.dialog.confirm('Delete Record', 'Do you want to delete this record. ?').then(function (res) {
            if (res == true) {
              _this4.onDelete(data);
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.addbrandForm.controls;
        }
      }]);

      return AddBrandComponent;
    }();

    AddBrandComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }, {
        type: _add_brand_service__WEBPACK_IMPORTED_MODULE_5__["AddBrandService"]
      }, {
        type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }, {
        type: src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
      }];
    };

    AddBrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-brand',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-brand.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-brand/add-brand.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-brand.component.css */
      "./src/app/Project/IGMC/add-brand/add-brand.component.css")).default]
    })], AddBrandComponent);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-brand/add-brand.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Project/IGMC/add-brand/add-brand.service.ts ***!
    \*************************************************************/

  /*! exports provided: AddBrandService */

  /***/
  function srcAppProjectIGMCAddBrandAddBrandServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBrandService", function () {
      return AddBrandService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/CommonSevices/api.service */
    "./src/app/CommonSevices/api.service.ts");

    var AddBrandService =
    /*#__PURE__*/
    function () {
      function AddBrandService(http, url) {
        _classCallCheck(this, AddBrandService);

        this.http = http;
        this.url = url;
      }

      _createClass(AddBrandService, [{
        key: "postbrand",
        value: function postbrand(data) {
          return this.http.post(this.url.BaseUrl + "Brand", data);
        }
      }, {
        key: "getBrand",
        value: function getBrand() {
          console.log(this.url.BaseUrl + "Brand?mode=" + 0 + "&brandId=" + 0);
          return this.http.get(this.url.BaseUrl + "Brand?mode=" + 0 + "&brandId=" + 0);
        }
      }]);

      return AddBrandService;
    }();

    AddBrandService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    AddBrandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AddBrandService);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-category/add-category.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/Project/IGMC/add-category/add-category.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectIGMCAddCategoryAddCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".adddesign{\r\n    margin-left: 24px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvamVjdC9JR01DL2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvSUdNQy9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkZGVzaWdue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHggIWltcG9ydGFudDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-category/add-category.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Project/IGMC/add-category/add-category.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddCategoryComponent */

  /***/
  function srcAppProjectIGMCAddCategoryAddCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function () {
      return AddCategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/loader.service */
    "./src/app/loader.service.ts");
    /* harmony import */


    var src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/dialog/dialog.service */
    "./src/app/dialog/dialog.service.ts");
    /* harmony import */


    var _add_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-category.service */
    "./src/app/Project/IGMC/add-category/add-category.service.ts");

    var AddCategoryComponent =
    /*#__PURE__*/
    function () {
      function AddCategoryComponent(router, formBuilder, service, loaderservice, dialog) {
        _classCallCheck(this, AddCategoryComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loaderservice = loaderservice;
        this.dialog = dialog;
        this.submitted = false;
        this.addcreatoryarray = [];
      }

      _createClass(AddCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.service.getCategory().subscribe(function (res) {
            console.log(res);
          });
          this.addcategoryForm = this.formBuilder.group({
            categoryname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imagepath: [''],
            description: ['']
          });
        }
      }, {
        key: "onCategorySave",
        value: function onCategorySave() {
          var _this5 = this;

          if (this.addcategoryForm.valid) {
            this.submitted = true;
            this.addcreatoryarray = JSON.parse(JSON.stringify(this.addcategoryForm.getRawValue()));
            console.log(this.addcreatoryarray, "Account Form");
            var postDataArray = {
              "Mode": 0,
              "dsdata": {
                "Category": [this.addcreatoryarray]
              }
            };
            this.loaderservice.show();
            this.service.postcategory(postDataArray).subscribe(function (response) {
              var result = response;
              alert("Data saved in an Array");

              if (result.StatusCode == 200) {
                if (result.Result != null) {
                  alert('Sucess'); // localStorage.setItem('isLoggedin', 'true');

                  _this5.router.navigate(['/AddCategory']); // this.clear();

                } else {
                  alert('Login failed');
                  localStorage.setItem('isLoggedin', 'true');
                }

                _this5.loaderservice.hide();
              } else {
                alert("Internal Server Error");

                _this5.loaderservice.hide();
              }
            }, function (err) {
              alert('An error occured please try again');

              _this5.loaderservice.hide();
            });
          } else {
            this.submitted = true;
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.addcategoryForm.controls;
        }
      }]);

      return AddCategoryComponent;
    }();

    AddCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _add_category_service__WEBPACK_IMPORTED_MODULE_6__["AddCategoryService"]
      }, {
        type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }, {
        type: src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
      }];
    };

    AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-category/add-category.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-category.component.css */
      "./src/app/Project/IGMC/add-category/add-category.component.css")).default]
    })], AddCategoryComponent);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-category/add-category.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Project/IGMC/add-category/add-category.service.ts ***!
    \*******************************************************************/

  /*! exports provided: AddCategoryService */

  /***/
  function srcAppProjectIGMCAddCategoryAddCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryService", function () {
      return AddCategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/CommonSevices/api.service */
    "./src/app/CommonSevices/api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AddCategoryService =
    /*#__PURE__*/
    function () {
      function AddCategoryService(http, url) {
        _classCallCheck(this, AddCategoryService);

        this.http = http;
        this.url = url;
      }

      _createClass(AddCategoryService, [{
        key: "postcategory",
        value: function postcategory(data) {
          return this.http.post(this.url.BaseUrl + "Category", data);
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          console.log(this.url.BaseUrl + "Category?mode=" + 0 + "&categoryId=" + 0);
          return this.http.get(this.url.BaseUrl + "Category?mode=" + 0 + "&categoryId=" + 0);
        }
      }]);

      return AddCategoryService;
    }();

    AddCategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_app_CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    AddCategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AddCategoryService);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-dealer/add-dealer.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/Project/IGMC/add-dealer/add-dealer.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectIGMCAddDealerAddDealerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".adddesign{\r\n    margin-left: 24px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvamVjdC9JR01DL2FkZC1kZWFsZXIvYWRkLWRlYWxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvUHJvamVjdC9JR01DL2FkZC1kZWFsZXIvYWRkLWRlYWxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZGRlc2lnbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-dealer/add-dealer.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Project/IGMC/add-dealer/add-dealer.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AddDealerComponent */

  /***/
  function srcAppProjectIGMCAddDealerAddDealerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDealerComponent", function () {
      return AddDealerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/loader.service */
    "./src/app/loader.service.ts");
    /* harmony import */


    var _add_dealer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-dealer.service */
    "./src/app/Project/IGMC/add-dealer/add-dealer.service.ts");

    var AddDealerComponent =
    /*#__PURE__*/
    function () {
      function AddDealerComponent(router, formBuilder, service, loaderservice) {
        _classCallCheck(this, AddDealerComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loaderservice = loaderservice;
        this.submitted = false;
        this.adddealerarray = [];
      }

      _createClass(AddDealerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adddealerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onDealerSave",
        value: function onDealerSave() {
          var _this6 = this;

          if (this.adddealerForm.valid) {
            this.submitted = true;
            this.adddealerarray = JSON.parse(JSON.stringify(this.adddealerForm.getRawValue()));
            console.log(this.adddealerarray, "Account Form");
            var postDataArray = {
              "Mode": 0,
              "dsdata": {
                "Dealer": [this.adddealerarray]
              }
            };
            this.loaderservice.show();
            this.service.postdealer(postDataArray).subscribe(function (response) {
              var result = response;
              alert("Data saved in an Array");

              if (result.StatusCode == 200) {
                if (result.Result != null) {
                  alert('Sucess');

                  _this6.router.navigate(['/AddDealer']); // this.clear();

                } else {
                  alert('Login failed');
                  localStorage.setItem('isLoggedin', 'true');
                }

                _this6.loaderservice.hide();
              } else {
                alert("Internal Server Error");

                _this6.loaderservice.hide();
              }
            }, function (err) {
              alert('An error occured please try again');

              _this6.loaderservice.hide();
            });
          } else {
            this.submitted = true;
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.adddealerForm.controls;
        }
      }]);

      return AddDealerComponent;
    }();

    AddDealerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _add_dealer_service__WEBPACK_IMPORTED_MODULE_5__["AddDealerService"]
      }, {
        type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }];
    };

    AddDealerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-dealer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-dealer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-dealer/add-dealer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-dealer.component.css */
      "./src/app/Project/IGMC/add-dealer/add-dealer.component.css")).default]
    })], AddDealerComponent);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-dealer/add-dealer.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Project/IGMC/add-dealer/add-dealer.service.ts ***!
    \***************************************************************/

  /*! exports provided: AddDealerService */

  /***/
  function srcAppProjectIGMCAddDealerAddDealerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDealerService", function () {
      return AddDealerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/CommonSevices/api.service */
    "./src/app/CommonSevices/api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AddDealerService =
    /*#__PURE__*/
    function () {
      function AddDealerService(http, url) {
        _classCallCheck(this, AddDealerService);

        this.http = http;
        this.url = url;
      }

      _createClass(AddDealerService, [{
        key: "postdealer",
        value: function postdealer(data) {
          return this.http.post(this.url.BaseUrl + "Dealer", data);
        }
      }, {
        key: "getDealer",
        value: function getDealer() {
          console.log(this.url.BaseUrl + "Dealer?mode=" + 0 + "&dealerId=" + 0);
          return this.http.get(this.url.BaseUrl + "Dealer?mode=" + 0 + "&dealerId=" + 0);
        }
      }]);

      return AddDealerService;
    }();

    AddDealerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_app_CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    AddDealerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AddDealerService);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-hsn/add-hsn.component.css":
  /*!************************************************************!*\
    !*** ./src/app/Project/IGMC/add-hsn/add-hsn.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectIGMCAddHsnAddHsnComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".adddesign{\r\n    margin-left: 24px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvamVjdC9JR01DL2FkZC1oc24vYWRkLWhzbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvUHJvamVjdC9JR01DL2FkZC1oc24vYWRkLWhzbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZGRlc2lnbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-hsn/add-hsn.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Project/IGMC/add-hsn/add-hsn.component.ts ***!
    \***********************************************************/

  /*! exports provided: AddHSNComponent */

  /***/
  function srcAppProjectIGMCAddHsnAddHsnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddHSNComponent", function () {
      return AddHSNComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/loader.service */
    "./src/app/loader.service.ts");
    /* harmony import */


    var _add_hsn_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-hsn.service */
    "./src/app/Project/IGMC/add-hsn/add-hsn.service.ts");
    /* harmony import */


    var src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/dialog/dialog.service */
    "./src/app/dialog/dialog.service.ts");

    var AddHSNComponent =
    /*#__PURE__*/
    function () {
      function AddHSNComponent(router, formBuilder, service, loaderservice, dialog) {
        _classCallCheck(this, AddHSNComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loaderservice = loaderservice;
        this.dialog = dialog;
        this.submitted = false;
        this.addhsnarray = [];
      }

      _createClass(AddHSNComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addhsnForm = this.formBuilder.group({
            hsnname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onHsnSave",
        value: function onHsnSave() {
          var _this7 = this;

          if (this.addhsnForm.valid) {
            this.submitted = true;
            this.addhsnarray = JSON.parse(JSON.stringify(this.addhsnForm.getRawValue()));
            console.log(this.addhsnarray, "HSN Form");
            var postDataArray = {
              "Mode": 0,
              "dsdata": {
                "Hsn": [this.addhsnarray]
              }
            };
            this.loaderservice.show();
            this.service.posthsn(postDataArray).subscribe(function (response) {
              var result = response;
              alert("Data saved in an Array");

              if (result.StatusCode == 200) {
                if (result.Result != null) {
                  alert('Sucess');

                  _this7.router.navigate(['/AddHsn']); // this.clear();

                } else {
                  alert('Login failed');
                  localStorage.setItem('isLoggedin', 'true');
                }

                _this7.loaderservice.hide();
              } else {
                alert("Internal Server Error");

                _this7.loaderservice.hide();
              }
            }, function (err) {
              alert('An error occured please try again');

              _this7.loaderservice.hide();
            });
          } else {
            this.submitted = true;
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.addhsnForm.controls;
        }
      }]);

      return AddHSNComponent;
    }();

    AddHSNComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _add_hsn_service__WEBPACK_IMPORTED_MODULE_5__["AddHSNService"]
      }, {
        type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }, {
        type: src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
      }];
    };

    AddHSNComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-hsn',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-hsn.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-hsn/add-hsn.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-hsn.component.css */
      "./src/app/Project/IGMC/add-hsn/add-hsn.component.css")).default]
    })], AddHSNComponent);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-hsn/add-hsn.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Project/IGMC/add-hsn/add-hsn.service.ts ***!
    \*********************************************************/

  /*! exports provided: AddHSNService */

  /***/
  function srcAppProjectIGMCAddHsnAddHsnServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddHSNService", function () {
      return AddHSNService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/CommonSevices/api.service */
    "./src/app/CommonSevices/api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AddHSNService =
    /*#__PURE__*/
    function () {
      function AddHSNService(http, url) {
        _classCallCheck(this, AddHSNService);

        this.http = http;
        this.url = url;
      }

      _createClass(AddHSNService, [{
        key: "posthsn",
        value: function posthsn(data) {
          return this.http.post(this.url.BaseUrl + "Hsn", data);
        }
      }, {
        key: "getHsn",
        value: function getHsn() {
          console.log(this.url.BaseUrl + "Hsn?mode=" + 0 + "&hsnId=" + 0);
          return this.http.get(this.url.BaseUrl + "Hsn?mode=" + 0 + "&hsnId=" + 0);
        }
      }]);

      return AddHSNService;
    }();

    AddHSNService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_app_CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    AddHSNService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AddHSNService);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-product/add-product.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/Project/IGMC/add-product/add-product.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectIGMCAddProductAddProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttonalign {\n  margin-left: 10px;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvamVjdC9JR01DL2FkZC1wcm9kdWN0L0Q6XFxMZWFkUG9ydGFsXFxMZWFkUG9ydGFsXFxMZWFkUG9ydGFsXFxDbGllbnQvc3JjXFxhcHBcXFByb2plY3RcXElHTUNcXGFkZC1wcm9kdWN0XFxhZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUHJvamVjdC9JR01DL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvUHJvamVjdC9JR01DL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbmFsaWdue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5idXR0b25hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-product/add-product.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Project/IGMC/add-product/add-product.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppProjectIGMCAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/loader.service */
    "./src/app/loader.service.ts");
    /* harmony import */


    var _addproduct_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addproduct.service */
    "./src/app/Project/IGMC/add-product/addproduct.service.ts");
    /* harmony import */


    var src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/dialog/dialog.service */
    "./src/app/dialog/dialog.service.ts");

    var AddProductComponent =
    /*#__PURE__*/
    function () {
      function AddProductComponent(router, formBuilder, service, loaderservice, dialog) {
        _classCallCheck(this, AddProductComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loaderservice = loaderservice;
        this.dialog = dialog;
        this.submitted = false;
      } // usermodel=new User();
      // postmodal:any=this.usermodel.getModal();


      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addproductForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            costprice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sellingprice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cgst: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sgst: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            brand: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pieces: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            expirydate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            hsn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            weight: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            companydiscount: []
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this8 = this;

          //this.submitted = true;
          debugger;

          if (this.addproductForm.valid) {
            this.submitted = true;
            this.addproductarray = JSON.parse(JSON.stringify(this.addproductForm.getRawValue()));
            console.log(this.addproductForm.valid);
            var postDataArray = {
              "Mode": 0,
              "dsdata": {
                "Product": [this.addproductarray]
              }
            };
            this.loaderservice.show();
            this.service.postproduct(postDataArray).subscribe(function (response) {
              var result = response;
              alert("Data saved in an Array");

              if (result.StatusCode == 200) {
                if (result.Result != null) {
                  alert('Sucess'); // localStorage.setItem('isLoggedin', 'true');

                  _this8.router.navigate(['/AddProduct']); // this.clear();

                } else {
                  alert('Login failed');
                  localStorage.setItem('isLoggedin', 'true');
                }

                _this8.loaderservice.hide();
              } else {
                alert("Internal Server Error");

                _this8.loaderservice.hide();
              }
            }, function (err) {
              alert('An error occured please try again');

              _this8.loaderservice.hide();
            });
          } else {
            this.submitted = true;
          }
        }
      }, {
        key: "onSaveAndContinue",
        value: function onSaveAndContinue() {
          this.submitted = true;

          if (this.addproductForm.valid) {
            return;
          } else {
            this.submitted = true;
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addproductForm.value));
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.addproductForm.controls;
        }
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _addproduct_service__WEBPACK_IMPORTED_MODULE_5__["AddproductService"]
      }, {
        type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }, {
        type: src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
      }];
    };

    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/IGMC/add-product/add-product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-product.component.scss */
      "./src/app/Project/IGMC/add-product/add-product.component.scss")).default]
    })], AddProductComponent);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/add-product/addproduct.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Project/IGMC/add-product/addproduct.service.ts ***!
    \****************************************************************/

  /*! exports provided: AddproductService */

  /***/
  function srcAppProjectIGMCAddProductAddproductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddproductService", function () {
      return AddproductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/CommonSevices/api.service */
    "./src/app/CommonSevices/api.service.ts"); //import { User } from './Models/user';


    var AddproductService =
    /*#__PURE__*/
    function () {
      function AddproductService(http, url) {
        _classCallCheck(this, AddproductService);

        this.http = http;
        this.url = url;
      }

      _createClass(AddproductService, [{
        key: "postproduct",
        value: function postproduct(data) {
          return this.http.post(this.url.BaseUrl + "product", data);
        }
      }]);

      return AddproductService;
    }();

    AddproductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    AddproductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AddproductService);
    /***/
  },

  /***/
  "./src/app/Project/IGMC/igmc.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/Project/IGMC/igmc.module.ts ***!
    \*********************************************/

  /*! exports provided: IGMCModule */

  /***/
  function srcAppProjectIGMCIgmcModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IGMCModule", function () {
      return IGMCModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/Project/material.module.ts");
    /* harmony import */


    var _IGMC_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../IGMC/add-category/add-category.component */
    "./src/app/Project/IGMC/add-category/add-category.component.ts");
    /* harmony import */


    var _IGMC_add_brand_add_brand_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../IGMC/add-brand/add-brand.component */
    "./src/app/Project/IGMC/add-brand/add-brand.component.ts");
    /* harmony import */


    var _IGMC_add_hsn_add_hsn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../IGMC/add-hsn/add-hsn.component */
    "./src/app/Project/IGMC/add-hsn/add-hsn.component.ts");
    /* harmony import */


    var _IGMC_add_dealer_add_dealer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../IGMC/add-dealer/add-dealer.component */
    "./src/app/Project/IGMC/add-dealer/add-dealer.component.ts");
    /* harmony import */


    var _IGMC_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../IGMC/add-product/add-product.component */
    "./src/app/Project/IGMC/add-product/add-product.component.ts");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js"); //import { IGMCRoutingModule } from './igmc-routing.module';
    // import { MatInputModule } from '@angular/material/input';


    var IGMCModule = function IGMCModule() {
      _classCallCheck(this, IGMCModule);
    };

    IGMCModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_IGMC_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__["AddCategoryComponent"], _IGMC_add_brand_add_brand_component__WEBPACK_IMPORTED_MODULE_5__["AddBrandComponent"], _IGMC_add_hsn_add_hsn_component__WEBPACK_IMPORTED_MODULE_6__["AddHSNComponent"], _IGMC_add_dealer_add_dealer_component__WEBPACK_IMPORTED_MODULE_7__["AddDealerComponent"], _IGMC_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__["AddProductComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], // IGMCRoutingModule,
      _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot()]
    })], IGMCModule);
    /***/
  },

  /***/
  "./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectOfficeExpensesAddExpenseTypeAddExpenseTypeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvT2ZmaWNlRXhwZW5zZXMvYWRkLWV4cGVuc2UtdHlwZS9hZGQtZXhwZW5zZS10eXBlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AddExpenseTypeComponent */

  /***/
  function srcAppProjectOfficeExpensesAddExpenseTypeAddExpenseTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddExpenseTypeComponent", function () {
      return AddExpenseTypeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/loader.service */
    "./src/app/loader.service.ts");
    /* harmony import */


    var _add_expense_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-expense-type.service */
    "./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.service.ts");
    /* harmony import */


    var src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/dialog/dialog.service */
    "./src/app/dialog/dialog.service.ts");

    var AddExpenseTypeComponent =
    /*#__PURE__*/
    function () {
      function AddExpenseTypeComponent(router, formBuilder, service, loaderservice, dialog) {
        _classCallCheck(this, AddExpenseTypeComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loaderservice = loaderservice;
        this.dialog = dialog;
        this.submitted = false;
      }

      _createClass(AddExpenseTypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addexpensesForm = this.formBuilder.group({
            categorytype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ondate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "onAddExpenses",
        value: function onAddExpenses() {
          var _this9 = this;

          debugger;

          if (this.addexpensesForm.valid) {
            this.submitted = true;
            console.log(this.addexpensesForm.valid);
            this.addexpensesarray = JSON.parse(JSON.stringify(this.addexpensesForm.getRawValue()));
            console.log(this.addexpensesarray, "Product Form");
            this.loaderservice.show();
            setTimeout(function () {
              _this9.loaderservice.hide();
            }, 5000); // this.postmodal.SaveData.tbladdproduct.push(this.addproductarray)
            // console.log(this.postmodal);
            // alert("Data saved in an Array")
            // // Calling API
            // this.loaderserice.show();
            // this.service.postLogin(this.user).subscribe(response => {
            //   let result: any = response;
            //   console.log(result);
            // var loadProductData:postDataInterface ={
            //   "Mode": 0,
            //   "CurdType":CurdType.create,
            //   "SaveData":{
            //     "tbladdproduct":[addproductarray]
            //   }
            // }
          } else {
            this.submitted = true;
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addexpensesForm.value));
          } //

        }
      }, {
        key: "openExpenseCategory",
        value: function openExpenseCategory() {
          alert('Open Dialog Here');
        }
      }, {
        key: "f",
        get: function get() {
          return this.addexpensesForm.controls;
        }
      }]);

      return AddExpenseTypeComponent;
    }();

    AddExpenseTypeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _add_expense_type_service__WEBPACK_IMPORTED_MODULE_5__["AddExpenseTypeService"]
      }, {
        type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]
      }, {
        type: src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
      }];
    };

    AddExpenseTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-expense-type',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-expense-type.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-expense-type.component.css */
      "./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.css")).default]
    })], AddExpenseTypeComponent);
    /***/
  },

  /***/
  "./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.service.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.service.ts ***!
    \*************************************************************************************/

  /*! exports provided: AddExpenseTypeService */

  /***/
  function srcAppProjectOfficeExpensesAddExpenseTypeAddExpenseTypeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddExpenseTypeService", function () {
      return AddExpenseTypeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddExpenseTypeService = function AddExpenseTypeService() {
      _classCallCheck(this, AddExpenseTypeService);
    };

    AddExpenseTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AddExpenseTypeService);
    /***/
  },

  /***/
  "./src/app/Project/OfficeExpenses/expenses-report/expenses-report.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/Project/OfficeExpenses/expenses-report/expenses-report.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectOfficeExpensesExpensesReportExpensesReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvT2ZmaWNlRXhwZW5zZXMvZXhwZW5zZXMtcmVwb3J0L2V4cGVuc2VzLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Project/OfficeExpenses/expenses-report/expenses-report.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/Project/OfficeExpenses/expenses-report/expenses-report.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ExpensesReportComponent */

  /***/
  function srcAppProjectOfficeExpensesExpensesReportExpensesReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpensesReportComponent", function () {
      return ExpensesReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExpensesReportComponent =
    /*#__PURE__*/
    function () {
      function ExpensesReportComponent() {
        _classCallCheck(this, ExpensesReportComponent);
      }

      _createClass(ExpensesReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExpensesReportComponent;
    }();

    ExpensesReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expenses-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expenses-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/OfficeExpenses/expenses-report/expenses-report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expenses-report.component.css */
      "./src/app/Project/OfficeExpenses/expenses-report/expenses-report.component.css")).default]
    })], ExpensesReportComponent);
    /***/
  },

  /***/
  "./src/app/Project/OfficeExpenses/office-expenses-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Project/OfficeExpenses/office-expenses-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: OfficeExpensesRoutingModule */

  /***/
  function srcAppProjectOfficeExpensesOfficeExpensesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfficeExpensesRoutingModule", function () {
      return OfficeExpensesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_expense_type_add_expense_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-expense-type/add-expense-type.component */
    "./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.ts");

    var routes = [{
      path: 'expensestype',
      component: _add_expense_type_add_expense_type_component__WEBPACK_IMPORTED_MODULE_3__["AddExpenseTypeComponent"]
    }];

    var OfficeExpensesRoutingModule = function OfficeExpensesRoutingModule() {
      _classCallCheck(this, OfficeExpensesRoutingModule);
    };

    OfficeExpensesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OfficeExpensesRoutingModule);
    /***/
  },

  /***/
  "./src/app/Project/OfficeExpenses/office-expenses.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Project/OfficeExpenses/office-expenses.module.ts ***!
    \******************************************************************/

  /*! exports provided: OfficeExpensesModule */

  /***/
  function srcAppProjectOfficeExpensesOfficeExpensesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfficeExpensesModule", function () {
      return OfficeExpensesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _office_expenses_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./office-expenses-routing.module */
    "./src/app/Project/OfficeExpenses/office-expenses-routing.module.ts");
    /* harmony import */


    var _add_expense_type_add_expense_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-expense-type/add-expense-type.component */
    "./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.ts");
    /* harmony import */


    var _expenses_report_expenses_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./expenses-report/expenses-report.component */
    "./src/app/Project/OfficeExpenses/expenses-report/expenses-report.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/dialog/dialog.service */
    "./src/app/dialog/dialog.service.ts"); //import { BsDatepickerModule } from 'ngx-bootstrap/datepicker/public_api';


    var OfficeExpensesModule = function OfficeExpensesModule() {
      _classCallCheck(this, OfficeExpensesModule);
    };

    OfficeExpensesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_expense_type_add_expense_type_component__WEBPACK_IMPORTED_MODULE_4__["AddExpenseTypeComponent"], _expenses_report_expenses_report_component__WEBPACK_IMPORTED_MODULE_5__["ExpensesReportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _office_expenses_routing_module__WEBPACK_IMPORTED_MODULE_3__["OfficeExpensesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      providers: [src_app_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]]
    })], OfficeExpensesModule);
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/allproductdetails/allproductdetails.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/allproductdetails/allproductdetails.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectProductDetailsAllproductdetailsAllproductdetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvUHJvZHVjdERldGFpbHMvYWxscHJvZHVjdGRldGFpbHMvYWxscHJvZHVjdGRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/allproductdetails/allproductdetails.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/allproductdetails/allproductdetails.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: AllproductdetailsComponent */

  /***/
  function srcAppProjectProductDetailsAllproductdetailsAllproductdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllproductdetailsComponent", function () {
      return AllproductdetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AllproductdetailsComponent =
    /*#__PURE__*/
    function () {
      function AllproductdetailsComponent() {
        _classCallCheck(this, AllproductdetailsComponent);
      }

      _createClass(AllproductdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AllproductdetailsComponent;
    }();

    AllproductdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-allproductdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./allproductdetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/allproductdetails/allproductdetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./allproductdetails.component.css */
      "./src/app/Project/ProductDetails/allproductdetails/allproductdetails.component.css")).default]
    })], AllproductdetailsComponent);
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/expired-products/expired-products.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/expired-products/expired-products.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectProductDetailsExpiredProductsExpiredProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvUHJvZHVjdERldGFpbHMvZXhwaXJlZC1wcm9kdWN0cy9leHBpcmVkLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/expired-products/expired-products.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/expired-products/expired-products.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ExpiredProductsComponent */

  /***/
  function srcAppProjectProductDetailsExpiredProductsExpiredProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpiredProductsComponent", function () {
      return ExpiredProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExpiredProductsComponent =
    /*#__PURE__*/
    function () {
      function ExpiredProductsComponent() {
        _classCallCheck(this, ExpiredProductsComponent);
      }

      _createClass(ExpiredProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExpiredProductsComponent;
    }();

    ExpiredProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expired-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expired-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/expired-products/expired-products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expired-products.component.css */
      "./src/app/Project/ProductDetails/expired-products/expired-products.component.css")).default]
    })], ExpiredProductsComponent);
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/manageproduct/manageproduct.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/manageproduct/manageproduct.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectProductDetailsManageproductManageproductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".theme-green .bs-datepicker-head {\r\n    background-color: #17a2b8 !important;\r\n}\r\nbody {\r\n    font-family: 'Varela Round', sans-serif;\r\n}\r\n.modal-confirm {\t\t\r\n    color: #636363;\r\n    width: 400px;\r\n}\r\n.modal-confirm .modal-content {\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    text-align: center;\r\n    font-size: 14px;\r\n}\r\n.modal-confirm .modal-header {\r\n    border-bottom: none;   \r\n    position: relative;\r\n}\r\n.modal-confirm h4 {\r\n    text-align: center;\r\n    font-size: 26px;\r\n    margin: 30px 0 -10px;\r\n}\r\n.modal-confirm .close {\r\n    position: absolute;\r\n    top: -5px;\r\n    right: -2px;\r\n}\r\n.modal-confirm .modal-body {\r\n    color: #999;\r\n}\r\n.modal-confirm .modal-footer {\r\n    border: none;\r\n    text-align: center;\t\t\r\n    border-radius: 5px;\r\n    font-size: 13px;\r\n    padding: 10px 15px 25px;\r\n}\r\n.modal-confirm .modal-footer a {\r\n    color: #999;\r\n}\r\n.modal-confirm .icon-box {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin: 0 auto;\r\n    border-radius: 50%;\r\n    z-index: 9;\r\n    text-align: center;\r\n    border: 3px solid #f15e5e;\r\n}\r\n.modal-confirm .icon-box i {\r\n    color: #f15e5e;\r\n    font-size: 46px;\r\n    display: inline-block;\r\n    margin-top: 13px;\r\n}\r\n.modal-confirm .btn {\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    background: #60c7c1;\r\n    text-decoration: none;\r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n    line-height: normal;\r\n    min-width: 120px;\r\n    border: none;\r\n    min-height: 40px;\r\n    border-radius: 3px;\r\n    margin: 0 5px;\r\n    outline: none !important;\r\n}\r\n.modal-confirm .btn-info {\r\n    background: #c1c1c1;\r\n}\r\n.modal-confirm .btn-info:hover, .modal-confirm .btn-info:focus {\r\n    background: #a8a8a8;\r\n}\r\n.modal-confirm .btn-danger {\r\n    background: #f15e5e;\r\n}\r\n.modal-confirm .btn-danger:hover, .modal-confirm .btn-danger:focus {\r\n    background: #ee3535;\r\n}\r\n.trigger-btn {\r\n    display: inline-block;\r\n    margin: 100px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvamVjdC9Qcm9kdWN0RGV0YWlscy9tYW5hZ2Vwcm9kdWN0L21hbmFnZXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvUHJvZHVjdERldGFpbHMvbWFuYWdlcHJvZHVjdC9tYW5hZ2Vwcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWUtZ3JlZW4gLmJzLWRhdGVwaWNrZXItaGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm1vZGFsLWNvbmZpcm0ge1x0XHRcclxuICAgIGNvbG9yOiAjNjM2MzYzO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcbi5tb2RhbC1jb25maXJtIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm1vZGFsLWNvbmZpcm0gLm1vZGFsLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAgIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tb2RhbC1jb25maXJtIGg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIG1hcmdpbjogMzBweCAwIC0xMHB4O1xyXG59XHJcbi5tb2RhbC1jb25maXJtIC5jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICByaWdodDogLTJweDtcclxufVxyXG4ubW9kYWwtY29uZmlybSAubW9kYWwtYm9keSB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG4ubW9kYWwtY29uZmlybSAubW9kYWwtZm9vdGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcdFx0XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMjVweDtcclxufVxyXG4ubW9kYWwtY29uZmlybSAubW9kYWwtZm9vdGVyIGEge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbn1cdFx0XHJcbi5tb2RhbC1jb25maXJtIC5pY29uLWJveCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMTVlNWU7XHJcbn1cclxuLm1vZGFsLWNvbmZpcm0gLmljb24tYm94IGkge1xyXG4gICAgY29sb3I6ICNmMTVlNWU7XHJcbiAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG59XHJcbi5tb2RhbC1jb25maXJtIC5idG4ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjBjN2MxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1jb25maXJtIC5idG4taW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzFjMWMxO1xyXG59XHJcbi5tb2RhbC1jb25maXJtIC5idG4taW5mbzpob3ZlciwgLm1vZGFsLWNvbmZpcm0gLmJ0bi1pbmZvOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICNhOGE4YTg7XHJcbn1cclxuLm1vZGFsLWNvbmZpcm0gLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YxNWU1ZTtcclxufVxyXG4ubW9kYWwtY29uZmlybSAuYnRuLWRhbmdlcjpob3ZlciwgLm1vZGFsLWNvbmZpcm0gLmJ0bi1kYW5nZXI6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogI2VlMzUzNTtcclxufVxyXG4udHJpZ2dlci1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/manageproduct/manageproduct.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/manageproduct/manageproduct.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ManageproductComponent */

  /***/
  function srcAppProjectProductDetailsManageproductManageproductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageproductComponent", function () {
      return ManageproductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ManageproductComponent =
    /*#__PURE__*/
    function () {
      function ManageproductComponent(router, formBuilder) {
        _classCallCheck(this, ManageproductComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
      }

      _createClass(ManageproductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.manageproductForm = this.formBuilder.group({
            fromdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            todate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          this.submitted = true;

          if (this.manageproductForm.valid) {
            return;
          } else {
            this.submitted = true;
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.manageproductForm.value));
          }
        }
      }, {
        key: "viewmoredetails",
        value: function viewmoredetails() {
          debugger;
          alert('Single Product Details');
          this.router.navigate(['/moredetails']);
        }
      }, {
        key: "allproductdetails",
        value: function allproductdetails() {
          debugger;
          alert('All Products Here');
          this.router.navigate(['/allproductdetails']);
        }
      }, {
        key: "f",
        get: function get() {
          return this.manageproductForm.controls;
        }
      }]);

      return ManageproductComponent;
    }();

    ManageproductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ManageproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manageproduct',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manageproduct.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/manageproduct/manageproduct.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manageproduct.component.css */
      "./src/app/Project/ProductDetails/manageproduct/manageproduct.component.css")).default]
    })], ManageproductComponent);
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/moredetails/moredetails.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/moredetails/moredetails.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectProductDetailsMoredetailsMoredetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvUHJvZHVjdERldGFpbHMvbW9yZWRldGFpbHMvbW9yZWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/moredetails/moredetails.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/moredetails/moredetails.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MoredetailsComponent */

  /***/
  function srcAppProjectProductDetailsMoredetailsMoredetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoredetailsComponent", function () {
      return MoredetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MoredetailsComponent =
    /*#__PURE__*/
    function () {
      function MoredetailsComponent() {
        _classCallCheck(this, MoredetailsComponent);
      }

      _createClass(MoredetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoredetailsComponent;
    }();

    MoredetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-moredetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./moredetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/moredetails/moredetails.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./moredetails.component.css */
      "./src/app/Project/ProductDetails/moredetails/moredetails.component.css")).default]
    })], MoredetailsComponent);
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/product-details-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/product-details-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ProductDetailsRoutingModule */

  /***/
  function srcAppProjectProductDetailsProductDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsRoutingModule", function () {
      return ProductDetailsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var ProductDetailsRoutingModule = function ProductDetailsRoutingModule() {
      _classCallCheck(this, ProductDetailsRoutingModule);
    };

    ProductDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductDetailsRoutingModule);
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/product-details.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Project/ProductDetails/product-details.module.ts ***!
    \******************************************************************/

  /*! exports provided: ProductDetailsModule */

  /***/
  function srcAppProjectProductDetailsProductDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsModule", function () {
      return ProductDetailsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-details-routing.module */
    "./src/app/Project/ProductDetails/product-details-routing.module.ts");
    /* harmony import */


    var _expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./expired-products/expired-products.component */
    "./src/app/Project/ProductDetails/expired-products/expired-products.component.ts");
    /* harmony import */


    var _return_expired_return_expired_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./return-expired/return-expired.component */
    "./src/app/Project/ProductDetails/return-expired/return-expired.component.ts");
    /* harmony import */


    var _product_reports_product_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-reports/product-reports.component */
    "./src/app/Project/ProductDetails/product-reports/product-reports.component.ts");
    /* harmony import */


    var _manageproduct_manageproduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./manageproduct/manageproduct.component */
    "./src/app/Project/ProductDetails/manageproduct/manageproduct.component.ts");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _moredetails_moredetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./moredetails/moredetails.component */
    "./src/app/Project/ProductDetails/moredetails/moredetails.component.ts");
    /* harmony import */


    var _allproductdetails_allproductdetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./allproductdetails/allproductdetails.component */
    "./src/app/Project/ProductDetails/allproductdetails/allproductdetails.component.ts");

    var ProductDetailsModule = function ProductDetailsModule() {
      _classCallCheck(this, ProductDetailsModule);
    };

    ProductDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_4__["ExpiredProductsComponent"], _return_expired_return_expired_component__WEBPACK_IMPORTED_MODULE_5__["ReturnExpiredComponent"], _product_reports_product_reports_component__WEBPACK_IMPORTED_MODULE_6__["ProductReportsComponent"], _manageproduct_manageproduct_component__WEBPACK_IMPORTED_MODULE_7__["ManageproductComponent"], _moredetails_moredetails_component__WEBPACK_IMPORTED_MODULE_10__["MoredetailsComponent"], _allproductdetails_allproductdetails_component__WEBPACK_IMPORTED_MODULE_11__["AllproductdetailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _product_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot()]
    })], ProductDetailsModule);
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/product-reports/product-reports.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/product-reports/product-reports.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectProductDetailsProductReportsProductReportsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvUHJvZHVjdERldGFpbHMvcHJvZHVjdC1yZXBvcnRzL3Byb2R1Y3QtcmVwb3J0cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/product-reports/product-reports.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/product-reports/product-reports.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProductReportsComponent */

  /***/
  function srcAppProjectProductDetailsProductReportsProductReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductReportsComponent", function () {
      return ProductReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductReportsComponent =
    /*#__PURE__*/
    function () {
      function ProductReportsComponent() {
        _classCallCheck(this, ProductReportsComponent);
      }

      _createClass(ProductReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductReportsComponent;
    }();

    ProductReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-reports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/product-reports/product-reports.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-reports.component.css */
      "./src/app/Project/ProductDetails/product-reports/product-reports.component.css")).default]
    })], ProductReportsComponent);
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/return-expired/return-expired.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/return-expired/return-expired.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectProductDetailsReturnExpiredReturnExpiredComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvUHJvZHVjdERldGFpbHMvcmV0dXJuLWV4cGlyZWQvcmV0dXJuLWV4cGlyZWQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Project/ProductDetails/return-expired/return-expired.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/Project/ProductDetails/return-expired/return-expired.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ReturnExpiredComponent */

  /***/
  function srcAppProjectProductDetailsReturnExpiredReturnExpiredComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReturnExpiredComponent", function () {
      return ReturnExpiredComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReturnExpiredComponent =
    /*#__PURE__*/
    function () {
      function ReturnExpiredComponent() {
        _classCallCheck(this, ReturnExpiredComponent);
      }

      _createClass(ReturnExpiredComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReturnExpiredComponent;
    }();

    ReturnExpiredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-return-expired',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./return-expired.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/ProductDetails/return-expired/return-expired.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./return-expired.component.css */
      "./src/app/Project/ProductDetails/return-expired/return-expired.component.css")).default]
    })], ReturnExpiredComponent);
    /***/
  },

  /***/
  "./src/app/Project/SalesPayment/add-bill/add-bill.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/Project/SalesPayment/add-bill/add-bill.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectSalesPaymentAddBillAddBillComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvU2FsZXNQYXltZW50L2FkZC1iaWxsL2FkZC1iaWxsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Project/SalesPayment/add-bill/add-bill.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Project/SalesPayment/add-bill/add-bill.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AddBillComponent */

  /***/
  function srcAppProjectSalesPaymentAddBillAddBillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBillComponent", function () {
      return AddBillComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AddBillComponent =
    /*#__PURE__*/
    function () {
      function AddBillComponent() {
        _classCallCheck(this, AddBillComponent);

        this.options = [{
          id: 1,
          label: 'One'
        }, {
          id: 2,
          label: 'Two'
        }, {
          id: 3,
          label: 'Three'
        }];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
      }

      _createClass(AddBillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddBillComponent;
    }();

    AddBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-bill',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-bill.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/SalesPayment/add-bill/add-bill.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-bill.component.css */
      "./src/app/Project/SalesPayment/add-bill/add-bill.component.css")).default]
    })], AddBillComponent);
    /***/
  },

  /***/
  "./src/app/Project/SalesPayment/return-items/return-items.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/Project/SalesPayment/return-items/return-items.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectSalesPaymentReturnItemsReturnItemsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvU2FsZXNQYXltZW50L3JldHVybi1pdGVtcy9yZXR1cm4taXRlbXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Project/SalesPayment/return-items/return-items.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Project/SalesPayment/return-items/return-items.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ReturnItemsComponent */

  /***/
  function srcAppProjectSalesPaymentReturnItemsReturnItemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReturnItemsComponent", function () {
      return ReturnItemsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReturnItemsComponent =
    /*#__PURE__*/
    function () {
      function ReturnItemsComponent() {
        _classCallCheck(this, ReturnItemsComponent);
      }

      _createClass(ReturnItemsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReturnItemsComponent;
    }();

    ReturnItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-return-items',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./return-items.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/SalesPayment/return-items/return-items.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./return-items.component.css */
      "./src/app/Project/SalesPayment/return-items/return-items.component.css")).default]
    })], ReturnItemsComponent);
    /***/
  },

  /***/
  "./src/app/Project/SalesPayment/sales-payment-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Project/SalesPayment/sales-payment-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: SalesPaymentRoutingModule */

  /***/
  function srcAppProjectSalesPaymentSalesPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesPaymentRoutingModule", function () {
      return SalesPaymentRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var SalesPaymentRoutingModule = function SalesPaymentRoutingModule() {
      _classCallCheck(this, SalesPaymentRoutingModule);
    };

    SalesPaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SalesPaymentRoutingModule);
    /***/
  },

  /***/
  "./src/app/Project/SalesPayment/sales-payment.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Project/SalesPayment/sales-payment.module.ts ***!
    \**************************************************************/

  /*! exports provided: SalesPaymentModule */

  /***/
  function srcAppProjectSalesPaymentSalesPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesPaymentModule", function () {
      return SalesPaymentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _sales_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sales-payment-routing.module */
    "./src/app/Project/SalesPayment/sales-payment-routing.module.ts");
    /* harmony import */


    var _add_bill_add_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-bill/add-bill.component */
    "./src/app/Project/SalesPayment/add-bill/add-bill.component.ts");
    /* harmony import */


    var _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sales-report/sales-report.component */
    "./src/app/Project/SalesPayment/sales-report/sales-report.component.ts");
    /* harmony import */


    var _return_items_return_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./return-items/return-items.component */
    "./src/app/Project/SalesPayment/return-items/return-items.component.ts");

    var SalesPaymentModule = function SalesPaymentModule() {
      _classCallCheck(this, SalesPaymentModule);
    };

    SalesPaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_bill_add_bill_component__WEBPACK_IMPORTED_MODULE_4__["AddBillComponent"], _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_5__["SalesReportComponent"], _return_items_return_items_component__WEBPACK_IMPORTED_MODULE_6__["ReturnItemsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sales_payment_routing_module__WEBPACK_IMPORTED_MODULE_3__["SalesPaymentRoutingModule"]]
    })], SalesPaymentModule);
    /***/
  },

  /***/
  "./src/app/Project/SalesPayment/sales-report/sales-report.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/Project/SalesPayment/sales-report/sales-report.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectSalesPaymentSalesReportSalesReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1Byb2plY3QvU2FsZXNQYXltZW50L3NhbGVzLXJlcG9ydC9zYWxlcy1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Project/SalesPayment/sales-report/sales-report.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Project/SalesPayment/sales-report/sales-report.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SalesReportComponent */

  /***/
  function srcAppProjectSalesPaymentSalesReportSalesReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesReportComponent", function () {
      return SalesReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SalesReportComponent =
    /*#__PURE__*/
    function () {
      function SalesReportComponent() {
        _classCallCheck(this, SalesReportComponent);
      }

      _createClass(SalesReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SalesReportComponent;
    }();

    SalesReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sales-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sales-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Project/SalesPayment/sales-report/sales-report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sales-report.component.css */
      "./src/app/Project/SalesPayment/sales-report/sales-report.component.css")).default]
    })], SalesReportComponent);
    /***/
  },

  /***/
  "./src/app/Project/material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/Project/material.module.ts ***!
    \********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppProjectMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    })], MaterialModule);
    /**  Copyright 2019 Google LLC. All Rights Reserved.
        Use of this source code is governed by an MIT-style license that
        can be found in the LICENSE file at http://angular.io/license */

    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _Project_IGMC_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Project/IGMC/add-product/add-product.component */
    "./src/app/Project/IGMC/add-product/add-product.component.ts");
    /* harmony import */


    var _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layout/layout/layout.component */
    "./src/app/layout/layout/layout.component.ts");
    /* harmony import */


    var _Project_IGMC_add_brand_add_brand_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Project/IGMC/add-brand/add-brand.component */
    "./src/app/Project/IGMC/add-brand/add-brand.component.ts");
    /* harmony import */


    var _Project_IGMC_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Project/IGMC/add-category/add-category.component */
    "./src/app/Project/IGMC/add-category/add-category.component.ts");
    /* harmony import */


    var _Project_IGMC_add_dealer_add_dealer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Project/IGMC/add-dealer/add-dealer.component */
    "./src/app/Project/IGMC/add-dealer/add-dealer.component.ts");
    /* harmony import */


    var _Project_IGMC_add_hsn_add_hsn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Project/IGMC/add-hsn/add-hsn.component */
    "./src/app/Project/IGMC/add-hsn/add-hsn.component.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");
    /* harmony import */


    var _Project_Accounts_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Project/Accounts/create-account/create-account.component */
    "./src/app/Project/Accounts/create-account/create-account.component.ts");
    /* harmony import */


    var _Project_Accounts_manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Project/Accounts/manage-account/manage-account.component */
    "./src/app/Project/Accounts/manage-account/manage-account.component.ts");
    /* harmony import */


    var _Project_ProductDetails_manageproduct_manageproduct_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Project/ProductDetails/manageproduct/manageproduct.component */
    "./src/app/Project/ProductDetails/manageproduct/manageproduct.component.ts");
    /* harmony import */


    var _Project_ProductDetails_moredetails_moredetails_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Project/ProductDetails/moredetails/moredetails.component */
    "./src/app/Project/ProductDetails/moredetails/moredetails.component.ts");
    /* harmony import */


    var _Project_ProductDetails_expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Project/ProductDetails/expired-products/expired-products.component */
    "./src/app/Project/ProductDetails/expired-products/expired-products.component.ts");
    /* harmony import */


    var _Project_OfficeExpenses_add_expense_type_add_expense_type_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./Project/OfficeExpenses/add-expense-type/add-expense-type.component */
    "./src/app/Project/OfficeExpenses/add-expense-type/add-expense-type.component.ts");
    /* harmony import */


    var _Project_ProductDetails_allproductdetails_allproductdetails_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Project/ProductDetails/allproductdetails/allproductdetails.component */
    "./src/app/Project/ProductDetails/allproductdetails/allproductdetails.component.ts");
    /* harmony import */


    var _Project_SalesPayment_add_bill_add_bill_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./Project/SalesPayment/add-bill/add-bill.component */
    "./src/app/Project/SalesPayment/add-bill/add-bill.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'layout',
      component: _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
      canActivateChild: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]],
      children: [{
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
      }, {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_20__["UsersComponent"]
      }, {
        path: 'addproduct',
        component: _Project_IGMC_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"]
      }, {
        path: 'addbrand',
        component: _Project_IGMC_add_brand_add_brand_component__WEBPACK_IMPORTED_MODULE_7__["AddBrandComponent"]
      }, {
        path: 'addUser',
        component: _Project_IGMC_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_8__["AddCategoryComponent"]
      }, {
        path: 'adddealer',
        component: _Project_IGMC_add_dealer_add_dealer_component__WEBPACK_IMPORTED_MODULE_9__["AddDealerComponent"]
      }, {
        path: 'addhsn',
        component: _Project_IGMC_add_hsn_add_hsn_component__WEBPACK_IMPORTED_MODULE_10__["AddHSNComponent"]
      }, {
        path: 'createaccount',
        component: _Project_Accounts_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_12__["CreateAccountComponent"]
      }, {
        path: 'manageaccount',
        component: _Project_Accounts_manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_13__["ManageAccountComponent"]
      }, {
        path: 'manageproduct',
        component: _Project_ProductDetails_manageproduct_manageproduct_component__WEBPACK_IMPORTED_MODULE_14__["ManageproductComponent"]
      }, {
        path: 'moredetails',
        component: _Project_ProductDetails_moredetails_moredetails_component__WEBPACK_IMPORTED_MODULE_15__["MoredetailsComponent"]
      }, {
        path: 'expiredproducts',
        component: _Project_ProductDetails_expired_products_expired_products_component__WEBPACK_IMPORTED_MODULE_16__["ExpiredProductsComponent"]
      }, {
        path: 'addexpenses',
        component: _Project_OfficeExpenses_add_expense_type_add_expense_type_component__WEBPACK_IMPORTED_MODULE_17__["AddExpenseTypeComponent"]
      }, {
        path: 'allproductdetails',
        component: _Project_ProductDetails_allproductdetails_allproductdetails_component__WEBPACK_IMPORTED_MODULE_18__["AllproductdetailsComponent"]
      }, {
        path: 'addbill',
        component: _Project_SalesPayment_add_bill_add_bill_component__WEBPACK_IMPORTED_MODULE_19__["AddBillComponent"]
      }]
    }, {
      path: 'igmc',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./Project/IGMC/igmc.module */
        "./src/app/Project/IGMC/igmc.module.ts")).then(function (mod) {
          return mod.IGMCModule;
        });
      }
    }, {
      path: 'layout',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./layout/layout.module */
        "./src/app/layout/layout.module.ts")).then(function (mod) {
          return mod.LayoutModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      // declarations: [MoredetailsComponent],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'IGMC';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _Project_ProductDetails_product_details_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Project/ProductDetails/product-details.module */
    "./src/app/Project/ProductDetails/product-details.module.ts");
    /* harmony import */


    var _Project_SalesPayment_sales_payment_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Project/SalesPayment/sales-payment.module */
    "./src/app/Project/SalesPayment/sales-payment.module.ts");
    /* harmony import */


    var _Project_IGMC_igmc_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Project/IGMC/igmc.module */
    "./src/app/Project/IGMC/igmc.module.ts");
    /* harmony import */


    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layout/layout.module */
    "./src/app/layout/layout.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _CommonSevices_module_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./CommonSevices/module.service */
    "./src/app/CommonSevices/module.service.ts");
    /* harmony import */


    var _Project_Accounts_accounts_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Project/Accounts/accounts.module */
    "./src/app/Project/Accounts/accounts.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./loader/loader.component */
    "./src/app/loader/loader.component.ts");
    /* harmony import */


    var _Project_OfficeExpenses_office_expenses_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Project/OfficeExpenses/office-expenses.module */
    "./src/app/Project/OfficeExpenses/office-expenses.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _Project_ProductDetails_product_details_module__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsModule"], _Project_SalesPayment_sales_payment_module__WEBPACK_IMPORTED_MODULE_7__["SalesPaymentModule"], _Project_IGMC_igmc_module__WEBPACK_IMPORTED_MODULE_8__["IGMCModule"], _Project_Accounts_accounts_module__WEBPACK_IMPORTED_MODULE_15__["AccountsModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _Project_OfficeExpenses_office_expenses_module__WEBPACK_IMPORTED_MODULE_18__["OfficeExpensesModule"], //MatInputModule,
      //MaterialModule,
      _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"]],
      exports: [],
      providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"], _CommonSevices_module_service__WEBPACK_IMPORTED_MODULE_14__["ModuleService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-guard.service.ts":
  /*!***************************************!*\
    !*** ./src/app/auth-guard.service.ts ***!
    \***************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(router) {
        _classCallCheck(this, AuthGuardService);

        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          return true;
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild() {
          console.log(localStorage.getItem('isLoggedin'), "IsLogged");

          if (localStorage.getItem('isLoggedin')) {
            return true;
          } else {
            // this.router.navigate['/']
            return true;
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dialog/dialog.component.css":
  /*!*********************************************!*\
    !*** ./src/app/dialog/dialog.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDialogDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dialog/dialog.component.ts":
  /*!********************************************!*\
    !*** ./src/app/dialog/dialog.component.ts ***!
    \********************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var DialogComponent =
    /*#__PURE__*/
    function () {
      function DialogComponent(activeModal) {
        _classCallCheck(this, DialogComponent);

        this.activeModal = activeModal;
      }

      _createClass(DialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "decline",
        value: function decline() {
          this.activeModal.close(false);
        }
      }, {
        key: "accept",
        value: function accept() {
          this.activeModal.close(true);
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DialogComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DialogComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DialogComponent.prototype, "btnOkText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DialogComponent.prototype, "btnCancelText", void 0);
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog.component.css */
      "./src/app/dialog/dialog.component.css")).default]
    })], DialogComponent);
    /***/
  },

  /***/
  "./src/app/dialog/dialog.service.ts":
  /*!******************************************!*\
    !*** ./src/app/dialog/dialog.service.ts ***!
    \******************************************/

  /*! exports provided: DialogService */

  /***/
  function srcAppDialogDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogService", function () {
      return DialogService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dialog.component */
    "./src/app/dialog/dialog.component.ts"); //import { Observable } from 'rxjs/Observable';


    var DialogService =
    /*#__PURE__*/
    function () {
      function DialogService(modalService) {
        _classCallCheck(this, DialogService);

        this.modalService = modalService;
      }

      _createClass(DialogService, [{
        key: "confirm",
        value: function confirm(title, message) {
          var btnOkText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Yes';
          var btnCancelText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'No';
          var dialogSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'sm';
          var modalRef = this.modalService.open(_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
            size: dialogSize
          });
          modalRef.componentInstance.title = title;
          modalRef.componentInstance.message = message;
          modalRef.componentInstance.btnOkText = btnOkText;
          modalRef.componentInstance.btnCancelText = btnCancelText;
          return modalRef.result;
        }
      }]);

      return DialogService;
    }();

    DialogService.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DialogService);
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.css":
  /*!****************************************************!*\
    !*** ./src/app/layout/footer/footer.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/layout/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/layout/header/header.component.css":
  /*!****************************************************!*\
    !*** ./src/app/layout/header/header.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/layout/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/layout/layout-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/layout-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: LayoutRoutingModule */

  /***/
  function srcAppLayoutLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
      return LayoutRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout/layout.component.ts");
    /* harmony import */


    var _Masters_category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Masters/category/category.component */
    "./src/app/Masters/category/category.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../users/users.component */
    "./src/app/users/users.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'mainpage',
      pathMatch: 'full'
    }, {
      path: 'mainpage',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]
    }, {
      path: 'addcategory',
      component: _Masters_category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"]
    }, {
      path: 'addcategory',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]
    }];

    var LayoutRoutingModule = function LayoutRoutingModule() {
      _classCallCheck(this, LayoutRoutingModule);
    };

    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LayoutRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/layout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/layout/layout.module.ts ***!
    \*****************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout-routing.module */
    "./src/app/layout/layout-routing.module.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout/layout.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/layout/sidebar/sidebar.component.ts");
    /* harmony import */


    var _Masters_category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../Masters/category/category.component */
    "./src/app/Masters/category/category.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../users/users.component */
    "./src/app/users/users.component.ts"); // import { ErrorComponent } from '../error/error.component';
    // import { AddProductComponent } from '../Project/IGMC/add-product/add-product.component';
    // import { AddBrandComponent } from '../Project/IGMC/add-brand/add-brand.component';
    // import { AddHSNComponent } from '../Project/IGMC/add-hsn/add-hsn.component';
    // import { AddCategoryComponent } from '../Project/IGMC/add-category/add-category.component';
    // import { AddDealerComponent } from '../Project/IGMC/add-dealer/add-dealer.component';


    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _Masters_category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"]],
      exports: []
    })], LayoutModule);
    /***/
  },

  /***/
  "./src/app/layout/layout/layout.component.css":
  /*!****************************************************!*\
    !*** ./src/app/layout/layout/layout.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLayoutLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/layout/layout.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/layout/layout.component.ts ***!
    \***************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/loader.service */
    "./src/app/loader.service.ts");

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent(route, loaderservice, router) {
        _classCallCheck(this, LayoutComponent);

        this.route = route;
        this.loaderservice = loaderservice;
        this.router = router;
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loggedUser = this.route.snapshot.queryParamMap.get('user');
          console.log(this.loggedUser, "user");
        }
      }, {
        key: "navigate",
        value: function navigate() {
          this.router.navigate(['layout/users']);
        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout/layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout.component.css */
      "./src/app/layout/layout/layout.component.css")).default]
    })], LayoutComponent);
    /***/
  },

  /***/
  "./src/app/layout/sidebar/sidebar.component.css":
  /*!******************************************************!*\
    !*** ./src/app/layout/sidebar/sidebar.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppLayoutSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_CommonSevices_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/CommonSevices/module.service */
    "./src/app/CommonSevices/module.service.ts");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(router, route, service) {
        _classCallCheck(this, SidebarComponent);

        this.router = router;
        this.route = route;
        this.service = service;
        this.selectTedRoute = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.routeUrl = "layout/";
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userObject = this.route.snapshot.queryParamMap.get("user");
          console.log(this.userObject);
          this.modules = this.service.loadModules();
        }
      }, {
        key: "currentRoute",
        value: function currentRoute(Selectedroute) {
          this.routeUrl = "layout/";
          this.routeUrl = this.routeUrl + Selectedroute;
          console.log(Selectedroute);
          this.router.navigate([this.routeUrl]);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_CommonSevices_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SidebarComponent.prototype, "selectTedRoute", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidebarComponent.prototype, "loggedUser", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/layout/sidebar/sidebar.component.css")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/loader.service.ts":
  /*!***********************************!*\
    !*** ./src/app/loader.service.ts ***!
    \***********************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoaderService =
    /*#__PURE__*/
    function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
      }

      _createClass(LoaderService, [{
        key: "show",
        value: function show() {
          this.loaderSubject.next({
            show: true
          });
        }
      }, {
        key: "hide",
        value: function hide() {
          this.loaderSubject.next({
            show: false
          });
        }
      }]);

      return LoaderService;
    }();

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoaderService);
    /***/
  },

  /***/
  "./src/app/loader/loader.component.css":
  /*!*********************************************!*\
    !*** ./src/app/loader/loader.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoaderLoaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hidden {\r\n    visibility: hidden;\r\n  }\r\n  .loader-overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    z-index: 500000;\r\n    top: 0;\r\n  }\r\n  .loader {\r\n    height: 4px;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    background-color: #FFF;\r\n  \r\n  }\r\n  .loader:before {\r\n    display: block;\r\n    position: absolute;\r\n    content: \"\";\r\n    left: -200px;\r\n    width: 200px;\r\n    height: 4px;\r\n    background-color: blueviolet;\r\n    -webkit-animation: loading 2s linear infinite;\r\n            animation: loading 2s linear infinite;\r\n  }\r\n  @-webkit-keyframes loading {\r\n    from {left: -200px; width: 30%;}\r\n    50% {width: 30%;}\r\n    70% {width: 70%;}\r\n    80% {left: 50%;}\r\n    95% {left: 120%;}\r\n    to {left: 200%;}\r\n  }\r\n  @keyframes loading {\r\n    from {left: -200px; width: 30%;}\r\n    50% {width: 30%;}\r\n    70% {width: 70%;}\r\n    80% {left: 50%;}\r\n    95% {left: 120%;}\r\n    to {left: 200%;}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixNQUFNO0VBQ1I7RUFDQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7O0VBRXhCO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsNkNBQXFDO1lBQXJDLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UsTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLEtBQUssVUFBVSxDQUFDO0lBQ2hCLEtBQUssVUFBVSxDQUFDO0lBQ2hCLEtBQUssU0FBUyxDQUFDO0lBQ2YsS0FBSyxVQUFVLENBQUM7SUFDaEIsSUFBSSxVQUFVLENBQUM7RUFDakI7RUFQQTtJQUNFLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixLQUFLLFVBQVUsQ0FBQztJQUNoQixLQUFLLFVBQVUsQ0FBQztJQUNoQixLQUFLLFNBQVMsQ0FBQztJQUNmLEtBQUssVUFBVSxDQUFDO0lBQ2hCLElBQUksVUFBVSxDQUFDO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGRlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5sb2FkZXItb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDUwMDAwMDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLmxvYWRlciB7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgXHJcbiAgfVxyXG4gIC5sb2FkZXI6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGxlZnQ6IC0yMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZyAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbG9hZGluZyB7XHJcbiAgICBmcm9tIHtsZWZ0OiAtMjAwcHg7IHdpZHRoOiAzMCU7fVxyXG4gICAgNTAlIHt3aWR0aDogMzAlO31cclxuICAgIDcwJSB7d2lkdGg6IDcwJTt9XHJcbiAgICA4MCUge2xlZnQ6IDUwJTt9XHJcbiAgICA5NSUge2xlZnQ6IDEyMCU7fVxyXG4gICAgdG8ge2xlZnQ6IDIwMCU7fVxyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/loader/loader.component.ts":
  /*!********************************************!*\
    !*** ./src/app/loader/loader.component.ts ***!
    \********************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../loader.service */
    "./src/app/loader.service.ts");

    var LoaderComponent =
    /*#__PURE__*/
    function () {
      function LoaderComponent(loaderService) {
        _classCallCheck(this, LoaderComponent);

        this.loaderService = loaderService;
        this.show = false;
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.subscription = this.loaderService.loaderState.subscribe(function (state) {
            _this10.show = state.show;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ctorParameters = function () {
      return [{
        type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }];
    };

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loader.component.css */
      "./src/app/loader/loader.component.css")).default]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/login.service.ts":
  /*!**********************************!*\
    !*** ./src/app/login.service.ts ***!
    \**********************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./CommonSevices/api.service */
    "./src/app/CommonSevices/api.service.ts");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(http, url) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.url = url;
      }

      _createClass(LoginService, [{
        key: "postLogin",
        value: function postLogin(data) {
          return this.http.post(this.url.BaseUrl + "Login", data);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _CommonSevices_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../loader.service */
    "./src/app/loader.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, formBuilder, service, loaderservice) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.service = service;
        this.loaderservice = loaderservice;
        this.submitted = false;
        this.loading = false;
        this.userDataArray = [];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.clear();
          this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/layout'], {
            queryParams: {
              'user': "Admin"
            }
          }); // if (this.loginForm.valid) {
          //   this.submitted = true;
          //   this.userDataArray = JSON.parse(JSON.stringify(this.loginForm.getRawValue()))
          //   let postDataArray: any = {
          //     "Mode": 0,
          //     "dsdata": {
          //       "User": [this.userDataArray]
          //     }
          //   }
          //   console.log(postDataArray)
          //   // Calling API
          //   this.loaderservice.show();
          //   this.service.postLogin(postDataArray).subscribe(response => {
          //     let result: any = response;
          //     console.log(result);
          //     if (result.StatusCode == 200) {
          //       if (result.Result != null) {
          //        // alert('Sucess')
          //         localStorage.setItem('isLoggedin', 'true');
          //         this.router.navigate(['/layout'], { queryParams: { 'user': result.Result.userName } });
          //         this.clear();
          //       }
          //       else {
          //         alert('Login failed')
          //         localStorage.setItem('isLoggedin', 'true');
          //       }
          //       this.loaderservice.hide();
          //     }
          //     else {
          //       alert("Internal Server Error")
          //       this.loaderservice.hide();
          //     }
          //   }, err => {
          //     alert('An error occured please try again');
          //     this.loaderservice.hide();
          //   });
          // }
          // else {
          //   this.submitted = true;
          // }
        }
      }, {
        key: "clear",
        value: function clear() {}
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/users/users.component.css":
  /*!*******************************************!*\
    !*** ./src/app/users/users.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(route) {
        _classCallCheck(this, UsersComponent);

        this.route = route;
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNewUser",
        value: function addNewUser() {
          this.route.navigate(['layout/addUser']);
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.css */
      "./src/app/users/users.component.css")).default]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\LeadPortal\LeadPortal\LeadPortal\Client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map