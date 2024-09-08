const elements = $(users).find('.uzr:contains("jmaika")');

elements.addClass('hamedo', importantOrder);

function importantOrder(index) {
 
  return elements.eq(index).text().length;
}
