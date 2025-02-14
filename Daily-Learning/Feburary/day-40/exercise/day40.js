//More practice on conditional loopconst age = 22;
const valid = false;
const  NoAccess = true
if (!valid && NoAccess) {
    console.log("Welcome to the valut");
} else {
    console.log("Access Granted.");
}

const registered = true
const nonMember = false

if (!registered || nonMember) {
    console.log("Register to continue.");
} else {
    console.log("Claim your reward.");
}