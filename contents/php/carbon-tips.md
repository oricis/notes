# PHP Carbon

> Create a `Carbon instance` for a datetime:

    $carbonTime = new Carbon('2023-02-02 00:00:01');

> Create a `Carbon instance` for *now*:

    $carbonTime = new Carbon();

    # On Laravel:
    $carbonTime = now();

> Get the *now* datetime (string):

    Carbon::now(); // f.e. '2023-02-03 09:30:00'

> Get *today* datetime (string):

    Carbon::today(); // f.e. '2023-02-03 00:00:00'

    $start = Carbon::today()->subWeek()->startOfWeek();
    $end   = Carbon::today()->subWeek()->endOfWeek();


### Add time to a timestamp

    $carbonTime = new Carbon('2023-02-02 00:00:01');
    $carbonTime = $carbonTime->addSecond(60);
    $carbonTime = $carbonTime->addHour(60);
    $carbonTime = $carbonTime->addDay(60);
    $carbonTime = $carbonTime->addWeek(60);
    $carbonTime = $carbonTime->addMonth(60);
    $carbonTime = $carbonTime->addYear(60);

### Substract time to a timestamp

    $carbonTime = new Carbon('2023-02-02 00:00:01');
    $carbonTime = $carbonTime->subSecond(60);
    $carbonTime = $carbonTime->subHour(60);
    $carbonTime = $carbonTime->subDay(60);
    $carbonTime = $carbonTime->subWeek(60);
    $carbonTime = $carbonTime->subMonth(60);
    $carbonTime = $carbonTime->subYear(60);

# Print the timestamp from Carbon instance

    $dateFormatEN = 'Y-m-d H:i:s'
    $dateFormatES = 'd-m-Y H:i:s'
    echo $carbonTime->format($dateFormatEN); // EN
    echo $carbonTime->format($dateFormatES); // ES

# Get "limits"

> Get the start and end datetimes (strings) of *today*:

    $start = Carbon::today()->startOfDay(); // f.e. '2023-02-03 00:00:00'
    $end   = Carbon::today()->endOfDay();   // f.e. '2023-02-03 23:59:59'

> Get the start and end datetimes (strings) of the *last week*:

    $start = Carbon::today()->subWeek()->startOfWeek(); // '2023-01-23 00:00:00'
    $end   = Carbon::today()->subWeek()->endOfWeek();   // '2023-01-29 23:59:59'

***

[Go to index](../../README.md)
