#!/bin/bash
echo "-------Begin-------"
git add .
read -p "提交信息:" commitinfo
git commit -m $commitinfo
echo "--------End--------"
git pull origin master
git push origin master