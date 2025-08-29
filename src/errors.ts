/*
 * Copyright 2025, Salesforce, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A minimal `NamedError` implementation not intended for widespread use -- just enough to support this library's needs.
 * For a complete `NamedError` solution, see [@salesforce/kit]{@link https://preview.npmjs.com/package/@salesforce/kit}.
 */
export class NamedError extends Error {
  public readonly name: string;

  public constructor(name: string, message: string) {
    super(message);
    this.name = name;
  }
}

/**
 * Indicates an unexpected type was encountered during a type-narrowing operation.
 */
export class AssertionFailedError extends NamedError {
  public constructor(message: string) {
    super('AssertionFailedError', message);
  }
}

/**
 * Indicates an unexpected type was encountered during a type-narrowing operation.
 */
export class UnexpectedValueTypeError extends NamedError {
  public constructor(message: string) {
    super('UnexpectedValueTypeError', message);
  }
}

/**
 * Indicates an error while performing a JSON clone operation.
 */
export class JsonCloneError extends NamedError {
  public constructor(cause: Error) {
    super('JsonCloneError', cause.message);
  }
}
