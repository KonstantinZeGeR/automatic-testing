import { strict as assert } from "node:assert";
import { capitalize } from "../src/capitalize.js";

assert.equal(capitalize("hello"), "Hello", "Функция возвращает строку с заглавной буквы");

assert.equal(capitalize(""), "", "Функция должна возвращать пустую строку");

console.log("Все тесты пройдены!");
