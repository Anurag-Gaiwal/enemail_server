const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sem",(req,res)=>{
	let data = [req.body.name,req.body.phone,req.body.query];
	console.log(data);
		
	let name = req.body.name;
	let txt = "Phone = " + req.body.phone + " Query " + req.body.query;
	
	let transporter = nodemailer.createTransport({
		service:"gmail",
		auth:{
			user:"anuraggaiwal0@gmail.com",
			pass:"ujeg ryva bucl bdhb"
		}
	})

	let mailOptions = {
		from : "shreesamarth123@gmail.com",
		to : "anuraggaiwal0@gmail.com",
		subject:"Enquiry form " + name,
		text : txt
	}
	
	transporter.sendMail(mailOptions,(err,info)=>{
		if(err){
			console.log("mail err",err);
			res.status(500).json(err);
		} else {
			console.log("Mail send ", info.response);
			res.status(200).json("Mail send")	
		}
	})
});

app.listen(9000,()=>{console.log("ready at 9000")})