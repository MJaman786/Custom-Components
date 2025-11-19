// const dropdownHead = document.querySelector('.dropdown-head');
// const dropdownBody = document.querySelector('.dropdown-body');
// const dropIcon = document.querySelector('.drop-icon');

// isopen = false;

// dropdownHead.addEventListener('click', () => {
//     if (isopen) {
//         dropdownBody.style.maxHeight = '0px';
//         dropIcon.textContent = 'arrow_drop_up';
//         isopen = false;
//     } else {
//         dropdownBody.style.maxHeight = '300px';
//         dropIcon.textContent = 'arrow_drop_down';
//         isopen = true;
//     }
// })
// const head = document.querySelector('.head');
// const valueText = document.querySelectorAll('.value-text');
// valueText.forEach((valueText)=>{
//     valueText.addEventListener('click', (e)=>{
//         let value  = valueText.textContent;
//         head.innerHTML = value;
//         dropdownBody.style.maxHeight = '0px';
//         isopen = false;
//     })
// })

const dropdownHead = document.querySelectorAll('.dropdown-head');
dropdownHead.forEach((dropdownHead) => {
  let isShow = false;
  const dropdownBody = dropdownHead.parentElement.querySelector('.dropdown-body');
  dropdownHead.addEventListener('click', () => {
    if (isShow) {
      dropdownBody.style.maxHeight = '0px';
      isShow = false;
    } else {
      dropdownBody.style.maxHeight = '300px';
      isShow = true;
    }
  })

  const dropItem = dropdownBody.querySelectorAll('.drop-item');
  const head = dropdownHead.querySelector('.head');
  dropItem.forEach((dropItem) => {
    dropItem.addEventListener('click', () => {
      let value = dropItem.textContent;
      head.innerHTML = value;
      dropdownBody.style.maxHeight = '0px';
      isShow = false;
    })
  })

});