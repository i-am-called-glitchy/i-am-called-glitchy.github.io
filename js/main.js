document.addEventListener('DOMContentLoaded', () => {
    console.log('Glitchy\'s site loaded');

    // Profile Picture Interaction
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        // List of expressions available in assets
        const expressions = [
            'assets/glitchkisser4k.png',
            'assets/smiling.png',
            'assets/confused.png',
            'assets/flustered.png',
            'assets/facepalm.png',
            'assets/sad.png'
        ];

        let currentIndex = 0;

        // Cycle images on click
        profilePic.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % expressions.length;
            profilePic.src = expressions[currentIndex];

            // Add a little pop animation class
            profilePic.classList.add('pop');
            setTimeout(() => profilePic.classList.remove('pop'), 200);
        });
    }

    // Cursor Glow Effect
    const cursorGlow = document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursorGlow.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(187, 154, 247, 0.25), rgba(72, 60, 180, 0.15) 40%, transparent 80%)`;
    });

    // 3D Tilt Effect
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate percentage from center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max rotation deg
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.classList.add('tilt-active');
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.classList.remove('tilt-active');

            // Allow transition to smooth the return
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
        });
    });
});
