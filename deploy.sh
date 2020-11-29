#!/bin/bash
echo "\033[36m --------------Begin-------------- \033[0m"
git add .
read -p "Curtin, coding your message:" commitInfo
git commit -m $commitInfo
git push origin main
echo "\033[36m --------------End-------------- \033[0m"