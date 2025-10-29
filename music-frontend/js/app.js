document.addEventListener('DOMContentLoaded', () => {
    console.log("Aplikasi Front-End UKM Band Tel-U siap.");

    const audioPlayer = document.getElementById('audio-player');
    const songList = document.getElementById('song-list');
    const currentSongTitle = document.getElementById('current-song-title');
    
    // URL API Spring Boot Anda (Akan digunakan nanti)
    const API_BASE_URL = 'http://localhost:8080/api'; 
    
    // --- Simulasi Interaksi ---

    // Menambahkan event listener pada tombol Putar statis
    songList.addEventListener('click', (e) => {
        if (e.target.innerText.includes('Putar')) {
            const songTitle = e.target.closest('li').querySelector('h5').innerText;
            
            // SIMULASI: Nanti akan diganti dengan fetch(API_BASE_URL + '/songs/{id}/stream')
            
            currentSongTitle.innerText = songTitle;
            audioPlayer.play();
            
            console.log(`Simulasi: Memutar lagu "${songTitle}"`);
        }
        
        if (e.target.innerText.includes('Like')) {
            alert('Simulasi: Lagu disukai. Nanti akan memanggil API POST /api/songs/{id}/like');
            e.target.classList.remove('btn-action-primary');
            e.target.classList.add('btn-danger');
            e.target.innerText = 'Liked';
        }
    });

    // Simulasi form feedback
    const feedbackForm = document.getElementById('feedback-form');
    // ... (nanti akan dikembangkan untuk memanggil POST /api/feedback)
});