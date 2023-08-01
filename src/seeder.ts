import { seeder } from "nestjs-seeder";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserSeeder} from "./user/user.seeder";
import {User} from "./user/user.entity";

seeder({
    imports: [
        TypeOrmModule.forRoot({
            database: process.env.DATABASE_DBNAME,
            host: 'localhost',
            password: process.env.DATABASE_PASSWORD,
            port: Number(process.env.DATABASE_PORT),
            synchronize: true,
            type: 'mysql',
            username: process.env.DATABASE_USERNAME,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            logging: true,
        }),
        TypeOrmModule.forFeature([User])
    ],
}).run([UserSeeder]);


