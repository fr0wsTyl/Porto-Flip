import {jquery} from 'jquery'
import {Parse} from 'parse'
import {parseInitialization} from 'scripts/engine.js'
import {bootflat} from 'bootflat'

function createCourse() {
    $('#content').html('').load('./content/create-course.html', function() {
        parseInitialization();

        $('#create-course-button').on('click', function() {
            let courseType = 'open';
            let $courseNameValue = $('#course-name').val();
            let $isPrivate = $('#course-type').is(':checked');
            if ($isPrivate) {
                courseType = 'private';
            }

            let CourseObject = Parse.Object.extend('Course');
            let currentCourse = new CourseObject();

            currentCourse.save({
                coursename: $courseNameValue,
                coursetype: courseType,
                students: []
            }, {
                success: function(result) {
                    let $element = $('<div/ >').text('Successful create new course').addClass('label label-success').show();
                    $('#create-course-button').after($element);
                },
                error: function(err) {
                    let $element = $('<div/ >').text('Invalid data').addClass('label label-danger').show();
                    $('#create-course-button').after($element);
                }
            })
        });
    })
}

export {
    createCourse
}
