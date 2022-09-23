import * as express from 'express';
import { project, projects } from '../models/project';
import uploads from '../middleware/project_uploads';
const router: express.Router = express.Router();

const project: projects = new projects();

const index = async (req: express.Request, res: express.Response) => {
  try {
    const project_arr = await project.index();
    res.json(project_arr);
  } catch (error) {
    res.status(404);
    res.json(`Page not Found ${error}`);
  }
};

const create = async (req: express.Request, res: express.Response) => {
  try {
    let imgData: string[] = [];
    const data: any = req.files;

    data.forEach((f: { originalname: any; }) => {
      imgData.push(`${process.env.URL}projects/${req.body.name}/${f.originalname}`);
    });
    const projectOb: project={
       name:req.body.name,
       description:req.body.description,
       images:imgData
    }
     const project_arr= await project.create(projectOb)
    res.json(project_arr);
  } catch (error) {
    res.status(404);
    res.json(`Page not Found ${error}`);
  }
};
router.get('/projects', index);
router.post('/projects', uploads.array('images'), create);

export default router;
