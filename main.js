/*
28. Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:

    1 <= haystack.length, needle.length <= 104
    haystack and needle consist of only lowercase English characters.



Here is a solution to your problem. This solution uses the `indexOf` method of the JavaScript String object. 
This method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. 
Returns -1 if the value is not found.

Вот решение вашей проблемы. В этом решении используется метод indexOf объекта String JavaScript.
Этот метод возвращает индекс в вызывающем объекте String первого вхождения указанного значения, начиная поиск с fromIndex.
Возвращает -1, если значение не найдено.

/**
 * Функция для поиска первого вхождения подстроки в строку
 * Function to find the first occurrence of a substring in a string
 * @param {string} haystack - строка, в которой ищем / the string we are searching in
 * @param {string} needle - подстрока, которую ищем / the substring we are searching for
 * @returns {number} - индекс первого вхождения или -1, если подстрока не найдена / the index of the first occurrence or -1 if the substring is not found
 */

function strStr(haystack, needle) {
  // Используем метод indexOf для поиска первого вхождения подстроки
  // Use the indexOf method to find the first occurrence of the substring
  return haystack.indexOf(needle);
}
/*

You can use this function like this:

console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1

Please note that this function does not check the constraints you mentioned. 
If you need to enforce these constraints, you should add appropriate checks at the beginning of the function.

Обратите внимание, что эта функция не проверяет упомянутые вами ограничения.
Если вам необходимо обеспечить соблюдение этих ограничений, вам следует добавить соответствующие проверки в начале функции.

*/
