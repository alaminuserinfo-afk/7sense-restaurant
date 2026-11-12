// === Menu tabs ===
    const tabs = document.querySelectorAll('.menu-tab');
    const cats = document.querySelectorAll('.menu-category');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const cat = tab.dataset.cat;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        cats.forEach(c => {
          c.classList.remove('active');
          if (c.dataset.cat === cat) c.classList.add('active');
        });
      });
    });
