import {createClient} from 'edgedb';
import e from './dbschema/edgeql-js';

const client = createClient();

async function run() {
  const query = await e.select(e.Movie.title);
  const result = await query.run(client);
  console.log(JSON.stringify(result, null, 2));
}

run();
