# JavaScript - Time / Date

***

## Get time and date as: "dd-mm-yyyy hh:mm:ss"

> Compose the date and time (returns according to you timezone):

    function getDateAndTime(unix_timestamp)
    {
        var date = (unix_timestamp === undefined)
            ? new Date()
            : new Date(unix_timestamp * 1000);

        var year    = date.getFullYear();
        var month   = ("0" + (date.getMonth() + 1)).substr(-2);
        var day     = ("0" + date.getDate()).substr(-2);
        var hour    = ("0" + date.getHours()).substr(-2);
        var minutes = ("0" + date.getMinutes()).substr(-2);
        var seconds = ("0" + date.getSeconds()).substr(-2);

        var date = day + "-" + month + "-" + year; // ES
        var time = hour + ":" + minutes + ":" + seconds;

        return date + " " + time;
    }

    var unix_timestamp = 1549312452;
    console.log(getDateAndTime(unix_timestamp)); // 04-02-2019 21:34:12


> From an [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) date (returns GMT):

    function getDateAndTime(unix_timestamp)
    {
        var date = (unix_timestamp === undefined)
            ? new Date()
            : new Date(unix_timestamp * 1000);

        // Get the american date and time: 2019-02-04 20:34:12
        var result = date.toISOString().slice(0, 19).replace('T', ' ');

        // Return with Spanish format
        var arr_date = result.slice(0, 10).split('-');
        var time = result.slice(10, 19);

        return arr_date[2] + '-' + arr_date[1] + '-' + arr_date[0] + time;
    }

    var unix_timestamp = 1549312452;
    console.log(getDateAndTime(unix_timestamp)); // 04-02-2019 20:34:12


***

## Get time as: "hh:mm:ss"

> Compose the time (returns according to you timezone):

    function getTime(unix_timestamp)
    {
        var date = (unix_timestamp === undefined)
            ? new Date()
            : new Date(unix_timestamp * 1000);

        var hour    = ("0" + date.getHours()).substr(-2);
        var minutes = ("0" + date.getMinutes()).substr(-2);
        var seconds = ("0" + date.getSeconds()).substr(-2);

        return hour + ":" + minutes + ":" + seconds;
    }

    var unix_timestamp = 1293683278;
    console.log('Time: ' + getTime(unix_timestamp)); // Time: 05:27:58


> From an [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) date (returns GMT):

    function getTime(unix_timestamp)
    {
        var date = (unix_timestamp === undefined)
            ? new Date()
            : new Date(unix_timestamp * 1000);

        return date.toISOString().slice(11, 19);
    }

    var unix_timestamp = 1293683278;
    console.log('Time: ' + getTime(unix_timestamp)); // Time: 04:27:58


***

[Go to index](../../README.md)
