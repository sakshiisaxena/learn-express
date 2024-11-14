const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const {connectMongoDB} = require('./connection');
const {logReqRes} = require('./middlewares');

//connection
connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1").then(() => console.log("mongoDB connected!"))

//middleware
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"));

//ROUTES
app.use("/api/users", userRouter);

app.listen(8000, () => console.log("express server started "))





















// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
// .then(() => console.log("mongoDB connected"))
// .catch((err) => console.log('mongodb error', err));

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     job_title: {
//         type: String,
//     },
//     gender: {
//         type: String,
//     },
// }, {timestamps: true})

// const User = mongoose.model('user', userSchema);

// app.use(express.urlencoded({extended: false}));

// //Routes
// app.get("/users", async (req, res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//     ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//     `;
//     res.send(html);
// })

// //Rest Api
// app.get("/api/users", async (req, res) => {
//     const allDbUsers = await User.find({});
//     return res.json(allDbUsers);
// })

// app.route("/api/users/:id").get(async (req, res) => {
//     const user = await User.findById(req.params.id);
//     if(!user) return res.status(404).json({error: "user not found"});
//     return res.json(user);
// })
// .patch(async (req, res) => {
//     await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"})
//     return res.json({status: "success"})
// })
// .delete(async (req, res) => {
//     await User.findByIdAndDelete(req.params.id);
//     return res.json({status: "success"})
// })

// app.post("/api/users", async (req, res) => {
//     const body = req.body;
//     if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
//         return res.status(400).json({ msg: "All fields are req..."})
//     }

//     const result = await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         gender: body.gender,
//         job_title: body.job_title,
//     })

//     console.log("result", result);
//     return res.status(201).json({msg: "success"});
// })

// app.listen(8000, () => console.log("express server started "))











// till 19.5

// const express = require('express');
// const users = require('./MOCK_DATA.json');
// const fs = require("fs");
// const app = express();
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
// .then(() => console.log("mongoDB connected"))
// .catch((err) => console.log('mongodb error', err));

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     job_title: {
//         type: String,
//     },
//     gender: {
//         type: String,
//     },
// }, {timestamps: true})

// const User = mongoose.model('user', userSchema);

// app.use(express.urlencoded({extended: false}));

// //Routes
// app.get("/users", (req, res) => {
//     const html = `
//     ${users.map(user => `<li>${user.first_name}</li>`).join("")}
//     `;
//     res.send(html);
// })

// app.get("/api/users", (req, res) => {
//     return res.json(users);
// })

// app.route("/api/users/:id").get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     res.json(user);
// })
// .patch((req, res) => {
//     return res.json({"status": "pending"})
// })
// .delete((req, res) => {
//     return res.json({"status": "pending"})
// })

// app.post("/api/users", async (req, res) => {
//     const body = req.body;
//     if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
//         return res.status(400).json({ msg: "All fields are req..."})
//     }

//     const result = await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         gender: body.gender,
//         job_title: body.job_title,
//     })

//     console.log("result", result);
//     return res.status(201).json({msg: "success"});
// })

// app.listen(8000, () => console.log("express server started "))







// const express = require('express');
// const users = require('./MOCK_DATA.json');
// const app = express();

// app.get("/users", (req, res) => {
//     const html = `
//     ${users.map(user => `<li>${user.first_name}</li>`).join("")}
//     `;
//     res.send(html);
// })

// app.get("/api/users", (req, res) => {
//     res.json(users);
// })

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     res.json(user);
// })

// app.post("/api/users", (req, res) => {
//     const body = req.body;
//     users.push({...body, id: users.length + 1});
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//         return res.json({status: "success", id: users.length});
//     });
// })

// app.listen(8000, () => console.log("express server started "))