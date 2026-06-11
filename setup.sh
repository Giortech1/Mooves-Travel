#!/bin/bash

# Script de démarrage du projet Mooves Travel

echo "🚀 Démarrage du projet Mooves Travel..."
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages
print_status() {
    echo -e "${BLUE}➜${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Vérifier Node.js
print_status "Vérification de Node.js..."
if ! command -v node &> /dev/null; then
    print_error "Node.js n'est pas installé"
    exit 1
fi
print_success "Node.js $(node --version) trouvé"

# Vérifier npm
print_status "Vérification de npm..."
if ! command -v npm &> /dev/null; then
    print_error "npm n'est pas installé"
    exit 1
fi
print_success "npm $(npm --version) trouvé"

echo ""

# Backend Setup
print_status "Configuration du Backend..."

if [ ! -d "server" ]; then
    print_error "Dossier 'server' non trouvé"
    exit 1
fi

cd server

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    print_status "Installation des dépendances backend..."
    npm install
    if [ $? -eq 0 ]; then
        print_success "Dépendances backend installées"
    else
        print_error "Erreur lors de l'installation des dépendances"
        exit 1
    fi
else
    print_success "Dépendances backend déjà installées"
fi

# Vérifier .env
if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        print_warning ".env non trouvé, création à partir du template..."
        cp .env.example .env
        print_warning "⚠️  N'OUBLIEZ PAS de remplir .env avec vos credentials Firebase!"
    else
        print_error ".env.example non trouvé"
        exit 1
    fi
else
    print_success ".env trouvé"
fi

cd ..

echo ""

# Frontend Setup
print_status "Configuration du Frontend..."

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    print_status "Installation des dépendances frontend..."
    npm install
    if [ $? -eq 0 ]; then
        print_success "Dépendances frontend installées"
    else
        print_error "Erreur lors de l'installation des dépendances"
        exit 1
    fi
else
    print_success "Dépendances frontend déjà installées"
fi

# Vérifier .env.local
if [ ! -f ".env.local" ]; then
    if [ -f ".env.example" ]; then
        print_warning ".env.local non trouvé, création à partir du template..."
        cp .env.example .env.local
        print_warning "⚠️  Vérifiez que VITE_API_URL correspond à votre backend!"
    fi
else
    print_success ".env.local trouvé"
fi

echo ""
echo -e "${GREEN}════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ Configuration complète!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════════${NC}"
echo ""

echo "📝 Pour démarrer le développement:"
echo ""
echo "Terminal 1 (Backend):"
echo -e "  ${BLUE}cd server${NC}"
echo -e "  ${BLUE}npm run dev${NC}"
echo ""
echo "Terminal 2 (Frontend):"
echo -e "  ${BLUE}npm run dev${NC}"
echo ""

echo "🌍 URLs:"
echo -e "  Frontend: ${BLUE}http://localhost:5173${NC}"
echo -e "  Backend:  ${BLUE}http://localhost:5000${NC}"
echo ""

echo "📚 Documentation:"
echo "  - Setup: CONFIGURATION.md"
echo "  - Backend: server/README.md"
echo "  - API: API_REFERENCE.md"
echo "  - Integration: INTEGRATION.md"
echo ""

print_warning "⚠️  N'OUBLIEZ PAS:"
print_warning "1. Remplir server/.env avec vos credentials Firebase"
print_warning "2. Vérifier VITE_API_URL dans .env.local"
print_warning "3. Créer la collection 'users' dans Firestore (optionnel - auto-créée)"
echo ""
