export class UserService {
  public getUser(): string {
    return "Hello, World";
  }

  public addUser(id: number): string {
    if (id === 1) return "User has been added";
    return "User has not been added";
  }
}
