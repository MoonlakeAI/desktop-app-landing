// Video modal functionality
const modal = document.getElementById('videoModal');
const btn = document.getElementById('videoButton');
const span = document.getElementsByClassName('close')[0];
const videoFrame = document.getElementById('videoFrame');

// Open modal
btn.onclick = function() {
    modal.style.display = 'block';
    // Replace with your video URL (YouTube, Vimeo, etc.)
    videoFrame.src = 'YOUR_VIDEO_URL_HERE';
}

// Close modal
span.onclick = function() {
    modal.style.display = 'none';
    videoFrame.src = '';
}

// Close when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        videoFrame.src = '';
    }
}
