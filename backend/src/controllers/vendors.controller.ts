import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CreateVendorDto, UpdateVendorDto } from '@dtos/vendors.dto';
import { Vendor } from '@interfaces/vendors.interface';
import { VendorService } from '@/services/vendors.service';
import { DB } from '@/database';
import { DataResponseType } from '@/type/ResponseType';

export class VendorController {
  public vendor = Container.get(VendorService);

  public getVendors = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllVendorsData: DataResponseType = await this.vendor.findAllVendor(req);
      // const findAllVendorsData: DataResponseType = await this.vendor.findAllVendorRaw(req);

      res.status(200).json({ data: findAllVendorsData.data, message: 'findAll', meta: findAllVendorsData.meta });
    } catch (error) {
      next(error);
    }
  };

  public getVendorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findOneVendorData: Vendor = await this.vendor.findVendorById(req);
      if (!findOneVendorData) res.status(404).json({ data: findOneVendorData, message: "Vendor doesn't exist" });

      res.status(200).json({ data: findOneVendorData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createVendor = async (req: Request, res: Response, next: NextFunction) => {
    const t = await DB.sq.transaction();

    try {
      const vendorData: CreateVendorDto = req.body;
      const createVendorData: Vendor = await this.vendor.createVendor(vendorData);

      await t.commit();

      res.status(201).json({ data: createVendorData, message: 'created' });
    } catch (error) {
      await t.rollback()
      next(error);
    }
  };

  public updateVendor = async (req: Request, res: Response, next: NextFunction) => {
    const t = await DB.sq.transaction();

    try {
      const vendorData: UpdateVendorDto = req.body;

      const findVendor: Vendor = await this.vendor.findVendorByUuid(vendorData.uuid);
      if (!findVendor) res.status(404).json({ data: findVendor, message: "Vendor doesn't exist" });

      const updateVendorData: Vendor = await this.vendor.updateVendor(req, vendorData);

      await t.commit()

      res.status(200).json({ data: updateVendorData, message: 'updated' });
    } catch (error) {
      await t.rollback()
      next(error);
    }
  };

  public deleteVendor = async (req: Request, res: Response, next: NextFunction) => {
    const t = await DB.sq.transaction();
    try {
      console.log(req.body.uuid, 'cek uuid5');

      const findVendor: Vendor = await this.vendor.findVendorByUuid(req.body.uuid);
      console.log(req.body.uuid, 'cek uuid6');
      if (!findVendor) res.status(404).json({ data: findVendor, message: "Vendor doesn't exist" });
      console.log(req.body.uuid, 'cek uuid7');

      const deleteVendorData: Vendor = await this.vendor.deleteVendor(req.body.uuid, findVendor);
      console.log(req.body.uuid, 'cek uuid8');

      await t.commit()

      res.status(200).json({ data: deleteVendorData, message: 'deleted' });
    } catch (error) {
      console.log(error, 'cek uuid8');
      await t.rollback()
      next(error);
    }
  };
}
