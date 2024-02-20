const reviews = document.querySelectorAll('.review');
  const paginationItems = document.querySelectorAll('.pagination__item');

  // Функция для обновления видимости отзывов
  function updateReviews(targetIndex) {
    reviews.forEach((review, index) => {
      if (index === targetIndex) {
        review.style.display = 'flex'; // или 'block', в зависимости от вашей разметки
      } else {
        review.style.display = 'none';
      }
    });

    // Обновляем стиль кнопок пагинации
    paginationItems.forEach((item, index) => {
      if (index === targetIndex) {
        item.style.background = '#007AFF';
      } else {
        item.style.background = '#DDE0FF';
      }
    });
  }

  // Устанавливаем обработчики событий для кнопок пагинации
  paginationItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      updateReviews(index);
    });
  });

  // Инициализируем первый отзыв как активный
  updateReviews(0);