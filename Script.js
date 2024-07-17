// document.addEventListener('DOMContentLoaded', () => {
//     const copyLink = document.getElementById('copyLink');

//     copyLink.addEventListener('click', (event) => {
//         event.preventDefault();
//         const link = copyLink.getAttribute('data-link');

//         navigator.clipboard.writeText(link).then(() => {
//             alert('Ссылка скопирована в буфер обмена!');
//         }).catch(err => {
//             console.error('Ошибка при копировании: ', err);
//         });
//     });
// });

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Link copied!', 'success')
  })
}
