import {jquery} from 'jquery'
import {Parse}from 'parse'
import {Kendo}from 'kendo'
import {parseInitialization}from 'scripts/engine.js'

parseInitialization();
var query = new Parse.Query('Course');

function showMyCourses() { 
    $('#myCourses').on('click', function() {
        var data = [];
        var currentUser = JSON.parse(localStorage.getItem('Parse/OxNzrzXTEVzRxH9qHpel84j4dD8QJs4aFUbmrWYc/currentUser'));
        query.find({
            success: function (result) {
                if (result) {
                    result.forEach(function (item) {
                        //console.log(item._serverData.students);
                        item._serverData.students.forEach(function (element) {
                            console.log(element);
                            console.log(currentUser._id);
                            /*if (element === null) {
                                //TO DO
                            }*/
                            if (element === currentUser._id) {
                                data.push(item._serverData);
                            }
                        });
                    });
                    $("#content").html('').kendoGrid({
                        columns: [{
                            title: 'Course',
                            field: 'coursename'
                        }],
                        dataSource: {
                            data: data,
                            pageSize: 10
                        },
                        sortable: true,
                        pageable: {
                            refresh: true,
                            pageSizes: true,
                            buttonCount: 5
                        }
                    });
                } else {
                    $('</ div>').html('You do not have courses');
                }
            },
            error: function (error) {
                console.log(error.message);
            }
        });
    });
}


export {
    showMyCourses
}