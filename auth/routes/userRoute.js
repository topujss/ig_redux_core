const { Router } = require('express');
const { getAllUser, createUser, deleteUser } = require('../controllers/userController');

const router = Router();

// router.use(checkToken);

router.route('/').get(getAllUser).post(createUser);
router.route('/:id').delete(deleteUser);

//---- export router ----
module.exports = router;
