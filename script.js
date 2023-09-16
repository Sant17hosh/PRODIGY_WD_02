let isRunning = false;
let startTime;
let elapsedTime = 0;
let interval;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTime, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
    const date = new Date(time);
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const milliseconds = date.getUTCMilliseconds();
    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0") +
        ":" +
        String(milliseconds).padStart(3, "0")
    );
}
