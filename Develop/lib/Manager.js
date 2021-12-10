const Employee = require('./Employee.js')

class Manager extends Employee  {
    constructor(name, id, email, role, officeNumber) {
    super(name, id, email, role)
    this.officeNumber = officeNumber
    }
}

module.exports = Manager