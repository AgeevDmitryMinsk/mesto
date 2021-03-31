const showInputError = (form, input, configObj) => { // реализуем функцию, выводящую ошибку при невалидном поле ввода формы, с тремя параметрами: класс формы, класс поля ввода, объект настроек configObj;
  const error = form.querySelector(`#${input.id}-error`); // присваиваем переменной идентификатор текстового контейнера соответсвующего поля ввода формы;
  error.textContent = input.validationMessage; // присваиваем текстовому содержимому  найденного контейнера текст стандартной ошибки поля ввода;
  input.classList.add(configObj.inputErrorClass); // добавляем полю ввода соответствующий класс, используемый при ошибке;
  error.classList.add(configObj.errorClass) // configObj.errorClass = 'popup__error_visible'
  
}
const hideInputError = (form, input, configObj) => { // реализуем функцию, скрывающую ошибку при валидном поле ввода формы, с тремя параметрами: класс формы, класс поля ввода, объект настроек;
  const error = form.querySelector(`#${input.id}-error`); // присваиваем переменной идентификатор текстового контейнера соответсвующего поля ввода формы;
  error.textContent = ''; // присваиваем текстовому содержимому  найденного контейнера пустую строку;
  input.classList.remove(configObj.inputErrorClass); // удаляем у поля ввода соответствующий класс, используемый при ошибке;
}
  
const checkInputValidity = (form, input, configObj) => { // реализуем функцию, проверяющую валидность поля ввода формы, с тремя параметрами: класс формы, класс поля ввода, объект настроек;
  if(input.validity.valid) { // если поле ввода валидно -
  hideInputError(form, input, configObj); // вызываем функцию hideInputError,
  } else { // если нет -
  showInputError(form, input, configObj); // вызываем функцию showInputError;
  }
}
  
const setButtonState = (button, isActive, configObj) => { // реализуем функцию, переключающую состояние кнопки отправки формы, с тремя параметрами: класс кнопки, состояние кнопки, объект настроек;
  if (isActive) { // если кнопка активна -
    button.classList.remove(configObj.inactiveButtonClass); // удаляем у кнопки соответствующий класс, используемый при ошибке,
    button.disabled = false; // изменяем у кнопки соответствующий атрибут;
    } else { // если кнопка неактивна -
    button.classList.add(configObj.inactiveButtonClass); // добавляем кнопке соответствующий класс, используемый при ошибке,
    button.disabled = true; // изменяем у кнопки соответствующий атрибут (делаем неактивной);
    }
}
  
const setEventListener = (form, configObj) => { // реализуем функцию, добавляющую "слушатель" события "input" всем полям ввода формы, с двумя параметрами: класс формы, объект настроек;
  const inputList = form.querySelectorAll(configObj.inputSelector); // формируем из полей вода Node List;
  const submitButton = form.querySelector(configObj.submitButtonSelector); // присваиваем переменной класс кнопки отправки формы;
  inputList.forEach(input => { // перебираем поля ввода формы,
  input.addEventListener('input', () => { // каждому полю ввода добавляем "слушатель" события "input",
    checkInputValidity(form, input, configObj); // проверяем валидность каждого поля ввода,
    setButtonState(submitButton, form.checkValidity(), configObj); // переключаем состояние кнопки отправки формы в зависимости от валидности формы;
    });
  });
}
  
const validationConfig = (configObj) => { // реализуем функцию, осуществляющую проверку всех форм проекта; с аргументом в виде объекта configObj
  const forms = document.querySelectorAll(configObj.formSelector); // формируем из форм проекта Node List; т.е configObj.formSelector = '.popup__form'
  
  forms.forEach(form => { // перебираем формы методом forEach,
    setEventListener(form, configObj); // вызываем функцию setEventListener,
    form.addEventListener('submit', (evt) => { // каждой форме добавляем "слушатель" события "submit",
      evt.preventDefault(); // отменяем стандартную отправку формы,
      });
  
    const submitButton = form.querySelector(configObj.submitButtonSelector); // присваиваем переменной класс кнопки отправки формы;
    setButtonState(submitButton, form.checkValidity(), configObj); // вызываем функцию setButtonState;
    });
}

validationConfig({ 
  formSelector: '.popup__form', // т.е configObj.formSelector = '.popup__form'  - 2шт
  inputSelector: '.popup__input', // т.е configObj.inputSelector = '.popup__form' - 4 шт
  submitButtonSelector: '.popup__button', // - 2 кнопки сохранить, по 1 в каждом попапе
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible' // т.е. configObj.errorClass = 'popup__error_visible'
});


