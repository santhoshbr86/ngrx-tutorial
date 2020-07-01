import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Tutorial } from '../../models/tutorial.model';

export const adapter: EntityAdapter<Tutorial> = createEntityAdapter<Tutorial>(); 