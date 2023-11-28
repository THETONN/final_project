
const bcrypt = require('bcrypt');
const express = require('express');
const mysql = require('mysql2')
const path = require("path");
const cors = require('cors'); 
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET; // ใช้ secret key ที่เก็บใน environment variable
const { spawn } = require('child_process');


// Database connection
const con = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'db'
});
con.connect(function(err) {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL');
    }
  });


const { error, log } = require('console');



const app = express();
// app.use(express.static(path.join(__dirname,"../Dashboard-starter/public")));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true
}));

// for json exchange
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Create hashed password
const salt =10;


// console.log('Current directory:', process.cwd());

// const loadModel = () => {
//     // If the model.py is in the same directory as server.js, no need to navigate up a directory.
//     return spawn('python3', [__dirname +'/model.py']);
//   };
  
//   // In the '/predict' endpoint handler
//   const pythonProcess = loadModel();
  
//   pythonProcess.on('error', (error) => {
//     console.error('Error spawning Python process:', error);
//   });

// Endpoint to handle the prediction
// app.post('/predict', (req, res) => {
//     // Assuming req.body is in the correct format for your model
//     const modelInput = req.body.answers; // or any other preprocessing you need

//     const pythonProcess = loadModel();

//     pythonProcess.stdout.once('data', (data) => {
//       // When the model is loaded, send the data for prediction
//       pythonProcess.stdin.write(JSON.stringify(modelInput));
//       pythonProcess.stdin.end();
//     });

//     pythonProcess.stdout.on('data', (data) => {
//       // Send back the prediction result to the client
//       res.send(data.toString());
//     });

//     pythonProcess.stderr.on('data', (data) => {
//       console.error(`stderr: ${data}`);
//       res.status(500).send(data.toString());
//     });
// });

// Pages
// Register and Login
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await prisma.users.findUnique({
      where: { email },
    });
  
    if (userExist) {
      return res.status(409).json({ message: "User already exists" }); // ใช้สถานะ 409 สำหรับ conflict

    }

    try {
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await prisma.users.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
      res.json({ token, userId: user.id, role: user.role });
    } catch (error) {
      // จัดการกับข้อผิดพลาดที่อาจเกิดขึ้น
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

//login
//////////////============================================================================////////////////////////
// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     console.log(email,password);
//     const user = await prisma.users.findUnique({
//       where: { email },
//     });
  
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
  
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Incorrect password" });
//     }
  
//     delete user.password;
//     res.json(user);
//   });

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // ส่งกลับ role และ userId
    res.json({ userId: user.id, role: user.role, username: user.name  });
});
//////////////============================================================================////////////////////////
// Delete Users
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM users WHERE id = ?";
    con.query(sql, [id], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }

        if (data.affectedRows !== 1) {
            console.error('Row deleted is not 1');
            return res.status(500).send("Delete failed");
        }

        res.send('Delete successfully');
    });
});

// Delete Group
app.delete('/group/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM `mgroup` WHERE id_group = ?";
    
    con.query(sql, [id], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }

        if (data.affectedRows !== 1) {
            console.error('Row deleted is not 1');
            return res.status(500).send("Delete failed");
        }

        res.send('Delete successfully');
    });
});

// Delete Trip
app.delete('/trip/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM `trip` WHERE id_trip = ?";
    
    con.query(sql, [id], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }

        if (data.affectedRows !== 1) {
            console.error('Row deleted is not 1');
            return res.status(500).send("Delete failed");
        }

        res.send('Delete successfully');
    });
});



