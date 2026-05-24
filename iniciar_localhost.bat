@echo off
title Servidor Local - Projeto Make (Next.js)
echo ==============================================
echo Iniciando servidor local (Projeto Make)...
echo ==============================================
echo.

:: Verifica se a pasta node_modules existe, se não, faz a instalação
if not exist node_modules (
    echo [1/2] Dependencias nao encontradas. Rodando npm install...
    call npm install
) else (
    echo [1/2] Dependencias verificadas.
)

echo.
echo [2/2] Iniciando o ambiente de desenvolvimento (Next.js)...
echo Abrindo o navegador automaticamente...
echo.

start http://localhost:3000
call npm run dev
if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERRO] Ocorreu um problema ao iniciar o servidor. Verifique se o Node.js esta instalado.
)

pause
