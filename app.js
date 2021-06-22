'use strict'
let t1=document.getElementById('table');
let table=document.createElement('table');
t1.appendChild(table);
function Student (studentname,studentcourse){
  this.studentname=studentname;
  this.studentcourse=studentcourse;
 
    
   
}
Student.info=[];
for(let i=0; i<Student.info.length; i++);{
    Student.info.push(this.studentname,this.studentcourse,this.grade);
}
Student.prototype.randomgrad=function() {
  let newgrad= Math.floor(Math.random() * 101);
  this.grade=newgrad;
};



function savingdata (){
    
  localStorage.setItem('alldata',JSON.stringify(Student.info));
}
savingdata();



function gitingdata(){
  let data=JSON.parse(localStorage.getItem('alldata'));
}
Student.prototype.render =function() {
  let thead=document.createElement('tr');
  table.appendChild(thead);

  let th=document.createElement('th');
  thead.appendChild(th);
  th.textContent='student name';
  let th1=document.createElement('th');
  thead.appendChild(th1);
  th.textContent='student grade';
  let th2=document.createElement('th');
  thead.appendChild(th2);
  th.textContent='grade';

  let tr2=document.createElement('tr');
  let td=document.createElement('td');
  tr2.appendChild(td);
  td.textContent=`${this.studentname}`;

  let td2=document.createElement('td');
  tr2.appendChild(td2);
  td.textContent=`${this.grade}`;
  let td3=document.createElement('td');
  tr2.appendChild(td3);
  td.textContent=`${this.studentcourse}`;


};


const studentform=document.getElementById('student');
studentform.addEventListener('submit',submiting);

function submiting(event){
  event.preventDefault();
  let sname= event.target.name.value;
  let scourse=event.target.course.value; 
}
let newstudent =new Student(sname ,scourse);

newstudent.randomgrad();
newstudent.render();

gitingdata();

