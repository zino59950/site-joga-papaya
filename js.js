function toggleInfo(element) {
    var playerInfo = element.nextElementSibling;
    playerInfo.classList.toggle("hidden");
}

document.getElementById("teamTitle").addEventListener("click", function() {
    var playerInfos = document.querySelectorAll('.player-info');
    playerInfos.forEach(function(info) {
        info.classList.toggle("hidden");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez l'élément à animer
    var startupElement = document.querySelector(".startup-animation");
    
    // Ajoutez la classe "visible" pour déclencher l'animation
    startupElement.classList.add("visible");
});
