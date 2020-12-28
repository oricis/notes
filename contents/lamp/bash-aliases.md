# Bash aliases

Source:
    https://www.cyberciti.biz/faq/create-permanent-bash-alias-linux-unix/

## Add bash aliases

> Create bash aliases:

    sudo nano ~/.bash_aliases

> Write aliases, save and close file.

> Load changes:

    source ~/.bash_aliases

*This command is necessary with each change on `~/.bash_aliases`.*


> Check `~/.bashrc` file. Aliases only work with the next content present:

    if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
    fi

***

## Check bash aliases

> List all the aliases:

    alias


***

## List of my aliases

    ### Laravel Artisan aliases

    alias pa='php artisan'
    alias pam='php artisan make'
    alias pam:c='php artisan make:controller'
    alias pam:m='php artisan make:model'
    alias pam:mm='php artisan make:model --migration'
    alias pa:rl='php artisan r:l'
    alias pa:rlc='php artisan r:l --compact'
    alias pa:m='php artisan migrate'
    alias pa:mf='php artisan migrate:fresh'
    alias pa:mfs='php artisan migrate:fresh --seed'
    alias pa:optimize='php artisan optimize & php artisan view:clear & php artisan cache:clear'


    ### Composer aliases

    alias composer:da='composer dump-autoload'
    alias composer:i='composer install'


***

[Go to index](../../README.md)
