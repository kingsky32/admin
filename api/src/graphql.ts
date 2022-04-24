
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Code {
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    label: string;
    updatedAt: DateTime;
}

export class Config {
    createdAt: DateTime;
    key: string;
    updatedAt: DateTime;
    value: string;
}

export class LoginResponseDto {
    accessToken: string;
    refreshToken: string;
}

export abstract class IMutation {
    abstract code(code: string, isActive: boolean, label: string): Code | Promise<Code>;

    abstract config(key: string, value: string): Config | Promise<Config>;

    abstract createUser(email: string, password: string, username: string): User | Promise<User>;

    abstract login(password: string, username: string): LoginResponseDto | Promise<LoginResponseDto>;

    abstract route(icon: string, label: string, uri: string): Route | Promise<Route>;

    abstract uploadFile(file: Upload): boolean | Promise<boolean>;
}

export abstract class IQuery {
    abstract codes(): Code[] | Promise<Code[]>;

    abstract configs(): Config[] | Promise<Config[]>;

    abstract getUser(id: string): User | Promise<User>;

    abstract me(): User | Promise<User>;

    abstract routes(): Route[] | Promise<Route[]>;
}

export class Route {
    createdAt: DateTime;
    icon?: Nullable<string>;
    label: string;
    updatedAt: DateTime;
    uri: string;
}

export class User {
    createdAt: DateTime;
    email: string;
    id: string;
    password: string;
    roles: string;
    updatedAt: DateTime;
    username: string;
}

export type DateTime = any;
export type Upload = any;
type Nullable<T> = T | null;
