/* Model */
var model = {
    tdTitle: {
        title: 'Student Name',
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        missedCol: 'Days Missed-col'
    },

    student: [
        {
            name: 'Slappy the Frog',
            attend: [true, false, true, false, true, false, true, false, true, false, true, false],
            missed: 0
        },
        {
            name: 'Lilly the Lizard',
            attend: [true, true, false, false, true, false, true, false, true, false, true, false],
            missed: 0
        },
        {
            name: 'Paulrus the Walrus',
            attend: [false, false, true, false, true, false, true, false, true, false, true, false],
            missed: 0
        },
        {
            name: 'Gregory the Goat',
            attend: [false, true, false, true, false, true, false, true, false, true, false, true],
            missed: 0
        },
        {
            name: 'Adam the Anaconda',
            attend: [true, false, false, true, false, true, false, true, false, true, false, false],
            missed: 0
        }
    ]
};


/* View */



/* octopus */
























































/* STUDENTS IGNORE THIS FUNCTION
 * All this does is create an initial
 * attendance record if one is not found
 * within localStorage.
 */
// (function() {
//     if (!localStorage.attendance) {
//         console.log('Creating attendance records...');
//         function getRandom() {
//             return (Math.random() >= 0.5);
//         }

//         var nameColumns = $('tbody .name-col'),
//             attendance = {};

//         nameColumns.each(function() {
//             var name = this.innerText;
//             attendance[name] = [];

//             for (var i = 0; i <= 11; i++) {
//                 attendance[name].push(getRandom());
//             }
//         });

//         localStorage.attendance = JSON.stringify(attendance);
//     }
// }());


// /* STUDENT APPLICATION */
// $(function() {
//     var attendance = JSON.parse(localStorage.attendance),
//         $allMissed = $('tbody .missed-col'),
//         $allCheckboxes = $('tbody input');

//     // Count a student's missed days
//     function countMissing() {
//         $allMissed.each(function() {
//             var studentRow = $(this).parent('tr'),
//                 dayChecks = $(studentRow).children('td').children('input'),
//                 numMissed = 0;

//             dayChecks.each(function() {
//                 if (!$(this).prop('checked')) {
//                     numMissed++;
//                 }
//             });

//             $(this).text(numMissed);
//         });
//     }

//     // Check boxes, based on attendace records
//     $.each(attendance, function(name, days) {
//         var studentRow = $('tbody .name-col:contains("' + name + '")').parent('tr'),
//             dayChecks = $(studentRow).children('.attend-col').children('input');

//         dayChecks.each(function(i) {
//             $(this).prop('checked', days[i]);
//         });
//     });

//     // When a checkbox is clicked, update localStorage
//     $allCheckboxes.on('click', function() {
//         var studentRows = $('tbody .student'),
//             newAttendance = {};

//         studentRows.each(function() {
//             var name = $(this).children('.name-col').text(),
//                 $allCheckboxes = $(this).children('td').children('input');

//             newAttendance[name] = [];

//             $allCheckboxes.each(function() {
//                 newAttendance[name].push($(this).prop('checked'));
//             });
//         });

//         countMissing();
//         localStorage.attendance = JSON.stringify(newAttendance);
//     });

//     countMissing();
// }());
