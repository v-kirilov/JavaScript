function calc(num) {
    console.log(num);
    num--;
    if (num==0) {
        return;
    }
    return calc(num)
}

calc(10);