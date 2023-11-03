// Union Types

// type FrontEndDevelopers = "fakibazDeveloper" | "juniorDeveloper"; //string literal type
// type FullStackDevelopers = "frontendDeveloper" | "expertDeveloper";

// type Developer = FrontEndDevelopers | FullStackDevelopers;

// const newDeveloper: FrontEndDevelopers = "juniorDeveloper";

// type User = {
//   name: string;
//   email: string;
//   gender: "Male" | "Female";
//   bloodGorup: "O+" | "AB+" | "B+";
// };

// const user1: User = {
//   name: "Mahamudul Hasan Abir",
//   email: "mhabir10@gmail.com",
//   gender: "Male",
//   bloodGorup: "B+",
// };

{
  type FrontEndDeveloper = {
    skills: string[];
    designation1: "FrontendDeveloper";
  };

  type BackEndDeveloper = {
    skills: string[];
    designation2: "BackEndDevleoper";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

  const fullstackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
  };
}
