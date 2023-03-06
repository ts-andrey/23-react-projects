export const scoreHeaderText = (scores, lang) => {
  switch (lang) {
    case eng: return `Congratulations! You earned ${scores} point(s) by taking this quiz!`;
    case ru: return `Поздравляю! Вам удалось набрать в викторине следующее количество очков: ${scores}`;
  }
}
export const scoreSubheaderText = {
  eng: 'Please provide the name under which you would like to save your result.',
  ru: 'Пожалуйста укажите имя под которым Вы хотите сохранить свой результат.',
}

export const scoreLabelText = {
  eng: 'Your name:',
  ru: 'Ваше имя:',
}

export const btnConfirmText = {
  eng: 'Confirm',
  ru: 'Подтвердить',
}
export const btnCancelText = {
  eng: 'Cancel',
  ru: 'Отменить',
}