class Class {
	constructor(klass) {
		this.number = klass;
	}

	getDisplayName() {
		return `Class ${this.number}`;
	}

	isIn(student) {
		return student.klass === this;
	}

	assignLeader(student) {
		if (this.isIn(student)) {
			this.leader = student;
			if (this.leaderListener) {
        console.log(`I am ${this.leaderListener.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`);
			}
		} else {
			console.log("It is not one of us.");
		}
	}

	appendMember(student) {
		student.klass = this;
		if (this.joinListener) {
			console.log(`I am ${this.joinListener.name}. I know ${student.name} has joined Class ${student.klass.number}.`);
		}
	}

	registerAssignLeaderListener(teacher) {
		this.leaderListener = teacher;
	}

	registerJoinListener(teacher) {
		this.joinListener = teacher;
	}
}

module.exports = Class;
