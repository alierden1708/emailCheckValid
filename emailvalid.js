let email = prompt("please enter a valid email");
let emptyEmail = email.split("");
let atindex = email.indexOf("@");
let dotindex = email.lastIndexOf(".");
num = true;
// let validChar = [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, _, +,.,@];
let validChar = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";
if (atindex < 1 || dotindex < atindex + 2 || dotindex + 2 >= email.lenth) {
  alert(" Invalid email, please enter valid mail");
  num = false;
} else {
  for (i = 0; i < email.length; i++) {
    if (validChar.search(emptyEmail[i]) == -1) {
      alert(" Invalid email, please enter valid mail");
      num = false;
    }
  }
  if ((num = true)) {
    console.log("valid email");
  }
}
