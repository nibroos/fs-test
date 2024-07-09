import { DB } from '@/database';
import { QueryTypes } from 'sequelize';

interface QueryOptions {
  tableName: string;
  conditions?: { [key: string]: any };
  orderBy?: string;
  orderDirection?: 'ASC' | 'DESC';
  page?: number;
  perPage?: number;
}

export async function getPaginatedResults(options: QueryOptions) {
  const {
    tableName,
    conditions = {},
    orderBy = 'id', // Default order by column
    orderDirection = 'ASC', // Default order direction
    page = 1, // Default to the first page
    perPage = 10 // Default items per page
  } = options;

  let whereClause = '';
  let bindParams: any = {};

  if (Object.keys(conditions).length > 0) {
    whereClause = 'WHERE ' + Object.keys(conditions)
      .map((key, index) => {
        bindParams[`param${index}`] = conditions[key];
        return `${key} = :param${index}`;
      })
      .join(' AND ');
  }

  const offset = (page - 1) * perPage;
  const limit = perPage;

  const query = `
    SELECT *
    FROM ${tableName}
    ${whereClause}
    ORDER BY ${orderBy} ${orderDirection}
    LIMIT :limit OFFSET :offset;
  `;

  bindParams['limit'] = limit;
  bindParams['offset'] = offset;

  const results = await DB.sq.query(query, {
    replacements: bindParams,
    type: QueryTypes.SELECT
  });

  return results;
}

// Example usage
// async function example() {
//   const options: QueryOptions = {
//     tableName: 'users',
//     conditions: {
//       status: 'active'
//     },
//     orderBy: 'created_at',
//     orderDirection: 'DESC',
//     page: 2,
//     perPage: 5
//   };

//   const users = await getPaginatedResults(options);
//   console.log(users);
// }
