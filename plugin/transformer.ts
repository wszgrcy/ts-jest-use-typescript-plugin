import { SourceFile, TransformationContext, TransformerFactory } from "typescript";

import type { TsCompilerInstance } from "ts-jest/dist/types";
export const version = Math.random();
export const name = "test";
export function factory(compilerInstance: TsCompilerInstance): TransformerFactory<SourceFile> {
  return (ctx: TransformationContext) => {
    return (sf: SourceFile) => {
      return sf;
    };
  };
}
