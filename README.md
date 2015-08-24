<h2 align="center">Important</h2>
In order to run the application you need to have installed NodeJS and run the command <strong>npm install</strong> in iLearn folder. 
Otherwise you won't be able to run the application because of the missing javascript libraries.

# Porto-Flip
Teamwork repository for Telerik Academy team Porto Flip

We will create an online educational platform. 
The idea is that everyone could register as a teacher, 
create classes and teach and examine students via the platform. 
Users can choose wheather to sign up as students or teachers.
The platform will give them access to study resources of the courses they 
are signed up to. 



Project functions and requirements:

	Registration
	Login
	Account types - teacher, student (admin)
					Person -> Teacher/Student (inherit)
	
	Teacher  - create courses, add students, add resources
	Courses - open/private; list of lectures, list of  assignments
	Students  - can join courses, access resources
	 -> id
	 -> name
	 -> e-mail
	 -> age
	 -> list of courses
	 -> password
	 -> ?special roles - e.g. assistant
	Actions: 
	 -> System engine 
	 		- create courses
	 		- add students
	 		- edit course participants
	 		- manage file upload download
	 		- send assignments
			- ?send e-mails
			- notifications
			- evaluate results (from teacher input)
			- calender/ grid UI
	


References:
Login documentation:
https://www.parse.com/docs/js/guide#users-logging-in
