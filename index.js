function clickAlert() {
    alert("that tickles")
}

const input = document.getElementById('input');

function addingEventListener() {
    input.addEventListener('click', clickAlert);
}

addingEventListener()

