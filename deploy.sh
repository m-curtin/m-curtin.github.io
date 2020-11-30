#!/bin/bash
echo "\033[46;37m ----------------------------Begin---------------------------- \033[0m"
git add .
read -p "\033[34m Curtin, coding your message:\033[0m" commitInfo
git commit -m $commitInfo
git push origin main
echo "\033[46;37m ----------------------------End---------------------------- \033[0m"