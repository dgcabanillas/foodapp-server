import { Model as ModelType, ObjectId, Types } from 'mongoose';

export const findOneResourceById =
  <K>(Model: ModelType<K>) =>
  async (id: string | ObjectId, populate?: object[]): Promise<K[]> => {
    return await Model.find({
      _id: typeof id === 'string' ? new Types.ObjectId(id) : id,
    }).populate(populate);
  };
