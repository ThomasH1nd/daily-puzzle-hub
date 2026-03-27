// 1. Database of games 
const gamesList = [
    { name: "Wordle", url: "https://www.nytimes.com/games/wordle/index.html", category: "Word Puzzles", desc: "Guess the 5-letter word in 6 tries." },
    { name: "Connections", url: "https://www.nytimes.com/games/connections", category: "Word Puzzles", desc: "Group words that share a common thread." },
    { name: "Contexto", url: "https://contexto.me/", category: "Word Puzzles", desc: "Find the secret word by sorting words by their context." },
    { name: "Minute Cryptic", url: "https://minutecryptic.com/", category: "Word Puzzles", desc: "Solve a daily bite-sized cryptic crossword clue." },
    { name: "Quordle", url: "https://www.quordle.com/", category: "Word Puzzles", desc: "Play four Wordles simultaneously." },
    { name: "Nerdle", url: "https://nerdlegame.com/", category: "Logic & Numbers", desc: "Like Wordle, but for math equations." },
    { name: "Sudoku", url: "https://sudoku.com/", category: "Logic & Numbers", desc: "Classic grid-based number placement puzzle." },
    { name: "KenKen", url: "https://www.kenkenpuzzle.com/", category: "Logic & Numbers", desc: "Math and logic puzzle similar to Sudoku." },
    { name: "Futoshiki", url: "https://www.futoshiki.org/", category: "Logic & Numbers", desc: "Logic puzzle based on greater/less than signs." },
    { name: "Worldle", url: "https://worldle.teuteuf.fr/", category: "Geography", desc: "Guess the country based on its silhouette." },
    { name: "Globle", url: "https://globle-game.com/", category: "Geography", desc: "Guess the hidden country using hot/cold distances." },
    { name: "Travle", url: "https://travle.earth/", category: "Geography", desc: "Find the shortest route between two countries." },
    { name: "Citydle", url: "https://citydle.com/", category: "Geography", desc: "Guess the global city using directional clues." },
    { name: "Framed", url: "https://framed.wtf/", category: "Pop Culture", desc: "Guess the movie from its still frames." },
    { name: "Box Office Game", url: "https://boxofficega.me/", category: "Pop Culture", desc: "Guess the top 5 weekend box office movies from a specific date." },
    { name: "Bandle", url: "https://bandle.app/", category: "Pop Culture", desc: "Guess the song as instruments are added one by one." },
    { name: "Waffle", url: "https://wafflegame.net/", category: "Visual Puzzles", desc: "Rearrange the letters to form words in a grid." },
    { name: "Knotwords", url: "https://playknotwords.com/", category: "Visual Puzzles", desc: "A logic-based anagram crossword puzzle." },
    { name: "Nonogram", url: "https://www.puzzle-nonograms.com/", category: "Visual Puzzles", desc: "Picture logic puzzles using grid numbers." },
    { name: "Chronophoto", url: "https://www.chronophoto.app/", category: "History & Time", desc: "Guess the exact year a historical photograph was taken." },
    { name: "TimeGuessr", url: "https://timeguessr.com/", category: "History & Time", desc: "Guess the year and location of a historical photo." }
];

// 2. State Management (Dark Mode & Daily Reset)
function initializeApp() {
    const themeBtn = document.getElementById('theme-toggle');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.textContent = '☀️ Light Mode';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeBtn.textContent = '☀️ Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            themeBtn.textContent = '🌙 Dark Mode';
        }
    });

    const today = new Date().toDateString();
    if (localStorage.getItem('puzzleDate') !== today) {
        gamesList.forEach(game => localStorage.removeItem(game.name + "_done"));
        localStorage.setItem('puzzleDate', today);
    }
}

// 3. Helper to create a game card
function createCardElement(game) {
    const isDone = localStorage.getItem(game.name + "_done") === 'true';
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFav = favorites.includes(game.name);

    const card = document.createElement('div');
    card.className = `game-card ${isDone ? 'done' : ''}`;
    
    card.innerHTML = `
        <div class="card-header">
            <div class="title-area">
                <button class="fav-btn ${isFav ? 'favorited' : ''}" data-game="${game.name}" title="Add to Favourites">
                    ★
                </button>
                <a href="${game.url}" target="_blank">${game.name}</a>
            </div>
            <label class="switch" title="Mark as done">
                <input type="checkbox" class="done-toggle" data-game="${game.name}" ${isDone ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        <p>${game.desc}</p>
    `;
    return card;
}

// 4. Logic to build the page
function renderGames() {
    const container = document.getElementById('game-container');
    container.innerHTML = ''; // Clear out the container for re-rendering
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // --- ALWAYS Render Favourites Section ---
    const favSection = document.createElement('div');
    favSection.className = 'category-section';
    
    // Check if empty, and show the message if it is
    if (favorites.length === 0) {
        favSection.innerHTML = `
            <h2>⭐ My Favourites</h2>
            <p class="empty-message">Click the star on a card below to add games to your favourites for quick access!</p>
        `;
    } else {
        favSection.innerHTML = `
            <h2>⭐ My Favourites</h2>
            <div class="games-grid"></div>
        `;
        const grid = favSection.querySelector('.games-grid');
        const favGames = gamesList.filter(game => favorites.includes(game.name));
        
        favGames.forEach(game => {
            grid.appendChild(createCardElement(game));
        });
    }
    container.appendChild(favSection);

    // --- Render All Other Categories ---
    const categories = [...new Set(gamesList.map(game => game.category))];
    
    categories.forEach(category => {
        const section = document.createElement('div');
        section.className = 'category-section';
        section.innerHTML = `<h2>${category}</h2><div class="games-grid"></div>`;
        
        const grid = section.querySelector('.games-grid');
        const categoryGames = gamesList.filter(game => game.category === category);
        
        categoryGames.forEach(game => {
            grid.appendChild(createCardElement(game));
        });
        container.appendChild(section);
    });

    attachCardListeners();
}

function attachCardListeners() {
    document.querySelectorAll('.done-toggle').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const gameName = this.getAttribute('data-game');
            const cards = document.querySelectorAll(`[data-game="${gameName}"]`);
            
            if (this.checked) {
                localStorage.setItem(gameName + "_done", 'true');
                cards.forEach(btn => btn.closest('.game-card').classList.add('done'));
                document.querySelectorAll(`.done-toggle[data-game="${gameName}"]`).forEach(t => t.checked = true);
            } else {
                localStorage.removeItem(gameName + "_done");
                cards.forEach(btn => btn.closest('.game-card').classList.remove('done'));
                document.querySelectorAll(`.done-toggle[data-game="${gameName}"]`).forEach(t => t.checked = false);
            }
        });
    });

    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const gameName = this.getAttribute('data-game');
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            
            if (favorites.includes(gameName)) {
                favorites = favorites.filter(name => name !== gameName);
            } else {
                favorites.push(gameName);
            }
            
            localStorage.setItem('favorites', JSON.stringify(favorites));
            renderGames(); 
        });
    });
}

// 5. Logic for the Random Button
document.getElementById('random-btn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * gamesList.length);
    const randomGame = gamesList[randomIndex];
    window.open(randomGame.url, '_blank');
});

// Run our setup functions
initializeApp();
renderGames();