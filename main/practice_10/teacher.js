import Person from "./person.js";

class Teacher extends Person {
	constructor(id, name, age, klasses) {
		super(id, name, age);
		this.klasses = klasses;
	}

	introduce() {
		let klassNum;
		if (this.klasses) {
			klassNum = this.klasses.map(klass => klass.number).join(", ");
		}
		return `${super.introduce()} I am a Teacher. I teach ` + (this.klasses ? "Class " + klassNum : "No Class") + ".";
  }
  
  isTeaching(student) {
    for (let i = 0; i < this.klassNum.length; i++) {
      return this.klassNum[i].isIn(student);
    }
  }
}
module.exports = Teacher;
