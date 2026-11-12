// === Contact form → WhatsApp ===
    function handleSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      const text = `Hi 7 Sense! 👋\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
      const url = `https://wa.me/8801789583996?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