// ------------- Add a new users ----------------------------------------------------------------
app.post("/users", async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await prisma.users.findUnique({
      where: { email },
    });
  
    if (userExist) {
      return res.status(409).json({ message: "User already exists" }); // ใช้สถานะ 409 สำหรับ conflict

    }

    try {
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await prisma.users.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
      res.json({ token, userId: user.id, role: user.role });
    } catch (error) {
      // จัดการกับข้อผิดพลาดที่อาจเกิดขึ้น
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
// app.post('/users', (req, res) => {

//     const sql = "INSERT INTO users (`name`,`password`,`email`) VALUES(?, ? , ?)";

//     bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//         if (err) {
//             console.error("Error hashing password:", err);
//             return res.status(500).json({ error: "Internal Server Error" });
//         }

//         const values = [
//             req.body.username,
//             hash,
//             req.body.email,
//             req.body.role,
//         ];

//         con.query(sql, values, (err, result) => {
//             if (err) {
//                 console.error("Error inserting data:", err);
//                 return res.status(500).json({ error: "Internal Server Error" });
//             }

//             return res.json({ Status: "Success" });
//         });
//     });
// });

// Add group
app.post("/group", function (req, res) {
    const { groupname, descript } = req.body;

    console.log("Inserting new group into the database");
    console.log("New data:", req.body);

    const sql = "INSERT INTO `mgroup` (group_name, group_description) VALUES (?, ?)";

    con.query(sql, [groupname, descript], (err, data) => {
        if (err) {
            console.error("Error inserting group:", err);
            return res.status(500).json({ error: "Error inserting group" });
        }

        console.log("Insert result:", data);

        if (data.affectedRows !== 1) {
            console.error('Row inserted is not 1');
            return res.status(500).send("Insert failed");
        }

        res.send("Insert successfully");
    });
});


// Add trip
app.post("/trip", function (req, res) {
    const { trippname, descript,group } = req.body;

    console.log("Inserting new trip into the database");
    console.log("New data:", req.body);

    const sql = "INSERT INTO `trip` (trip_name, trip_description, id_group) VALUES (?, ?, ?)";

    con.query(sql, [trippname, descript,group], (err, data) => {
        if (err) {
            console.error("Error inserting group:", err);
            return res.status(500).json({ error: "Error inserting trip" });
        }

        console.log("Insert result:", data);

        if (data.affectedRows !== 1) {
            console.error('Row inserted is not 1');
            return res.status(500).send("Insert failed");
        }

        res.send("Insert successfully");
    });
});

app.post('/qa', (req, res) => {
    const { question, option } = req.body;
    console.log(question, option);
    // console.log(namequestion,option);
    // First, insert the new data into the questionnaire table.
    const insertQuestionSql = "INSERT INTO questionnaire (question_topic) VALUES (?)";
    
    con.query(insertQuestionSql, [question], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error inserting data into questionnaire table");
        }

        // Next, retrieve the last inserted ID from the questionnaire table.
        const lastInsertedId = result.insertId;

        // Then, insert the same ID and choiceValue into the choice table.
        const insertChoiceSql = "INSERT INTO choice (id_question, choice) VALUES (?, ?)";
        con.query(insertChoiceSql, [lastInsertedId, option], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error inserting data into choice table");
            }

            return res.status(200).send("Data inserted successfully into both tables.");
        });
    });
});

// Post data from answer users questionnaire
app.post('/insert-answers', (req, res) => {
    const answers = req.body.answers;
    answers.forEach(answer => {
        // สมมติว่า db คือ instance ของ MySQL connection
        db.query('INSERT INTO user_answers (id_user, id_question, id_choice, id_group) VALUES (?, ?, ?, ?)', 
        [answer.id_user, answer.id_question, answer.id_choice, answer.id_group], 
        (error, results, fields) => {
            if (error) throw error;
            // การจัดการข้อมูลที่เพิ่มเข้าไป
        });
    });
    res.send('Answers inserted');
});



// ========================================================================================================

// Update Users
app.put("/update/:id", function (req, res) {
    const id = req.params.id;
    const { username, password, email, role } = req.body;

    console.log("Updating user with ID:", id);
    console.log("New data:", req.body);

    // Use the UPDATE statement to modify an existing record
    const sql = "UPDATE users SET name = ?, password = ?, email = ?, role = ?, updatedAt = ? WHERE id = ?";

    // Use the new Date() to get the current date and time for updatedAt
    const updatedAt = new Date();

    // Execute the query with the provided data
    con.query(sql, [username, password, email, role, updatedAt, id], (err, data) => {
        if (err) {
            console.error("Error updating user:", err);
            return res.status(500).json({ error: "Error updating user" });
        }

        console.log("Update result:", data);

        // Check if exactly one row was affected
        if (data.affectedRows !== 1) {
            console.error('Row updated is not 1');
            return res.status(500).send("Update failed");
        }

        // Send success response
        res.send("Update successfully");
    });
});

