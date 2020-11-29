#!/bin/bash
echo "-------Begin-------"
git add .
read -p "Curtin, coding your message:" commitinfo
git commit -m $commitinfo
git push origin main
echo "-------End-------"