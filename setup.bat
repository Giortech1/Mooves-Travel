@echo off
REM Script de démarrage du projet Mooves Travel (Windows)

setlocal enabledelayedexpansion

echo.
echo ========================================
echo.
echo   ^_^  Mooves Travel Setup
echo  / ^ \ 
echo    "
echo.
echo ========================================
echo.

REM Couleurs (simulées avec texto)
cls

echo Demarrage du projet Mooves Travel...
echo.

REM Verifier Node.js
echo Verification de Node.js...
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERREUR] Node.js n'est pas installe
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [OK] Node.js %NODE_VERSION% trouve

REM Verifier npm
echo Verification de npm...
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERREUR] npm n'est pas installe
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo [OK] npm %NPM_VERSION% trouve

echo.

REM Backend Setup
echo ========================================
echo Configuration du Backend
echo ========================================
echo.

if not exist "server" (
    echo [ERREUR] Dossier 'server' non trouve
    pause
    exit /b 1
)

cd server

REM Verifier node_modules
if not exist "node_modules" (
    echo Installation des dependances backend...
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo [ERREUR] Erreur lors de l'installation
        cd ..
        pause
        exit /b 1
    )
    echo [OK] Dependances backend installes
) else (
    echo [OK] Dependances backend deja installes
)

REM Verifier .env
if not exist ".env" (
    if exist ".env.example" (
        echo [ATTENTION] .env non trouve, creation a partir du template...
        copy .env.example .env >nul
        echo [ATTENTION] N'OUBLIEZ PAS de remplir .env avec vos credentials Firebase!
    ) else (
        echo [ERREUR] .env.example non trouve
        cd ..
        pause
        exit /b 1
    )
) else (
    echo [OK] .env trouve
)

cd ..

echo.

REM Frontend Setup
echo ========================================
echo Configuration du Frontend
echo ========================================
echo.

REM Verifier node_modules
if not exist "node_modules" (
    echo Installation des dependances frontend...
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo [ERREUR] Erreur lors de l'installation
        pause
        exit /b 1
    )
    echo [OK] Dependances frontend installes
) else (
    echo [OK] Dependances frontend deja installes
)

REM Verifier .env.local
if not exist ".env.local" (
    if exist ".env.example" (
        echo [ATTENTION] .env.local non trouve, creation a partir du template...
        copy .env.example .env.local >nul
        echo [ATTENTION] Verifiez que VITE_API_URL correspond a votre backend!
    )
) else (
    echo [OK] .env.local trouve
)

echo.

REM Success Message
cls
echo.
echo ========================================
echo   CONFIGURATION COMPLETE!
echo ========================================
echo.

echo Pour demarrer le developpement:
echo.
echo Terminal 1 (Backend):
echo   cd server
echo   npm run dev
echo.
echo Terminal 2 (Frontend):
echo   npm run dev
echo.

echo URLs:
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:5000
echo.

echo Documentation:
echo   - Setup: CONFIGURATION.md
echo   - Backend: server\README.md
echo   - API: API_REFERENCE.md
echo   - Integration: INTEGRATION.md
echo.

echo IMPORTANT - N'OUBLIEZ PAS:
echo   1. Remplir server\.env avec vos credentials Firebase
echo   2. Verifier VITE_API_URL dans .env.local
echo   3. Creer la collection 'users' dans Firestore (optionnel)
echo.

pause
