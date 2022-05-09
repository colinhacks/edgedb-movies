import * as edgedb from 'edgedb';
import e from './dbschema/edgeql-js';

const client = edgedb.createClient({concurrency: 10, timeout: 1234});

async function run() {
  const query = e.select(e.Movie, (movie) => ({
    id: true,
    title: true,
    filter: e.op(movie.title, '=', 'The Batman'),
    uppercase_title: e.str_upper(movie.title),
    movies_with_same_title: e.select(e.Movie, (inner) => ({
      filter: e.op(e.str_upper(movie.title), '=', inner.title),
      title: true,
    })),
    limit: 0,
    offset: 2,
    order_by: movie.release_year,
  }));
  query.toEdgeQL();
  const result = await query.run(client);
  console.log(result);
}

run();

const sdf = {arg: 'asdf'};

export const loader = sdf.arg;
export default sdf.arg;
