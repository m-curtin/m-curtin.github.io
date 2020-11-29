#!/bin/bash
echo "-------Begin-------"
git add .
read -p "提交信息:" commitinfo
git commit -m $commitinfo
git remote add origin git@github.com:allspark-fe/knowledge-graph.git
git push origin master