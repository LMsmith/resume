//create JSONs
var bio = {
	'name': 'Lauren Smith',
	'role': 'Front End Developer',
	'contacts':
		{
			'mobile': '508-555-5555',
			'email': 'LMSmith.715@gmail.com',
			'github': 'https://github.com/LMsmith',
			'twitter': '@LMS715',
			'location': 'North Attleboro, MA'
		},
	'welcomeMessage': 'Thanks for visiting my page',
	'skills': ['HTML', 'CSS', 'Awesomeness', 'Rubiks Cube Solving'],
	'biopic': 'images/fry.jpg'
};
var education = {
	'schools': [
		{
			'name': 'Bryant University',
			'location': 'Smithfield, RI',
			'degree': 'Bachelors of Arts',
			'majors': ['Communication'],
			'dates': '2007-2010',
			'url': '<a href="http://bryant.edu/">http://bryant.edu/</a>'
		},
		{
			'name': 'Rhode Island School of Design',
			'location': 'Providence, RI',
			'degree': 'Certificate',
			'majors': ['Animation'],
			'dates': '2011-2013',
			'url': '<a href="http://risd.edu/">http://risd.edu/</a>'
		}
	],
	'onlineCourses': [
	{
		'name': 'HTML & CSS',
		'school': 'Code Academy',
		'dates': '2014',
		'url': '<a href="http://www.codecademy.com/en/tracks/web">http://www.codecademy.com</a>'
	},
	{
		'name': 'Front-End Nanodegree',
		'school': 'Udacity',
		'dates': '2015',
		'url': '<a href="https://www.udacity.com/course/nd001">https://www.udacity.com</a>'
	},
	{
		'name': 'Try Git',
		'school': 'Code School',
		'dates': '2015',
		'url': '<a href="https://www.codeschool.com/courses/try-git">https://www.codeschool.com</a>'
	}
	]
};
var work = {
    'jobs': [
        {
            'employer': 'International Forest Products',
            'location': 'Foxboro, MA',
            'title': 'Accounts Payable Coordinator',
            'dates': 'January 2014-present',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. '
        },
        {
            'employer': 'Plant Essentials',
            'location': 'North Attleboro, MA',
            'title': 'Lead Merchandiser',
            'dates': 'April 2009-October 2013',
            'description': 'Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. '
        }
    ]
};
var projects = {
	'projects': [
	{
		'title': 'HTML MockUp',
		'dates': 'February 2015',
		'description': 'Create a responsive website from a design mockup',
		'images': ['images/mug.png']
	},
	{
		'title': 'Resume',
		'dates': 'February-March 2015',
		'description': 'Create an interactive resume',
		'images': ['images/resume.png']
	},
	{
		'title': 'Splash',
		'dates': 'January 2013',
		'description': 'Animate a splash in a pool of water',
		'images': ['images/splash.png']
	}
	]
};
//append bio section
var displayBio = function() {
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedRole);
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	$('#header').prepend(formattedName);
	var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
	$('#header').append(formattedPic);
	var FormattedWelcome = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').append(FormattedWelcome);
	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
	}
	for(skill in bio.skills) {
		var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
		$('#skills').append(formattedSkill);
	}
};
displayBio();
//append contact information
var displayContacts = function() {
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		$('#topContacts').append(formattedMobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		$('#topContacts').append(formattedEmail);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		$('#topContacts').append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		$('#topContacts').append(formattedTwitter);
		var formattedBioLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		$('#topContacts').append(formattedBioLocation);
};
displayContacts();
//append education section
//append schools
var displaySchools = function() {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
		$('.education-entry:last').append(formattedSchoolName);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('.education-entry:last').append(formattedSchoolLocation);
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$('.education-entry:last').append(formattedSchoolDates);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$('.education-entry:last').append(formattedSchoolDegree);
		var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
		$('.education-entry:last').append(formattedSchoolMajor);
		var formattedSchoolURL = HTMLschoolURL.replace('<a href="#">%data%</a>', education.schools[school].url);
		$('.education-entry:last').append(formattedSchoolURL);
	}
};
displaySchools();
//append online courses
var displayCourses = function() {
	$('.education-entry:last').append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		var formattedCourseTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].name);
		$('.education-entry:last').append(formattedCourseTitle);
		var formattedCourseSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		$('.education-entry:last').append(formattedCourseSchool);
		var formattedCourseDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
		$('.education-entry:last').append(formattedCourseDates);
		var formattedCourseURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
		$('.education-entry:last').append(formattedCourseURL);
	}
};
displayCourses();
//append work section
var displayWork = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDatesLocation = formattedDates + formattedLocation;
		$('.work-entry:last').append(formattedDatesLocation);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
};
displayWork();
//append projects section
var displayProjects = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		$('.project-entry:last').append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$('.project-entry:last').append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedProjectDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
};
displayProjects();
//append map
$('#mapDiv').append(googleMap);