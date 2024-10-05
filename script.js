function displayPlayerInfo(avatar, name, rating, playerCount, honor, honorText) {
    const playerContainer = document.createElement('div');
    playerContainer.className = 'player-container';

    const honorContainer = document.createElement('div');
    honorContainer.className = 'honor-container';

    const honorImg = document.createElement('img');
    honorImg.src = honor;
    honorImg.alt = 'Honor';
    honorImg.className = 'honor';

    const honorTextElement = document.createElement('div');
    honorTextElement.className = 'honor-text';
    honorTextElement.textContent = honorText;

    honorContainer.appendChild(honorImg);
    honorContainer.appendChild(honorTextElement);

    const avatarContainer = document.createElement('div');
    avatarContainer.className = 'avatar-container';

    const avatarImg = document.createElement('img');
    avatarImg.src = avatar;
    avatarImg.alt = 'Player Avatar';
    avatarImg.className = 'avatar';

    avatarContainer.appendChild(avatarImg);

    const playerInfo = document.createElement('div');
    playerInfo.className = 'player-info';

    const playerName = document.createElement('span');
    playerName.className = 'player-name';
    playerName.textContent = name;

    const playerRating = document.createElement('span');
    playerRating.className = 'player-rating';
    playerRating.textContent = `Rating: ${rating}`;


    playerInfo.appendChild(playerName);

    playerContainer.appendChild(honorContainer); // Honor section at the top
    playerContainer.appendChild(playerInfo);
    playerContainer.appendChild(playerRating); // Rating displayed at the bottom center
    playerContainer.appendChild(avatarContainer); // Avatar on the left

    document.getElementById('playerDisplay').appendChild(playerContainer);
}

displayPlayerInfo(
    'https://chunithm.wahlap.com/mobile/img/a134ec4921a7fb69.png', // Avatar URL
    'MikuNya♪', // Name
    '15.02', // Rating
    '70', // Player count
    'https://chunithm.wahlap.com/mobile/images/honor_bg_silver.png', // Honor image
    'しぐれうい' // Honor text
);