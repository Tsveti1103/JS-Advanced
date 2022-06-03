function lockedProfile() {
    //user1HiddenFields
    Array.from(document.querySelectorAll('.profile button')).forEach(b=>b.addEventListener('click',show))

    function show(ev){
        const profile = ev.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value = "unlock"]').checked;
        if(isActive){
            let div =  profile.querySelector('div');
            if(ev.target.textContent == 'Show more'){
                div.style.display = 'block';
                ev.target.textContent = 'Hide it';
            }else if(ev.target.textContent == 'Hide it') {
                div.style.display = 'none';
                ev.target.textContent = 'Show more';
            }
          
        }
    }
}