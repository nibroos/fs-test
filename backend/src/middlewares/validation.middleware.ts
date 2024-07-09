import { plainToInstance } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';

/**
 * @name ValidationMiddleware
 * @description Allows use of decorator and non-decorator based validation
 * @param type dto
 * @param skipMissingProperties When skipping missing properties
 * @param whitelist Even if your object is an instance of a validation class it can contain additional properties that are not defined
 * @param forbidNonWhitelisted If you would rather to have an error thrown when any non-whitelisted properties are present
 */
export const ValidationMiddleware = (type: any, skipMissingProperties = false, whitelist = false, forbidNonWhitelisted = false) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(type, req.body);
    validateOrReject(dto, { skipMissingProperties, whitelist, forbidNonWhitelisted })
      .then(() => {
        req.body = dto;
        next();
      })
      .catch((errors: ValidationError[]) => {
        const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
        // console.log(errors, 'errors validationerror');

        // next(new HttpException(400, message, errors));
        res.status(400).json({
          status: 400,
          message,
          errors: transformErrors(errors)
          // errors: errors.map((error: ValidationError) => {
          // return {
          //   property: error.property,
          //   value: error.value,
          //   constraints: error.constraints
          // };
          // })
        })
      });
  };
};

type Errors = {
  [key: string]: string[];
};

function transformErrors(validationErrors: ValidationError[]): Errors {
  const errors: Errors = {};

  function traverse(errors: Errors, path: string, validationError: ValidationError) {
    if (validationError.constraints) {
      const fullPath = path ? `${path}.${validationError.property}` : validationError.property;
      if (!errors[fullPath]) {
        errors[fullPath] = [];
      }
      Object.values(validationError.constraints).forEach((message) => {
        errors[fullPath].push(message);
      });
    }

    if (validationError.children && validationError.children.length) {
      validationError.children.forEach((childError) => {
        const childPath = path ? `${path}.${validationError.property}` : validationError.property;
        traverse(errors, childPath, childError);
      });
    }
  }

  validationErrors.forEach((validationError) => {
    traverse(errors, '', validationError);
  });

  return errors;
}

