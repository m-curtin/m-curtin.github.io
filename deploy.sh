#!/bin/bash
echo "-------Begin-------"
git status
git add -A
read -p "提交信息:" commitinfo
git commit -m $commitinfo
git pull –-rebase origin master
git push origin master
echo "--------End--------"