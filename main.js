// wait for DOM to load before running JS
$(function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  
  // your code here
data = {
    school: "General Assembly",
    city: "San Francisco",
    course: "Web Development Immersive",
    course_id: "WDI24",
    classroom: "7",
    students: [{
        id: 0,
        last_name: "Abeyta",
        first_name: "Adam",
        github_username: "abeytaadam"
    }, {
        id: 1,
        last_name: "Lee",
        first_name: "Alan",
        github_username: "alanlee35"
    }, {
        id: 2,
        last_name: "Massey",
        first_name: "Andre",
        github_username: "DreTGiant"
    }, {
        id: 3,
        last_name: "Saavedra",
        first_name: "Carlos",
        github_username: "murcielago17"
    }, {
        id: 4,
        last_name: "Salinas",
        first_name: "Cynthia",
        github_username: "Cyndy528"
    }, {
        id: 5,
        last_name: "Sloan",
        first_name: "Dave",
        github_username: "slnwlf"
    }, {
        id: 6,
        last_name: "Chang",
        first_name: "Eddy",
        github_username: "TheEddyChang"
    }, {
        id: 7,
        last_name: "Dwyer",
        first_name: "John",
        github_username: "Jsdwyer26"
    }, {
        id: 8,
        last_name: "Rockway",
        first_name: "Michael",
        github_username: "mrockway"
    }, {
        id: 9,
        last_name: "Stevens",
        first_name: "Stanley",
        github_username: "Stanleyyork"
    }, {
        id: 10,
        last_name: "Noble",
        first_name: "Steven",
        github_username: "stevennoble78"
    }, {
        id: 11,
        last_name: "Huynh",
        first_name: "Trung",
        github_username: "tkhuynh"
    }, {
        id: 12,
        last_name: "Frambach",
        first_name: "Victoria",
        github_username: "vframbach"
    }, {
        id: 13,
        last_name: "Muzafi",
        first_name: "Zohar",
        github_username: "zoharmuzafi"
    }]
};
var courseName = data["course"];
var firstStudentId = data["students"][0]["id"];
var firstStudentFullName = data["students"][0]["first_name"] + " " + data["students"][0]["last_name"];
var numberOfStudents = data["students"].length;
var studentInfo = data["students"];
var getGitUser = studentInfo.map(function(x){
	return x["github_username"];
}).join(", ");
$(".title").append("<h3>"+courseName+"</h3>");
$(".title").append("<p>First Student ID: " +firstStudentId+"</p>");
$(".title").append("<p>First Student Full Name: "+firstStudentFullName+"</p>");
$(".title").append("<p>Number of Students: " +numberOfStudents+"</p>");
$(".title").append("<p>Student Github Usernames: " + getGitUser + "</p>")

function buildGithubLink (studentNum) {
	var getstudentInfo = data["students"][studentNum];
	var getFullName = data["students"][studentNum]["first_name"] + " " + data["students"][studentNum]["last_name"];
	var getGitHub = data["students"][studentNum]["github_username"];
	$(".title").append("<br><a href='https://github.com/"+getGitHub+"'>"+getFullName+"</a>");
}

function renderGithubLinks () {
	for (var i = 0; i < data["students"].length; i++) {
		buildGithubLink(i);
	}	
}
renderGithubLinks();


});