let captcha;
let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//console.log(alphabets.length);

generate = () => {
    let first=alphabets[Math.floor(Math.random()*alphabets.length)];
    let second=Math.floor(Math.random()*10);
    let third=Math.floor(Math.random()*10);
    let fourth=alphabets[Math.floor(Math.random()*alphabets.length)];
    let fifth=alphabets[Math.floor(Math.random()*alphabets.length)];
    let sixth=Math.floor(Math.random()*10);

    captcha= first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
    //console.log(captcha);

    document.getElementById('generated-captcha').value=captcha;
    document.getElementById('entered-captcha').value='';
}

check = () => {
    let userValue=document.getElementById('entered-captcha').value;

    if(userValue==captcha)
    {
        cg.innerText="Correct !!";
    }
    else
    {
        cg.innerText="Try Again !!";
        document.getElementById('entered-captcha').value='';
    }
}