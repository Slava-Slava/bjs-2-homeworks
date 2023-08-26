'use strict'

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (!callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.find(clock => clock.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			time,
			callback,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
	}

	getCurrentFormattedTime() {
		let HH = new Date().getHours().toString();
		let MM = new Date().getMinutes().toString();
		let resultTime = HH + ":" + MM;
		return resultTime
	}

	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((clock) => {
				if (this.getCurrentFormattedTime() === clock.time) {
					clock.canCall = false;
					clock.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((clock) =>
			clock.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

