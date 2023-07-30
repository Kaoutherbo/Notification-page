const markAllAsRead = document.querySelector('nav p');
const num = document.querySelector('.num');
const unread = document.querySelectorAll('.unread::after');

markAllAsRead.addEventListener('click', () => {
    const unreadConversations = document.querySelectorAll('.conver-unread');
    unreadConversations.forEach((conver) => {
      conver.style.backgroundColor = 'white';
    });
    num.style.display = 'none';

    unread.forEach((element) => {
      element.classList.add('read');
    });
  });
  