const themeToggle = document.getElementById('theme-toggle');
const colorThemeToggle = document.getElementById('color-theme-toggle');
const animationSpeedToggle = document.getElementById('animation-speed-toggle');
const fontSizeToggle = document.getElementById('font-size-toggle');

const themes = ['default', 'ocean', 'sunset', 'forest'];
let currentThemeIndex = 0;

const animationSpeeds = [
    { name: 'normal', value: 1, icon: '⚡' },
    { name: 'fast', value: 0.5, icon: '⚡⚡' },
    { name: 'slow', value: 2, icon: '🐌' }
];
let currentSpeedIndex = 0;

const fontSizes = [
    { name: 'normal', value: 1, icon: 'Aa' },
    { name: 'large', value: 1.2, icon: 'Aa+' },
    { name: 'small', value: 0.9, icon: 'Aa-' }
];
let currentFontSizeIndex = 0;

function loadSettings() {
    const savedTheme = localStorage.getItem('theme');
    const savedColorTheme = localStorage.getItem('colorTheme');
    const savedSpeed = localStorage.getItem('animationSpeed');
    const savedFontSize = localStorage.getItem('fontSize');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('.icon').textContent = '☀️';
    }

    if (savedColorTheme) {
        currentThemeIndex = themes.indexOf(savedColorTheme);
        if (currentThemeIndex > 0) {
            document.body.className = document.body.className.replace(/theme-\w+/g, '');
            document.body.classList.add(`theme-${savedColorTheme}`);
        }
    }

    if (savedSpeed) {
        currentSpeedIndex = animationSpeeds.findIndex(s => s.value == savedSpeed);
        document.documentElement.style.setProperty('--animation-speed', savedSpeed);
        animationSpeedToggle.querySelector('.icon').textContent = animationSpeeds[currentSpeedIndex].icon;
    }

    if (savedFontSize) {
        currentFontSizeIndex = fontSizes.findIndex(f => f.value == savedFontSize);
        document.documentElement.style.setProperty('--font-size-multiplier', savedFontSize);
        fontSizeToggle.querySelector('.icon').textContent = fontSizes[currentFontSizeIndex].icon;
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    themeToggle.querySelector('.icon').textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

colorThemeToggle.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    
    if (currentThemeIndex > 0) {
        document.body.classList.add(`theme-${themes[currentThemeIndex]}`);
    }
    
    localStorage.setItem('colorTheme', themes[currentThemeIndex]);
    
    const themeNames = {
        'default': 'Default',
        'ocean': 'Ocean',
        'sunset': 'Sunset',
        'forest': 'Forest'
    };
    
    showToast(`Theme: ${themeNames[themes[currentThemeIndex]]}`);
});

animationSpeedToggle.addEventListener('click', () => {
    currentSpeedIndex = (currentSpeedIndex + 1) % animationSpeeds.length;
    const speed = animationSpeeds[currentSpeedIndex];
    
    document.documentElement.style.setProperty('--animation-speed', speed.value);
    animationSpeedToggle.querySelector('.icon').textContent = speed.icon;
    localStorage.setItem('animationSpeed', speed.value);
    
    showToast(`Animation Speed: ${speed.name}`);
});

fontSizeToggle.addEventListener('click', () => {
    currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
    const fontSize = fontSizes[currentFontSizeIndex];
    
    document.documentElement.style.setProperty('--font-size-multiplier', fontSize.value);
    fontSizeToggle.querySelector('.icon').textContent = fontSize.icon;
    localStorage.setItem('fontSize', fontSize.value);
    
    showToast(`Font Size: ${fontSize.name}`);
});

function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: fadeInUp 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeIn 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

loadSettings();
