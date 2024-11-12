const add = document.querySelector('#btn');
const Sname = document.querySelector("#name");
const age = document.querySelector("#age");
const sec = document.querySelector("#class");
const roll = document.querySelector("#roll");
const std_list = document.querySelector("#student_list");
var display_msg = document.querySelector("#show_msg");

let Name = '';
let Sec ='a';
let Age ;
let Roll;
var Name_data,Sec_data,age_data,roll_data;
let valu = '';
let edittodo;
function add_student_name()
{   
    const user_name = Sname.value;
    const user_age =age.value;
    const user_sec = sec.value.trim();
    const user_roll = roll.value;
    
    if(user_name.length<=0 || user_age.length<=0 || user_sec.length<=0 || user_roll.length<=0 )
    {
        alert("Please fill all detail");
        return;
    }
    if(add.value==="Edit")
    {
        valu =  edittodo.target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
        edittodo.target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML= user_name;
        edittodo.target.previousSibling.previousSibling.previousSibling.innerHTML=user_age;
        edittodo.target.previousSibling.previousSibling.innerHTML = user_sec;
        edittodo.target.previousSibling.innerHTML = user_roll;
        edit_data(user_name,user_age,user_sec,user_roll);
        add.value = "ADD";
        Sname.value = '';
        age.value = '';
        sec.value = '';
        roll.value = '';

    }
    else
    {
        //create li 
        const li = document.createElement('li');
        //create user name
        const name_p = document.createElement('p');
        name_p.innerText = user_name;
        li.appendChild(name_p);

        //create user age
        const age_p = document.createElement('p');
        age_p.innerText = user_age;
        li.appendChild(age_p);
        //create user class
        const class_p = document.createElement('p');
        class_p.innerText = user_sec;
        li.appendChild(class_p);
        
        //create user roll_no
        const roll_p = document.createElement('p');
        roll_p.innerText = user_roll;
        li.appendChild(roll_p);

        //create Edit button
        const edit_btn = document.createElement('button');
        edit_btn.innerHTML = 'Edit';
        edit_btn.classList.add('edit_btn');
        li.appendChild(edit_btn);

        //create del button
        const del_btn = document.createElement('button');
        del_btn.innerHTML = 'Remove';
        del_btn.classList.add('del_btn');
        li.appendChild(del_btn);


        std_list.appendChild(li);

        // A indicate for add data in list
        display_msg.style.opacity = 1;
        setTimeout(()=>
        {
            display_msg.style.opacity = 0;
        },1000);

        Sname.value = '';
        age.value = '';
        sec.value = '';
        roll.value = '';

        save_data(user_name,user_age,user_sec,user_roll);
    }
}

