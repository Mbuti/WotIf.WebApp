export function loginRequest(data, success, toast) {
     var xmlhttp = new XMLHttpRequest();
     var title = "Login Request";
     xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status !== 200) {
               toast(title, xmlhttp.status + " " + xmlhttp.responseText, "error");
          }
          if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
               success();
          }
     };
     xmlhttp.onerror = function() {
          toast(title, "Could not contact the server to make login request", "error");
     };
     xmlhttp.open("POST", "http://localhost:8090/api/Auth/SignIn");
     xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
     xmlhttp.send(JSON.stringify(data));
}
