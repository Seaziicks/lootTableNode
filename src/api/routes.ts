import { Request, Response, Router } from 'express';
import ItemRoutes from './item/item.routes';
import UserRoutes from './user/user.routes';
import PersonnageRoutes from './personnage/personnage.routes';
import CompetenceRoutes from './competence/competence.routes';
import MonstreRoutes from './monstre/monstre.routes';
import LootRoutes from './loot/loot.routes';
import NiveauRoutes from './niveau/niveau.routes';

const router = Router();

router.use('/item', ItemRoutes);
router.use('/user', /* A faire */ UserRoutes);
router.use('/personnage', /* A faire */ PersonnageRoutes);
router.use('/competence', /* A faire */ CompetenceRoutes);
router.use('/monstre', /* A faire */ MonstreRoutes);
router.use('/loot', /* A faire */ LootRoutes);
router.use('/niveau', /* A faire */ NiveauRoutes);

export const sendSpecialResponse = (res: Response, status: number, status_message: string, data: any) => {
  res.status(status).json({
      status: status,
      status_message: status_message,
      data: data
  });
};

export const classicalSpecialResponseError500 = (res: Response, message: string) => {
    sendSpecialResponse(res,
        500,
        message,
        message);
}

export default router;
