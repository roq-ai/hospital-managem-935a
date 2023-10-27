/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model appointment
 *
 */
export type appointment = $Result.DefaultSelection<Prisma.$appointmentPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model doctor
 *
 */
export type doctor = $Result.DefaultSelection<Prisma.$doctorPayload>;
/**
 * Model hospital
 *
 */
export type hospital = $Result.DefaultSelection<Prisma.$hospitalPayload>;
/**
 * Model patient
 *
 */
export type patient = $Result.DefaultSelection<Prisma.$patientPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **appointment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   */
  get appointment(): Prisma.appointmentDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **doctor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Doctors
   * const doctors = await prisma.doctor.findMany()
   * ```
   */
  get doctor(): Prisma.doctorDelegate<ExtArgs>;

  /**
   * `prisma.hospital`: Exposes CRUD operations for the **hospital** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Hospitals
   * const hospitals = await prisma.hospital.findMany()
   * ```
   */
  get hospital(): Prisma.hospitalDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **patient** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Patients
   * const patients = await prisma.patient.findMany()
   * ```
   */
  get patient(): Prisma.patientDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    appointment: 'appointment';
    company: 'company';
    doctor: 'doctor';
    hospital: 'hospital';
    patient: 'patient';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'appointment' | 'company' | 'doctor' | 'hospital' | 'patient' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      appointment: {
        payload: Prisma.$appointmentPayload<ExtArgs>;
        fields: Prisma.appointmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.appointmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.appointmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findFirst: {
            args: Prisma.appointmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.appointmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findMany: {
            args: Prisma.appointmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[];
          };
          create: {
            args: Prisma.appointmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          createMany: {
            args: Prisma.appointmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.appointmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          update: {
            args: Prisma.appointmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          deleteMany: {
            args: Prisma.appointmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.appointmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.appointmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppointment>;
          };
          groupBy: {
            args: Prisma.appointmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.appointmentCountArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      doctor: {
        payload: Prisma.$doctorPayload<ExtArgs>;
        fields: Prisma.doctorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.doctorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.doctorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          findFirst: {
            args: Prisma.doctorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.doctorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          findMany: {
            args: Prisma.doctorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>[];
          };
          create: {
            args: Prisma.doctorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          createMany: {
            args: Prisma.doctorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.doctorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          update: {
            args: Prisma.doctorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          deleteMany: {
            args: Prisma.doctorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.doctorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.doctorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$doctorPayload>;
          };
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDoctor>;
          };
          groupBy: {
            args: Prisma.doctorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DoctorGroupByOutputType>[];
          };
          count: {
            args: Prisma.doctorCountArgs<ExtArgs>;
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number;
          };
        };
      };
      hospital: {
        payload: Prisma.$hospitalPayload<ExtArgs>;
        fields: Prisma.hospitalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.hospitalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.hospitalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          findFirst: {
            args: Prisma.hospitalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.hospitalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          findMany: {
            args: Prisma.hospitalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>[];
          };
          create: {
            args: Prisma.hospitalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          createMany: {
            args: Prisma.hospitalCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.hospitalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          update: {
            args: Prisma.hospitalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          deleteMany: {
            args: Prisma.hospitalDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.hospitalUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.hospitalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hospitalPayload>;
          };
          aggregate: {
            args: Prisma.HospitalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHospital>;
          };
          groupBy: {
            args: Prisma.hospitalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<HospitalGroupByOutputType>[];
          };
          count: {
            args: Prisma.hospitalCountArgs<ExtArgs>;
            result: $Utils.Optional<HospitalCountAggregateOutputType> | number;
          };
        };
      };
      patient: {
        payload: Prisma.$patientPayload<ExtArgs>;
        fields: Prisma.patientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.patientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          findFirst: {
            args: Prisma.patientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          findMany: {
            args: Prisma.patientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[];
          };
          create: {
            args: Prisma.patientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          createMany: {
            args: Prisma.patientCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.patientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          update: {
            args: Prisma.patientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          deleteMany: {
            args: Prisma.patientDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.patientUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.patientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$patientPayload>;
          };
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePatient>;
          };
          groupBy: {
            args: Prisma.patientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PatientGroupByOutputType>[];
          };
          count: {
            args: Prisma.patientCountArgs<ExtArgs>;
            result: $Utils.Optional<PatientCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    hospital: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospital?: boolean | CompanyCountOutputTypeCountHospitalArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountHospitalArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: hospitalWhereInput;
  };

  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    appointment: number;
  };

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | DoctorCountOutputTypeCountAppointmentArgs;
  };

  // Custom InputTypes

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * Count Type HospitalCountOutputType
   */

  export type HospitalCountOutputType = {
    appointment: number;
    doctor: number;
    patient: number;
  };

  export type HospitalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | HospitalCountOutputTypeCountAppointmentArgs;
    doctor?: boolean | HospitalCountOutputTypeCountDoctorArgs;
    patient?: boolean | HospitalCountOutputTypeCountPatientArgs;
  };

  // Custom InputTypes

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospitalCountOutputType
     */
    select?: HospitalCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountDoctorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: doctorWhereInput;
  };

  /**
   * HospitalCountOutputType without action
   */
  export type HospitalCountOutputTypeCountPatientArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: patientWhereInput;
  };

  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointment: number;
  };

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | PatientCountOutputTypeCountAppointmentArgs;
  };

  // Custom InputTypes

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  export type AppointmentMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    patient_id: string | null;
    doctor_id: string | null;
    hospital_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    patient_id: string | null;
    doctor_id: string | null;
    hospital_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentCountAggregateOutputType = {
    id: number;
    date: number;
    patient_id: number;
    doctor_id: number;
    hospital_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AppointmentMinAggregateInputType = {
    id?: true;
    date?: true;
    patient_id?: true;
    doctor_id?: true;
    hospital_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentMaxAggregateInputType = {
    id?: true;
    date?: true;
    patient_id?: true;
    doctor_id?: true;
    hospital_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentCountAggregateInputType = {
    id?: true;
    date?: true;
    patient_id?: true;
    doctor_id?: true;
    hospital_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment to aggregate.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned appointments
     **/
    _count?: true | AppointmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppointmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppointmentMaxAggregateInputType;
  };

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>;
  };

  export type appointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithAggregationInput | appointmentOrderByWithAggregationInput[];
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum;
    having?: appointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
  };

  export type AppointmentGroupByOutputType = {
    id: string;
    date: Date;
    patient_id: string;
    doctor_id: string;
    hospital_id: string;
    created_at: Date;
    updated_at: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  type GetAppointmentGroupByPayload<T extends appointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AppointmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
          : GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
      }
    >
  >;

  export type appointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        date?: boolean;
        patient_id?: boolean;
        doctor_id?: boolean;
        hospital_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        doctor?: boolean | doctorDefaultArgs<ExtArgs>;
        hospital?: boolean | hospitalDefaultArgs<ExtArgs>;
        patient?: boolean | patientDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['appointment']
    >;

  export type appointmentSelectScalar = {
    id?: boolean;
    date?: boolean;
    patient_id?: boolean;
    doctor_id?: boolean;
    hospital_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type appointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | doctorDefaultArgs<ExtArgs>;
    hospital?: boolean | hospitalDefaultArgs<ExtArgs>;
    patient?: boolean | patientDefaultArgs<ExtArgs>;
  };

  export type $appointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'appointment';
    objects: {
      doctor: Prisma.$doctorPayload<ExtArgs>;
      hospital: Prisma.$hospitalPayload<ExtArgs>;
      patient: Prisma.$patientPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        date: Date;
        patient_id: string;
        doctor_id: string;
        hospital_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['appointment']
    >;
    composites: {};
  };

  type appointmentGetPayload<S extends boolean | null | undefined | appointmentDefaultArgs> = $Result.GetResult<
    Prisma.$appointmentPayload,
    S
  >;

  type appointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    appointmentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AppointmentCountAggregateInputType | true;
  };

  export interface appointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment']; meta: { name: 'appointment' } };
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {appointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends appointmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Appointment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {appointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends appointmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends appointmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends appointmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     *
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends appointmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Appointment.
     * @param {appointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     *
     **/
    create<T extends appointmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentCreateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Appointments.
     *     @param {appointmentCreateManyArgs} args - Arguments to create many Appointments.
     *     @example
     *     // Create many Appointments
     *     const appointment = await prisma.appointment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends appointmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Appointment.
     * @param {appointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     *
     **/
    delete<T extends appointmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentDeleteArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Appointment.
     * @param {appointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends appointmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Appointments.
     * @param {appointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends appointmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends appointmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Appointment.
     * @param {appointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     **/
    upsert<T extends appointmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpsertArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
     **/
    count<T extends appointmentCountArgs>(
      args?: Subset<T, appointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AppointmentAggregateArgs>(
      args: Subset<T, AppointmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends appointmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentGroupByArgs['orderBy'] }
        : { orderBy?: appointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, appointmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the appointment model
     */
    readonly fields: appointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    doctor<T extends doctorDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, doctorDefaultArgs<ExtArgs>>,
    ): Prisma__doctorClient<
      $Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    hospital<T extends hospitalDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, hospitalDefaultArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    patient<T extends patientDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, patientDefaultArgs<ExtArgs>>,
    ): Prisma__patientClient<
      $Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the appointment model
   */
  interface appointmentFieldRefs {
    readonly id: FieldRef<'appointment', 'String'>;
    readonly date: FieldRef<'appointment', 'DateTime'>;
    readonly patient_id: FieldRef<'appointment', 'String'>;
    readonly doctor_id: FieldRef<'appointment', 'String'>;
    readonly hospital_id: FieldRef<'appointment', 'String'>;
    readonly created_at: FieldRef<'appointment', 'DateTime'>;
    readonly updated_at: FieldRef<'appointment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * appointment findUnique
   */
  export type appointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findUniqueOrThrow
   */
  export type appointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findFirst
   */
  export type appointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findFirstOrThrow
   */
  export type appointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findMany
   */
  export type appointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment create
   */
  export type appointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a appointment.
     */
    data: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
  };

  /**
   * appointment createMany
   */
  export type appointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * appointment update
   */
  export type appointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a appointment.
     */
    data: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
    /**
     * Choose, which appointment to update.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment updateMany
   */
  export type appointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>;
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment upsert
   */
  export type appointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the appointment to update in case it exists.
     */
    where: appointmentWhereUniqueInput;
    /**
     * In case the appointment found by the `where` argument doesn't exist, create a new appointment with this data.
     */
    create: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
    /**
     * In case the appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
  };

  /**
   * appointment delete
   */
  export type appointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter which appointment to delete.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment deleteMany
   */
  export type appointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment without action
   */
  export type appointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      hospital?: boolean | company$hospitalArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    hospital?: boolean | company$hospitalArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      hospital: Prisma.$hospitalPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    hospital<T extends company$hospitalArgs<ExtArgs> = {}>(
      args?: Subset<T, company$hospitalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.hospital
   */
  export type company$hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
    where?: hospitalWhereInput;
    orderBy?: hospitalOrderByWithRelationInput | hospitalOrderByWithRelationInput[];
    cursor?: hospitalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null;
    _min: DoctorMinAggregateOutputType | null;
    _max: DoctorMaxAggregateOutputType | null;
  };

  export type DoctorMinAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    specialization: string | null;
    contact_number: string | null;
    hospital_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DoctorMaxAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    specialization: string | null;
    contact_number: string | null;
    hospital_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DoctorCountAggregateOutputType = {
    id: number;
    first_name: number;
    last_name: number;
    specialization: number;
    contact_number: number;
    hospital_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DoctorMinAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    specialization?: true;
    contact_number?: true;
    hospital_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DoctorMaxAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    specialization?: true;
    contact_number?: true;
    hospital_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DoctorCountAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    specialization?: true;
    contact_number?: true;
    hospital_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctor to aggregate.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned doctors
     **/
    _count?: true | DoctorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DoctorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DoctorMaxAggregateInputType;
  };

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
    [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>;
  };

  export type doctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorWhereInput;
    orderBy?: doctorOrderByWithAggregationInput | doctorOrderByWithAggregationInput[];
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum;
    having?: doctorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DoctorCountAggregateInputType | true;
    _min?: DoctorMinAggregateInputType;
    _max?: DoctorMaxAggregateInputType;
  };

  export type DoctorGroupByOutputType = {
    id: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    hospital_id: string;
    created_at: Date;
    updated_at: Date;
    _count: DoctorCountAggregateOutputType | null;
    _min: DoctorMinAggregateOutputType | null;
    _max: DoctorMaxAggregateOutputType | null;
  };

  type GetDoctorGroupByPayload<T extends doctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DoctorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
          : GetScalarType<T[P], DoctorGroupByOutputType[P]>;
      }
    >
  >;

  export type doctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      specialization?: boolean;
      contact_number?: boolean;
      hospital_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment?: boolean | doctor$appointmentArgs<ExtArgs>;
      hospital?: boolean | hospitalDefaultArgs<ExtArgs>;
      _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['doctor']
  >;

  export type doctorSelectScalar = {
    id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    specialization?: boolean;
    contact_number?: boolean;
    hospital_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type doctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | doctor$appointmentArgs<ExtArgs>;
    hospital?: boolean | hospitalDefaultArgs<ExtArgs>;
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $doctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'doctor';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      hospital: Prisma.$hospitalPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        first_name: string;
        last_name: string;
        specialization: string;
        contact_number: string;
        hospital_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['doctor']
    >;
    composites: {};
  };

  type doctorGetPayload<S extends boolean | null | undefined | doctorDefaultArgs> = $Result.GetResult<
    Prisma.$doctorPayload,
    S
  >;

  type doctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    doctorFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: DoctorCountAggregateInputType | true;
  };

  export interface doctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctor']; meta: { name: 'doctor' } };
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {doctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends doctorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, doctorFindUniqueArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Doctor that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {doctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends doctorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends doctorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindFirstArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends doctorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     *
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends doctorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Doctor.
     * @param {doctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     *
     **/
    create<T extends doctorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, doctorCreateArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Doctors.
     *     @param {doctorCreateManyArgs} args - Arguments to create many Doctors.
     *     @example
     *     // Create many Doctors
     *     const doctor = await prisma.doctor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends doctorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Doctor.
     * @param {doctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     *
     **/
    delete<T extends doctorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, doctorDeleteArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Doctor.
     * @param {doctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends doctorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpdateArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Doctors.
     * @param {doctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends doctorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, doctorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends doctorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Doctor.
     * @param {doctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     **/
    upsert<T extends doctorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, doctorUpsertArgs<ExtArgs>>,
    ): Prisma__doctorClient<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
     **/
    count<T extends doctorCountArgs>(
      args?: Subset<T, doctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DoctorAggregateArgs>(
      args: Subset<T, DoctorAggregateArgs>,
    ): Prisma.PrismaPromise<GetDoctorAggregateType<T>>;

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends doctorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorGroupByArgs['orderBy'] }
        : { orderBy?: doctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, doctorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the doctor model
     */
    readonly fields: doctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends doctor$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, doctor$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    hospital<T extends hospitalDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, hospitalDefaultArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the doctor model
   */
  interface doctorFieldRefs {
    readonly id: FieldRef<'doctor', 'String'>;
    readonly first_name: FieldRef<'doctor', 'String'>;
    readonly last_name: FieldRef<'doctor', 'String'>;
    readonly specialization: FieldRef<'doctor', 'String'>;
    readonly contact_number: FieldRef<'doctor', 'String'>;
    readonly hospital_id: FieldRef<'doctor', 'String'>;
    readonly created_at: FieldRef<'doctor', 'DateTime'>;
    readonly updated_at: FieldRef<'doctor', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * doctor findUnique
   */
  export type doctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor findUniqueOrThrow
   */
  export type doctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor findFirst
   */
  export type doctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * doctor findFirstOrThrow
   */
  export type doctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctor to fetch.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for doctors.
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * doctor findMany
   */
  export type doctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing doctors.
     */
    cursor?: doctorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` doctors.
     */
    skip?: number;
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * doctor create
   */
  export type doctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * The data needed to create a doctor.
     */
    data: XOR<doctorCreateInput, doctorUncheckedCreateInput>;
  };

  /**
   * doctor createMany
   */
  export type doctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctors.
     */
    data: doctorCreateManyInput | doctorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * doctor update
   */
  export type doctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * The data needed to update a doctor.
     */
    data: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>;
    /**
     * Choose, which doctor to update.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor updateMany
   */
  export type doctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyInput>;
    /**
     * Filter which doctors to update
     */
    where?: doctorWhereInput;
  };

  /**
   * doctor upsert
   */
  export type doctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * The filter to search for the doctor to update in case it exists.
     */
    where: doctorWhereUniqueInput;
    /**
     * In case the doctor found by the `where` argument doesn't exist, create a new doctor with this data.
     */
    create: XOR<doctorCreateInput, doctorUncheckedCreateInput>;
    /**
     * In case the doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorUpdateInput, doctorUncheckedUpdateInput>;
  };

  /**
   * doctor delete
   */
  export type doctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    /**
     * Filter which doctor to delete.
     */
    where: doctorWhereUniqueInput;
  };

  /**
   * doctor deleteMany
   */
  export type doctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to delete
     */
    where?: doctorWhereInput;
  };

  /**
   * doctor.appointment
   */
  export type doctor$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * doctor without action
   */
  export type doctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
  };

  /**
   * Model hospital
   */

  export type AggregateHospital = {
    _count: HospitalCountAggregateOutputType | null;
    _min: HospitalMinAggregateOutputType | null;
    _max: HospitalMaxAggregateOutputType | null;
  };

  export type HospitalMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    contact_number: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type HospitalMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    contact_number: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type HospitalCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    contact_number: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type HospitalMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    contact_number?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type HospitalMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    contact_number?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type HospitalCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    contact_number?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type HospitalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospital to aggregate.
     */
    where?: hospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalOrderByWithRelationInput | hospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: hospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hospitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned hospitals
     **/
    _count?: true | HospitalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: HospitalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: HospitalMaxAggregateInputType;
  };

  export type GetHospitalAggregateType<T extends HospitalAggregateArgs> = {
    [P in keyof T & keyof AggregateHospital]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospital[P]>
      : GetScalarType<T[P], AggregateHospital[P]>;
  };

  export type hospitalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hospitalWhereInput;
    orderBy?: hospitalOrderByWithAggregationInput | hospitalOrderByWithAggregationInput[];
    by: HospitalScalarFieldEnum[] | HospitalScalarFieldEnum;
    having?: hospitalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HospitalCountAggregateInputType | true;
    _min?: HospitalMinAggregateInputType;
    _max?: HospitalMaxAggregateInputType;
  };

  export type HospitalGroupByOutputType = {
    id: string;
    name: string;
    address: string;
    contact_number: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: HospitalCountAggregateOutputType | null;
    _min: HospitalMinAggregateOutputType | null;
    _max: HospitalMaxAggregateOutputType | null;
  };

  type GetHospitalGroupByPayload<T extends hospitalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof HospitalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], HospitalGroupByOutputType[P]>
          : GetScalarType<T[P], HospitalGroupByOutputType[P]>;
      }
    >
  >;

  export type hospitalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        address?: boolean;
        contact_number?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        appointment?: boolean | hospital$appointmentArgs<ExtArgs>;
        doctor?: boolean | hospital$doctorArgs<ExtArgs>;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        patient?: boolean | hospital$patientArgs<ExtArgs>;
        _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['hospital']
    >;

  export type hospitalSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    contact_number?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type hospitalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | hospital$appointmentArgs<ExtArgs>;
    doctor?: boolean | hospital$doctorArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    patient?: boolean | hospital$patientArgs<ExtArgs>;
    _count?: boolean | HospitalCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $hospitalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'hospital';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      doctor: Prisma.$doctorPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
      patient: Prisma.$patientPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        address: string;
        contact_number: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['hospital']
    >;
    composites: {};
  };

  type hospitalGetPayload<S extends boolean | null | undefined | hospitalDefaultArgs> = $Result.GetResult<
    Prisma.$hospitalPayload,
    S
  >;

  type hospitalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    hospitalFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: HospitalCountAggregateInputType | true;
  };

  export interface hospitalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hospital']; meta: { name: 'hospital' } };
    /**
     * Find zero or one Hospital that matches the filter.
     * @param {hospitalFindUniqueArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends hospitalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalFindUniqueArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Hospital that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {hospitalFindUniqueOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends hospitalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Hospital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalFindFirstArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends hospitalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalFindFirstArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Hospital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalFindFirstOrThrowArgs} args - Arguments to find a Hospital
     * @example
     * // Get one Hospital
     * const hospital = await prisma.hospital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends hospitalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Hospitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitals
     * const hospitals = await prisma.hospital.findMany()
     *
     * // Get first 10 Hospitals
     * const hospitals = await prisma.hospital.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hospitalWithIdOnly = await prisma.hospital.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends hospitalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Hospital.
     * @param {hospitalCreateArgs} args - Arguments to create a Hospital.
     * @example
     * // Create one Hospital
     * const Hospital = await prisma.hospital.create({
     *   data: {
     *     // ... data to create a Hospital
     *   }
     * })
     *
     **/
    create<T extends hospitalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalCreateArgs<ExtArgs>>,
    ): Prisma__hospitalClient<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Hospitals.
     *     @param {hospitalCreateManyArgs} args - Arguments to create many Hospitals.
     *     @example
     *     // Create many Hospitals
     *     const hospital = await prisma.hospital.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends hospitalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Hospital.
     * @param {hospitalDeleteArgs} args - Arguments to delete one Hospital.
     * @example
     * // Delete one Hospital
     * const Hospital = await prisma.hospital.delete({
     *   where: {
     *     // ... filter to delete one Hospital
     *   }
     * })
     *
     **/
    delete<T extends hospitalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalDeleteArgs<ExtArgs>>,
    ): Prisma__hospitalClient<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Hospital.
     * @param {hospitalUpdateArgs} args - Arguments to update one Hospital.
     * @example
     * // Update one Hospital
     * const hospital = await prisma.hospital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends hospitalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalUpdateArgs<ExtArgs>>,
    ): Prisma__hospitalClient<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Hospitals.
     * @param {hospitalDeleteManyArgs} args - Arguments to filter Hospitals to delete.
     * @example
     * // Delete a few Hospitals
     * const { count } = await prisma.hospital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends hospitalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hospitalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitals
     * const hospital = await prisma.hospital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends hospitalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Hospital.
     * @param {hospitalUpsertArgs} args - Arguments to update or create a Hospital.
     * @example
     * // Update or create a Hospital
     * const hospital = await prisma.hospital.upsert({
     *   create: {
     *     // ... data to create a Hospital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospital we want to update
     *   }
     * })
     **/
    upsert<T extends hospitalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, hospitalUpsertArgs<ExtArgs>>,
    ): Prisma__hospitalClient<$Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Hospitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalCountArgs} args - Arguments to filter Hospitals to count.
     * @example
     * // Count the number of Hospitals
     * const count = await prisma.hospital.count({
     *   where: {
     *     // ... the filter for the Hospitals we want to count
     *   }
     * })
     **/
    count<T extends hospitalCountArgs>(
      args?: Subset<T, hospitalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends HospitalAggregateArgs>(
      args: Subset<T, HospitalAggregateArgs>,
    ): Prisma.PrismaPromise<GetHospitalAggregateType<T>>;

    /**
     * Group by Hospital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hospitalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends hospitalGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hospitalGroupByArgs['orderBy'] }
        : { orderBy?: hospitalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, hospitalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHospitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the hospital model
     */
    readonly fields: hospitalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hospital.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hospitalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends hospital$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, hospital$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    doctor<T extends hospital$doctorArgs<ExtArgs> = {}>(
      args?: Subset<T, hospital$doctorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    patient<T extends hospital$patientArgs<ExtArgs> = {}>(
      args?: Subset<T, hospital$patientArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the hospital model
   */
  interface hospitalFieldRefs {
    readonly id: FieldRef<'hospital', 'String'>;
    readonly name: FieldRef<'hospital', 'String'>;
    readonly address: FieldRef<'hospital', 'String'>;
    readonly contact_number: FieldRef<'hospital', 'String'>;
    readonly company_id: FieldRef<'hospital', 'String'>;
    readonly created_at: FieldRef<'hospital', 'DateTime'>;
    readonly updated_at: FieldRef<'hospital', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * hospital findUnique
   */
  export type hospitalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
    /**
     * Filter, which hospital to fetch.
     */
    where: hospitalWhereUniqueInput;
  };

  /**
   * hospital findUniqueOrThrow
   */
  export type hospitalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
    /**
     * Filter, which hospital to fetch.
     */
    where: hospitalWhereUniqueInput;
  };

  /**
   * hospital findFirst
   */
  export type hospitalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
    /**
     * Filter, which hospital to fetch.
     */
    where?: hospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalOrderByWithRelationInput | hospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hospitals.
     */
    cursor?: hospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hospitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[];
  };

  /**
   * hospital findFirstOrThrow
   */
  export type hospitalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
    /**
     * Filter, which hospital to fetch.
     */
    where?: hospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalOrderByWithRelationInput | hospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hospitals.
     */
    cursor?: hospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hospitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hospitals.
     */
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[];
  };

  /**
   * hospital findMany
   */
  export type hospitalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
    /**
     * Filter, which hospitals to fetch.
     */
    where?: hospitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hospitals to fetch.
     */
    orderBy?: hospitalOrderByWithRelationInput | hospitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing hospitals.
     */
    cursor?: hospitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hospitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hospitals.
     */
    skip?: number;
    distinct?: HospitalScalarFieldEnum | HospitalScalarFieldEnum[];
  };

  /**
   * hospital create
   */
  export type hospitalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
    /**
     * The data needed to create a hospital.
     */
    data: XOR<hospitalCreateInput, hospitalUncheckedCreateInput>;
  };

  /**
   * hospital createMany
   */
  export type hospitalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hospitals.
     */
    data: hospitalCreateManyInput | hospitalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * hospital update
   */
  export type hospitalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
    /**
     * The data needed to update a hospital.
     */
    data: XOR<hospitalUpdateInput, hospitalUncheckedUpdateInput>;
    /**
     * Choose, which hospital to update.
     */
    where: hospitalWhereUniqueInput;
  };

  /**
   * hospital updateMany
   */
  export type hospitalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hospitals.
     */
    data: XOR<hospitalUpdateManyMutationInput, hospitalUncheckedUpdateManyInput>;
    /**
     * Filter which hospitals to update
     */
    where?: hospitalWhereInput;
  };

  /**
   * hospital upsert
   */
  export type hospitalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
    /**
     * The filter to search for the hospital to update in case it exists.
     */
    where: hospitalWhereUniqueInput;
    /**
     * In case the hospital found by the `where` argument doesn't exist, create a new hospital with this data.
     */
    create: XOR<hospitalCreateInput, hospitalUncheckedCreateInput>;
    /**
     * In case the hospital was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hospitalUpdateInput, hospitalUncheckedUpdateInput>;
  };

  /**
   * hospital delete
   */
  export type hospitalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
    /**
     * Filter which hospital to delete.
     */
    where: hospitalWhereUniqueInput;
  };

  /**
   * hospital deleteMany
   */
  export type hospitalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hospitals to delete
     */
    where?: hospitalWhereInput;
  };

  /**
   * hospital.appointment
   */
  export type hospital$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * hospital.doctor
   */
  export type hospital$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctor
     */
    select?: doctorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: doctorInclude<ExtArgs> | null;
    where?: doctorWhereInput;
    orderBy?: doctorOrderByWithRelationInput | doctorOrderByWithRelationInput[];
    cursor?: doctorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[];
  };

  /**
   * hospital.patient
   */
  export type hospital$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    where?: patientWhereInput;
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    cursor?: patientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * hospital without action
   */
  export type hospitalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hospital
     */
    select?: hospitalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hospitalInclude<ExtArgs> | null;
  };

  /**
   * Model patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
  };

  export type PatientMinAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    date_of_birth: Date | null;
    gender: string | null;
    contact_number: string | null;
    hospital_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PatientMaxAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    date_of_birth: Date | null;
    gender: string | null;
    contact_number: string | null;
    hospital_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PatientCountAggregateOutputType = {
    id: number;
    first_name: number;
    last_name: number;
    date_of_birth: number;
    gender: number;
    contact_number: number;
    hospital_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PatientMinAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    date_of_birth?: true;
    gender?: true;
    contact_number?: true;
    hospital_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PatientMaxAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    date_of_birth?: true;
    gender?: true;
    contact_number?: true;
    hospital_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PatientCountAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    date_of_birth?: true;
    gender?: true;
    contact_number?: true;
    hospital_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned patients
     **/
    _count?: true | PatientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PatientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PatientMaxAggregateInputType;
  };

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
    [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>;
  };

  export type patientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientWhereInput;
    orderBy?: patientOrderByWithAggregationInput | patientOrderByWithAggregationInput[];
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum;
    having?: patientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientCountAggregateInputType | true;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
  };

  export type PatientGroupByOutputType = {
    id: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    gender: string;
    contact_number: string;
    hospital_id: string;
    created_at: Date;
    updated_at: Date;
    _count: PatientCountAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
  };

  type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PatientGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
          : GetScalarType<T[P], PatientGroupByOutputType[P]>;
      }
    >
  >;

  export type patientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      date_of_birth?: boolean;
      gender?: boolean;
      contact_number?: boolean;
      hospital_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment?: boolean | patient$appointmentArgs<ExtArgs>;
      hospital?: boolean | hospitalDefaultArgs<ExtArgs>;
      _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['patient']
  >;

  export type patientSelectScalar = {
    id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    date_of_birth?: boolean;
    gender?: boolean;
    contact_number?: boolean;
    hospital_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type patientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | patient$appointmentArgs<ExtArgs>;
    hospital?: boolean | hospitalDefaultArgs<ExtArgs>;
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $patientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'patient';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      hospital: Prisma.$hospitalPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        first_name: string;
        last_name: string;
        date_of_birth: Date;
        gender: string;
        contact_number: string;
        hospital_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['patient']
    >;
    composites: {};
  };

  type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = $Result.GetResult<
    Prisma.$patientPayload,
    S
  >;

  type patientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    patientFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: PatientCountAggregateInputType | true;
  };

  export interface patientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient']; meta: { name: 'patient' } };
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends patientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, patientFindUniqueArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Patient that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__patientClient<
      $Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends patientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindFirstArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     *
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends patientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     *
     **/
    create<T extends patientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, patientCreateArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Patients.
     *     @param {patientCreateManyArgs} args - Arguments to create many Patients.
     *     @example
     *     // Create many Patients
     *     const patient = await prisma.patient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends patientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     *
     **/
    delete<T extends patientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, patientDeleteArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends patientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpdateArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends patientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, patientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends patientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     **/
    upsert<T extends patientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, patientUpsertArgs<ExtArgs>>,
    ): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
     **/
    count<T extends patientCountArgs>(
      args?: Subset<T, patientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PatientAggregateArgs>(
      args: Subset<T, PatientAggregateArgs>,
    ): Prisma.PrismaPromise<GetPatientAggregateType<T>>;

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends patientGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientGroupByArgs['orderBy'] }
        : { orderBy?: patientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the patient model
     */
    readonly fields: patientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends patient$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, patient$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    hospital<T extends hospitalDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, hospitalDefaultArgs<ExtArgs>>,
    ): Prisma__hospitalClient<
      $Result.GetResult<Prisma.$hospitalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the patient model
   */
  interface patientFieldRefs {
    readonly id: FieldRef<'patient', 'String'>;
    readonly first_name: FieldRef<'patient', 'String'>;
    readonly last_name: FieldRef<'patient', 'String'>;
    readonly date_of_birth: FieldRef<'patient', 'DateTime'>;
    readonly gender: FieldRef<'patient', 'String'>;
    readonly contact_number: FieldRef<'patient', 'String'>;
    readonly hospital_id: FieldRef<'patient', 'String'>;
    readonly created_at: FieldRef<'patient', 'DateTime'>;
    readonly updated_at: FieldRef<'patient', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * patient findUnique
   */
  export type patientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient findUniqueOrThrow
   */
  export type patientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient findFirst
   */
  export type patientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient findFirstOrThrow
   */
  export type patientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient findMany
   */
  export type patientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter, which patients to fetch.
     */
    where?: patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing patients.
     */
    cursor?: patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[];
  };

  /**
   * patient create
   */
  export type patientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The data needed to create a patient.
     */
    data: XOR<patientCreateInput, patientUncheckedCreateInput>;
  };

  /**
   * patient createMany
   */
  export type patientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * patient update
   */
  export type patientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The data needed to update a patient.
     */
    data: XOR<patientUpdateInput, patientUncheckedUpdateInput>;
    /**
     * Choose, which patient to update.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient updateMany
   */
  export type patientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>;
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput;
  };

  /**
   * patient upsert
   */
  export type patientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: patientWhereUniqueInput;
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: XOR<patientCreateInput, patientUncheckedCreateInput>;
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientUpdateInput, patientUncheckedUpdateInput>;
  };

  /**
   * patient delete
   */
  export type patientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
    /**
     * Filter which patient to delete.
     */
    where: patientWhereUniqueInput;
  };

  /**
   * patient deleteMany
   */
  export type patientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientWhereInput;
  };

  /**
   * patient.appointment
   */
  export type patient$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * patient without action
   */
  export type patientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: patientInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AppointmentScalarFieldEnum: {
    id: 'id';
    date: 'date';
    patient_id: 'patient_id';
    doctor_id: 'doctor_id';
    hospital_id: 'hospital_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const DoctorScalarFieldEnum: {
    id: 'id';
    first_name: 'first_name';
    last_name: 'last_name';
    specialization: 'specialization';
    contact_number: 'contact_number';
    hospital_id: 'hospital_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum];

  export const HospitalScalarFieldEnum: {
    id: 'id';
    name: 'name';
    address: 'address';
    contact_number: 'contact_number';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum];

  export const PatientScalarFieldEnum: {
    id: 'id';
    first_name: 'first_name';
    last_name: 'last_name';
    date_of_birth: 'date_of_birth';
    gender: 'gender';
    contact_number: 'contact_number';
    hospital_id: 'hospital_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type appointmentWhereInput = {
    AND?: appointmentWhereInput | appointmentWhereInput[];
    OR?: appointmentWhereInput[];
    NOT?: appointmentWhereInput | appointmentWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    date?: DateTimeFilter<'appointment'> | Date | string;
    patient_id?: UuidFilter<'appointment'> | string;
    doctor_id?: UuidFilter<'appointment'> | string;
    hospital_id?: UuidFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
    doctor?: XOR<DoctorRelationFilter, doctorWhereInput>;
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>;
    patient?: XOR<PatientRelationFilter, patientWhereInput>;
  };

  export type appointmentOrderByWithRelationInput = {
    id?: SortOrder;
    date?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    doctor?: doctorOrderByWithRelationInput;
    hospital?: hospitalOrderByWithRelationInput;
    patient?: patientOrderByWithRelationInput;
  };

  export type appointmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: appointmentWhereInput | appointmentWhereInput[];
      OR?: appointmentWhereInput[];
      NOT?: appointmentWhereInput | appointmentWhereInput[];
      date?: DateTimeFilter<'appointment'> | Date | string;
      patient_id?: UuidFilter<'appointment'> | string;
      doctor_id?: UuidFilter<'appointment'> | string;
      hospital_id?: UuidFilter<'appointment'> | string;
      created_at?: DateTimeFilter<'appointment'> | Date | string;
      updated_at?: DateTimeFilter<'appointment'> | Date | string;
      doctor?: XOR<DoctorRelationFilter, doctorWhereInput>;
      hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>;
      patient?: XOR<PatientRelationFilter, patientWhereInput>;
    },
    'id'
  >;

  export type appointmentOrderByWithAggregationInput = {
    id?: SortOrder;
    date?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: appointmentCountOrderByAggregateInput;
    _max?: appointmentMaxOrderByAggregateInput;
    _min?: appointmentMinOrderByAggregateInput;
  };

  export type appointmentScalarWhereWithAggregatesInput = {
    AND?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    OR?: appointmentScalarWhereWithAggregatesInput[];
    NOT?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'appointment'> | string;
    date?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    patient_id?: UuidWithAggregatesFilter<'appointment'> | string;
    doctor_id?: UuidWithAggregatesFilter<'appointment'> | string;
    hospital_id?: UuidWithAggregatesFilter<'appointment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    hospital?: HospitalListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    hospital?: hospitalOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      hospital?: HospitalListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type doctorWhereInput = {
    AND?: doctorWhereInput | doctorWhereInput[];
    OR?: doctorWhereInput[];
    NOT?: doctorWhereInput | doctorWhereInput[];
    id?: UuidFilter<'doctor'> | string;
    first_name?: StringFilter<'doctor'> | string;
    last_name?: StringFilter<'doctor'> | string;
    specialization?: StringFilter<'doctor'> | string;
    contact_number?: StringFilter<'doctor'> | string;
    hospital_id?: UuidFilter<'doctor'> | string;
    created_at?: DateTimeFilter<'doctor'> | Date | string;
    updated_at?: DateTimeFilter<'doctor'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>;
  };

  export type doctorOrderByWithRelationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    hospital?: hospitalOrderByWithRelationInput;
  };

  export type doctorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: doctorWhereInput | doctorWhereInput[];
      OR?: doctorWhereInput[];
      NOT?: doctorWhereInput | doctorWhereInput[];
      first_name?: StringFilter<'doctor'> | string;
      last_name?: StringFilter<'doctor'> | string;
      specialization?: StringFilter<'doctor'> | string;
      contact_number?: StringFilter<'doctor'> | string;
      hospital_id?: UuidFilter<'doctor'> | string;
      created_at?: DateTimeFilter<'doctor'> | Date | string;
      updated_at?: DateTimeFilter<'doctor'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>;
    },
    'id'
  >;

  export type doctorOrderByWithAggregationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: doctorCountOrderByAggregateInput;
    _max?: doctorMaxOrderByAggregateInput;
    _min?: doctorMinOrderByAggregateInput;
  };

  export type doctorScalarWhereWithAggregatesInput = {
    AND?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[];
    OR?: doctorScalarWhereWithAggregatesInput[];
    NOT?: doctorScalarWhereWithAggregatesInput | doctorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'doctor'> | string;
    first_name?: StringWithAggregatesFilter<'doctor'> | string;
    last_name?: StringWithAggregatesFilter<'doctor'> | string;
    specialization?: StringWithAggregatesFilter<'doctor'> | string;
    contact_number?: StringWithAggregatesFilter<'doctor'> | string;
    hospital_id?: UuidWithAggregatesFilter<'doctor'> | string;
    created_at?: DateTimeWithAggregatesFilter<'doctor'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'doctor'> | Date | string;
  };

  export type hospitalWhereInput = {
    AND?: hospitalWhereInput | hospitalWhereInput[];
    OR?: hospitalWhereInput[];
    NOT?: hospitalWhereInput | hospitalWhereInput[];
    id?: UuidFilter<'hospital'> | string;
    name?: StringFilter<'hospital'> | string;
    address?: StringFilter<'hospital'> | string;
    contact_number?: StringFilter<'hospital'> | string;
    company_id?: UuidFilter<'hospital'> | string;
    created_at?: DateTimeFilter<'hospital'> | Date | string;
    updated_at?: DateTimeFilter<'hospital'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    doctor?: DoctorListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    patient?: PatientListRelationFilter;
  };

  export type hospitalOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    doctor?: doctorOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
    patient?: patientOrderByRelationAggregateInput;
  };

  export type hospitalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: hospitalWhereInput | hospitalWhereInput[];
      OR?: hospitalWhereInput[];
      NOT?: hospitalWhereInput | hospitalWhereInput[];
      name?: StringFilter<'hospital'> | string;
      address?: StringFilter<'hospital'> | string;
      contact_number?: StringFilter<'hospital'> | string;
      company_id?: UuidFilter<'hospital'> | string;
      created_at?: DateTimeFilter<'hospital'> | Date | string;
      updated_at?: DateTimeFilter<'hospital'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      doctor?: DoctorListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      patient?: PatientListRelationFilter;
    },
    'id'
  >;

  export type hospitalOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: hospitalCountOrderByAggregateInput;
    _max?: hospitalMaxOrderByAggregateInput;
    _min?: hospitalMinOrderByAggregateInput;
  };

  export type hospitalScalarWhereWithAggregatesInput = {
    AND?: hospitalScalarWhereWithAggregatesInput | hospitalScalarWhereWithAggregatesInput[];
    OR?: hospitalScalarWhereWithAggregatesInput[];
    NOT?: hospitalScalarWhereWithAggregatesInput | hospitalScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'hospital'> | string;
    name?: StringWithAggregatesFilter<'hospital'> | string;
    address?: StringWithAggregatesFilter<'hospital'> | string;
    contact_number?: StringWithAggregatesFilter<'hospital'> | string;
    company_id?: UuidWithAggregatesFilter<'hospital'> | string;
    created_at?: DateTimeWithAggregatesFilter<'hospital'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'hospital'> | Date | string;
  };

  export type patientWhereInput = {
    AND?: patientWhereInput | patientWhereInput[];
    OR?: patientWhereInput[];
    NOT?: patientWhereInput | patientWhereInput[];
    id?: UuidFilter<'patient'> | string;
    first_name?: StringFilter<'patient'> | string;
    last_name?: StringFilter<'patient'> | string;
    date_of_birth?: DateTimeFilter<'patient'> | Date | string;
    gender?: StringFilter<'patient'> | string;
    contact_number?: StringFilter<'patient'> | string;
    hospital_id?: UuidFilter<'patient'> | string;
    created_at?: DateTimeFilter<'patient'> | Date | string;
    updated_at?: DateTimeFilter<'patient'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>;
  };

  export type patientOrderByWithRelationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    contact_number?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    hospital?: hospitalOrderByWithRelationInput;
  };

  export type patientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: patientWhereInput | patientWhereInput[];
      OR?: patientWhereInput[];
      NOT?: patientWhereInput | patientWhereInput[];
      first_name?: StringFilter<'patient'> | string;
      last_name?: StringFilter<'patient'> | string;
      date_of_birth?: DateTimeFilter<'patient'> | Date | string;
      gender?: StringFilter<'patient'> | string;
      contact_number?: StringFilter<'patient'> | string;
      hospital_id?: UuidFilter<'patient'> | string;
      created_at?: DateTimeFilter<'patient'> | Date | string;
      updated_at?: DateTimeFilter<'patient'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      hospital?: XOR<HospitalRelationFilter, hospitalWhereInput>;
    },
    'id'
  >;

  export type patientOrderByWithAggregationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    contact_number?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: patientCountOrderByAggregateInput;
    _max?: patientMaxOrderByAggregateInput;
    _min?: patientMinOrderByAggregateInput;
  };

  export type patientScalarWhereWithAggregatesInput = {
    AND?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[];
    OR?: patientScalarWhereWithAggregatesInput[];
    NOT?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'patient'> | string;
    first_name?: StringWithAggregatesFilter<'patient'> | string;
    last_name?: StringWithAggregatesFilter<'patient'> | string;
    date_of_birth?: DateTimeWithAggregatesFilter<'patient'> | Date | string;
    gender?: StringWithAggregatesFilter<'patient'> | string;
    contact_number?: StringWithAggregatesFilter<'patient'> | string;
    hospital_id?: UuidWithAggregatesFilter<'patient'> | string;
    created_at?: DateTimeWithAggregatesFilter<'patient'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'patient'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type appointmentCreateInput = {
    id?: string;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutAppointmentInput;
    hospital: hospitalCreateNestedOneWithoutAppointmentInput;
    patient: patientCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateInput = {
    id?: string;
    date: Date | string;
    patient_id: string;
    doctor_id: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutAppointmentNestedInput;
    hospital?: hospitalUpdateOneRequiredWithoutAppointmentNestedInput;
    patient?: patientUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyInput = {
    id?: string;
    date: Date | string;
    patient_id: string;
    doctor_id: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    hospital?: hospitalCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    hospital?: hospitalUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    hospital?: hospitalUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    hospital?: hospitalUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type doctorCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutDoctorInput;
    hospital: hospitalCreateNestedOneWithoutDoctorInput;
  };

  export type doctorUncheckedCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput;
  };

  export type doctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput;
    hospital?: hospitalUpdateOneRequiredWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorCreateManyInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type doctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type doctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hospitalCreateInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutHospitalInput;
    doctor?: doctorCreateNestedManyWithoutHospitalInput;
    company: companyCreateNestedOneWithoutHospitalInput;
    patient?: patientCreateNestedManyWithoutHospitalInput;
  };

  export type hospitalUncheckedCreateInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutHospitalInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput;
    patient?: patientUncheckedCreateNestedManyWithoutHospitalInput;
  };

  export type hospitalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutHospitalNestedInput;
    doctor?: doctorUpdateManyWithoutHospitalNestedInput;
    company?: companyUpdateOneRequiredWithoutHospitalNestedInput;
    patient?: patientUpdateManyWithoutHospitalNestedInput;
  };

  export type hospitalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutHospitalNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutHospitalNestedInput;
    patient?: patientUncheckedUpdateManyWithoutHospitalNestedInput;
  };

  export type hospitalCreateManyInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hospitalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hospitalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutPatientInput;
    hospital: hospitalCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    contact_number: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput;
  };

  export type patientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutPatientNestedInput;
    hospital?: hospitalUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput;
  };

  export type patientCreateManyInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    contact_number: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DoctorRelationFilter = {
    is?: doctorWhereInput;
    isNot?: doctorWhereInput;
  };

  export type HospitalRelationFilter = {
    is?: hospitalWhereInput;
    isNot?: hospitalWhereInput;
  };

  export type PatientRelationFilter = {
    is?: patientWhereInput;
    isNot?: patientWhereInput;
  };

  export type appointmentCountOrderByAggregateInput = {
    id?: SortOrder;
    date?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    date?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMinOrderByAggregateInput = {
    id?: SortOrder;
    date?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type HospitalListRelationFilter = {
    every?: hospitalWhereInput;
    some?: hospitalWhereInput;
    none?: hospitalWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type hospitalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type AppointmentListRelationFilter = {
    every?: appointmentWhereInput;
    some?: appointmentWhereInput;
    none?: appointmentWhereInput;
  };

  export type appointmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type doctorCountOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type doctorMaxOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type doctorMinOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    specialization?: SortOrder;
    contact_number?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DoctorListRelationFilter = {
    every?: doctorWhereInput;
    some?: doctorWhereInput;
    none?: doctorWhereInput;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type PatientListRelationFilter = {
    every?: patientWhereInput;
    some?: patientWhereInput;
    none?: patientWhereInput;
  };

  export type doctorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type patientOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type hospitalCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hospitalMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hospitalMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patientCountOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    contact_number?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patientMaxOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    contact_number?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type patientMinOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    contact_number?: SortOrder;
    hospital_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type doctorCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: doctorCreateOrConnectWithoutAppointmentInput;
    connect?: doctorWhereUniqueInput;
  };

  export type hospitalCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<hospitalCreateWithoutAppointmentInput, hospitalUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: hospitalCreateOrConnectWithoutAppointmentInput;
    connect?: hospitalWhereUniqueInput;
  };

  export type patientCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: patientCreateOrConnectWithoutAppointmentInput;
    connect?: patientWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type doctorUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: doctorCreateOrConnectWithoutAppointmentInput;
    upsert?: doctorUpsertWithoutAppointmentInput;
    connect?: doctorWhereUniqueInput;
    update?: XOR<
      XOR<doctorUpdateToOneWithWhereWithoutAppointmentInput, doctorUpdateWithoutAppointmentInput>,
      doctorUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type hospitalUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<hospitalCreateWithoutAppointmentInput, hospitalUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: hospitalCreateOrConnectWithoutAppointmentInput;
    upsert?: hospitalUpsertWithoutAppointmentInput;
    connect?: hospitalWhereUniqueInput;
    update?: XOR<
      XOR<hospitalUpdateToOneWithWhereWithoutAppointmentInput, hospitalUpdateWithoutAppointmentInput>,
      hospitalUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type patientUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: patientCreateOrConnectWithoutAppointmentInput;
    upsert?: patientUpsertWithoutAppointmentInput;
    connect?: patientWhereUniqueInput;
    update?: XOR<
      XOR<patientUpdateToOneWithWhereWithoutAppointmentInput, patientUpdateWithoutAppointmentInput>,
      patientUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type hospitalCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<hospitalCreateWithoutCompanyInput, hospitalUncheckedCreateWithoutCompanyInput>
      | hospitalCreateWithoutCompanyInput[]
      | hospitalUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: hospitalCreateOrConnectWithoutCompanyInput | hospitalCreateOrConnectWithoutCompanyInput[];
    createMany?: hospitalCreateManyCompanyInputEnvelope;
    connect?: hospitalWhereUniqueInput | hospitalWhereUniqueInput[];
  };

  export type hospitalUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<hospitalCreateWithoutCompanyInput, hospitalUncheckedCreateWithoutCompanyInput>
      | hospitalCreateWithoutCompanyInput[]
      | hospitalUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: hospitalCreateOrConnectWithoutCompanyInput | hospitalCreateOrConnectWithoutCompanyInput[];
    createMany?: hospitalCreateManyCompanyInputEnvelope;
    connect?: hospitalWhereUniqueInput | hospitalWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type hospitalUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<hospitalCreateWithoutCompanyInput, hospitalUncheckedCreateWithoutCompanyInput>
      | hospitalCreateWithoutCompanyInput[]
      | hospitalUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: hospitalCreateOrConnectWithoutCompanyInput | hospitalCreateOrConnectWithoutCompanyInput[];
    upsert?: hospitalUpsertWithWhereUniqueWithoutCompanyInput | hospitalUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: hospitalCreateManyCompanyInputEnvelope;
    set?: hospitalWhereUniqueInput | hospitalWhereUniqueInput[];
    disconnect?: hospitalWhereUniqueInput | hospitalWhereUniqueInput[];
    delete?: hospitalWhereUniqueInput | hospitalWhereUniqueInput[];
    connect?: hospitalWhereUniqueInput | hospitalWhereUniqueInput[];
    update?: hospitalUpdateWithWhereUniqueWithoutCompanyInput | hospitalUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: hospitalUpdateManyWithWhereWithoutCompanyInput | hospitalUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: hospitalScalarWhereInput | hospitalScalarWhereInput[];
  };

  export type hospitalUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<hospitalCreateWithoutCompanyInput, hospitalUncheckedCreateWithoutCompanyInput>
      | hospitalCreateWithoutCompanyInput[]
      | hospitalUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: hospitalCreateOrConnectWithoutCompanyInput | hospitalCreateOrConnectWithoutCompanyInput[];
    upsert?: hospitalUpsertWithWhereUniqueWithoutCompanyInput | hospitalUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: hospitalCreateManyCompanyInputEnvelope;
    set?: hospitalWhereUniqueInput | hospitalWhereUniqueInput[];
    disconnect?: hospitalWhereUniqueInput | hospitalWhereUniqueInput[];
    delete?: hospitalWhereUniqueInput | hospitalWhereUniqueInput[];
    connect?: hospitalWhereUniqueInput | hospitalWhereUniqueInput[];
    update?: hospitalUpdateWithWhereUniqueWithoutCompanyInput | hospitalUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: hospitalUpdateManyWithWhereWithoutCompanyInput | hospitalUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: hospitalScalarWhereInput | hospitalScalarWhereInput[];
  };

  export type appointmentCreateNestedManyWithoutDoctorInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type hospitalCreateNestedOneWithoutDoctorInput = {
    create?: XOR<hospitalCreateWithoutDoctorInput, hospitalUncheckedCreateWithoutDoctorInput>;
    connectOrCreate?: hospitalCreateOrConnectWithoutDoctorInput;
    connect?: hospitalWhereUniqueInput;
  };

  export type appointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutDoctorNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutDoctorInput | appointmentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutDoctorInput | appointmentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutDoctorInput | appointmentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type hospitalUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<hospitalCreateWithoutDoctorInput, hospitalUncheckedCreateWithoutDoctorInput>;
    connectOrCreate?: hospitalCreateOrConnectWithoutDoctorInput;
    upsert?: hospitalUpsertWithoutDoctorInput;
    connect?: hospitalWhereUniqueInput;
    update?: XOR<
      XOR<hospitalUpdateToOneWithWhereWithoutDoctorInput, hospitalUpdateWithoutDoctorInput>,
      hospitalUncheckedUpdateWithoutDoctorInput
    >;
  };

  export type appointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>
      | appointmentCreateWithoutDoctorInput[]
      | appointmentUncheckedCreateWithoutDoctorInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutDoctorInput | appointmentCreateOrConnectWithoutDoctorInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutDoctorInput | appointmentUpsertWithWhereUniqueWithoutDoctorInput[];
    createMany?: appointmentCreateManyDoctorInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutDoctorInput | appointmentUpdateWithWhereUniqueWithoutDoctorInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutDoctorInput | appointmentUpdateManyWithWhereWithoutDoctorInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type appointmentCreateNestedManyWithoutHospitalInput = {
    create?:
      | XOR<appointmentCreateWithoutHospitalInput, appointmentUncheckedCreateWithoutHospitalInput>
      | appointmentCreateWithoutHospitalInput[]
      | appointmentUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutHospitalInput | appointmentCreateOrConnectWithoutHospitalInput[];
    createMany?: appointmentCreateManyHospitalInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type doctorCreateNestedManyWithoutHospitalInput = {
    create?:
      | XOR<doctorCreateWithoutHospitalInput, doctorUncheckedCreateWithoutHospitalInput>
      | doctorCreateWithoutHospitalInput[]
      | doctorUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutHospitalInput | doctorCreateOrConnectWithoutHospitalInput[];
    createMany?: doctorCreateManyHospitalInputEnvelope;
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutHospitalInput = {
    create?: XOR<companyCreateWithoutHospitalInput, companyUncheckedCreateWithoutHospitalInput>;
    connectOrCreate?: companyCreateOrConnectWithoutHospitalInput;
    connect?: companyWhereUniqueInput;
  };

  export type patientCreateNestedManyWithoutHospitalInput = {
    create?:
      | XOR<patientCreateWithoutHospitalInput, patientUncheckedCreateWithoutHospitalInput>
      | patientCreateWithoutHospitalInput[]
      | patientUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: patientCreateOrConnectWithoutHospitalInput | patientCreateOrConnectWithoutHospitalInput[];
    createMany?: patientCreateManyHospitalInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutHospitalInput = {
    create?:
      | XOR<appointmentCreateWithoutHospitalInput, appointmentUncheckedCreateWithoutHospitalInput>
      | appointmentCreateWithoutHospitalInput[]
      | appointmentUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutHospitalInput | appointmentCreateOrConnectWithoutHospitalInput[];
    createMany?: appointmentCreateManyHospitalInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type doctorUncheckedCreateNestedManyWithoutHospitalInput = {
    create?:
      | XOR<doctorCreateWithoutHospitalInput, doctorUncheckedCreateWithoutHospitalInput>
      | doctorCreateWithoutHospitalInput[]
      | doctorUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutHospitalInput | doctorCreateOrConnectWithoutHospitalInput[];
    createMany?: doctorCreateManyHospitalInputEnvelope;
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
  };

  export type patientUncheckedCreateNestedManyWithoutHospitalInput = {
    create?:
      | XOR<patientCreateWithoutHospitalInput, patientUncheckedCreateWithoutHospitalInput>
      | patientCreateWithoutHospitalInput[]
      | patientUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: patientCreateOrConnectWithoutHospitalInput | patientCreateOrConnectWithoutHospitalInput[];
    createMany?: patientCreateManyHospitalInputEnvelope;
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutHospitalNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutHospitalInput, appointmentUncheckedCreateWithoutHospitalInput>
      | appointmentCreateWithoutHospitalInput[]
      | appointmentUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutHospitalInput | appointmentCreateOrConnectWithoutHospitalInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutHospitalInput
      | appointmentUpsertWithWhereUniqueWithoutHospitalInput[];
    createMany?: appointmentCreateManyHospitalInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutHospitalInput
      | appointmentUpdateWithWhereUniqueWithoutHospitalInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutHospitalInput
      | appointmentUpdateManyWithWhereWithoutHospitalInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type doctorUpdateManyWithoutHospitalNestedInput = {
    create?:
      | XOR<doctorCreateWithoutHospitalInput, doctorUncheckedCreateWithoutHospitalInput>
      | doctorCreateWithoutHospitalInput[]
      | doctorUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutHospitalInput | doctorCreateOrConnectWithoutHospitalInput[];
    upsert?: doctorUpsertWithWhereUniqueWithoutHospitalInput | doctorUpsertWithWhereUniqueWithoutHospitalInput[];
    createMany?: doctorCreateManyHospitalInputEnvelope;
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    update?: doctorUpdateWithWhereUniqueWithoutHospitalInput | doctorUpdateWithWhereUniqueWithoutHospitalInput[];
    updateMany?: doctorUpdateManyWithWhereWithoutHospitalInput | doctorUpdateManyWithWhereWithoutHospitalInput[];
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutHospitalNestedInput = {
    create?: XOR<companyCreateWithoutHospitalInput, companyUncheckedCreateWithoutHospitalInput>;
    connectOrCreate?: companyCreateOrConnectWithoutHospitalInput;
    upsert?: companyUpsertWithoutHospitalInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutHospitalInput, companyUpdateWithoutHospitalInput>,
      companyUncheckedUpdateWithoutHospitalInput
    >;
  };

  export type patientUpdateManyWithoutHospitalNestedInput = {
    create?:
      | XOR<patientCreateWithoutHospitalInput, patientUncheckedCreateWithoutHospitalInput>
      | patientCreateWithoutHospitalInput[]
      | patientUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: patientCreateOrConnectWithoutHospitalInput | patientCreateOrConnectWithoutHospitalInput[];
    upsert?: patientUpsertWithWhereUniqueWithoutHospitalInput | patientUpsertWithWhereUniqueWithoutHospitalInput[];
    createMany?: patientCreateManyHospitalInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?: patientUpdateWithWhereUniqueWithoutHospitalInput | patientUpdateWithWhereUniqueWithoutHospitalInput[];
    updateMany?: patientUpdateManyWithWhereWithoutHospitalInput | patientUpdateManyWithWhereWithoutHospitalInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutHospitalInput, appointmentUncheckedCreateWithoutHospitalInput>
      | appointmentCreateWithoutHospitalInput[]
      | appointmentUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutHospitalInput | appointmentCreateOrConnectWithoutHospitalInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutHospitalInput
      | appointmentUpsertWithWhereUniqueWithoutHospitalInput[];
    createMany?: appointmentCreateManyHospitalInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutHospitalInput
      | appointmentUpdateWithWhereUniqueWithoutHospitalInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutHospitalInput
      | appointmentUpdateManyWithWhereWithoutHospitalInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type doctorUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?:
      | XOR<doctorCreateWithoutHospitalInput, doctorUncheckedCreateWithoutHospitalInput>
      | doctorCreateWithoutHospitalInput[]
      | doctorUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: doctorCreateOrConnectWithoutHospitalInput | doctorCreateOrConnectWithoutHospitalInput[];
    upsert?: doctorUpsertWithWhereUniqueWithoutHospitalInput | doctorUpsertWithWhereUniqueWithoutHospitalInput[];
    createMany?: doctorCreateManyHospitalInputEnvelope;
    set?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    disconnect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    delete?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    connect?: doctorWhereUniqueInput | doctorWhereUniqueInput[];
    update?: doctorUpdateWithWhereUniqueWithoutHospitalInput | doctorUpdateWithWhereUniqueWithoutHospitalInput[];
    updateMany?: doctorUpdateManyWithWhereWithoutHospitalInput | doctorUpdateManyWithWhereWithoutHospitalInput[];
    deleteMany?: doctorScalarWhereInput | doctorScalarWhereInput[];
  };

  export type patientUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?:
      | XOR<patientCreateWithoutHospitalInput, patientUncheckedCreateWithoutHospitalInput>
      | patientCreateWithoutHospitalInput[]
      | patientUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: patientCreateOrConnectWithoutHospitalInput | patientCreateOrConnectWithoutHospitalInput[];
    upsert?: patientUpsertWithWhereUniqueWithoutHospitalInput | patientUpsertWithWhereUniqueWithoutHospitalInput[];
    createMany?: patientCreateManyHospitalInputEnvelope;
    set?: patientWhereUniqueInput | patientWhereUniqueInput[];
    disconnect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    delete?: patientWhereUniqueInput | patientWhereUniqueInput[];
    connect?: patientWhereUniqueInput | patientWhereUniqueInput[];
    update?: patientUpdateWithWhereUniqueWithoutHospitalInput | patientUpdateWithWhereUniqueWithoutHospitalInput[];
    updateMany?: patientUpdateManyWithWhereWithoutHospitalInput | patientUpdateManyWithWhereWithoutHospitalInput[];
    deleteMany?: patientScalarWhereInput | patientScalarWhereInput[];
  };

  export type appointmentCreateNestedManyWithoutPatientInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type hospitalCreateNestedOneWithoutPatientInput = {
    create?: XOR<hospitalCreateWithoutPatientInput, hospitalUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: hospitalCreateOrConnectWithoutPatientInput;
    connect?: hospitalWhereUniqueInput;
  };

  export type appointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutPatientNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutPatientInput
      | appointmentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutPatientInput
      | appointmentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutPatientInput
      | appointmentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type hospitalUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<hospitalCreateWithoutPatientInput, hospitalUncheckedCreateWithoutPatientInput>;
    connectOrCreate?: hospitalCreateOrConnectWithoutPatientInput;
    upsert?: hospitalUpsertWithoutPatientInput;
    connect?: hospitalWhereUniqueInput;
    update?: XOR<
      XOR<hospitalUpdateToOneWithWhereWithoutPatientInput, hospitalUpdateWithoutPatientInput>,
      hospitalUncheckedUpdateWithoutPatientInput
    >;
  };

  export type appointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
      | appointmentCreateWithoutPatientInput[]
      | appointmentUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutPatientInput
      | appointmentUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: appointmentCreateManyPatientInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutPatientInput
      | appointmentUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutPatientInput
      | appointmentUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type doctorCreateWithoutAppointmentInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    hospital: hospitalCreateNestedOneWithoutDoctorInput;
  };

  export type doctorUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type doctorCreateOrConnectWithoutAppointmentInput = {
    where: doctorWhereUniqueInput;
    create: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
  };

  export type hospitalCreateWithoutAppointmentInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor?: doctorCreateNestedManyWithoutHospitalInput;
    company: companyCreateNestedOneWithoutHospitalInput;
    patient?: patientCreateNestedManyWithoutHospitalInput;
  };

  export type hospitalUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput;
    patient?: patientUncheckedCreateNestedManyWithoutHospitalInput;
  };

  export type hospitalCreateOrConnectWithoutAppointmentInput = {
    where: hospitalWhereUniqueInput;
    create: XOR<hospitalCreateWithoutAppointmentInput, hospitalUncheckedCreateWithoutAppointmentInput>;
  };

  export type patientCreateWithoutAppointmentInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    hospital: hospitalCreateNestedOneWithoutPatientInput;
  };

  export type patientUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    contact_number: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientCreateOrConnectWithoutAppointmentInput = {
    where: patientWhereUniqueInput;
    create: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
  };

  export type doctorUpsertWithoutAppointmentInput = {
    update: XOR<doctorUpdateWithoutAppointmentInput, doctorUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<doctorCreateWithoutAppointmentInput, doctorUncheckedCreateWithoutAppointmentInput>;
    where?: doctorWhereInput;
  };

  export type doctorUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: doctorWhereInput;
    data: XOR<doctorUpdateWithoutAppointmentInput, doctorUncheckedUpdateWithoutAppointmentInput>;
  };

  export type doctorUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    hospital?: hospitalUpdateOneRequiredWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hospitalUpsertWithoutAppointmentInput = {
    update: XOR<hospitalUpdateWithoutAppointmentInput, hospitalUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<hospitalCreateWithoutAppointmentInput, hospitalUncheckedCreateWithoutAppointmentInput>;
    where?: hospitalWhereInput;
  };

  export type hospitalUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: hospitalWhereInput;
    data: XOR<hospitalUpdateWithoutAppointmentInput, hospitalUncheckedUpdateWithoutAppointmentInput>;
  };

  export type hospitalUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateManyWithoutHospitalNestedInput;
    company?: companyUpdateOneRequiredWithoutHospitalNestedInput;
    patient?: patientUpdateManyWithoutHospitalNestedInput;
  };

  export type hospitalUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUncheckedUpdateManyWithoutHospitalNestedInput;
    patient?: patientUncheckedUpdateManyWithoutHospitalNestedInput;
  };

  export type patientUpsertWithoutAppointmentInput = {
    update: XOR<patientUpdateWithoutAppointmentInput, patientUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<patientCreateWithoutAppointmentInput, patientUncheckedCreateWithoutAppointmentInput>;
    where?: patientWhereInput;
  };

  export type patientUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: patientWhereInput;
    data: XOR<patientUpdateWithoutAppointmentInput, patientUncheckedUpdateWithoutAppointmentInput>;
  };

  export type patientUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    hospital?: hospitalUpdateOneRequiredWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type hospitalCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutHospitalInput;
    doctor?: doctorCreateNestedManyWithoutHospitalInput;
    patient?: patientCreateNestedManyWithoutHospitalInput;
  };

  export type hospitalUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutHospitalInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput;
    patient?: patientUncheckedCreateNestedManyWithoutHospitalInput;
  };

  export type hospitalCreateOrConnectWithoutCompanyInput = {
    where: hospitalWhereUniqueInput;
    create: XOR<hospitalCreateWithoutCompanyInput, hospitalUncheckedCreateWithoutCompanyInput>;
  };

  export type hospitalCreateManyCompanyInputEnvelope = {
    data: hospitalCreateManyCompanyInput | hospitalCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hospitalUpsertWithWhereUniqueWithoutCompanyInput = {
    where: hospitalWhereUniqueInput;
    update: XOR<hospitalUpdateWithoutCompanyInput, hospitalUncheckedUpdateWithoutCompanyInput>;
    create: XOR<hospitalCreateWithoutCompanyInput, hospitalUncheckedCreateWithoutCompanyInput>;
  };

  export type hospitalUpdateWithWhereUniqueWithoutCompanyInput = {
    where: hospitalWhereUniqueInput;
    data: XOR<hospitalUpdateWithoutCompanyInput, hospitalUncheckedUpdateWithoutCompanyInput>;
  };

  export type hospitalUpdateManyWithWhereWithoutCompanyInput = {
    where: hospitalScalarWhereInput;
    data: XOR<hospitalUpdateManyMutationInput, hospitalUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type hospitalScalarWhereInput = {
    AND?: hospitalScalarWhereInput | hospitalScalarWhereInput[];
    OR?: hospitalScalarWhereInput[];
    NOT?: hospitalScalarWhereInput | hospitalScalarWhereInput[];
    id?: UuidFilter<'hospital'> | string;
    name?: StringFilter<'hospital'> | string;
    address?: StringFilter<'hospital'> | string;
    contact_number?: StringFilter<'hospital'> | string;
    company_id?: UuidFilter<'hospital'> | string;
    created_at?: DateTimeFilter<'hospital'> | Date | string;
    updated_at?: DateTimeFilter<'hospital'> | Date | string;
  };

  export type appointmentCreateWithoutDoctorInput = {
    id?: string;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    hospital: hospitalCreateNestedOneWithoutAppointmentInput;
    patient: patientCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutDoctorInput = {
    id?: string;
    date: Date | string;
    patient_id: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutDoctorInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>;
  };

  export type appointmentCreateManyDoctorInputEnvelope = {
    data: appointmentCreateManyDoctorInput | appointmentCreateManyDoctorInput[];
    skipDuplicates?: boolean;
  };

  export type hospitalCreateWithoutDoctorInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutHospitalInput;
    company: companyCreateNestedOneWithoutHospitalInput;
    patient?: patientCreateNestedManyWithoutHospitalInput;
  };

  export type hospitalUncheckedCreateWithoutDoctorInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutHospitalInput;
    patient?: patientUncheckedCreateNestedManyWithoutHospitalInput;
  };

  export type hospitalCreateOrConnectWithoutDoctorInput = {
    where: hospitalWhereUniqueInput;
    create: XOR<hospitalCreateWithoutDoctorInput, hospitalUncheckedCreateWithoutDoctorInput>;
  };

  export type appointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutDoctorInput, appointmentUncheckedUpdateWithoutDoctorInput>;
    create: XOR<appointmentCreateWithoutDoctorInput, appointmentUncheckedCreateWithoutDoctorInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutDoctorInput, appointmentUncheckedUpdateWithoutDoctorInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutDoctorInput>;
  };

  export type appointmentScalarWhereInput = {
    AND?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    OR?: appointmentScalarWhereInput[];
    NOT?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    date?: DateTimeFilter<'appointment'> | Date | string;
    patient_id?: UuidFilter<'appointment'> | string;
    doctor_id?: UuidFilter<'appointment'> | string;
    hospital_id?: UuidFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
  };

  export type hospitalUpsertWithoutDoctorInput = {
    update: XOR<hospitalUpdateWithoutDoctorInput, hospitalUncheckedUpdateWithoutDoctorInput>;
    create: XOR<hospitalCreateWithoutDoctorInput, hospitalUncheckedCreateWithoutDoctorInput>;
    where?: hospitalWhereInput;
  };

  export type hospitalUpdateToOneWithWhereWithoutDoctorInput = {
    where?: hospitalWhereInput;
    data: XOR<hospitalUpdateWithoutDoctorInput, hospitalUncheckedUpdateWithoutDoctorInput>;
  };

  export type hospitalUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutHospitalNestedInput;
    company?: companyUpdateOneRequiredWithoutHospitalNestedInput;
    patient?: patientUpdateManyWithoutHospitalNestedInput;
  };

  export type hospitalUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutHospitalNestedInput;
    patient?: patientUncheckedUpdateManyWithoutHospitalNestedInput;
  };

  export type appointmentCreateWithoutHospitalInput = {
    id?: string;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutAppointmentInput;
    patient: patientCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutHospitalInput = {
    id?: string;
    date: Date | string;
    patient_id: string;
    doctor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutHospitalInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutHospitalInput, appointmentUncheckedCreateWithoutHospitalInput>;
  };

  export type appointmentCreateManyHospitalInputEnvelope = {
    data: appointmentCreateManyHospitalInput | appointmentCreateManyHospitalInput[];
    skipDuplicates?: boolean;
  };

  export type doctorCreateWithoutHospitalInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutDoctorInput;
  };

  export type doctorUncheckedCreateWithoutHospitalInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutDoctorInput;
  };

  export type doctorCreateOrConnectWithoutHospitalInput = {
    where: doctorWhereUniqueInput;
    create: XOR<doctorCreateWithoutHospitalInput, doctorUncheckedCreateWithoutHospitalInput>;
  };

  export type doctorCreateManyHospitalInputEnvelope = {
    data: doctorCreateManyHospitalInput | doctorCreateManyHospitalInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutHospitalInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutHospitalInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutHospitalInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutHospitalInput, companyUncheckedCreateWithoutHospitalInput>;
  };

  export type patientCreateWithoutHospitalInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutPatientInput;
  };

  export type patientUncheckedCreateWithoutHospitalInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutPatientInput;
  };

  export type patientCreateOrConnectWithoutHospitalInput = {
    where: patientWhereUniqueInput;
    create: XOR<patientCreateWithoutHospitalInput, patientUncheckedCreateWithoutHospitalInput>;
  };

  export type patientCreateManyHospitalInputEnvelope = {
    data: patientCreateManyHospitalInput | patientCreateManyHospitalInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentUpsertWithWhereUniqueWithoutHospitalInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutHospitalInput, appointmentUncheckedUpdateWithoutHospitalInput>;
    create: XOR<appointmentCreateWithoutHospitalInput, appointmentUncheckedCreateWithoutHospitalInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutHospitalInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutHospitalInput, appointmentUncheckedUpdateWithoutHospitalInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutHospitalInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutHospitalInput>;
  };

  export type doctorUpsertWithWhereUniqueWithoutHospitalInput = {
    where: doctorWhereUniqueInput;
    update: XOR<doctorUpdateWithoutHospitalInput, doctorUncheckedUpdateWithoutHospitalInput>;
    create: XOR<doctorCreateWithoutHospitalInput, doctorUncheckedCreateWithoutHospitalInput>;
  };

  export type doctorUpdateWithWhereUniqueWithoutHospitalInput = {
    where: doctorWhereUniqueInput;
    data: XOR<doctorUpdateWithoutHospitalInput, doctorUncheckedUpdateWithoutHospitalInput>;
  };

  export type doctorUpdateManyWithWhereWithoutHospitalInput = {
    where: doctorScalarWhereInput;
    data: XOR<doctorUpdateManyMutationInput, doctorUncheckedUpdateManyWithoutHospitalInput>;
  };

  export type doctorScalarWhereInput = {
    AND?: doctorScalarWhereInput | doctorScalarWhereInput[];
    OR?: doctorScalarWhereInput[];
    NOT?: doctorScalarWhereInput | doctorScalarWhereInput[];
    id?: UuidFilter<'doctor'> | string;
    first_name?: StringFilter<'doctor'> | string;
    last_name?: StringFilter<'doctor'> | string;
    specialization?: StringFilter<'doctor'> | string;
    contact_number?: StringFilter<'doctor'> | string;
    hospital_id?: UuidFilter<'doctor'> | string;
    created_at?: DateTimeFilter<'doctor'> | Date | string;
    updated_at?: DateTimeFilter<'doctor'> | Date | string;
  };

  export type companyUpsertWithoutHospitalInput = {
    update: XOR<companyUpdateWithoutHospitalInput, companyUncheckedUpdateWithoutHospitalInput>;
    create: XOR<companyCreateWithoutHospitalInput, companyUncheckedCreateWithoutHospitalInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutHospitalInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutHospitalInput, companyUncheckedUpdateWithoutHospitalInput>;
  };

  export type companyUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type patientUpsertWithWhereUniqueWithoutHospitalInput = {
    where: patientWhereUniqueInput;
    update: XOR<patientUpdateWithoutHospitalInput, patientUncheckedUpdateWithoutHospitalInput>;
    create: XOR<patientCreateWithoutHospitalInput, patientUncheckedCreateWithoutHospitalInput>;
  };

  export type patientUpdateWithWhereUniqueWithoutHospitalInput = {
    where: patientWhereUniqueInput;
    data: XOR<patientUpdateWithoutHospitalInput, patientUncheckedUpdateWithoutHospitalInput>;
  };

  export type patientUpdateManyWithWhereWithoutHospitalInput = {
    where: patientScalarWhereInput;
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyWithoutHospitalInput>;
  };

  export type patientScalarWhereInput = {
    AND?: patientScalarWhereInput | patientScalarWhereInput[];
    OR?: patientScalarWhereInput[];
    NOT?: patientScalarWhereInput | patientScalarWhereInput[];
    id?: UuidFilter<'patient'> | string;
    first_name?: StringFilter<'patient'> | string;
    last_name?: StringFilter<'patient'> | string;
    date_of_birth?: DateTimeFilter<'patient'> | Date | string;
    gender?: StringFilter<'patient'> | string;
    contact_number?: StringFilter<'patient'> | string;
    hospital_id?: UuidFilter<'patient'> | string;
    created_at?: DateTimeFilter<'patient'> | Date | string;
    updated_at?: DateTimeFilter<'patient'> | Date | string;
  };

  export type appointmentCreateWithoutPatientInput = {
    id?: string;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    doctor: doctorCreateNestedOneWithoutAppointmentInput;
    hospital: hospitalCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutPatientInput = {
    id?: string;
    date: Date | string;
    doctor_id: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutPatientInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>;
  };

  export type appointmentCreateManyPatientInputEnvelope = {
    data: appointmentCreateManyPatientInput | appointmentCreateManyPatientInput[];
    skipDuplicates?: boolean;
  };

  export type hospitalCreateWithoutPatientInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutHospitalInput;
    doctor?: doctorCreateNestedManyWithoutHospitalInput;
    company: companyCreateNestedOneWithoutHospitalInput;
  };

  export type hospitalUncheckedCreateWithoutPatientInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutHospitalInput;
    doctor?: doctorUncheckedCreateNestedManyWithoutHospitalInput;
  };

  export type hospitalCreateOrConnectWithoutPatientInput = {
    where: hospitalWhereUniqueInput;
    create: XOR<hospitalCreateWithoutPatientInput, hospitalUncheckedCreateWithoutPatientInput>;
  };

  export type appointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutPatientInput, appointmentUncheckedUpdateWithoutPatientInput>;
    create: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutPatientInput, appointmentUncheckedUpdateWithoutPatientInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutPatientInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutPatientInput>;
  };

  export type hospitalUpsertWithoutPatientInput = {
    update: XOR<hospitalUpdateWithoutPatientInput, hospitalUncheckedUpdateWithoutPatientInput>;
    create: XOR<hospitalCreateWithoutPatientInput, hospitalUncheckedCreateWithoutPatientInput>;
    where?: hospitalWhereInput;
  };

  export type hospitalUpdateToOneWithWhereWithoutPatientInput = {
    where?: hospitalWhereInput;
    data: XOR<hospitalUpdateWithoutPatientInput, hospitalUncheckedUpdateWithoutPatientInput>;
  };

  export type hospitalUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutHospitalNestedInput;
    doctor?: doctorUpdateManyWithoutHospitalNestedInput;
    company?: companyUpdateOneRequiredWithoutHospitalNestedInput;
  };

  export type hospitalUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutHospitalNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutHospitalNestedInput;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    hospital?: hospitalCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    hospital?: hospitalUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type hospitalCreateManyCompanyInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hospitalUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutHospitalNestedInput;
    doctor?: doctorUpdateManyWithoutHospitalNestedInput;
    patient?: patientUpdateManyWithoutHospitalNestedInput;
  };

  export type hospitalUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutHospitalNestedInput;
    doctor?: doctorUncheckedUpdateManyWithoutHospitalNestedInput;
    patient?: patientUncheckedUpdateManyWithoutHospitalNestedInput;
  };

  export type hospitalUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyDoctorInput = {
    id?: string;
    date: Date | string;
    patient_id: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    hospital?: hospitalUpdateOneRequiredWithoutAppointmentNestedInput;
    patient?: patientUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyHospitalInput = {
    id?: string;
    date: Date | string;
    patient_id: string;
    doctor_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type doctorCreateManyHospitalInput = {
    id?: string;
    first_name: string;
    last_name: string;
    specialization: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type patientCreateManyHospitalInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutAppointmentNestedInput;
    patient?: patientUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type doctorUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutDoctorNestedInput;
  };

  export type doctorUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type patientUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutPatientNestedInput;
  };

  export type patientUncheckedUpdateManyWithoutHospitalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyPatientInput = {
    id?: string;
    date: Date | string;
    doctor_id: string;
    hospital_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor?: doctorUpdateOneRequiredWithoutAppointmentNestedInput;
    hospital?: hospitalUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    hospital_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    hospital?: hospitalUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    hospital?: hospitalUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use DoctorCountOutputTypeDefaultArgs instead
   */
  export type DoctorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    DoctorCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use HospitalCountOutputTypeDefaultArgs instead
   */
  export type HospitalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    HospitalCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PatientCountOutputTypeDefaultArgs instead
   */
  export type PatientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    PatientCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use appointmentDefaultArgs instead
   */
  export type appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    appointmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use doctorDefaultArgs instead
   */
  export type doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    doctorDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use hospitalDefaultArgs instead
   */
  export type hospitalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    hospitalDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use patientDefaultArgs instead
   */
  export type patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    patientDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
