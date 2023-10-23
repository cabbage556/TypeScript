/**
 * Template Literal
 * string 타입 조작 시 사용하는 유틸리티 타입
 */

type CodeFactory = "Code Factory";

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFactory>; // "CODE FACTORY" 타입

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>; // "code factory" 타입

// Capitalize
type CodeFactoryCapital = Capitalize<CodeFactoryLower>; // "Code Factory" 타입

// Uncapitalize
type CodeFactoryUncapital = Uncapitalize<CodeFactoryCapital>; // "code factory" 타입
