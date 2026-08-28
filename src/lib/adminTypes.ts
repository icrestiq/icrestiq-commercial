export type CompanyType = 'prospect' | 'customer' | 'manufacturer' | 'dealer' | 'government'
export type ContactRole = 'decision_maker' | 'purchasing' | 'technical' | 'operations' | 'other'
export type DealStageType = 'open' | 'won' | 'lost'
export type DealCompanyRole = 'customer' | 'manufacturer' | 'dealer' | 'competitor'
export type DealContactRole = 'primary_contact' | 'decision_maker' | 'technical_contact' | 'other'
export type QuoteRequestStatus = 'new' | 'contacted' | 'converted' | 'archived'

export interface Company {
  id: string
  name: string
  company_type: CompanyType
  website: string | null
  address: string | null
  created_at: string
  updated_at: string
}

export interface Contact {
  id: string
  company_id: string | null
  name: string
  role_tag: ContactRole
  email: string | null
  phone: string | null
  created_at: string
  updated_at: string
}

export interface DealStage {
  id: string
  name: string
  sort_order: number
  stage_type: DealStageType
  created_at: string
}

export interface Deal {
  id: string
  title: string
  stage_id: string
  value_estimate: number | null
  created_at: string
  updated_at: string
}

export interface DealCompany {
  id: string
  deal_id: string
  company_id: string
  role_on_deal: DealCompanyRole
  created_at: string
}

export interface DealContact {
  id: string
  deal_id: string
  contact_id: string
  role_on_deal: DealContactRole
  created_at: string
}

export interface Note {
  id: string
  deal_id: string | null
  company_id: string | null
  contact_id: string | null
  body: string
  created_at: string
}

export interface Task {
  id: string
  deal_id: string | null
  company_id: string | null
  contact_id: string | null
  title: string
  due_date: string | null
  completed_at: string | null
  created_at: string
}

export interface QuoteRequest {
  id: string
  name: string
  company: string | null
  email: string
  phone: string | null
  buyer_type: 'Commercial / B2B' | 'Government / Institutional'
  equipment: string | null
  quantity: string | null
  timeline: string | null
  details: string | null
  status: QuoteRequestStatus
  converted_company_id: string | null
  converted_contact_id: string | null
  converted_deal_id: string | null
  created_at: string
}
