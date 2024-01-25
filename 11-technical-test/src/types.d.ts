export interface FiltersType {
  rowsColored: boolean
  sortedByCountry: boolean
  sortedByName: boolean
  sortedByLastName: boolean
  country: string
}

export type SortedFilter = 'country' | 'name' | 'lastName'

export interface RandomUserAPIResponse {
  results: User[]
}

export interface UserType {
  gender: string
  name: UserName
  location: UserLocation
  email: string
  login: UserLogin
  dob: UserDob
  registered: UserRegistered
  phone: string
  cell: string
  id: UserId
  picture: UserPicture
  nat: string
}

export interface UserName {
  title: string
  first: string
  last: string
}

export interface UserLocation {
  street: Street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Coordinates
  timezone: Timezone
}

export interface UserStreet {
  number: number
  name: string
}

export interface UserCoordinates {
  latitude: string
  longitude: string
}

export interface UserTimezone {
  offset: string
  description: string
}

export interface UserLogin {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

export interface UserDob {
  date: string
  age: number
}

export interface UserRegistered {
  date: string
  age: number
}

export interface UserId {
  name: string
  value: string
}

export interface UserPicture {
  large: string
  medium: string
  thumbnail: string
}
