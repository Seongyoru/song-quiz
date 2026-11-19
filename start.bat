@echo off
rem SONG QUIZ 를 내 컴퓨터에서 연다
cd /d "%~dp0"
start "" http://localhost:5180/
python -m http.server 5180 --bind 127.0.0.1
