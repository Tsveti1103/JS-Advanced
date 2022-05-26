function slove(one,two,operator){
    let result;
    switch(operator){
        case '+': result =one+two; break;
        case '-': result =one-two; break;
        case '*': result =one*two; break;
        case '/': result =one/two; break;
        case '%': result =one%two; break;
        case '**': result =one**two; break;
    }
    console.log(result);
}
slove(5, 2, '/')