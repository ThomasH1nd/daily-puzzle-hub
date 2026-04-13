// 1. Database of games (The Mega-List)
const gamesList = [
    // Word Puzzles
    { name: "Wordle", url: "https://www.nytimes.com/games/wordle/index.html", category: "Word Puzzles", desc: "Guess the 5-letter word in 6 tries." },
    { name: "Connections", url: "https://www.nytimes.com/games/connections", category: "Word Puzzles", desc: "Group words that share a common thread." },
    { name: "Contexto", url: "https://contexto.me/", category: "Word Puzzles", desc: "Find the secret word by sorting words by their context." },
    { name: "Minute Cryptic", url: "https://minutecryptic.com/", category: "Word Puzzles", desc: "Solve a daily bite-sized cryptic crossword clue." },
    { name: "Quordle", url: "https://merriam-webster.com/games/quordle", category: "Word Puzzles", desc: "Play four Wordles simultaneously." },
    { name: "Duotrigordle", url: "https://duotrigordle.com/", category: "Word Puzzles", desc: "Solve 32 wordles at the same time." },
	{ name: "Strands", url: "https://www.nytimes.com/games/strands", category: "Word Puzzles", desc: "Find the hidden thematic words in a grid of letters." },
    { name: "Lettered", url: "https://lettered.io/", category: "Word Puzzles", desc: "Slide letters to form the target words." },
    { name: "Common Three", url: "https://ponderclub.co/", category: "Word Puzzles", desc: "Find the word that connects three seemingly random words." },
    { name: "Pair Down", url: "https://pairdown.com/", category: "Word Puzzles", desc: "Pair words together based on associations." },
    { name: "WordGlyph", url: "https://wordglyph.xyz/", category: "Word Puzzles", desc: "Decode the symbols to find the hidden word." },
    { name: "Tango", url: "https://www.linkedin.com/games/", category: "Word Puzzles", desc: "Harmonize words on a grid in this LinkedIn daily game." },
    { name: "WordWavr", url: "https://wordwavr.app/", category: "Word Puzzles", desc: "A smooth, waveform-based daily word puzzle." },
    { name: "Llamagrama", url: "https://llamagrama.com/game", category: "Word Puzzles", desc: "A fun daily anagram puzzle." },
    { name: "Word Five", url: "https://playwordfive.com/", category: "Word Puzzles", desc: "Guess the 5-letter word." },
    { name: "Crosswordle", url: "https://crosswordle.com/", category: "Word Puzzles", desc: "Sudoku meets Wordle in a crossword grid." },
    { name: "Word Salad", url: "https://wordsalad.online/", category: "Word Puzzles", desc: "Swipe to find thematic hidden words." },
    { name: "Wordsweep", url: "https://wordsweep.io/", category: "Word Puzzles", desc: "Minesweeper mechanics applied to word finding." },
    { name: "Betweenle", url: "https://betweenle.com/", category: "Word Puzzles", desc: "Guess the word based on alphabetical ranges." },
    { name: "Mini Crossword", url: "https://ponderclub.co/mini-5x5", category: "Word Puzzles", desc: "A daily bite-sized crossword." },
    { name: "Letroso", url: "https://letroso.com/en/", category: "Word Puzzles", desc: "Guess the word using falling blocks." },
    { name: "Pixletters", url: "https://pixletters.com/", category: "Word Puzzles", desc: "Guess the word using pixelated hints." },
    { name: "Silly Little Codes", url: "https://playsillylittlegames.com/codes", category: "Word Puzzles", desc: "Crack the daily cipher code." },
    
    // Logic & Numbers
    { name: "Clues by Sam", url: "https://cluesbysam.com/", category: "Logic & Numbers", desc: "Use logic clues to find who's a criminal and who's innocent." }, 
	{ name: "Nerdle", url: "https://nerdlegame.com/", category: "Logic & Numbers", desc: "Like Wordle, but for math equations." },
    { name: "Sudoku", url: "https://sudoku.com/", category: "Logic & Numbers", desc: "Classic grid-based number placement puzzle." },
    { name: "KenKen", url: "https://www.kenkenpuzzle.com/", category: "Logic & Numbers", desc: "Math and logic puzzle similar to Sudoku." },
    { name: "Futoshiki", url: "https://www.futoshiki.org/", category: "Logic & Numbers", desc: "Logic puzzle based on greater/less than signs." },
    { name: "Pips", url: "https://www.nytimes.com/games/pips", category: "Logic & Numbers", desc: "A daily dice logic game." },
    { name: "Suko", url: "https://puzzlemadness.co.uk/suko/medium", category: "Logic & Numbers", desc: "Place numbers 1-9 so that adjacent grids match sums." },
    { name: "Sumplete", url: "https://sumplete.com/", category: "Logic & Numbers", desc: "Delete numbers from a grid to make the rows and columns add up." },
    { name: "Number Salad", url: "https://numbersalad.com/", category: "Logic & Numbers", desc: "A daily numbers and equations puzzle." },
    { name: "Matle", url: "https://matle.io/", category: "Logic & Numbers", desc: "A math-based daily guessing game." },
    { name: "Variant Sudoku", url: "https://logic-masters.de/raetselportal", category: "Logic & Numbers", desc: "Sudoku with incredibly unique rule twists." },
    
    // Grid & Logic Puzzles (Nikoli Style)
    { name: "Slitherlink", url: "https://www.puzzles-mobile.com/slitherlink", category: "Grid & Logic Puzzles", desc: "Connect dots to form a single continuous loop." },
    { name: "LITS", url: "https://www.puzzles-mobile.com/lits", category: "Grid & Logic Puzzles", desc: "Shade tetrominos so all shaded cells are connected." },
    { name: "Shikaku", url: "https://shikakuofthe.day/", category: "Grid & Logic Puzzles", desc: "Divide the grid into rectangles containing exactly one number." },
    { name: "Shingoki", url: "https://www.puzzles-mobile.com/shingoki", category: "Grid & Logic Puzzles", desc: "Draw a loop through all circles based on their colors." },
    { name: "Bridges", url: "https://www.puzzles-mobile.com/bridges", category: "Grid & Logic Puzzles", desc: "Connect all islands with the correct number of bridges." },
    { name: "Nonograms", url: "https://www.puzzles-mobile.com/nonograms", category: "Grid & Logic Puzzles", desc: "Picture logic puzzles using grid numbers (Picross)." },
    { name: "Kakuro", url: "https://www.puzzles-mobile.com/kakuro", category: "Grid & Logic Puzzles", desc: "A mathematical crossword puzzle." },
    { name: "Aquarium", url: "https://www.puzzles-mobile.com/aquarium", category: "Grid & Logic Puzzles", desc: "Fill regions with water to match the numbered clues." },
    { name: "Shaka Shaka", url: "https://www.puzzles-mobile.com/shaka-shaka", category: "Grid & Logic Puzzles", desc: "Place triangles to leave only rectangular white spaces." },
    { name: "Thermometers", url: "https://www.puzzles-mobile.com/thermometers", category: "Grid & Logic Puzzles", desc: "Fill thermometers to match the row and column totals." },
    { name: "Nori Nori", url: "https://www.puzzles-mobile.com/nori-nori", category: "Grid & Logic Puzzles", desc: "Shade dominoes so every region has exactly two shaded cells." },
    { name: "Star Battle", url: "https://www.puzzles-mobile.com/star-battle", category: "Grid & Logic Puzzles", desc: "Place stars so no two touch, even diagonally." },
    { name: "Masyu", url: "https://www.puzzles-mobile.com/masyu", category: "Grid & Logic Puzzles", desc: "Draw a loop navigating through black and white pearls." },
    { name: "Dominosa", url: "https://www.puzzles-mobile.com/dominosa", category: "Grid & Logic Puzzles", desc: "Find the locations of a full set of dominoes on a grid." },
    { name: "Kaku Rasu", url: "https://www.puzzles-mobile.com/kaku-rasu", category: "Grid & Logic Puzzles", desc: "Select cells to match row and column sums." },
    { name: "Galaxies", url: "https://www.puzzles-mobile.com/galaxies", category: "Grid & Logic Puzzles", desc: "Divide the grid into rotationally symmetric shapes." },
    { name: "Fillomino", url: "https://www.brainbashers.com/fillomino", category: "Grid & Logic Puzzles", desc: "Divide the grid into polyominoes matching their numbers." },
    { name: "Stitches", url: "https://www.puzzles-mobile.com/stitches", category: "Grid & Logic Puzzles", desc: "Connect regions with stitches based on numeric clues." },
    { name: "Light Up", url: "https://www.puzzles-mobile.com/light-up", category: "Grid & Logic Puzzles", desc: "Place lightbulbs to illuminate the entire grid." },
    { name: "Kurodoko", url: "https://www.puzzles-mobile.com/kurodoko", category: "Grid & Logic Puzzles", desc: "Determine which cells to shade so numbers see the right amount of white space." },
    { name: "Slant", url: "https://www.puzzles-mobile.com/slant", category: "Grid & Logic Puzzles", desc: "Draw diagonal lines so no loops are formed." },
    { name: "Tents", url: "https://www.puzzles-mobile.com/tents", category: "Grid & Logic Puzzles", desc: "Place tents attached to trees without them touching." },
    { name: "Hitori", url: "https://www.puzzles-mobile.com/hitori", category: "Grid & Logic Puzzles", desc: "Shade duplicate numbers in rows and columns." },
    { name: "Yin Yang", url: "https://www.puzzles-mobile.com/yin-yang", category: "Grid & Logic Puzzles", desc: "Fill the grid with black and white circles avoiding 2x2 blocks." },
    { name: "Heyawake", url: "https://www.puzzles-mobile.com/heyawake", category: "Grid & Logic Puzzles", desc: "Shade cells according to room numbers without blocking paths." },
    { name: "Tapa", url: "https://www.puzzles-mobile.com/tapa", category: "Grid & Logic Puzzles", desc: "Shade cells to form a single continuous wall." },
    { name: "Nurikabe", url: "https://www.puzzles-mobile.com/nurikabe", category: "Grid & Logic Puzzles", desc: "Shade cells to form a continuous sea around numbered islands." },
    { name: "Pipes", url: "https://www.puzzles-mobile.com/pipes", category: "Grid & Logic Puzzles", desc: "Rotate pieces to connect all pipes together." },
    { name: "Yajilin", url: "https://puzzlemadness.co.uk/yajilin/medium", category: "Grid & Logic Puzzles", desc: "Draw a continuous loop and shade cells based on directional clues." },
    { name: "Minesweeper", url: "https://www.puzzles-mobile.com/minesweeper", category: "Grid & Logic Puzzles", desc: "Use logic to find the hidden mines." },

    // Visual, Spatial & Games
    { name: "Waffle", url: "https://wafflegame.net/", category: "Visual & Spatial Puzzles", desc: "Rearrange the letters to form words in a grid." },
    { name: "Knotwords", url: "https://playknotwords.com/", category: "Visual & Spatial Puzzles", desc: "A logic-based anagram crossword puzzle." },
    { name: "Stackdown", url: "https://puzzlist.com/stackdown", category: "Visual & Spatial Puzzles", desc: "A spatial block stacking puzzle." },
    { name: "Circuits", url: "https://puzzmo.com/game/circuits", category: "Visual & Spatial Puzzles", desc: "Connect paths and nodes on a circuit board." },
    { name: "Train Tracks", url: "https://puzzlemadness.co.uk/traintracks/medium", category: "Visual & Spatial Puzzles", desc: "Lay tracks to connect the stations." },
    { name: "Battleships", url: "https://www.puzzles-mobile.com/battleships", category: "Visual & Spatial Puzzles", desc: "Use row and column clues to find the hidden fleet." },
    { name: "Queens", url: "https://queensgame.vercel.app/", category: "Visual & Spatial Puzzles", desc: "Place queens so no two attack each other." },
    { name: "Chess", url: "https://www.chess.com/", category: "Visual & Spatial Puzzles", desc: "Classic chess daily puzzles and games." },
    { name: "Chess Ranger", url: "https://puzzle-chess.com/chess-ranger-4", category: "Visual & Spatial Puzzles", desc: "Navigate the board using chess movement rules." },
    { name: "Glyph", url: "https://glyph.today/", category: "Visual & Spatial Puzzles", desc: "A daily visual symbol guessing game." },
    { name: "Retto Puzzle", url: "https://rettopuzzle.com/", category: "Visual & Spatial Puzzles", desc: "A spatial logic and shapes puzzle." },
    { name: "Fields", url: "https://inkwellgames.com/", category: "Visual & Spatial Puzzles", desc: "A logic and spatial reasoning game." },
    { name: "Stars", url: "https://inkwellgames.com/", category: "Visual & Spatial Puzzles", desc: "Place stars using spatial logic rules." },
    { name: "One Up Puzzle", url: "https://oneuppuzzle.com/", category: "Visual & Spatial Puzzles", desc: "Spatial grid shifting and logic puzzle." },

    // Trivia, Pop Culture & General
    { name: "Golfdle", url: "https://golfdle.app/", category: "Trivia & General", desc: "The daily golf guessing game." },
    { name: "Housle", url: "https://housle.house/", category: "Trivia & General", desc: "Guess the listing price of a house." },
    { name: "Worldle", url: "https://worldle.teuteuf.fr/", category: "Trivia & General", desc: "Guess the country based on its silhouette." },
    { name: "Globle", url: "https://globle-game.com/", category: "Trivia & General", desc: "Guess the hidden country using hot/cold distances." },
    { name: "Travle", url: "https://travle.earth/", category: "Trivia & General", desc: "Find the shortest route between two countries." },
    { name: "Citydle", url: "https://citydle.com/", category: "Trivia & General", desc: "Guess the global city using directional clues." },
    { name: "Framed", url: "https://framed.wtf/", category: "Trivia & General", desc: "Guess the movie from its still frames." },
    { name: "Box Office Game", url: "https://boxofficega.me/", category: "Trivia & General", desc: "Guess the top 5 weekend box office movies from a specific date." },
    { name: "Bandle", url: "https://bandle.app/", category: "Trivia & General", desc: "Guess the song as instruments are added one by one." },
    { name: "Chronophoto", url: "https://www.chronophoto.app/", category: "Trivia & General", desc: "Guess the exact year a historical photograph was taken." },
    { name: "TimeGuessr", url: "https://timeguessr.com/", category: "Trivia & General", desc: "Guess the year and location of a historical photo." },
    { name: "Redactle", url: "https://redactle.com/", category: "Trivia & General", desc: "Guess the hidden words to reveal a secret Wikipedia article." },
    { name: "Tradle", url: "https://oec.world/en/tradle/", category: "Trivia & General", desc: "Guess the country based on its treemap of exports." },
    { name: "Spotle", url: "https://spotle.io/", category: "Trivia & General", desc: "Guess the musical artist based on their Spotify stats." },
    { name: "Murdle", url: "https://murdle.com/", category: "Trivia & General", desc: "Solve a daily bite-sized murder mystery logic puzzle." },
    { name: "Costcodle", url: "https://costcodle.com/", category: "Trivia & General", desc: "Guess the exact price of a random Costco item." },
    { name: "Gamedle", url: "https://www.gamedle.wtf/", category: "Trivia & General", desc: "Guess the video game from its cover art, UI, or gameplay." },
    
    // Playlists & Speedruns
    { name: "Linkedin Speed Run", url: "https://www.linkedin.com/games/", category: "Playlists & Speedruns", desc: "Play all of LinkedIn's daily puzzles back to back." },
    { name: "Ponder C. Speed Run", url: "https://ponderclub.co/", category: "Playlists & Speedruns", desc: "Play all of Ponder Club's daily puzzles in a row." }
];

