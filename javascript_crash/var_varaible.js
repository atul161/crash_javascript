//checking where the given no is prime or not
let given_no = 3;
let i
for (i = 2; i < given_no; i++) {
    if (given_no % i == 0) {
        console.log("Give no is not a prime");
        break;
    }
}

if (i == given_no) {
    console.log("Given  no is prime")
}