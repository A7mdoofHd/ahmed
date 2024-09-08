function changeColorByUsername(ahmed, blue) {
  // البحث عن جميع العناصر التي تحتوي على النص المحدد
  const elements = document.querySelectorAll("*:contains('" + ahmed + "')");

  // تغيير لون النص للعنصر الأول الذي تم العثور عليه
  if (elements.length > 0) {
    elements[0].style.color = blue;
  } else {
    console.log("لم يتم العثور على اسم المستخدم");
  }
}

// مثال للاستخدام:
changeColorByUsername("علي", "blue"); // تغيير لون النص "علي" إلى الأزرق