// 2. State Management 
let isInitialLoad = true;

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

// 3. Helper to create a game card (UPDATED with Labels)
function createCardElement(game) {
    const isDone = localStorage.getItem(game.name + "_done") === 'true';
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFav = favorites.includes(game.name);

    const hiddenGames = JSON.parse(localStorage.getItem('hiddenGames')) || [];
    const isHidden = hiddenGames.includes(game.name);

    const card = document.createElement('div');
    
    // Add CSS classes based on state
    card.className = 'game-card';
    if (isDone) card.classList.add('done');
    if (isHidden) card.classList.add('hidden-card');
    
    card.innerHTML = `
        <div class="card-header">
            <div class="title-area">
                <button class="fav-btn ${isFav ? 'favorited' : ''}" data-game="${game.name}" title="Add to Favourites">
                    ★
                </button>
                <a href="${game.url}" target="_blank">${game.name}</a>
            </div>
        </div>
        <p>${game.desc}</p>
        
        <div class="card-actions">
            <label class="action-label" title="Temporarily hide for today">
                <div class="switch">
                    <input type="checkbox" class="done-toggle" data-game="${game.name}" ${isDone ? 'checked' : ''}>
                    <span class="slider"></span>
                </div>
                <span>Mark as done today</span>
            </label>
            <button class="hide-btn label-btn ${isHidden ? 'hidden-active' : ''}" data-game="${game.name}" title="Permanently hide">
                🚫 <span>Don't choose this</span>
            </button>
        </div>
    `;
    return card;
}

