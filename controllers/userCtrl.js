var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res, next){
    let flag = false;
    console.log(req.body);
    users.forEach(function(user){
      if(user.name == req.body.name && user.password == req.body.password){
        flag = true;
        req.session.currentUser = user;
      }
    });
    if (flag) {
      res.send({userFound: true});
    }
    else{
      console.log('Invalid log-in');
      res.send({userFound: false});
    }

  }


};
