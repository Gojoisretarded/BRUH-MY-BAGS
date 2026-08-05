// Contract Address Copy Logic
const CA_ADDRESS = "0xaEA567E5c40B7436bdd7C765eE54F89B6f0C84ab";

function copyCA() {
  navigator.clipboard.writeText(CA_ADDRESS).then(() => {
    showToast("Contract Address Copied!");
    
    // Update copy buttons temporarily
    const copyBtns = document.querySelectorAll('.copy-btn, button[onclick="copyCA()"]');
    copyBtns.forEach(btn => {
      const originalText = btn.innerHTML;
      btn.innerHTML = `<span>COPIED TO CLIPBOARD!</span>`;
      const originalBg = btn.style.background;
      btn.style.background = '#FFCC00';
      btn.style.color = '#000000';
      
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = originalBg;
        btn.style.color = '';
      }, 2000);
    });
  }).catch(err => {
    // Fallback if clipboard API is blocked
    const tempInput = document.createElement('input');
    tempInput.value = CA_ADDRESS;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast("Contract Address Copied!");
  });
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  
  toast.innerText = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Mobile Menu Toggle & Seamless Marquee
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Double marquee content for continuous scrolling animation
  const marqueeContent = document.querySelector('.marquee-content');
  if (marqueeContent) {
    marqueeContent.innerHTML += marqueeContent.innerHTML;
  }
});
