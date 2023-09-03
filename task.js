const subscribeModalElement = document.getElementById('subscribe-modal');

if (getCookie('dontShowModal') !== 'true') {
    subscribeModalElement.classList.add('modal_active');

    document.querySelector('.modal__close').addEventListener('click', () => {
        subscribeModalElement.classList.remove('modal_active');
        setCookie('dontShowModal', 'true');
    });
} else {
    subscribeModalElement.classList.remove('modal_active');
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}
function getCookie(name) {
    const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith(name + '='));

    if (cookie) {
        return cookie.substring(name.length + 1);
    } else {
        return null;
    }
}