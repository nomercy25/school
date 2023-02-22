 // Получаем элемент поля ввода
 var input = document.getElementById("myInput");

 // Устанавливаем курсор в конец поля ввода с заданным отступом слева
 setCursorPosition(input, input.value.length);

 // Функция установки курсора в заданное место
 function setCursorPosition(input, position) {
   // Проверяем поддерживается ли свойство selectionStart
   if (input.setSelectionRange) {
     // Устанавливаем курсор в заданную позицию
     input.setSelectionRange(position, position);
   } else if (input.createTextRange) {
     // Для IE8 и ниже
     var range = input.createTextRange();
     range.collapse(true);
     range.moveEnd("character", position);
     range.moveStart("character", position);
     range.select();
   }
 }