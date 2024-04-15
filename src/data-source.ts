import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Item } from "./entity/Item"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "aws-0-sa-east-1.pooler.supabase.com",
    port: 5432,
    username: "postgres.dugdvnnetckwgugtkaux",
    password: "raU6bspv#4pJpA3h",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Item],
    migrations: [],
    subscribers: [],
})
