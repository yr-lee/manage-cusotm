import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id' : '1',
  'image':'http://wcpcom.kr/images/common/sm.png',
  'name' : '홍길동',
  'birthday' : '543544',
  'gender' : '남자',
  'job' : '대학생111'
},
{
  'id' : '2',
  'image':'http://wcpcom.kr/images/common/sm.png',
  'name' : '이순신',
  'birthday' : '123414',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : '3',
  'image':'http://wcpcom.kr/images/common/sm.png',
  'name' : '광개토대왕',
  'birthday' : '222234',
  'gender' : '남자',
  'job' : '대학생'
}
]

class App extends Component{
  render(){
    return(
      <div>
        {customers.map(c=>{
        return <Customer
          id = {c.id}
          image = {c.image}
          name = {c.name}
          birthday = {c.birthday}
          gender = {c.gender}
          job = {c.job}
        />
      })}
      </div>
    )
  }
}

export default App;