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

// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Link copied!', 'success')
//   })
// }
// document.getElementById('CopyLink').onclick = CopyFunction;
// function CopyFunction() {
//     alert('Link copied');
// }

// //  
// ДЛЯ РАБОТЫ КОПИРОВАНИЯ ССЫЛКИ НА СПИСОК В БУФЕР ОБМЕНА 
// var copyEmailBtn = document.querySelector('.js-emailcopybtn');   
// copyEmailBtn.addEventListener('click', function(event) {  
//   // Выборка ссылки с электронной почтой 
//   var emailLink = document.querySelector('.js-emaillink');  
//   var range = document.createRange();  
//   range.selectNode(emailLink);  
//   window.getSelection().addRange(range);  
    
//   try {  
//     // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
//     var successful = document.execCommand('copy');  
//     var msg = successful ? 'successful' : 'unsuccessful';  
//     console.log('Copy email command was ' + msg);  
//   } catch(err) {  
//     console.log('Oops, unable to copy');  
//   }  
    
//   // Снятие выделения - ВНИМАНИЕ: вы должны использовать
//   // removeRange(range) когда это возможно
//   window.getSelection().removeAllRanges();  
// }); 