//Just another day of Happy Coding.


const congratulateMentor = (babyGender) => {
    if (babyGender === 'boy') {
        return 'Congratulations on the addition of a bouncing baby boy to your family!';
    } else if (babyGender === 'girl') {
        return 'Congratulations on the addition of a beautiful baby girl to your family!';
    } else {
        return 'Congratulations on the new addition to your family!';
    }
}

console.log(congratulateMentor('boy'));
