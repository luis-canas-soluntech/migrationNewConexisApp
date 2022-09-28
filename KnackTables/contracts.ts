import {
  address,
  connection,
  dateTime,
  email,
  file,
  name,
  phone,
  yesNo,
} from "./types";

//* multiple create an enum that has the values of the fields in the comment above, in the same order

//TODO: ADD THE FILEDS HERE
export enum rateCardsEnum {
  record_id = "id",

  // Contract ID
  // ContractID-AutoNumber
  // Buyer
  // Supplier
  // Contract Status
  // Job Title
  // Job Title (Direct Contract)
  // Worker
  // Base Pay Rate per Hour
  // Contract Bill Rate
  // Contract Overtime Rate
  // Contract Double Time Rate
  // Markup %
  // Estimated Fees
  // Estimated Expenses
  // Total Estimated Cost
  // Levels of Subcontracting
  // FLSA Status
  // Payroll Type
  // Exhibit B - IP
  // Exhibit D - Assets
  // Exhibit G - BGC
  // Worker Resume
  // Planned Start Date
  // Planned End Date
  // Contrax Savings per Hour
  // Contract Finalized On
  // Proposal
  // Requisition
  // Proposal Submitted On
  // Supplier Contact
  // Direct Contract ID baseline (set to 6000 if Direct Contract)
  // Buyer Work Week
  // Invoiced Up To
  // Cost Centers
  // Actual Start Date
  // Actual End Date
  // Reason for Termination
  // Uninvoiced T&E Cards
  // Onboarding Activity 1
  // Onboarding Activity 2
  // Onboarding Activity 3
  // Onboarding Activity 4
  // Onboarding Activity 5
  // Standard Onboarding Activities Added
  // Job Owner's Email
  // Job Owner's Email Field
  // Supplier Contact Email
  // Supplier Contact Email Field
  // Contract Created
  // Email for IT setup
  // Email for IT setup description
  // Directly Created Contract?
  // Direct Contract Created By Email
  // Contract Directly Created By
  // Skill Category
  // Work Address Line 1
  // Work Address Line 2
  // Work Address City
  // Work Address Country
  // Work Address State/Province
  // Work Address Zip/Postal Code
  // Send IT Setup Email?
  // Proposer's Email tf[Proposal]
  // Proposer's Email
  // Contract Duration (days)
  // Is this contract connected to a Supplier?
  // Date last BGC completed
  // Proposed Bill Rate Shift 1
  // Overtime Rate Shift 1
  // Double Time Rate Shift 1
  // Pay Rate Shift 1
  // Proposed Bill Rate Shift 2
  // Overtime Rate Shift 2
  // Double Time Rate Shift 2
  // Pay Rate Shift 2
  // Proposed Bill Rate Shift 3
  // Overtime Rate Shift 3
  // Double Time Rate Shift 3
  // Pay Rate Shift 3
  // Contract Work Shifts
  // Work Shift 1
  // Work Shift 2
  // Work Shift 3
  // # of Work Shifts Entered
  // Dollar or % MSP Fee?
  // Dollar or Percent Fee Logic (1=dollar, 2=percent)
  // MSP $ Fee
  // Final MSP $ Fee EQ
  // MSP % Fee
  // MSP % Fee to % format
  // Buyer Bill Rate
  // Supplier Bill Rate
  // Final Salary
  // Contrax % Fee
  // Perm Hire Contrax Fee ($)
  // Supplier % Fee
  // Perm Hire Supplier Fee ($)
  // Onboarding Activity 6
  // Onboarding Activity 7
  // Onboarding Activity 8
  // Onboarding Activity 9
  // Onboarding Activity 10
  // Invoice Created for Permanent Hire?
  // Show Contract to Buyers &amp; Suppliers?
  // PO Number / CAC
  // PO Attachment
  // Renewal Start Date EQ
  // # of Amendments
  // __# of Amendments - 1 EQ
  // Current Amendment #
  // __"-" for contract amendment to ID
  // __"-Current Amendment #" TF
  // Current Amendment # final CR
  // Contract ID Testing
  // BLANK UPDATE FIELD
  // Initial Start Date
  // Activation Actual Start Date
  // Initial Contract End Date
  // # of Initial Amendments
  // # of Next Up Amendments
  // Job Owner
  // Activated?
  // # of Line Items
  // Allow Contract Amendments?
  // # of Amendments EQ
  // Contract Status (excl Terminate)
  // Show Amendment Views?
  // Start Date - PH
  // Buyer Invoice Description
  // Permanent Hire? TF[Proposal]
  // Worker Profile
  // Worker Authorization
  // Worker Authorization Expiry Date
  // Authorization Attachment
  // # of PH Invoices
  // Timecard Last Submitted Date
  // Requires Final MSP Approval?
  // Requires Final Approval By MSP Admin
  // Final Approval Completed?
  // Custom Tax Rates?
  // Custom Supplier Tax Rate
  // Supplier Tax Rate Final EQ
  // Custom Buyer Tax Rate
  // Buyer Tax Rate Final EQ
  // Custom MSP Tax Rate
  // MSP Tax Rate Final EQ
  // Apply 15% Withholding Tax?
  // Withholding Tax %
  // Withholding Tax as % EQ
  // Activate Contract Now?
  // Final Approval Status
  // Final Approval Comments
  // Submitted for Final Approval by Contrax Admin
  // Submit for Final Approval or Reject?
  // Accept or Reject Final Approval
  // Business Unit
  // Business Unit & Dept TF
  // Business Unit TF
  // Region
  // Mapping ID
  // Direct Sourcing? TF[Requisition]
  // Status After Rejection
  // Contrax Admin Job Owner
  // Job Owner Source
  // GL Code
  // Cost Centre (archived)
  // Actual End Date + 90 days EQ
  // Accenture? CR
  // Can Add T&E? CR
  // Flowdown?
  // Supplier Flowdown
  // Supplier Company Name
  // Worker Name
  // SS Buyer? TF
  // Self Serve Contract?
  // Contract End Notify Email CR
  // Apply Supplier Tax Rate to Expense Total?
  // Contract Manual End Date/Time
  // Contract Manually Ended By
  // GL Code
  // Activate Contract or Change Status?
  // Pre-activation Status
  // End Status
  // Termination Voluntary?
  // Do Not Rehire?
  // Work Shift 1 Description
  // Work Shift 2 Description
  // Work Shift 3 Description
  // Total Approved Hours
  // Contact at # of Hours Threshold 1
  // Contact at # of Hours Threshold 2
  // Hours Threshold Contact Email
  // # of Hours Over Threshold 1 Contact Level EQ
  // # of Hours Over Threshold 2 Contact Level EQ
  // Date/Time Threshold 1 Hit
  // Date/Time Threshold 2 Hit
  // Buyer Search Fee
  // Supplier Search Fee
  // MSP Search Fee
  // PH Invoice Due Date
  // Task Update ID
  // Work Shifts Logic
  // Permanent Hire?
  // Onboarding steps
  // MSP Admin or Finance User?
  // Description of Services PH Invoice
  // Early Contract End Date Temp
  // Import ID
  // Source Requisition Approver
  // Proposed Bill Rate Shift 1 (After MSP)
  // Proposed Bill Rate Shift 2 (After MSP)
  // Proposed Bill Rate Shift 3 (After MSP)
  // Overtime Rate Shift 1 (After MSP)
  // Overtime Rate Shift 2 (After MSP)
  // Overtime Rate Shift 3 (After MSP)
  // Double Time Rate Shift 1 (After MSP)
  // Double Time Rate Shift 2 (After MSP)
  // Double Time Rate Shift 3(After MSP)
  // Contracts Import Log
  // planned ending status
  // buyer is using amendments?
  // Skill Category dropdown
  // requisition job title
  // Updated On
}

export interface KnackRateCards {
  [rateCardsEnum.record_id]: string;
}
