// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    let countPass = userPassword.length
    let result = ''
    if (countPass < 6) {
        result = "Weak"
    } else if (countPass >= 6 && countPass <= 10){
        result = "Medium"
    } else if (countPass > 10){
        result = "Strong"
    }
    return result
}
    

console.log(checkPasswordStrength("ssswnalWadqQ"))
console.log(checkPasswordStrength("TechUp"))
console.log(checkPasswordStrength("abcde"))
