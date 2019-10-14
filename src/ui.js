function activate_tab(tabs, pages, activetab)
{
    var key;
    for (key in tabs)
    {
        tabs[key].className = (key === activetab) ? "" : "inactive";
    }
    for (key in pages)
    {
        pages[key].className = (key === activetab) ? "tabbody" : "inactive tabbody";
    }
}

function show_settingspane(pane, cancelarea, show)
{
    pane.className = show ? "pane" : "pane inactive";
    cancelarea.style.display = show ? "initial" : "none";
}

export function init_ui()
{
    var tabs =
    {
        scenarios:      document.getElementById("scenariotab"),
        decks:          document.getElementById("deckstab")
    };
    var pages =
    {
        scenarios:      document.getElementById("scenariospage"),
        decks:          document.getElementById("deckspage")
    };

    var settingspane =      document.getElementById("settingspane");
    var settingsbtn =       document.getElementById("settingsbtn");
    var cancelarea =        document.getElementById("cancelarea");

    scenariotab.onclick = function(e)
    {
        activate_tab(tabs, pages, "scenarios");
    }

    deckstab.onclick = function(e)
    {
        activate_tab(tabs, pages, "decks");
    }

    settingsbtn.onclick = function(e)
    {
        show_settingspane(settingspane, cancelarea, true);
    }

    cancelarea.onclick = function(e)
    {
        show_settingspane(settingspane, cancelarea, false);
    }

    activate_tab(tabs, pages, "scenarios");

}