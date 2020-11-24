import Express from 'express';

const Router=Express.Router();
Router.get("/", async (req, res) => {
    const users = await User.findAll({include: Role});

    res.json(users);
});


export default Router;