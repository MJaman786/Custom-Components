const acordianBody = document.querySelector('.acordian-body');



const acordianWrapper = document.querySelectorAll('.acordian-wrapper');
console.log(acordianWrapper);

acordianWrapper.forEach((acordianWrapper) => {
    const acordianBody = acordianWrapper.querySelector('.acordian-body');
    const icon = acordianWrapper.querySelector('.icon');
    const addIcon = acordianWrapper.querySelector('.add-icon');
    const acordianHead = acordianWrapper.querySelector('.acordian-head');

    let isVisible = false;
    acordianHead.addEventListener('click', () => {
        if (isVisible) {
            acordianBody.style.maxHeight = '0px';
            addIcon.style.transform = 'rotate(0deg)';
            icon.style.transform = 'scale(1)';
            isVisible = false;
        } else {
            acordianBody.style.maxHeight = acordianBody.scrollHeight + 'px';
            addIcon.style.transform = 'rotate(180deg)';
            icon.style.transform = 'scale(1.5)';
            isVisible = true;
        }

    })
})