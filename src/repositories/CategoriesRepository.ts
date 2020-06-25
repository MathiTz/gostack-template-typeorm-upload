import { EntityRepository, Repository } from 'typeorm';
import Category from '../models/Category';

interface CategoryI {
  id: string;
  title: string;
}

@EntityRepository(Category)
class CategoriesRepositories extends Repository<Category> {
  public async getCategory(id: string): Promise<CategoryI | null> {
    const category = await this.findOne(id);

    return category || null;
    // TODO
  }
}

export default CategoriesRepositories;
