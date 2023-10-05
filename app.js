const display = document.querySelector("input");
const generate = document.querySelector("button");
const copy = document.querySelector(".copy");

const length = 11;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "012345679";
const special = "!@#$%^&*()><";
const all =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345679!@#$%^&*()><";

generate.addEventListener("click", () => {
  let password = "";
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += special[Math.floor(Math.random() * special.length)];

  while (password.length <= length) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  display.value = password;
});

copy.addEventListener("click", () => {
  display.select();
  document.execCommand("copy");
});
