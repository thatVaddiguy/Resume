
var bio = {
  "name" : "Rohit Vaddi",
  "role":"Android Developer",
  "contacts":{
    "mobile":"03455324",
    "email":"rohitvaddi96@gmail.com",
    "twitter":"@TheVadster7",
    "location":"Abu Dhabi",
    "github":"TheVadster7"
  },
  "welcomeMessage":"Please give me a job",
  "skills":["saving the universe","android app development","Java","Photography"],
  "biopic":"images/fry.jpg"
};

bio.display = function(){
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $('#header').prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  $('#header').prepend(formattedName);

  if (bio.skills.length > 0) {
    var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
    $('#header').append(formattedPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedMessage);
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill){
      var formattedSkill = HTMLskills.replace("%data%",skill);
      $('#skills').append(formattedSkill);
    });
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
  }
};

bio.display();


var work = {
  "jobs": [
    {
      "employer":"Freelance",
      "title": "Android Developer",
      "location":"Abu Dhabi",
      "dates" : "July 2016 - Present",
      "description": "Working as a freelance developer building android apps"
    }
  ]
};

work.display = function(){
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
  });
};

work.display();


var education = {
  "schools" : [
    {
      "name":"Middlesex University",
      "location":"Dubai",
      "degree":"Bsc (IT)",
      "majors":["Computer Science"],
      "dates": "2016",
      "url":"https://www.mdx.ac.ae"
    },
    {
      "name":"DPS",
      "location":"Doha",
      "degree":"High School",
      "majors": ["MPC with computer Science"],
      "dates":"2012-2014",
      "url":"https://www.dpsmis.com"
    }
  ],
  "onlineCourses":[
    {
      "title":"Front end developer",
      "school":"Udacity",
      "dates": "2016",
      "url":"https://www.udacity.com"
    },
    {
      "title":"Android for Beginners",
      "school":"Udacity",
      "dates": "2016",
      "url":"https://www.udacity.com"
    },
    {
      "title": "Intro to computer science",
      "school":"MIT",
      "dates": "2016",
      "url":"https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/"
    }
  ]
};

education.display = function(){
  $('#education').append(HTMLschoolStart);
  education.schools.forEach(function(school){
    var formattedName = HTMLschoolName.replace("%data%", school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry:last").append(formattedName + formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
    $(".education-entry:last").append(formattedMajor);
    var formattedUrl = HTMLonlineURL.replace("%data%",school.url);
    $(".education-entry:last").append(formattedUrl);
  });
  $('#education').append(HTMLonlineClasses);
  $('#education').append(HTMLonlineClassesStart);
  education.onlineCourses.forEach(function(course){
    var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
    $(".onlineCourses-entry:last").append(formattedTitle + formattedSchool);
    var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
    $(".onlineCourses-entry:last").append(formattedDates);
    var formattedUrl = HTMLonlineURL.replace("%data%",course.url);
    $(".onlineCourses-entry:last").append(formattedUrl);
  });
};

education.display();


var projects = {
  "projects": [
    {
      "title": "Sample project 1",
      "dates":"2016",
      "description":"Just a random project",
      "images": ["https://3.bp.blogspot.com/-5bQj3hAu6Kk/V6uVxcJEizI/AAAAAAAAl9Q/OOMyO7fTJf0YxLOPlgikYYIbmLtd6C7jwCLcB/s1600/k-2so-rogueone-robot.png"]
    },
    {
      "title": "Sample project 2",
      "dates":"2016",
      "description":"another Sample project",
      "images": ["http://i.huffpost.com/gen/4393678/images/n-THE-MATRIX-628x314.jpg"]
    }
  ]
};

projects.display= function(){
  projects.projects.forEach(function(project){
    $('#projects').append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
    $(".project-entry:last").append(formattedDescription);
    for (var i = 0; i < project.images.length; i++) {
      var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
      $(".project-entry:last").append(formattedImage);
    }
  });
};

projects.display();

$("#mapDiv").append(googleMap);
