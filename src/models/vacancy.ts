import { Company } from "./company"
import { User } from "./user"

export interface Vacancy {
  id: number
  vacancyRole: string
  wage: number
  location: string
  vacancyType: string
  vacancyDescription: string
  level: string
  advertiser: User;
  company: Company;
  createdAt: Date
  updatedAt: Date
}
