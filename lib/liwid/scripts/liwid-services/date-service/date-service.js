        $scope.monthsList = [{"name" : "Jan", "value" : 1 }, {"name" : "Feb", "value" : 2 }, {"name" : "Mar", "value" : 3 }, {"name" : "Apr", "value" : 4 }, {"name" : "May", "value" : 5 }, {"name" : "Jun", "value" : 6 }, {"name" : "Jul", "value" : 7 }, {"name" : "Aug", "value" : 8 }, {"name" : "Sep", "value" : 9 }, {"name" : "Oct", "value" : 10 }, {"name" : "Nov", "value" : 11 }, {"name" : "Dec", "value" : 12 }];
        
        var initial_year;
        var limit_year = 2014;
        var current_date = new Date();
        var current_year = current_date.getFullYear();
        var current_month = current_date.getMonth() + 1; // months starts with 0

        function getYearList(){
            if (current_year - 2 <= limit_year) {
                initial_year = limit_year;
            } else {
                initial_year = current_year - 2;
            }
            var yearList=[];
            for (var i = initial_year; i <= current_year; i++) {
                yearList.push(i);
            }
            return yearList;
        }


        function getYearMonthList () {
           
            var yearMonthList = [];
           
            if (current_year - 2 <= limit_year) {
                initial_year = limit_year;
            } else {
                initial_year = current_year - 2;
            }

            for (var i = initial_year; i <= current_year; i++) {
                var yearMonth = {};
                yearMonth.months = [];

                yearMonth.year = i;
                for (var j = 0; j <= 11; j++) {
                   
                    if (i === current_year && j === current_month-1) {
                        break;
                    }

                    yearMonth.months.push($scope.monthsList[j]); 
                }
                yearMonthList.push(yearMonth);
            }

            return yearMonthList;
        };

        function daysInMonth(m, y) { // m is 0 indexed: 0-11
            switch (m) {
            case 1:
                return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28;
            case 8:
            case 3:
            case 5:
            case 10:
                return 30;
            default:
                return 31;
            }
        };
