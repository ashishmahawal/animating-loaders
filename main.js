let STOP_ANIMATION = false;
async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
 function setStopAnimation() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  STOP_ANIMATION = true;
}

async function rotating_slash(logline) {
    STOP_ANIMATION = false;
  let slash_arr = ["|", "/", "─", "\\"];
  let i = 0;
  while (!STOP_ANIMATION) {
    i = i % 4;
    await sleep(100);
    if (logline && !STOP_ANIMATION) {
      printProgress(`${logline} ${slash_arr[i]}`);
    }
    i++;
  }
}
async function filling_bar(logline) {
    STOP_ANIMATION = false;
  let filling_bar = "▰";
  while (!STOP_ANIMATION) {
    await sleep(150);
    if (logline && !STOP_ANIMATION) {
      printProgress(`${logline} ${filling_bar}`);
      filling_bar += "▰";
    }
  }
}
async function seconds_meter(logline) {
    STOP_ANIMATION = false;
    let number = 0
    let delta = 1;
    while (!STOP_ANIMATION) {
      await sleep(100);
      if (logline && !STOP_ANIMATION) {
        printProgress(`${logline} ${number/10}s`);
        number+=1;
      }
    }
    return number+delta;
  }

function printProgress(progress) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress);
}

module.exports = {
  rotating_slash,
  sleep,
  setStopAnimation,
  filling_bar,
  seconds_meter
};
