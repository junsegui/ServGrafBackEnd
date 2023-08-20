import { Request, Response, Router } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).send({
    usuarios: "usuarios",
  });
});

export default router;
