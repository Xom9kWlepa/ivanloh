document.addEventListener('DOMContentLoaded', () => {    
    const letterI = document.getElementById('i');
    const letterV = document.getElementById('v');
    const letterA = document.getElementById('a');
    const letterN = document.getElementById('n');
    const photo1 = document.getElementById('photo1');
    const photo2 = document.getElementById('photo2');
    const photo3 = document.getElementById('photo3');
    const photo4 = document.getElementById('photo4');
    const perehodna2 = document.getElementById('perehodna2');
    const screenpervi = document.getElementById('1screen');
    const screenvtoroy = document.getElementById('2screen');

    perehodna2.addEventListener('mousedown', () => {
        screenpervi.style.display = 'none';
        screenvtoroy.style.display = 'flex';
    });

    letterI.addEventListener('mouseenter', () => {
        photo4.style.display = 'flex';
    });
    letterI.addEventListener('mouseleave', () => {
        photo4.style.display = 'none';
    });

    letterV.addEventListener('mouseenter', () => {
        photo3.style.display = 'flex';
    });
    letterV.addEventListener('mouseleave', () => {
        photo3.style.display = 'none';
    });

    letterA.addEventListener('mouseenter', () => {
        photo2.style.display = 'flex';
    });
    letterA.addEventListener('mouseleave', () => {
        photo2.style.display = 'none';
    });

    letterN.addEventListener('mouseenter', () => {
        photo1.style.display = 'flex';
    });
    letterN.addEventListener('mouseleave', () => {
        photo1.style.display = 'none';
    });

const vanya = document.getElementById('vanyastoit');
const krest = document.getElementById('krest');
const ashka = document.getElementById('ashka');

const eatSnd = new Audio('css/eat.mp3');
const vapeSnd = new Audio('css/vape.mp3');

ashka.addEventListener('mousedown', () => {
    vapeSnd.currentTime = 0;
    vapeSnd.play();

    krest.style.display = 'block';

    setTimeout(() => {
        krest.style.display = 'none';
    }, 3000);
});

const foodIds = ['banana1', 'energy', 'suhinichi'];

foodIds.forEach(id => {
    const item = document.getElementById(id);
    if (!item) return;

    item.onmousedown = function(e) {
        if (e.button !== 0) return;

        e.preventDefault();
        item.style.zIndex = 1000;
        item.style.transition = 'none'; 

        let startX = e.clientX;
        let startY = e.clientY;

        function onMouseMove(e) {
            let dx = e.clientX - startX;
            let dy = e.clientY - startY;
            item.style.transform = `translate(${dx}px, ${dy}px)`;
        }

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            
            const iR = item.getBoundingClientRect();
            const vR = vanya.getBoundingClientRect();

            const isHit = !(iR.right < vR.left || iR.left > vR.right || 
                            iR.bottom < vR.top || iR.top > vR.bottom);

            if (isHit) {
                item.classList.add('eating-anim');
                eatSnd.play();

                setTimeout(() => {
                    item.classList.remove('eating-anim');
                    item.style.transition = 'none'; 
                    item.style.transform = 'translate(0, 0)'; 
                }, 2000);
            } else {
                item.style.transition = 'transform 0.4s ease-out';
                item.style.transform = 'translate(0, 0)';
            }
            
            item.style.zIndex = 10;
            document.onmouseup = null;
        };
    };

    item.ondragstart = () => false;
});


})