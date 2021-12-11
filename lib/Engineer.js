const Employee = require('./Develop/lib/Employee.js.js')

class Engineer extends Employee  {
    constructor(name, id, email, role, github) {
    super(name, id, email, role)
    this.github = github
    this.role = 'Engineers'
    }
    getGithub() {
        return this.github
      }
      getRole() {
        return "Engineer"
      }
}

module.exports = Engineer