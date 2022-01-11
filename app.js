document.addEventListener('click', e => {
    const dropDownBtn = e.target.matches("[data-dd-btn");

    if(!dropDownBtn && e.target.closest('[data-dd]') != null) return

    let currentDDBox 
    if(dropDownBtn) {
      currentDDBox = e.target.closest('[data-dd]')
      currentDDBox.classList.toggle('active')
    }

    document.querySelectorAll('[data-dd].active').forEach(dropdown => {
        if(dropdown === currentDDBox) return
            dropdown.classList.remove('active')
        
    })
})