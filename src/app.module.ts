import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {ConfigModule} from '@nestjs/config';
import {UsersModule} from './users/users.module';
import {RolesModule} from './roles/roles.module';
import {AuthModule} from './auth/auth.module';
import {PostsModule} from './posts/posts.module';
import {FilesModule} from './files/files.module';
import {User} from './users/users.model';
import {Role} from './roles/roles.model';
import {UserRoles} from './roles/user-roles.model';
import {Post} from './posts/posts.model';
import path from 'path';
import {ServeStaticModule} from '@nestjs/serve-static';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        ServeStaticModule.forRoot({
            // rootPath: path.resolve( __dirname, 'static'),
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ]

})
export class AppModule {
}




