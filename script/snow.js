const snowProvider = document.querySelector('[snowProvider]');

const createSnowflake = () => {
    const div = document.createElement('div');
    div.classList.add('snow');
}

const snowstorm = (elementsCount) => {
    console.log(snowProvider)
    if(!snowProvider) return;

    for(let i = 0; i < elementsCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snow');

        snowProvider.appendChild(snowflake);
    }
}

snowstorm(256);