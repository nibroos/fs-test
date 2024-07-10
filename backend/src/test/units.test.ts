import { DB } from '@database';
import { Request, Response } from 'express';
import { UnitService } from '@/services/units.service';

// Mocking the Units model
jest.mock('@database', () => ({
  DB: {
    Units: {
      findAll: jest.fn(),
      findAndCountAll: jest.fn()
    }
  }
}));

describe('findAllUnit', () => {
  const { findAllUnit } = new UnitService();

  let req: Partial<Request>;

  beforeEach(() => {
    req = {
      body: {
        name: 'test',
        uuid: '1234-5678',
        page: 1,
        per_page: 10,
        order_column: 'name',
        order_direction: 'ASC'
      }
    };
  });

  it('should return paginated units', async () => {
    const mockData = [
      { uuid: '1234-5678', name: 'Unit 1', vendors: [] },
      { uuid: '5678-1234', name: 'Unit 2', vendors: [] }
    ];
    const mockCount = { count: 2, rows: mockData };

    (DB.Units.findAll as jest.Mock).mockResolvedValue(mockData);
    (DB.Units.findAndCountAll as jest.Mock).mockResolvedValue(mockCount);

    const result = await findAllUnit(req as Request);

    expect(result).toEqual({
      data: mockData,
      meta: {
        page: 1,
        per_page: 10,
        total: 2,
        next_page: null,
        last: 1
      }
    });
  });

  it('should handle missing page and per_page parameters', async () => {
    req.body = {
      name: 'test',
      uuid: '1234-5678'
    };

    const mockData = [
      { uuid: '1234-5678', name: 'Unit 1', vendors: [] },
      { uuid: '5678-1234', name: 'Unit 2', vendors: [] }
    ];
    const mockCount = { count: 2, rows: mockData };

    (DB.Units.findAll as jest.Mock).mockResolvedValue(mockData);
    (DB.Units.findAndCountAll as jest.Mock).mockResolvedValue(mockCount);

    const result = await findAllUnit(req as Request);

    expect(result).toEqual({
      data: mockData,
      meta: {
        page: 1,
        per_page: 10,
        total: 2,
        next_page: null,
        last: 1
      }
    });
  });

  it('should handle invalid order_column and order_direction', async () => {
    req.body = {
      name: 'test',
      uuid: '1234-5678',
      order_column: 'invalid_column',
      order_direction: 'INVALID_DIRECTION'
    };

    const mockData = [
      { uuid: '1234-5678', name: 'Unit 1', vendors: [] },
      { uuid: '5678-1234', name: 'Unit 2', vendors: [] }
    ];
    const mockCount = { count: 2, rows: mockData };

    // Mocking the database calls
    (DB.Units.findAll as jest.Mock).mockResolvedValue(mockData);
    (DB.Units.findAndCountAll as jest.Mock).mockResolvedValue(mockCount);

    const result = await findAllUnit(req as Request);

    expect(result).toEqual({
      data: mockData,
      meta: {
        page: 1,
        per_page: 10,
        total: 2,
        next_page: null,
        last: 1
      }
    });
  });
});
