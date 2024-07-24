import { DB } from '@database';
import { Request, Response } from 'express';
import { UnitService } from '@/services/units.service';

describe('findAllUnit', () => {
  const { findAllUnit } = new UnitService();

  let req: Partial<Request>;
  let mockFindAll: jest.Mock;
  let mockFindAndCountAll: jest.Mock;

  beforeAll(() => {
    mockFindAll = jest.fn();
    mockFindAndCountAll = jest.fn();

    // Manually assigning the mock implementations
    DB.Units.findAll = mockFindAll;
    DB.Units.findAndCountAll = mockFindAndCountAll;
  });

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
    mockFindAll.mockReset();
    mockFindAndCountAll.mockReset();
  });

  it('should return paginated units', async () => {
    const mockData = [
      { uuid: '1234-5678', name: 'Unit 1', vendors: [] },
      { uuid: '5678-1234', name: 'Unit 2', vendors: [] }
    ];
    const mockCount = { count: 2, rows: mockData };

    mockFindAll.mockResolvedValue(mockData);
    mockFindAndCountAll.mockResolvedValue(mockCount);

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

    mockFindAll.mockResolvedValue(mockData);
    mockFindAndCountAll.mockResolvedValue(mockCount);

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

    mockFindAll.mockResolvedValue(mockData);
    mockFindAndCountAll.mockResolvedValue(mockCount);

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
