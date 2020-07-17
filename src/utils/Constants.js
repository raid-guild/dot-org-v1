const TEXT_FIELD_PROPS = [
  {
    state_name: 'project_type',
    label: 'Project Type',
    required: 'true',
    type: 'radio',
  },
  {
    state_name: 'project_name',
    label: 'Project Name',
    required: true,
    type: 'text',
  },
  {
    state_name: 'summary',
    label: 'Brief Summary',
    required: true,
    type: 'text',
  },
  {
    state_name: 'specs',
    label: 'Do you have any functional documents / specs / mockups?',
    required: false,
    type: 'radio',
  },
  {
    state_name: 'skills_needed',
    label: 'Skills Needed',
    required: true,
    type: 'checkbox',
  },
  {
    state_name: 'priorities',
    label: 'Priorities (Pick Two)',
    required: true,
    type: 'checkbox',
  },
  {
    state_name: 'link',
    label: 'Relevant Link/URL',
    required: false,
    type: 'text',
  },
  {
    state_name: 'completion_date',
    label: 'Desired date of Completion (DD/MM/YYYY)',
    required: false,
    type: 'text',
  },
  {
    state_name: 'budget',
    label: 'Your Desired Budget (DAI/USD)',
    required: true,
    type: 'text',
  },
  { state_name: 'name', label: 'Your Name', required: true, type: 'text' },
  { state_name: 'email', label: 'Email Address', required: true, type: 'text' },
  {
    state_name: 'handle',
    label: 'Telegram or Discord Username',
    required: false,
    type: 'text',
  },
  {
    state_name: 'about_guild',
    label: 'How did you hear about the Guild?',
    required: false,
    type: 'text',
  },
  {
    state_name: 'to_know',
    label: 'Anything else you’d like the Guild to know?',
    required: false,
    type: 'text',
  },
]

const CHECKBOX_SKILLS_OPTIONS = [
  'Consulting',
  'DAO Design / Deployment',
  'Development (Frontend, Backend)',
  'Marketing (copy writing, strategy)',
  'Smart Contracts (Solidity, Audits)',
  'Visual Design (Branding, Illustration, etc)',
  'UX/UI Design',
  'Other / Not Sure',
]

const CHECKBOX_SPECS_OPTIONS = [
  'Yes, I have detailed specs/requirements',
  'Yes, but need help defining the exact scope',
  'No, I want RaidGuild to help me define the spec',
]

const CHECKBOX_PRIORITIES_OPTIONS = ['Fast', 'Cheap', 'Good']

const CHECKBOX_PROJECT_TYPE_OPTIONS = ['New Project', 'Existing Project']

module.exports = {
  TEXT_FIELD_PROPS,
  CHECKBOX_SKILLS_OPTIONS,
  CHECKBOX_SPECS_OPTIONS,
  CHECKBOX_PRIORITIES_OPTIONS,
  CHECKBOX_PROJECT_TYPE_OPTIONS,
}