// Update group
app.put("/update_group/:id", function (req, res) {
    const id = req.params.id;
    const { groupname, descript } = req.body;

    console.log("Updating group with ID:", id);
    console.log("New data:", req.body);

    const sql = "UPDATE mgroup SET group_name = ?, group_description = ? WHERE id_group = ?";

    con.query(sql, [groupname, descript, id], (err, data) => {
        if (err) {
            console.error("Error updating group:", err);
            return res.status(500).json({ error: "Error updating group", details: err.message });
        }

        console.log("Update result:", data);

        if (data.affectedRows !== 1) {
            console.error('Row updated is not 1');
            return res.status(500).send("Update failed");
        }

        res.send("Update successfully");
    });
});


// Update Trip
app.put("/update_trip/:id", function (req, res) {
    const id = req.params.id;
    const { tripname, descript, group } = req.body;

    console.log("Updating trip with ID:", id);
    // console.log("New data:", req.body);

    const sql = "UPDATE trip SET trip_name = ?, trip_description = ?, id_group = ? WHERE id_trip = ?";

    con.query(sql, [tripname, descript, group, id], (err, data) => {
        
        if (err) {
            console.error("Error updating trip:", err);
            
            return res.status(500).json({ error: "Error updating trip" });
        }
        
        console.log("Update result:", data);

        if (data.affectedRows !== 1) {
            console.error('Row updated is not 1',sql);
            return res.status(500).send("Update failed");
        }

        res.send("Update successfully");
    });
});


// =================================================================================================================
// Admin page

// Dashboard
app.get('/Dashboard', (req, res) => {
    res.sendFile(path.join(__dirname,'../Dashboard-starter/src/page/Dashboard.jsx')); 

});

// Users table
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    con.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }

        return res.json(data);
    });
});

// Group Table 
app.get('/group', (req, res) => {
    const sql = "SELECT * FROM `mgroup`";
    con.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }

        return res.json(data);
    });
});

// Group Table 
app.get('/trip', (req, res) => {
    const sql = "SELECT * FROM `trip`";
    con.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }

        return res.json(data);
    });
});

// Questionnaire
app.get('/Q', (req, res) => {
    const sql = "SELECT questionnaire.question_topic, choice.choice " +
                "FROM questionnaire " +
                "LEFT JOIN choice ON questionnaire.id_question = choice.id_question";
    con.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }

        return res.json(data);
    });
});


// QA Table 
app.get('/qa', (req, res) => {
    const sql = `SELECT u.name AS user, 
                        q.question_topic AS question, 
                        c.choice AS choice, 
                        g.group_name AS group_name,
                        g.group_description AS group_description
                 FROM user_answers ua 
                 JOIN users u ON ua.id = u.id
                 JOIN questionnaire q ON ua.id_question = q.id_question
                 JOIN choice c ON ua.id_choice = c.id_choice
                 JOIN mgroup g ON ua.id_group = g.id_group`;

    con.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }
        return res.json(data);
    });
});

app.get('/feed', (req, res) => {
    const sql = `SELECT 
                    u.name AS user, 
                    fq.question_feedback AS Q, 
                    ur.rating AS rating, 
                    g.group_name AS mGroup
                FROM 
                    user_ratings ur
                JOIN 
                    users u ON ur.id_users = u.id
                JOIN 
                    feedback_question fq ON ur.id_feedback = fq.id_feedback
                JOIN 
                    mgroup g ON ur.id_group = g.id_group
                ORDER BY 
                    u.id, fq.id_feedback
                `;

    con.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }
        return res.json(data);
    });
});


// Root
// app.get('/',(req,res) =>{
//     res.sendFile(path.join(__dirname,'../Dashboard-starter/src/index.jsx'));
// });

const port = 8081;
app.listen(port,() => {
    console.log('server is ready at' + port);
});