let l_icone_menu=document.getElementById('icone_menu');


//
let gestion_menu=()=>
{
    var menu = document.getElementById('menu');
    if (menu.style.display == 'block')
    {
        menu.style.display = 'none';
        l_icone_menu.innerHTML='menu';
    }
    else
    {
        menu.style.display = 'block';
        l_icone_menu.innerHTML='close';
    }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) =>{
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
});


//foncion de gestion des modals
let toggleModal=(boutonInfos, modalElement, fermerButton, modalContent)=>{
  boutonInfos.addEventListener('click', () => {
      modalContent.style.display = 'flex';
      modalContent.style.justifyContent = 'center';
      modalContent.style.alignItems = 'center';
  });

  fermerButton.addEventListener('click', () => {
      modalContent.style.display = 'none';
  });

  modalContent.addEventListener('click', () => {
      modalContent.style.display = 'none';
  });

  modalElement.addEventListener('click', (e) => {
      e.stopPropagation();
  });
}


//gestion du modal pour HTML et CSS

toggleModal(document.getElementById('bouton_infos_html_css'), 
            document.getElementById('le_modal_html_css'), 
            document.getElementById('bouton_fermer_html'), 
            document.getElementById('infos_par_rapport_a_mon_niveau_en_html_css'));


//gestion du modal pour JS
toggleModal(document.getElementById('bouton_infos_js'), 
            document.getElementById('le_modal_js'), 
            document.getElementById('bouton_fermer_js'), 
            document.getElementById('infos_niveau_javascript'));


//getion du formulaire
let regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let bouton_envoyer=document.getElementById('bouton_envoyer');

bouton_envoyer.addEventListener('click',(e)=>{
  e.preventDefault();
  let nom=document.getElementById('nom').value;
  
  let email=document.getElementById('email').value;
  let message=document.getElementById('message').value;
  if(document.getElementById('nom').value=='' || document.getElementById('email').value=='' || document.getElementById('message').value==''){
    alert('Tous les champs doivent etre remplis');
  }
  else if(!regex.test(email))
  {
    alert('Entrer un mail valide');
  }
  else
  {
    document.getElementById('nom').value='';
    document.getElementById('email').value='';
    document.getElementById('message').value='';
    alert('Votre message a bien ete envoyer');
    
  }
});
//gestion du modal pour bootstrap
toggleModal(document.getElementById('bouton_bootstrap'), 
            document.getElementById('le_modal_bootstrap'), 
            document.getElementById('bouton_fermer_bootstrap'), 
            document.getElementById('infos_niveau_bootstrap'));




//gestion du modal php
toggleModal(document.getElementById('bouton_infos_php'), 
            document.getElementById('le_modal_php'), 
            document.getElementById('bouton_fermer_php'), 
            document.getElementById('infos_niveau_php'));




/*gestion modal sql */
toggleModal(document.getElementById('le_bouton_infos_sql'), 
            document.getElementById('le_modal_sql'), 
            document.getElementById('bouton_fermer_sql'), 
            document.getElementById('infos_niveau_sql'));


//gestion du modal cpp
toggleModal(
  document.getElementById('le_bouton_infos_cpp'), 
            document.getElementById('le_modal_cpp'), 
            document.getElementById('bouton_fermer_cpp'), 
            document.getElementById('infos_niveau_cpp')
);

//getion du modal react
toggleModal(
  document.getElementById('le_bouton_infos_react'), 
            document.getElementById('le_modal_react'), 
            document.getElementById('bouton_fermer_react'), 
            document.getElementById('infos_niveau_react')
);