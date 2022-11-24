import { Request, Response } from "express";
class HomeController {
  index(req: Request, res: Response) {
    res.send("Home Controller");
  }
}

export default new HomeController();
