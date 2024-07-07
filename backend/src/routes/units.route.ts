import { Router } from 'express';
import { UnitController } from '@/controllers/units.controller';
import { CreateUnitDto, UpdateUnitDto } from '@dtos/units.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class UnitRoute implements Routes {
  public path = '/units';
  public router = Router();
  public unit = new UnitController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/list`, AuthMiddleware, this.unit.getUnits);
    this.router.post(`${this.path}/show`, AuthMiddleware, this.unit.getUnitById);
    this.router.post(`${this.path}/create`, AuthMiddleware, ValidationMiddleware(CreateUnitDto), this.unit.createUnit);
    this.router.post(`${this.path}/update`, AuthMiddleware, ValidationMiddleware(UpdateUnitDto, true), this.unit.updateUnit);
    this.router.post(`${this.path}/delete`, AuthMiddleware, this.unit.deleteUnit);
  }
}
