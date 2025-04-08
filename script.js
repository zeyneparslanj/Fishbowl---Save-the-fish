let fill = 90;
let intervalId = null;
const fishbowl = document.getElementById('fishbowl');
const fish = document.getElementById('fish');
const tap = document.getElementById('tap');

// Balık ölme ve dolum işlemi
const emptyingFn = () => setInterval(() => {
    fill = fill - 1;
    fishbowl.style = `--filling: ${fill}`;
    if (fill <= 0) {
        clearInterval(intervalId);
    } else if (fill < 20) {
        fish.classList.add('fishbowl__fish--dead');
    } else if (fill < 50) {
        fish.classList.add('fishbowl__fish--dying');
    } else {
        fish.classList.remove('fishbowl__fish--dying');
        fish.classList.remove('fishbowl__fish--dead');
    }
}, 50);

intervalId = emptyingFn();

// Musluk tıklama fonksiyonu
tap.addEventListener('click', () => {
    tap.classList.add('fishbowl__tap--active');
    setTimeout(() => tap.classList.remove('fishbowl__tap--active'), 500);
    if (fill <= 0) {
        intervalId = emptyingFn();
        fish.classList.add('fishbowl__fish--floating');
    }
    fill = Math.min(fill + 20, 90);
});

// Buton ve mesaj için HTML elemanları oluşturuluyor
const deathButton = document.createElement('button');
deathButton.id = 'deathButton';
deathButton.textContent = 'Balığı öldür';
document.body.appendChild(deathButton);

const message = document.createElement('div');
message.id = 'message';
document.body.appendChild(message);

// Butona tıklama işlemi
deathButton.addEventListener('click', () => {
    // Balık öldü
    fish.classList.add('fishbowl__fish--dead');

    // Mesajı ekrana yazdır
    message.textContent = 'Balığı susuz, beni aşksız bıraktın';
    
    // Mesajı görünür yap
    message.classList.add('show');
});
