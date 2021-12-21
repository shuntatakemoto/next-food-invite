import { ParsedUrlQuery } from 'querystring';

export interface Params extends ParsedUrlQuery {
  uid: string;
  listId?: string;
  restaurantId?: string;
}
