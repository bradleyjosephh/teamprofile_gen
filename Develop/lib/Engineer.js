const Employee = require('./Employee.js')

class Engineer extends Employee  {
    constructor(name, id, email, role, github) {
    super(name, id, email, role)
    this.github = github
    }
    getGithub() {
        return this.github
      }
      getRole() {
        return "Engineer"
      }
}

module.exports = Engineer