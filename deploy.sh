#!/bin/bash
echo "-------Begin-------"
git add .
read -p "Curtin, coding your message:" commitinfo
git commit -m $commitinfo
git push -f git@github.com:allspark-fe/knowledge-graph.git main
echo "-------End-------"