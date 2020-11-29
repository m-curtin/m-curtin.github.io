#!/bin/bash
echo "--------------Begin--------------"
git add .
read -p "Curtin, coding your message:" commitInfo
git commit -m $commitInfo
git push origin main
echo "--------------End--------------"