function save_data(Name,Age,Sec,Roll)
{
   
    if(localStorage.getItem('Name_data')=== null)
    {
        Name_data = [];
       
        Sec_data = [];
        
        age_data = [];
        console.log(age_data);
      
        roll_data = []; 
      
    }
    else
    {
        Name_data = JSON.parse(localStorage.getItem('Name_data'));
        age_data = JSON.parse(localStorage.getItem('age_data'));
        roll_data = JSON.parse(localStorage.getItem('roll_data'));
        Sec_data = JSON.parse(localStorage.getItem('Sec_data'));
    }
    Name_data.push(Name);
    age_data.push(Age);
    Sec_data.push(Sec);
    roll_data.push(Roll);


    localStorage.setItem('Name_data',JSON.stringify(Name_data));
    localStorage.setItem('Sec_data',JSON.stringify(Sec_data));
    localStorage.setItem('age_data',JSON.stringify(age_data));
    localStorage.setItem('roll_data',JSON.stringify(roll_data));
}
function getlocaltodo()
{
    let Name_data,Sec_data,age_data,roll_data;
    if(localStorage.getItem('Name_data')=== null)
    {
        Name_data = [];
        Sec_data = [];
        age_data = [];
        roll_data = [];
    }
    else
    {
        Name_data = JSON.parse(localStorage.getItem('Name_data'));
        age_data = JSON.parse(localStorage.getItem('age_data'));
        roll_data = JSON.parse(localStorage.getItem('roll_data'));
        Sec_data = JSON.parse(localStorage.getItem('Sec_data'));
        let i=0;
        while(i<Name_data.length)
        {//create li 
          
          const li = document.createElement('li');
          //create user name
          const name_p = document.createElement('p');
          name_p.innerText = Name_data[i];
          li.appendChild(name_p);
  
          //create user age
          
          const age_p = document.createElement('p');
          console.log(age_data)
          age_p.innerText = age_data[i];
          li.appendChild(age_p);
  
          //create user class
          const class_p = document.createElement('p');
          class_p.innerText = Sec_data[i];
          li.appendChild(class_p);
          
          //create user roll_no
          const roll_p = document.createElement('p');
          roll_p.innerText = roll_data[i];
          li.appendChild(roll_p);
  
          //create Edit button
          const edit_btn = document.createElement('button');
          edit_btn.innerHTML = 'Edit';
          edit_btn.classList.add('edit_btn');
          li.appendChild(edit_btn);
  
          //create del button
          const del_btn = document.createElement('button');
          del_btn.innerHTML = 'Remove';
          del_btn.classList.add('del_btn');
          li.appendChild(del_btn);
  
            
          std_list.appendChild(li);
          i+=1;
        
        }
 
    }
}
function update(event)
{
    if(event.target.innerHTML==="Edit")
    {
        Sname.value = event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
        age.value = event.target.previousSibling.previousSibling.previousSibling.innerHTML;
        sec.value = event.target.previousSibling.previousSibling.innerHTML;
        roll.value = event.target.previousSibling.innerHTML;
        add.value = "Edit";
        edittodo = event;
    }
    else if(event.target.innerHTML==="Remove")
    {
       std_list.removeChild(event.target.parentElement);
       delete_data(event.target.parentElement);
    }
    
}

function delete_data(data)
{
    if(localStorage.getItem('Name_data')=== null)
        {
            Name_data = [];
           
            Sec_data = [];
            
            age_data = [];
          
            roll_data = []; 
          
        }
        else
        {
            Name_data = JSON.parse(localStorage.getItem('Name_data'));
            age_data = JSON.parse(localStorage.getItem('age_data'));
            roll_data = JSON.parse(localStorage.getItem('roll_data'));
            Sec_data = JSON.parse(localStorage.getItem('Sec_data'));
        }
    let text = data.children[0].innerHTML;
    let index = Name_data.indexOf(text);
    Name_data.splice(index,1);
    age_data.splice(index,1);
    Sec_data.splice(index,1);
    roll_data.splice(index,1);
    localStorage.setItem('Name_data',JSON.stringify(Name_data));
    localStorage.setItem('Sec_data',JSON.stringify(Sec_data));
    localStorage.setItem('age_data',JSON.stringify(age_data));
    localStorage.setItem('roll_data',JSON.stringify(roll_data));

}
function edit_data(N_data,A_data,S_data,R_data)
{
    Name_data = JSON.parse(localStorage.getItem("Name_data"));
    age_data = JSON.parse(localStorage.getItem('age_data'));
    roll_data = JSON.parse(localStorage.getItem('roll_data'));
    Sec_data = JSON.parse(localStorage.getItem('Sec_data'));
    let know_index = Name_data.indexOf(valu);
    Name_data[know_index] = N_data;
    age_data[know_index] = A_data; 
    Sec_data[know_index] = S_data; 
    roll_data[know_index] = R_data;
   localStorage.setItem('Name_data',JSON.stringify(Name_data));
    localStorage.setItem('Sec_data',JSON.stringify(Sec_data));
    localStorage.setItem('age_data',JSON.stringify(age_data));
    localStorage.setItem('roll_data',JSON.stringify(roll_data));
}
document.addEventListener('DOMContentLoaded',getlocaltodo);
add.addEventListener('click',add_student_name);
std_list.addEventListener('click',update);

