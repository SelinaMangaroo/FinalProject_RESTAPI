
document.addEventListener('DOMContentLoaded', () => {
  var results = document.querySelector('.display');
});

/*
var request = new XMLHttpRequest();
let class_type = document.querySelector('#qcourse_code').value;
let apiEndpoint = `http://127.0.0.1:3000/courses/${class_type}`;
request.open('GET', apiEndpoint, true);

//define a callback.
request.onload = function () {
  const data = JSON.parse(request.responseText).courses;
  console.log(data);

  for (var i in data) {
    var course_code = JSON.parse(request.responseText).courses[0].course_code;
    var title = JSON.parse(request.responseText).courses[0].title;
    var instructor = JSON.parse(request.responseText).courses[0].instructor;
    var day = JSON.parse(request.responseText).courses[0].course_day;
    var seats = JSON.parse(request.responseText).courses[0].seats_available;
    var type = JSON.parse(request.responseText).courses[0].course_type;

    //Creating table
    var table = "<table>";
    table += "<tr><td>Course Code:</td><td>Title:</td><td>Instructor:</td><td>Day:</td><td>Seats Available:</td><td>Course Type:</td></tr>";
    table += "<tr><td>" + course_code + "</td><td>" + title + "</td><td>" + instructor + "</td><td>" + day + "</td><td>" + seats + "</td><td>" + type + "</td></tr>";
    table += "</table>";
  }

  //Showing the table inside table
  document.getElementById("load").innerHTML = table;
};

  request.send(); //Invoke the network request
*/

/*
document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('form').onsubmit = () => {

    let class_type = document.querySelector('#qcourse_code').value;
    let apiEndpoint = `http://127.0.0.1:3000/courses/${class_type}`;

    //  let apiEndpoint = `https://www.rentdata.org/data/zip?zip=${zip}`;

    const get_api = async(apiEndpoint) => {
      const response = await fetch(apiEndpoint);
      const results = await response.json();

//implement for loop for each JSON object that is returned

      let htmlResponse = process_response(results);
      document.querySelector('#results').innerHTML = htmlResponse;

      document.getElementById('course_code').innerHTML = results.course_code;
      document.getElementById('crn').innerHTML = results.crn;
      document.getElementById('title').innerHTML = results.title;
      document.getElementById('instructor').innerHTML = results.instructor;
      document.getElementById('course_day').innerHTML = results.course_day;
      document.getElementById('seats_available').innerHTML = results.seats_available;
      document.getElementById('course_type').innerHTML = results.course_type;
      console.log(results);
    };

    get_api(apiEndpoint);
    return false;
  };
});

function process_response(data) {
  let course_code = document.querySelector('#qcourse_code').value;
  htmlResponse = `<h2>Course Code:${course_code}<br>`;
  return htmlResponse;
}
*/
