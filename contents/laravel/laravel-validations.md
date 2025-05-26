# Laravel validations

## Rules

### Datetime

    'start_time'=> 'date_format:Y-m-d H:i:s|after_or_equal:' . date(DATE_ATOM),
    'end_time'=> 'date_format:Y-m-d H:i:s|after:' . $this->start_time,

https://stackoverflow.com/a/65408634/3919660


### Email

    'required|email:dns' // avoid fake emails


***

[Go to index](../../README.md)
