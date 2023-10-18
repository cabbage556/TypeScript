/**
 * Object intersection
 */

// primitive intersection -> never
type PrimitiveIntersection = string & number;

type Person = {
  name: string;
  age: number;
};
type Company = {
  company: string;
  registrationNumber: string;
};

type PersonAndCompany = Person & Company;

const jisoo: PersonAndCompany = {
  name: "지수",
  age: 31,
  company: "yg",
  registrationNumber: "123343241",
};

type Pet = {
  petName: string;
  petAge: number;
};

type CompanyOrPet = Person & (Company | Pet);

const companyOrPet: CompanyOrPet = {
  // Person(인터섹션이므로 무조건 필요)
  name: "코드팩토리",
  age: 32,

  // Company(Pet 타입 만족 시 0개 이상 프로퍼티 포함 가능)
  company: "주식회사 코드팩토리",
  registrationNumber: "123231",

  // Pet(Company 타입 만족 시 0개 이상 프로퍼티 포함 가능)
  petName: "오리",
  petAge: 2,
};
