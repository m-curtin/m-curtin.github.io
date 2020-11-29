#!/bin/bash
echo "-------Begin-------"
git add .
read -p "提交信息:" commitinfo
git commit -m $commitinfo


git push -f git@github.com:allspark-fe/knowledge-graph.git master

cd -