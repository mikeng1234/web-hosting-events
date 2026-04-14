@echo off
cd /d "%~dp0"

:: Start the dev server in the background
start "Host Nellie Dev Server" cmd /k npm run dev

:: Wait a moment for the server to spin up
timeout /t 4 /nobreak >nul

:: Open Chrome
start chrome http://localhost:3000
