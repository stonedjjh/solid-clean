(() => {
  //sin respetar el principio de Responsabilidad Unica
  type Gender = "M" | "F";

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }
  //version corta
  class Person2 {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ birthdate, gender, name }: PersonProps) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps {
    birthdate: Date;
    gender: Gender;
    name: string;
    email: string;
    role: string;
  }

  class User extends Person2 {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ birthdate, gender, name, email, role }: UserProps) {
      super({ birthdate, gender, name });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }
    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ birthdate, email, gender, name, role });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date("1985-10-21"),
    email: "fernando@google.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Fernando",
    role: "Admin",
    workingDirectory: "/usr/home",
  });
  const userSettings2 = new UserSettings({
    birthdate: new Date("1985-10-21"),
    email: "fernando@google.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Fernando",
    role: "Admin",
    workingDirectory: "/usr/home",
  });

  console.log({ userSettings });

  const person = new Person("Juan", "M", new Date("1990-01-01"));
  const person2 = new Person2({
    name: "Pedro",
    gender: "M",
    birthdate: new Date("1992-02-02"),
  });
  console.log({ person });
  console.log({ person2 });
})();
