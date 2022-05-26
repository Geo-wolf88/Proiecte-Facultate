'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Helpers = use('Helpers')

//var xml = feed.xml({indent: true});

Route.on('/').render('welcome')
Route.on('/test').render('test')


Route.route('/test2', ({ request,response,view }) => {

  const query = request.get()
  console.log(query)
  let j ="ceva"
  let obj={'a':j}
  return response.send(view.render('test',obj))

  //
},['GET', 'POST'])

const Database = use('Database')


Route.get('/Students', async () => {
  return await Database.table('students').select('*')
})


Route.route('/Students/adauga',async ({ request,response,view }) => {
   const query = request.post()
        console.log(query)
if(query.fname  !=null && query.lname !=null && query.ldat !=null && query.lspec !=null && query.lan !=null && query !=null ){

     const userId = await Database
     .table('students')
     .insert({'Nume': query.fname,'Prenume':query.lname,'Data Nasterii':query.ldat,'Specializare':query.lspec,'An':query.lan,'Grupa':query.lgr })
}
     console.log(query.fname)






   return response.send(view.render('Form'))

},['GET', 'POST'])

Route.route('/Students/tabel', async ({ request,response,view }) => {
     const query = request.post()
     console.log(query)

     let students=await Database.table('students').select('*')
     console.log(students)

      return response.send(view.render('Tabel', {students: students}))

},['GET', 'POST'])

Route.route('/Students/adauga/profesori',async ({ request,response,view }) => {
   const query = request.post()
        console.log(query)
if(query.fname  !=null && query.lname !=null && query.ldat !=null && query.doc !=null && query.old !=null && query.stciv !=null ){

     const userId = await Database
     .table('prof')
     .insert({'Nume': query.fname,'Prenume':query.lname,'Data Nasterii':query.ldat,'Doctorat':query.doc,'Vechime':query.old,'StareCiv':query.stciv })
}
     console.log(query.fname)






   return response.send(view.render('Profesori'))

},['GET', 'POST'])

Route.route('/Students/tabel/profesori', async ({ request,response,view }) => {
     const query = request.post()
     console.log(query)

     let prof=await Database.table('prof').select('*')
     console.log(prof)

      return response.send(view.render('Tabprof', {prof: prof}))

},['GET', 'POST'])

Route.route('/Students/tabel/sterge', async ({ request,response,view }) => {

const query = request.get()
  console.log(query)

const deletedRowsCount = await Database

  .from('students')
  .where('id', query.id)
  .delete()
  let students=await Database.table('students').select('*')



      return response.send(view.render('Tabel', {students: students}))

},['GET', 'POST'])

Route.route('/Students/tabel/prof/sterge', async ({ request,response,view }) => {

const query = request.get()
  console.log(query)

const deletedRowsCount = await Database

  .from('prof')
  .where('id', query.id)
  .delete()
  let prof=await Database.table('prof').select('*')



      return response.send(view.render('Tabprof', {prof: prof}))

},['GET', 'POST'])


