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
// // }); 
// document.getElementById('rename-item').addEventListener('click', function(event) {
//     event.preventDefault();
    
//     // Получаем кнопку
//     const mainButton = document.getElementById('main-button');
    
//     // Получаем текущий текст кнопки
//     const currentText = mainButton.innerText;
    
//     // Спрашиваем у пользователя новый текст
//     const newText = prompt("Enter new text:", currentText);
    
//     // Если пользователь ввел новый текст и он не пустой
//     if (newText !== null && newText.trim() !== '') {
//       mainButton.innerText = newText;
//     }
//   });
  // Находим все элементы с классом rename-item и добавляем обработчик события
document.querySelectorAll('.rename-item').forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Получаем id из атрибута data-id
      const id = this.getAttribute('data-id');
      
      // Находим соответствующую кнопку с таким же data-id
      const mainButton = document.querySelector('.main-button[data-id="' + id + '"]');
      
      // Получаем текущий текст кнопки
      const currentText = mainButton.innerText;
      
      // Спрашиваем у пользователя новый текст
      const newText = prompt("Enter new text:", currentText);
      
      // Если пользователь ввел новый текст и он не пустой
      if (newText !== null && newText.trim() !== '') {
        mainButton.innerText = newText;
      }
    });
  });
  