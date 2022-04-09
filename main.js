let stop = false;
/**
 * Synchronous Sleep using Promise
 */
async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
/**
 * Clear Animation and Text from Stdout
 */
function stopAnimation() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  stop = true;
}
/**
 * Rotating Stick Animation
 * @param  logline {String to be appended before loading animation}
 */
async function rotating_stick(logline) {
  stop = false;
  let slash_arr = ["|", "/", "─", "\\"];
  let i = 0;
  while (!stop) {
    i = i % 4;
    await sleep(100);
    if (logline && !stop) {
      printLogline(`${logline} ${slash_arr[i]}`);
    }
    i++;
  }
}

/**
 * Filling Bar Animation
 * @param  logline {String to be appended before loading animation}
 */
async function filling_bar(logline) {
  stop = false;
  let filling_bar = "▰";
  while (!stop) {
    await sleep(150);
    if (logline && !stop) {
      printLogline(`${logline} ${filling_bar}`);
      filling_bar += "▰";
    }
  }
}

/**
 * Counting Seconds Animation
 * @param  logline {String to be appended before loading animation}
 */
async function seconds_meter(logline) {
  stop = false;
  let number = 0;
  let delta = 1;
  while (!stop) {
    await sleep(100);
    if (logline && !stop) {
      printLogline(`${logline} ${number / 10}s`);
      number += 1;
    }
  }
  return number + delta;
}

/**
 * Basketball loading animation
 * @param  logline {String to be appended before loading animation}
 */
async function basketball(logline) {
  stop = false;
  let unicodeNumber = 127936;
  let stringArr = [
    `${String.fromCodePoint(unicodeNumber)}`,
    ` ${String.fromCodePoint(unicodeNumber)}`,
  ];
  let i = 0;
  while (!stop) {
    await sleep(200);
    if (logline && !stop) {
      printLogline(`${logline} ${stringArr[i % 2]}`);
      i++;
    }
  }
}
/**
 * Method will create animation of unicode chars
 * @param {*} Logline 
 */
function printLogline(logline) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(logline);
}

module.exports = {
  rotating_stick,
  sleep,
  stopAnimation,
  filling_bar,
  seconds_meter,
  basketball,
};
