import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CreateUnitDto, UpdateUnitDto } from '@dtos/units.dto';
import { Unit } from '@interfaces/units.interface';
import { UnitService } from '@/services/units.service';
import { DB } from '@/database';
import { DataResponseType } from '@/type/ResponseType';

export class UnitController {
  public unit = Container.get(UnitService);

  public getUnits = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUnitsData: DataResponseType = await this.unit.findAllUnit(req);
      // const findAllUnitsData: DataResponseType = await this.unit.findAllUnitRaw(req);

      res.status(200).json({ data: findAllUnitsData.data, message: 'findAll', meta: findAllUnitsData.meta });
    } catch (error) {
      next(error);
    }
  };

  public getUnitById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findOneUnitData: Unit = await this.unit.findUnitById(req);
      if (!findOneUnitData) res.status(404).json({ data: findOneUnitData, message: "Unit doesn't exist" });

      res.status(200).json({ data: findOneUnitData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUnit = async (req: Request, res: Response, next: NextFunction) => {
    const t = await DB.sq.transaction();

    try {
      const unitData: CreateUnitDto = req.body;
      const createUnitData: Unit = await this.unit.createUnit(unitData);

      await t.commit();

      res.status(201).json({ data: createUnitData, message: 'created' });
    } catch (error) {
      await t.rollback()
      next(error);
    }
  };

  public updateUnit = async (req: Request, res: Response, next: NextFunction) => {
    const t = await DB.sq.transaction();

    try {
      const unitData: UpdateUnitDto = req.body;

      const findUnit: Unit = await this.unit.findUnitByUuid(unitData.uuid);
      if (!findUnit) res.status(404).json({ data: findUnit, message: "Unit doesn't exist" });

      const updateUnitData: Unit = await this.unit.updateUnit(req, unitData);

      await t.commit()

      res.status(200).json({ data: updateUnitData, message: 'updated' });
    } catch (error) {
      await t.rollback()
      next(error);
    }
  };

  public deleteUnit = async (req: Request, res: Response, next: NextFunction) => {
    const t = await DB.sq.transaction();
    try {
      const findUnit: Unit = await this.unit.findUnitByUuid(req.body.uuid);
      if (!findUnit) res.status(404).json({ data: findUnit, message: "Unit doesn't exist" });

      const deleteUnitData: Unit = await this.unit.deleteUnit(req.body.uuid, findUnit);

      await t.commit()

      res.status(200).json({ data: deleteUnitData, message: 'deleted' });
    } catch (error) {
      await t.rollback()
      next(error);
    }
  };
}
