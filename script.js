let batteryEl = document.getElementById("battery-level");
let chargeEl = document.getElementById("charge");
let fullEl = document.getElementById("full");
let chargingTextEl = document.getElementById("charging-text");
let chargingLevel = Math.ceil(Math.random() * 100);
let iconEl = document.createElement("i");
if (91 <= chargingLevel && chargingLevel <= 100) {
    batteryEl.style.width = chargingLevel + "px";
    batteryEl.style.backgroundColor = "green"
    chargeEl.textContent = chargingLevel + "%";
    chargingTextEl.textContent = chargingLevel + "%";
    if (chargingLevel === 100) {
        fullEl.textContent = "Charging is full please remove charger";
    }
} else if (71 <= chargingLevel && chargingLevel <= 90) {
    batteryEl.style.width = chargingLevel + "px";
    batteryEl.style.backgroundColor = "#76cfe8";

    chargeEl.textContent = chargingLevel + "%";
    chargingTextEl.textContent = chargingLevel + "%";

} else if (51 <= chargingLevel && chargingLevel <= 70) {
    batteryEl.style.width = chargingLevel + "px";
    batteryEl.style.backgroundColor = "#e5b7eb";
    chargeEl.textContent = chargingLevel + "%";
    chargingTextEl.textContent = chargingLevel + "%";
} else if (26 <= chargingLevel && chargingLevel <= 50) {
    batteryEl.style.width = chargingLevel + "px";
    batteryEl.style.backgroundColor = "#faf09b";
    chargeEl.textContent = chargingLevel + "%";
    chargingTextEl.textContent = chargingLevel + "%";
} else if (11 <= chargingLevel && chargingLevel <= 25) {
    batteryEl.style.width = chargingLevel + "px";
    batteryEl.style.backgroundColor = "orange";
    chargeEl.textContent = chargingLevel + "%";
    chargingTextEl.textContent = chargingLevel + "%";
} else if (0 <= chargingLevel && chargingLevel <= 10) {
    batteryEl.style.width = chargingLevel + "px";
    batteryEl.style.backgroundColor = "red";
    chargingTextEl.textContent = chargingLevel + "%";
    chargeEl.textContent = chargingLevel + "%";
    if (chargingLevel < 5) {
        fullEl.textContent = "please charge the battery";
    }
}
