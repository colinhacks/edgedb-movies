import {createClient} from 'edgedb';
import e from './dbschema/edgeql-js';

// connect to database
const client = createClient();

export async function query() {
  // write query
  const query = e.select(e.Account, (acct) => ({
    id: true,
    username: true,
    watchlist: {
      title: true,
      ...e.is(e.Movie, {
        release_year: true,
      }),
      ...e.is(e.TVShow, {
        num_seasons: true,
      }),
    },
    filter: e.op(acct.username, '=', 'colinhacks'),
  }));

  const result = await query.run(client);

  return result;
}
