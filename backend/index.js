let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let employees = [  { 'no': 0, 'day': "Mon,Wed,Thu,sun", 'name': "Sarawut" ,'surname':"Junpan" ,'tel':"0897654321", 'mail':"sarawut@gmail.com"},
                  { 'no': 1, 'day': "Mon,Thu,Fri", 'name': "wuttidat",'surname':"Urassaya"  ,'tel':"0812345679",'mail':"songwut@gmail.com"},
                  { 'no': 2, 'day': "Wed,Thu,sun", 'name': "Weerapat",'surname':"jetomimut"  ,'tel':"0623457891",'mail':"weerapat@gmail.com"}
               ];
router.route('/employees')
    // get all employees
    .get((req, res) => res.json(employees))
    // insert a new employee
    .post((req, res) => {
    var employee = {};
    employee.no = employees.length > 0 ? employees[employees.length - 1].no + 1 : 0;
    employee.name = req.body.name
    employee.surname = req.body.surname
    employee.day = req.body.day
    employee.tel = req.body.tel
    employee.mail = req.body.mail
    employees.push(employee);
    res.json({ message: 'employees created!' })
    })
router.route('/employees/:employee_no')
    .get((req, res) => {
        let no = req.params.employee_no
        let index = employees.findIndex(employee => (employee.no === +no))
        res.json(employees[index])                   // get a employee
    })
    .put((req, res) => {                               // Update a bear
        let no = req.params.employee_no
        let index = employees.findIndex(employee => (employee.no === +no))
        employees[index].name = req.body.name;
        employees[index].surname = req.body.surname;
        employees[index].day = req.body.day;
        employees[index].tel = req.body.tel;
        employees[index].mail = req.body.mail;
        res.json({ message: 'employee updated!' + req.params.employee_no });
    })
    .delete((req, res) => {                   // Delete a bear
        let no = req.params.employee_no
        let index = employees.findIndex(employee => employee.no === +no)
        employees.splice(index, 1)
        res.json({ message: 'employee deleted: ' + req.params.employee_no });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log("Server is running"));