// Function to render the Filter Checkboxes
function renderFilters() {
    const container = document.getElementById('filter-container');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    let currentlyChecked = [];
    if (!isInitialLoad) {
        currentlyChecked = Array.from(container.querySelectorAll('.filter-checkbox:checked')).map(cb => cb.value);
    }

    container.innerHTML = '';
    
    let allCats = [];
    if (favorites.length > 0) {
        allCats.push("⭐ My Favourites");
    }
    const standardCategories = [...new Set(gamesList.map(g => g.category))];
    allCats = allCats.concat(standardCategories);

    allCats.forEach(cat => {
        const label = document.createElement('label');
        label.className = 'filter-label';
        
        const isChecked = isInitialLoad ? true : currentlyChecked.includes(cat);

        label.innerHTML = `
            <input type="checkbox" class="filter-checkbox" value="${cat}" ${isChecked ? 'checked' : ''}>
            ${cat}
        `;
        container.appendChild(label);
    });
    
    isInitialLoad = false;
}

// 4. Logic to build the page
function renderGames() {
    const container = document.getElementById('game-container');
    container.innerHTML = ''; 
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // --- Render Favourites Section ---
    const favSection = document.createElement('div');
    favSection.className = 'category-section';
    
    if (favorites.length === 0) {
        favSection.innerHTML = `
            <div class="category-header">
                <h2>⭐ My Favourites</h2>
            </div>
            <p class="empty-message">Click the star on a card below to add games to your favourites for quick access!</p>
        `;
    } else {
        favSection.innerHTML = `
            <div class="category-header">
                <h2>⭐ My Favourites</h2>
                <button class="cat-random-btn" data-category="⭐ My Favourites" title="Random Favorite">🎲 Random</button>
            </div>
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
        section.innerHTML = `
            <div class="category-header">
                <h2>${category}</h2>
                <button class="cat-random-btn" data-category="${category}" title="Random in ${category}">🎲 Random</button>
            </div>
            <div class="games-grid"></div>
        `;
        
        const grid = section.querySelector('.games-grid');
        const categoryGames = gamesList.filter(game => game.category === category);
        
        categoryGames.forEach(game => {
            grid.appendChild(createCardElement(game));
        });
        container.appendChild(section);
    });

    renderFilters();
    attachCardListeners();
}

function attachCardListeners() {
    // 1. Done Toggles
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

    // 2. Favorite Stars
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

    // 3. NEW: Hide Buttons
    document.querySelectorAll('.hide-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const gameName = this.getAttribute('data-game');
            let hiddenGames = JSON.parse(localStorage.getItem('hiddenGames')) || [];
            
            if (hiddenGames.includes(gameName)) {
                // Unhide
                hiddenGames = hiddenGames.filter(name => name !== gameName);
            } else {
                // Hide
                hiddenGames.push(gameName);
            }
            
            localStorage.setItem('hiddenGames', JSON.stringify(hiddenGames));
            renderGames(); 
        });
    });

    // 4. Category Specific Random Buttons (UPDATED logic)
    document.querySelectorAll('.cat-random-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const catName = this.getAttribute('data-category');
            let pool = [];

            if (catName === "⭐ My Favourites") {
                const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                pool = gamesList.filter(game => favorites.includes(game.name));
            } else {
                pool = gamesList.filter(game => game.category === catName);
            }

            // Exclude Done and Hidden games from this specific pool
            const hiddenGames = JSON.parse(localStorage.getItem('hiddenGames')) || [];
            pool = pool.filter(game => {
                const isDone = localStorage.getItem(game.name + "_done") === 'true';
                const isHidden = hiddenGames.includes(game.name);
                return !isDone && !isHidden;
            });

            if (pool.length > 0) {
                const randomGame = pool[Math.floor(Math.random() * pool.length)];
                window.open(randomGame.url, '_blank');
            } else {
                alert("You have completed or hidden all games in this category!");
            }
        });
    });
}

// 5. Main Random Button Logic (UPDATED logic)
document.getElementById('random-btn').addEventListener('click', () => {
    const checkedBoxes = Array.from(document.querySelectorAll('.filter-checkbox:checked')).map(cb => cb.value);
    
    if (checkedBoxes.length === 0) {
        alert("Please select at least one category to randomize!");
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const hiddenGames = JSON.parse(localStorage.getItem('hiddenGames')) || [];
    let pool = [];

    gamesList.forEach(game => {
        const isFav = favorites.includes(game.name);
        const matchesCategory = checkedBoxes.includes(game.category);
        const matchesFavorite = isFav && checkedBoxes.includes("⭐ My Favourites");
        
        // Grab the status
        const isDone = localStorage.getItem(game.name + "_done") === 'true';
        const isHidden = hiddenGames.includes(game.name);

        if (matchesCategory || matchesFavorite) {
            // Check if it's already in the pool AND make sure it isn't done or hidden
            if (!pool.some(g => g.name === game.name) && !isDone && !isHidden) {
                pool.push(game);
            }
        }
    });

    if (pool.length === 0) {
        alert("You have finished or hidden all games in your selected categories!");
        return;
    }

    const randomGame = pool[Math.floor(Math.random() * pool.length)];
    window.open(randomGame.url, '_blank');
});

// Run our setup functions
initializeApp();
renderGames();