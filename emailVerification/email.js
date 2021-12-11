setInterval(()=>{
    let txt = document.getElementById('text').value;
    let regX = /^([a-z 0-9 \.-]+)@([a-z 0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/;  // E-mail pattern
    let indicator = document.getElementById('indicator');
    if (regX.test(txt)) {
        indicator.style.background = 'green';
        indicator.style.boxShadow = '0px 0px 6px 4px green';
    } else {
        indicator.style.background = 'red';
        indicator.style.boxShadow = '0px 0px 6px 4px red';
    }
}, 1000);