import {createClient} from 'edgedb';
import e from './dbschema/edgeql-js';

const client = createClient({});

async function run() {
  const query = e.select(e.Movie, (movie) => ({
    id: true,
    title: true,
    cast_size: e.count(movie.actors),
    filter: e.op(movie.title, 'ilike', '%avengers%'),
    order_by: movie.release_year,
  }));

  const result = await query.run(client);
  // asdf
  console.log(result);
}

run();
