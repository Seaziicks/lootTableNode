import { Response, Router } from 'express';
import ItemRoutes from './item/item.routes';
import EffetMagiqueRoutes from './effetMagique/effetMagique.routes';
import UserRoutes from './user/user.routes';
import PersonnageRoutes from './personnage/personnage.routes';
import CompetenceRoutes from './competence/competence.routes';
import MonsterRoutes from './monster/monster.routes';
import LootRoutes from './loot/loot.routes';
import MaledictionRoutes from './malediction/malediction.routes';
import MateriauRoutes from './materiau/materiau.routes';

const router = Router();

router.use('/item', ItemRoutes);
router.use('/effetMagique', EffetMagiqueRoutes);
router.use('/malediction', MaledictionRoutes);
router.use('/materiau', MateriauRoutes);
router.use('/personnage', PersonnageRoutes);
router.use('/user', UserRoutes);
router.use('/competence', CompetenceRoutes);
router.use('/monster', MonsterRoutes);
router.use('/loot', LootRoutes);

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
