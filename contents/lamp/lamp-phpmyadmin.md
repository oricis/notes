# LAMP / phpMyAdmin

### Notes for "DEV environment" *On Ubuntu 18.04* ###

> Open configuration file:

    sudo nano /etc/phpmyadmin/config.inc.php


***

## Set the session expiration time longer

> Update or write the line and put the desired time:

    $cfg['LoginCookieValidity'] = 1800;

*The session time use seconds and must be between 1800 and the max number
in the int range.*


> Proposal solution:

$sessionDuration = 60*60*24*7; // 60*60*24*7 = one week
ini_set('session.gc_maxlifetime', $sessionDuration);
$cfg['LoginCookieValidity'] = $sessionDuration;

> From:
 * https://stackoverflow.com/a/11858297/3919660


***

## Set login credentials (phpMyAdmin 5.0.2)

> Update or write the lines with the user credentials:

    $cfg['Servers'][$i]['user']      = 'username';
    $cfg['Servers'][$i]['password']  = 'password';
    $cfg['Servers'][$i]['auth_type'] = 'config';

> See your local phpMyAdmin doc:
* http://localhost/phpmyadmin/doc/html/setup.html
* http://localhost/phpmyadmin/doc/html/setup.html?session%20time#manually-creating-the-file


***

[Go to index](../../README.md)
