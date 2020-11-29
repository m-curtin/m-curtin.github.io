#!/bin/bash
echo -e "\e[36m--------------Begin--------------\e[0m"
git add .
read -p "Curtin, coding your message:" commitInfo
git commit -m $commitInfo
git push origin main
echo  -e "\e[36m--------------End--------------\e[0m"