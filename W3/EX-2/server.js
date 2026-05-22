// server.js
import express from 'express';
import courses from "./course.js";
import {logger} from './middleware/logger.js'
const app = express();
const PORT = 3000;

app.use( logger);
// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria
    let data = courses.filter( (c) =>  c.department === dept);
    // Convert it to integer
    minCredits = parseInt( minCredits);
    maxCredits = parseInt( maxCredits);

        if ( level) data = data.filter( (c) => c.level === level);
        if ( semester) data = data.filter((c) => c.semester === semester);
        if ( instructor) data = data.filter((c) => c.instructor === instructor);
        if ( minCredits > maxCredits) {
            return res.status(400).json({msg: 'Min credits can not bigger than Max credits'});
        } else {
            data.filter( (c) => c.credits > minCredits && c.credits < maxCredits);
        }
        if ( data.length === 0) {
            return res.status(404).json( {msg: 'data can not be found.'})
        }
    res.json(
        { 
            result: data,
            meta: {
                total: data.length
            }
        }
    );

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
