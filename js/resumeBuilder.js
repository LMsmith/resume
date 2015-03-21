//create JSONs
var bio = {
	'name': 'Lauren Smith',
	'role': 'Front End Developer',
	'contacts': [
		{
			'mobile': '508-555-5555',
			'email': 'LMSmith.715@gmail.com',
			'github': 'https://github.com/LMsmith',
			'twitter': '@LMS715',
			'location': 'North Attleboro, MA'
		}
	],
	'welcomeMessage': 'PLACEHOLDER',
	'skills': ['PLACEHOLDERS'],
	'biopic': 'PLACEHOLDER.com'
}
$('#header').append(bio.name);

var education = {
	'schools': [
		{
			'name': 'Bryant University',
			'location': 'Smithfield, RI',
			'degree': 'Bachelors of Arts, Communication',
			'minors': ['Marketing', 'Business Administration'],
			'graduation date': 2010,
			'url': 'http://www.bryant.edu/'
		},
		{
			'name': 'Rhode Island School of Design',
			'location': 'Providence, RI',
			'certificate': 'Animation',
			'year of completion': 2013,
			'url': 'http://www.risd.edu/'
		}
	],
	'onlineCourses': [
	{
		'name': 'Front-End Nanodegree',
		'school': 'Udacity',
		'anticipated graduation': 2015,
		'url': 'https://www.udacity.com/'
	},
	{
		'name': 'HTML & CSS',
		'school': 'Code Academy',
		'completed': 2014,
		'url': 'http://www.codecademy.com/'
	},
	{
		'name': 'Try Git',
		'school': 'Code School',
		'completed': 2015,
		'url': 'https://www.codeschool.com/courses/try-git'
	}
	]
}

var work = {
	'jobs': [
	{
		'employer': 'International Forest Products',
		'location': 'Foxboro, MA',
		'positions': [
			{
				'title': 'Accounts Payable Coordinator',
				'dates': 'July 2014-present',
				'description': 'PLACEHOLDER'
			},
			{
				'title': 'Office Assistant',
				'dates': 'January 2014-July 2014',
				'description': 'PLACEHOLDER'
			}
		]
	},
	{
		'employer': 'Plant Essentials',
		'location': 'North Attleboro, MA',
		'position': 'Lead Merchandiser',
		'dates': 'April 2009-October 2013',
		'description': 'PLACEHOLDER'
	}
	]
}

var projects = {
	'projects': [
	{
		'title': 'HTML MockUp',
		'dates': 'February 2015',
		'description': 'Create a responsive website from a design mockup'
	},
	{
		'title': 'Resume',
		'dates': 'February-March 2015',
		'description': 'Create an interactive resume'
	},
	{
		'title': 'Splash',
		'dates': 'January 2013',
		'description': 'Animate a splash in a pool of water'
	}
	]
	display:
}

//append to the page
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.skills);
