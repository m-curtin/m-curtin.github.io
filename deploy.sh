#!/bin/bash
echo "-------Begin-------"
git status
git add .
read -p "提交信息:" commitinfo
git commit -m $commitinfo
git push -f origin master
echo "--------End--------"