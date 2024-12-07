@REM 隐藏多余命令回显
@echo off
@REM 开启局部变量作用域
setlocal

REM 设置仓库 URL 和临时目录名称
set REPO_URL=https://github.com/Msenxy/msenxy.github.io.git
set TEMP_DIR=temp

REM 创建临时目录并进入
md %TEMP_DIR%
cd %TEMP_DIR%

REM 创建 README.md 并初始化 Git 仓库
echo Initializing repository...
echo hello world > README.md
git init
git add README.md
git commit -m "feat: init"
git branch -M main
git remote add origin %REPO_URL%

REM 推送初始提交到远程仓库
git push -u origin main

REM 删除 README.md 并提交更改
git rm README.md
git commit -m "refactor: remove README.md"
git push origin main

REM 清理临时目录
cd ..
rmdir /s /q %TEMP_DIR%

REM 延迟 1 秒后删除脚本
ping 127.0.0.1 -n 2 >nul

REM 删除脚本本身
del "%~f0"

echo 脚本执行完毕
pause
