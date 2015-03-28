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
	'skills': ['HTML', 'CSS', 'Awesomeness', 'Rubiks Cube Solving', 'Adobe Illustrator', 'Adobe Photoshop', 'Autodesk Maya'],
	'biopic': 'images/daria.jpg',
	displayBio: function() {
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		$('#nameRole').prepend(formattedRole);
		var formattedName = HTMLheaderName.replace('%data%', bio.name).toUpperCase();
		$('#nameRole').prepend(formattedName);
		var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
		$('#biopic').append(formattedPic);
		var FormattedWelcome = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
		$('#nameRole').append(FormattedWelcome);
		if (bio.skills.length > 0) {
			$('#skills').append(HTMLskillsStart);
		}
		for(var i=0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		$('#topContacts').append(formattedMobile);
		$('#footerContacts').append(formattedMobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		$('#topContacts').append(formattedEmail);
		$('#footerContacts').append(formattedEmail);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		$('#topContacts').append(formattedGithub);
		$('#footerContacts').append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		$('#topContacts').append(formattedTwitter);
		$('#footerContacts').append(formattedTwitter);
		var formattedBioLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		$('#topContacts').append(formattedBioLocation);
		$('#footerContacts').append(formattedBioLocation);
	}
};
bio.displayBio();
	var education = {
	'schools': [
		{
			'name': 'Bryant University',
			'location': 'Smithfield, RI',
			'degree': 'Bachelors of Arts',
			'majors': ['Communication'],
			'dates': '2007-2010',
			'url': '<a href="http://bryant.edu/"><img src="images/Bryant.png"</a>'
		},
		{
			'name': 'Rhode Island School of Design',
			'location': 'Providence, RI',
			'degree': 'Certificate',
			'majors': ['Animation'],
			'dates': '2011-2013',
			'url': '<a href="http://risd.edu/"><img src="images/risd.gif"</a>'
		}
	],
	'onlineCourses': [
	{
		'name': 'HTML & CSS',
		'school': 'Code Academy',
		'dates': '2014',
		'url': '<a href="http://www.codecademy.com/en/tracks/web"><img src="images/codeacademy.png"</a>'
	},
	{
		'name': 'Front-End Nanodegree',
		'school': 'Udacity',
		'dates': '2015',
		'url': '<a href="https://www.udacity.com/course/nd001"><img src="images/udacity.png"</a>'
	},
	{
		'name': 'Try Git',
		'school': 'Code School',
		'dates': '2015',
		'url': '<a href="https://www.codeschool.com"><img src="images/codeschool.png"</a>'
	}
	],
	displayEducation: function() {
		for (var i=0; i < education.schools.length; i++) {
			$('#education').append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
			$('.education-entry:last').append(formattedSchoolName);
			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
			$('.education-entry:last').append(formattedSchoolLocation);
			var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
			$('.education-entry:last').append(formattedSchoolDates);
			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
			$('.education-entry:last').append(formattedSchoolDegree);
			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
			$('.education-entry:last').append(formattedSchoolMajor);
			var formattedSchoolURL = HTMLschoolURL.replace('<a href="#">%data%</a>', education.schools[i].url);
			$('.education-entry:last').append(formattedSchoolURL);
	}
		$('.education-entry:last').append(HTMLonlineClasses);
		for (var i=0; i < education.onlineCourses.length; i++) {
			var formattedCourseTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].name);
			$('.education-entry:last').append(formattedCourseTitle);
			var formattedCourseSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
			$('.education-entry:last').append(formattedCourseSchool);
			var formattedCourseDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
			$('.education-entry:last').append(formattedCourseDates);
			var formattedCourseURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
			$('.education-entry:last').append(formattedCourseURL);
		}
	}
};
education.displayEducation();
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
    ],
    displayWork: function() {
    	for (var i=0; i < work.jobs.length; i++) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
		$('.work-entry:last').append(formattedEmployer);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
		$('.work-entry:last').append(formattedLocation);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		$('.work-entry:last').append(formattedTitle);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
		$('.work-entry:last').append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
		$('.work-entry:last').append(formattedDescription);
	}
    }
};
work.displayWork();
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
	],
	displayProjects: function() {
		for (var i=0; i < projects.projects.length; i++) {
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		$('.project-entry:last').append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		$('.project-entry:last').append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		$('.project-entry:last').append(formattedProjectDescription);
		if (projects.projects[i].images.length > 0) {
			for (var j=0; j < projects.projects[i].images.length; j++) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
	}
};
projects.displayProjects();
//append map
$('#mapDiv').append(googleMap);