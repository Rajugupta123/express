const registerUser = (req,res)=>{
    const username = req.body.name;
    const useremail = req.body.email;
    const userpass = req.body.password;    

    res.json({
            success:true,
            name:username,
            email:useremail,
            password:userpass,

        });
    };

module.exports = registerUser;