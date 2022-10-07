const add = (a,b)=>{
    return a+b;
}

const err = () => {
  throw new Error('I am a new error');
}

const array = () => {
  return ['Bat'];
};


const promiseTest = (a,b) => {
  return new Promise((resolve, reject)=>{

    if(a-b>0){
        resolve('positive')
    }else{
        reject('negetive')
    }

  });
};





const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/users', (req,res)=>{

    res.status(200).json({

        users:[
            {
                name:'ketan',
                email:'ktn@mail.com',
                password:'123123'

            }
        ]

    });

});

app.listen(3000)



module.exports = {
  add,
  err,
  array,
  promiseTest,
  app
};