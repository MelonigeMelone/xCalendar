export class User {
  private _username: string;

  private _email: string;

  private _phone: string;

  private _password: string;

  constructor(
    username: string,
    email: string,
    phone: string,
    password: string,
  ) {
    this._username = username;
    this._email = email;
    this._phone = phone;
    this._password = password;
  }

  public editUsername(newUsername: string): void {
    this.username = newUsername;
  }

  public editEmail(newEmail: string): void {
    this.email = newEmail;
  }

  public editPhone(newPhone: string): void {
    this.phone = newPhone;
  }

  public editPassword(newPassword: string): void {
    this.password = newPassword;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(value: string) {
    this._phone = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }
}
