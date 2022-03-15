
import { ProjectModel } from '../../entity/models/projectModel';
import { getAllProjectsService } from '../getAllProjectsService';


jest.mock('mongoose');

jest.mock('../../../shared/factory', () => {
  return {
    findAllResources: jest.fn().mockImplementation(() => Promise.resolve(true)),
  };
});

describe('delete user service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call', async () => {
    ProjectModel.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve(true));
    try {
      const result = await getAllProjectsService(123);
      expect(result).toEqual(false);
      expect(ProjectModel.find).toHaveBeenCalledTimes(1);
      expect(ProjectModel.find).toHaveBeenCalledWith({ id: 123 });
    } catch (error: any) {
      expect(error.message).toBe('Error deleting user with id 123');
    }
  });
});