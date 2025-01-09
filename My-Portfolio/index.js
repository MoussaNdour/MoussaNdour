let l_icone_menu=document.getElementById('icone_menu');


//
function gestion_menu()
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