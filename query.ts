import {createClient} from 'edgedb';
import e from './dbschema/edgeql-js';

// connect to database
const client = createClient();

export async function query() {
  // write query
  const query = e.select(e.Movie, (movie) => ({
    id: true,
    title: true,
    cast_size: e.count(movie.actors),
    filter: e.op(movie.title, '=', 'The Batman'),
  }));

  const result = await query.run(client);
  return result;
}
