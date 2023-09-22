const Event =require('../models/event');

const test=(req,res) =>{
  res.json('test is working')
}
//event insert
const event = async (req, res) => {
    try {
      const { name, phonenumber, email, Ename, Etime, date, Npeople, theme, Fneed, Extra } = req.body;
  
      // Validation for required fields
       //check if name was entered
       if(!name){
        return res.json({
            error:'name is required'
        })
    };
    if(!address){
      return res.json({
          error:'address is required'
      })
  };
  if(!phonenumber ||phonenumber.length<10){
    return res.json({
        error:'phone Number required 10 numbers'
    })
  };
  if(!Ename){
    return res.json({
        error:'name is required'
    })
};
if(!Etime){
  return res.json({
      error:'time is required'
  })
};
if(!date){
  return res.json({
      error:'date is required'
  })
};
if(!Npeople){
  return res.json({
      error:' required'
  })
};
if(!theme){
  return res.json({
      error:' required'
  })
};
if(!Fneed){
  return res.json({
      error:' required'
  })
};
if(!Extra){
  return res.json({
      error:' required'
  })
};
    
    //check email
    const exist=await User.findOne({email})
    if(exist){
        return res.json({
            error:'email is taken already'
        })
    }

    const user=await User.create({
      name,
      address,
      phonenumber,
      email,
     Etime,
     date,
     Npeople,
     theme,
     Fneed,
     Extra,
    })
  
      return res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'insert failed' });
    }
  };
// Update user
const eventUpdate = async (req, res) => {
  const { id } = req.params;
  try {
      const { name, phonenumber, email, Ename, Etime, date, Npeople, theme, Fneed, Extra } = req.body;
      if(!name){
          return res.json({
              error:'name is required'
          })
      };
      if(!address){
        return res.json({
            error:'address is required'
        })
    };
    if(!phonenumber ||phonenumber.length<10){
      return res.json({
          error:'phon Number required 10 numbers'
      })
  };
  if(!email){
    return res.json({
        error:'Email is required!'
    })
} ;
if(!Ename){
  return res.json({
      error:'name is required'
  })
};
if(!Etime){
return res.json({
    error:'time is required'
})
};
if(!date){
return res.json({
    error:'date is required'
})
};
if(!Npeople){
return res.json({
    error:' required'
})
};
if(!theme){
return res.json({
    error:' required'
})
};
if(!Fneed){
return res.json({
    error:' required'
})
};
if(!Extra){
return res.json({
    error:' required'
})
};
      
    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        address,
        phonenumber,
        email,
       Etime,
       date,
       Npeople,
       theme,
       Fneed,
       Extra,
      },
      { new: true }
    );

    if (!user) {
      return res.json({
          error:'No User found'
      })
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    
  }
};
const eventDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndRemove(id);
    if (!user) {
      return res.json({
          error:'No User found'
      })
    }

    res.json({ message: 'User deleted' });
  } catch (error) {
    console.log(error);
 
  }
};

module.exports ={
  event,
  eventUpdate,
  eventDelete,

}