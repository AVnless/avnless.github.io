// Функция для фильтрации информации по объектам
function filterEngines() {
  var input = document.getElementById('searchInput').value.toLowerCase(); // Получаем значение текстового поля поиска и приводим его к нижнему регистру
  var engineBlocks = document.getElementsByClassName('engine-block'); // Получаем все элементы с классом 'engine-block'

  // Проходим по каждому блоку двигателя и проверяем, содержит ли он введенный текст
  for (var i = 0; i < engineBlocks.length; i++) {
    var engineName = engineBlocks[i].getElementsByClassName('engine-name')[0].innerText.toLowerCase(); // Получаем название двигателя и приводим его к нижнему регистру

    // Проверяем, содержит ли название двигателя введенный текст
    if (engineName.indexOf(input) > -1) {
      engineBlocks[i].style.display = ''; // Отображаем блок двигателя, если он соответствует поисковому запросу
    } else {
      engineBlocks[i].style.display = 'none'; // Скрываем блок двигателя, если он не соответствует поисковому запросу
    }
  }
}

// Обработчик события для текстового поля поиска
document.getElementById('searchInput').addEventListener('input', filterEngines);
