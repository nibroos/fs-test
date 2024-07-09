import { UserService } from '@/services/users.service';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, registerDecorator, ValidationOptions } from 'class-validator';
import { sql } from '@sequelize/core';

import { DB } from '@database';
import { QueryTypes } from 'sequelize';
import { Model } from 'sequelize';

@ValidatorConstraint()
export class CustomTextLength implements ValidatorConstraintInterface {
  validate(text: string, validationArguments: ValidationArguments) {
    return text.length > validationArguments.constraints[0] && text.length < validationArguments.constraints[1];
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Text ($value) is too short or too long!';
  }
}

export function IsLongerThan(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isLongerThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return typeof value === 'string' && typeof relatedValue === 'string' && value.length > relatedValue.length; // you can return a Promise<boolean> here as well, if you want to make async validation
        },
      },
    });
  };
}

// @ValidatorConstraint({ async: true })
// export class IsAlreadyExistConstraint implements ValidatorConstraintInterface {
//   async validate(value: any, args: ValidationArguments) {
//     // return [args.constraints[0]].findOneByName(value).then(model => {
//     //   if (model) return false;
//     //   return true;
//     // });
//     let tableName = args.constraints[0]
//     let columnTarget = args.constraints[1]

//     // Build and run the query safely
//     const query = `SELECT id, ${columnTarget} FROM ${tableName} WHERE ${columnTarget} = :value`;
//     const replacements = { value };

//     // let check = await DB.sq.query(query, { replacements, type: QueryTypes.SELECT });
//     // let check = DB.sq.query(query, { replacements, type: QueryTypes.SELECT });

//     // let check = await DB.sq.query(
//     //   sql`SELECT id,${columnTarget} FROM ${tableName} WHERE ${columnTarget} = ${value}`, {
//     //   type: QueryTypes.SELECT
//     // }
//     // );

//     return DB.sq.query(query, { replacements, type: QueryTypes.SELECT }).then(model => {
//       if (model.length == 0) return false;
//       return true;
//     });
//   }
// }

// export function IsAlreadyExist(validationOptions?: ValidationOptions) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       constraints: [],
//       validator: IsAlreadyExistConstraint,
//     });
//   };
// }

@ValidatorConstraint({ async: true })
class IsUniqueConstraint implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments) {
    const [table, column, identifierColumn, isIgnore] = args.constraints as [string, string, string, any];

    let query: string = `SELECT id as count FROM ${table} WHERE ${column} = :value`;

    const replacements: Record<string, any> = { value };

    if (isIgnore) {
      query += ` AND ${identifierColumn} != :identifierValue`;
      replacements.identifierValue = args['object'][identifierColumn];
    }

    const result: Record<string, any>[] = await DB.sq.query(query, {
      replacements,
      type: QueryTypes.SELECT,
    });


    return result.length === 0;
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} already exists`;
  }
}

export function IsUnique(table: string, column: string, identifierColumn: string = 'id', isIgnore: boolean = false, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [table, column, identifierColumn, isIgnore],
      validator: IsUniqueConstraint,
    });
  };
}