import { Router } from 'express';
import { VendorController } from '@/controllers/vendors.controller';
import { CreateVendorDto, UpdateVendorDto } from '@dtos/vendors.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class VendorRoute implements Routes {
  public path = '/vendors';
  public router = Router();
  public vendor = new VendorController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/list`, AuthMiddleware, this.vendor.getVendors);
    this.router.post(`${this.path}/show`, AuthMiddleware, this.vendor.getVendorById);
    this.router.post(`${this.path}/create`, AuthMiddleware, ValidationMiddleware(CreateVendorDto), this.vendor.createVendor);
    this.router.post(`${this.path}/update`, AuthMiddleware, ValidationMiddleware(UpdateVendorDto, true), this.vendor.updateVendor);
    this.router.post(`${this.path}/delete`, AuthMiddleware, this.vendor.deleteVendor);
  }
}
