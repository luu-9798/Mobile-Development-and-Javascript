//For loop
for (let i = 0; i <= 5; ++i) {
    if (i < 5) {
        console.log(i+1)
    } else {
        console.log('Counting completed!')
    }
}

//For loop reverse
for (let i = 5; i >= 0; --i) {
    if (i > 0) {
        console.log(i)
    } else {
        console.log('Countdown finished!')
    }
}

//While loop
let i = 0;
while (i <= 5) {
    if (i < 5) {
        console.log(i+1)
    } else {
        console.log('Counting completed!')
    }
    ++i;
}

//While loop reverse
while (i > 0) {
    if (i > 1) {
        console.log(i-1)
    } else {
        console.log('Countdown finished!')
    }
    --i;
}

//While loop year
while (i < 5) {
    console.log(2018+i)
    ++i
}