const $output = document.getElementById("output");
const $meter = document.getElementById("meter");
let value = 0;
$output.innerHTML = value;
$meter.style.width = "0%";

function changeValue(step) {
    const nextValue = value + step;
    if (nextValue < 0 || nextValue > 20) {
        return;
    }

    
    value = nextValue;

    $output.innerHTML = value;
    $meter.style.width = `${value * 5}%`;
    const color =
        value >= 15 ? "#f00" : "#0f0";
    $meter.style.background = color;
    $meter.style.filter =
        `drop-shadow(0 0 2.5px ${color}) drop-shadow(0 0 10px ${color})`;
}

