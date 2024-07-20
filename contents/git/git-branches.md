# Git commands - Branches

***


## Show branches

> Show Git branches in the terminal

    git log --graph --simplify-by-decoration --pretty=format:'%d' --all


> Show Git branches in the graphic tool

    gitk --all --date-order &


***

## Rename branches

> Rename branch locally

    git branch -m old_branch new_branch


> Rename remote branch

    # Delete the old branch
    git push origin :old_branch

    # Push the new branch, set local branch to track the new remote
    git push --set-upstream origin new_branch


***

[Comandos màs usados de Git](https://www.ironwoods.es/blog/git/comandos-habituales)

[Git tips](./contents/git/git-tips.md)

***

[Go to index](../../README.md)
