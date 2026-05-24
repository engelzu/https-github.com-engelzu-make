@echo off
echo ========================================================
echo   INICIANDO DEPLOY AUTOMATICO NO NETLIFY
echo ========================================================
echo.
echo [1/2] Verificando Login do Netlify...
echo (Se uma janela do navegador abrir, clique em "Authorize")
call npx --yes netlify-cli login

echo.
echo [2/2] Linkando e Fazendo o Upload Oficial...
echo O terminal vai te fazer uma pergunta em ingles agora. 
echo Use as setas para baixo do teclado e escolha a opcao:
echo "Link this directory to an existing site"
echo E depois selecione o site que voce ja tinha criado!
echo.
call npx --yes netlify-cli deploy --build --prod

echo.
echo ========================================================
echo   DEPLOY CONCLUIDO COM SUCESSO!
echo ========================================================
echo Lembre-se de colar o REPLICATE_API_TOKEN no painel do Netlify!
pause
