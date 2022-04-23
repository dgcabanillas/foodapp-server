import { ProjectModel } from '../../entity/models/projectModel';
import { Project } from '../../entity/types/Project';
import { getAllProjectsService } from '../getAllProjectsService';

const ProjectModelMock = ProjectModel as jest.MockedClass<typeof ProjectModel>;

const mockProject = {
  _id: '6210db4f6f144372bf0a2f18',
  name: 'my project',
  image: "image.com",
  price: 22,
  createdAt: '2022-02-19T11:56:26.444Z',
  owner: '6210d026e7d2fa722757a409',
  __v: 0,
  foods: [],
  id: '6210db4f6f144372bf0a2f18',
};

describe('getAllProjectsService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array of projects when the user id is valid', async () => {
    ProjectModelMock.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve([mockProject]));
    const id = '6210d026e7d2fa722757a409';
    const result: Project[] = await getAllProjectsService(id);
    expect(result).toEqual([mockProject]);
  });
});