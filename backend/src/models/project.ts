import client from '../database';
export type project = {
    id?:number;
    name:string;
    description:string;
    images?:string[]
}

export class projects{
    async index(): Promise<project[]> {
        try {
          // @ts-ignore
          const conn = await client.connect();
          const sql = 'SELECT * FROM projects;';
    
          const result = await conn.query(sql);
    
          conn.release();
    
          return result.rows;
        } catch (err) {
          throw new Error(`Could not get projects. Error: ${err}`);
        }
      }
      async create(p: project): Promise<project> {
        try {
          // @ts-ignore
          const conn = await client.connect();
          const sql =
            'INSERT INTO projects(name, description,images) VALUES($1, $2, $3) RETURNING *;';
    
          const result = await conn.query(sql, [p.name, p.description,p.images]);
          const product = result.rows[0];
    
          conn.release();
    
          return product;
        } catch (err) {
          throw new Error(`unable to create project (${p.name}): ${err}`);
        }
      }
}