@echo off
cd /d "%~dp0"
npm.cmd run dev > dev-server.log 2> dev-server.err.log
echo.
echo Servidor encerrado. Veja dev-server.log e dev-server.err.log.
pause
