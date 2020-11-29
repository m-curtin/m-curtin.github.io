#!/bin/bash
echo "-------Begin-------"
git status
git add -A
read -p "提交信息:" commitinfo
git commit -m $commitinfo
git pull master
git push -f origin master
echo "--------End--------"