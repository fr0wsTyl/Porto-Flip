import {jquery} from 'jquery'
import {Parse} from 'parse'
import {Kendo} from 'kendo'
import {parseInitialization} from 'scripts/engine.js'

parseInitialization();
var query = new Parse.Query('Course');

function courseTable() {
    $('#allCourses').on('click', function() {
        query.find({
            success: function(results) {
                if (results) {
                    var courseDataBase = [];
                    results.forEach(function(item) {
                        courseDataBase.push(item._serverData);
                    });
                    $("#content").html('').kendoGrid({
                        columns: [{
                            title: 'Course',
                            field: 'coursename'
                        }, {
                            command: {
                                text: "Join Course",
                                click: joinCourse
                            },
                            title: " ",
                            width: "180px"
                        }],
                        dataSource: {
                            data: courseDataBase,
                            pageSize: 10
                        },
                        sortable: true,
                        pageable: {
                            refresh: true,
                            pageSizes: true,
                            buttonCount: 5
                        }
                    });

                }
            },
            error: function(error) {
                console.log(error);
            }
        });
    function joinCourse(ev) {
            ev.preventDefault();

            let dataItem = this.dataItem($(ev.currentTarget).closest("tr"));
            let courseToJoin = dataItem.coursename;
            query.equalTo("coursename", courseToJoin);
            query.first({
                success: function(result) {
                    let currentUserData = JSON.parse(localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser'));
                    let currentUserId = currentUserData.objectId;
                    result.add('students', currentUserId);
                    result.save();
                    $('<div />').addClass('alert alert-success alert-dismissable')
                        .html('You have successfully joined ' + courseToJoin)
                        .prependTo('#coursegrid')
                        .fadeOut(4000);
                },
                error: function(error) {
                    console.log("Error: " + error.code + " " + error.message);
                }
            });
        }
    });  
}

export {
    courseTable
}
