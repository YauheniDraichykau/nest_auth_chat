export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
  ssl: boolean;
  dialectOptions: {
    ssl: { rejectUnauthorized: boolean };
  };
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
}
