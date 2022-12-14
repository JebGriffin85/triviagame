const express = require('express');
const asyncHandler = require('express-async-handler');
const { Questions } = require('../../db/models');

const router = express.Router();

router.get('/easy', asyncHandler (async (req, res, next) => {
    
    const data = await Questions.getEasyQuestions()
    return res.json(data);
})
);

module.exports = router;