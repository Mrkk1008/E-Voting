const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const VoteModel = require("./models/vote");
const Vote = require("./models/vote");


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb+srv://krunal:krunal108@crud.r5ze7.mongodb.net/CRUD?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  aadhaarNo: String,
  password: String,
});


const User = new mongoose.model("User", userSchema);
// //Routes
app.get("/", (req, res) => {


});
app.post("/login", (req, res) => {
  const { email, password, aadhaarNo } = req.body;
  User.findOne({ aadhaarNo: aadhaarNo }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, aadhaarNo, password } = req.body;
  User.findOne({ aadhaarNo: aadhaarNo} , (err, user) => {
    if (user) {
      res.send({ message: "User already registerd with this aadhhar no" });
    } else {
      const user = new User({ name, email, aadhaarNo, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});


app.post("/insert", (req, res) => {
  const userId = req.body.userId;
  const voted = req.body.vote;
  const party = req.body.party;

  Vote.findOne({ userId: userId }, (err, votter) => {
    if (votter) {
      res.send({ message: "You have already votted!!" });
    } else {
      const vote = new VoteModel({ userId: userId, voted: voted, party: party });
      try {
        if(!party){
          res.send({ message: "Please select any party" });
        }else{
          vote.save();
          res.send({ message: "Votted Successfully!!" });
        }
      } catch (err) {
        console.log(err);
      }
    }

  })
});


app.get("/read/bjp", async (req, res) => {
  await Vote.countDocuments({party: "BJP"}, (err,result)=>{
    if(err){
      console.log(err);
    }else{
      //res.send({ success: true, result: result });
      res.json(result);
    }
  }) 
});

app.get("/read/aap", async (req, res) => {
  await Vote.countDocuments({ party: "AAP" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
});


app.get("/read/ncp", async (req, res) => {
  await Vote.countDocuments({ party: "NCP" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
});


app.get("/read/congress", async (req, res) => {
  await Vote.countDocuments({ party: "CONGRESS" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
});


app.get("/read/bsp", async (req, res) => {
  await Vote.countDocuments({ party: "BSP" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
});


app.get("/read/tmc", async (req, res) => {
  await Vote.countDocuments({ party: "TMC" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
});



app.get("/readUser", async (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  })
});


app.put("/updateUser",  (req, res) => {

  const newUserName = req.body.newUserName;
  const newEmail = req.body.newEmail;
  const newAadhaarNo = req.body.newAadhaarNo;
  const id = req.body.id;

  User.findOne({_id: id}, function(err , foundObj){
    if(err){
      console.log(err);
      res.status(500).send();
    }else{
      if (!foundObj){
        res.status(404).send();
      }else{
        if(newUserName){
          foundObj.name = newUserName;
        }
        if(newEmail){ 
          foundObj.email = newEmail;
        }
        if(newAadhaarNo){
          foundObj.aadhaarNo = newAadhaarNo;
        }

        foundObj.save(function (err , updatedObject){
          if(err){
            console.err(err);
            res.status(500).send();
          }else{
            res.send(updatedObject);
          }
        });
      }
    }
  });


  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    User.findByIdAndRemove(id).exec();
    res.send("Deleted");
  });

  // try{
  //     User.findOne({id: id} , (err ,updatedData) =>{
  //     updatedData.name = newUserName;
  //     updatedData.email = newEmail;
  //     updatedData.aadhaarNo = newAadhaarNo;
  //     updatedData.save();

  //     res.send("updated");
  //   })
  // }catch(err){
  //   console.log(err);
  // } 
});

app.listen(9002, () => {
  console.log("BE started at port 9002");
});

