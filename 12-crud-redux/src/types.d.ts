export interface User {
  name: string
  email: string
  github: string
}

type UserID = string

export interface UserWithID extends User {
  id: UserID
}
