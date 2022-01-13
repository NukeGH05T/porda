const btnWhite = document.getElementById('white-bg');
const btnBlack = document.getElementById('black-bg');


function changeColor(color) {
	if(color == '#f5f5f5'){
        document.body.style.color = '#144a8b';
    } else if(color == '#181818'){
        document.body.style.color = '#FF4848';
    }
    document.body.style.backgroundColor = color;
}

btnWhite.addEventListener("click", () => {
    let color = '#f5f5f5';
    changeColor(color);
});

btnBlack.addEventListener("click", () => {
    let color = '#181818'
    changeColor(color);
});

document.onpaste = (evt) => {
    const dT = evt.clipboardData || window.clipboardData;
    const file = dT.files[ 0 ];
    console.log( file );
  };