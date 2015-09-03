import {jquery} from 'jquery'
import {Parse} from 'parse'
import {Kendo} from 'kendo'
import {parseInitialization} from 'scripts/engine.js'

function addTable() {
    parseInitialization();
    var query = new Parse.Query('User');

    query.find({
        success: function (results) {
            if (results) {
                var usersDataBase = [];
                results.forEach(function(item) {
                   usersDataBase.push(item._serverData);
                });
                $("#content").html('').kendoGrid({
                    columns: [
                        {title: 'User Name', field: 'username'},
                        {title: 'e-Mail', field: 'email'},
                        {title: 'Age', field: 'age'}
                    ],
                    dataSource: {
                        data: usersDataBase,
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
        error: function (error) {
            console.log(error);
        }
    });
}

export {
    addTable
}