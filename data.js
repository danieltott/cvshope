export const data = {
  FullStudiesResponse: {
    APIVrs: '1.01.03',
    DataVrs: '2021:04:28 22:25:36.917',
    Expression: '"NCT04645953"',
    NStudiesAvail: 375905,
    NStudiesFound: 1,
    MinRank: 1,
    MaxRank: 1,
    NStudiesReturned: 1,
    FullStudies: [
      {
        Rank: 1,
        Study: {
          ProtocolSection: {
            IdentificationModule: {
              NCTId: 'NCT04645953',
              OrgStudyIdInfo: {
                OrgStudyId: 'AMDC 010-201',
              },
              Organization: {
                OrgFullName: 'Alexza Pharmaceuticals, Inc.',
                OrgClass: 'INDUSTRY',
              },
              BriefTitle:
                'Staccato Granisetron® (AZ 010) for the Treatment of Cyclic Vomiting Syndrome',
              OfficialTitle:
                'A Randomized, Double-Blind, Placebo Controlled Study to Evaluate the Safety and Efficacy of Staccato Granisetron (AZ-010) for the Acute Treatment of Moderate to Severe Cyclic Vomiting Syndrome',
            },
            StatusModule: {
              StatusVerifiedDate: 'April 2021',
              OverallStatus: 'Recruiting',
              ExpandedAccessInfo: {
                HasExpandedAccess: 'No',
              },
              StartDateStruct: {
                StartDate: 'February 11, 2021',
                StartDateType: 'Actual',
              },
              PrimaryCompletionDateStruct: {
                PrimaryCompletionDate: 'December 15, 2021',
                PrimaryCompletionDateType: 'Anticipated',
              },
              CompletionDateStruct: {
                CompletionDate: 'January 15, 2022',
                CompletionDateType: 'Anticipated',
              },
              StudyFirstSubmitDate: 'November 16, 2020',
              StudyFirstSubmitQCDate: 'November 25, 2020',
              StudyFirstPostDateStruct: {
                StudyFirstPostDate: 'November 27, 2020',
                StudyFirstPostDateType: 'Actual',
              },
              LastUpdateSubmitDate: 'April 2, 2021',
              LastUpdatePostDateStruct: {
                LastUpdatePostDate: 'April 5, 2021',
                LastUpdatePostDateType: 'Actual',
              },
            },
            SponsorCollaboratorsModule: {
              ResponsibleParty: {
                ResponsiblePartyType: 'Sponsor',
              },
              LeadSponsor: {
                LeadSponsorName: 'Alexza Pharmaceuticals, Inc.',
                LeadSponsorClass: 'INDUSTRY',
              },
            },
            OversightModule: {
              OversightHasDMC: 'No',
              IsFDARegulatedDrug: 'Yes',
              IsFDARegulatedDevice: 'Yes',
            },
            DescriptionModule: {
              BriefSummary:
                'This is a multicenter, randomized, double-blind, parallel group, placebo-controlled, efficacy and safety study of adult outpatients diagnosed with CVS and experiencing recurring episodes of stereotypical vomiting.',
              DetailedDescription:
                'A Randomized, Double-Blind, Placebo Controlled Study to Evaluate the Safety and Efficacy of Staccato Granisetron (AZ-010) for the Acute Treatment of Moderate to Severe Cyclic Vomiting Syndrome',
            },
            ConditionsModule: {
              ConditionList: {
                Condition: ['Cyclic Vomiting Syndrome'],
              },
            },
            DesignModule: {
              StudyType: 'Interventional',
              PhaseList: {
                Phase: ['Phase 2'],
              },
              DesignInfo: {
                DesignAllocation: 'Randomized',
                DesignInterventionModel: 'Parallel Assignment',
                DesignPrimaryPurpose: 'Treatment',
                DesignMaskingInfo: {
                  DesignMasking: 'Triple',
                  DesignMaskingDescription: 'Double Blind',
                  DesignWhoMaskedList: {
                    DesignWhoMasked: [
                      'Participant',
                      'Investigator',
                      'Outcomes Assessor',
                    ],
                  },
                },
              },
              EnrollmentInfo: {
                EnrollmentCount: '150',
                EnrollmentType: 'Anticipated',
              },
            },
            ArmsInterventionsModule: {
              ArmGroupList: {
                ArmGroup: [
                  {
                    ArmGroupLabel: '1mg AZ010',
                    ArmGroupType: 'Experimental',
                    ArmGroupDescription: 'Single orally-inhaled dose',
                    ArmGroupInterventionList: {
                      ArmGroupInterventionName: [
                        'Combination Product: 1mg AZ010',
                      ],
                    },
                  },
                  {
                    ArmGroupLabel: '3mg AZ010',
                    ArmGroupType: 'Experimental',
                    ArmGroupDescription: 'Single orally-inhaled dose',
                    ArmGroupInterventionList: {
                      ArmGroupInterventionName: [
                        'Combination Product: 3mg AZ-010',
                      ],
                    },
                  },
                  {
                    ArmGroupLabel: 'Placebo',
                    ArmGroupType: 'Experimental',
                    ArmGroupDescription: 'Single orally-inhaled dose',
                    ArmGroupInterventionList: {
                      ArmGroupInterventionName: [
                        'Combination Product: Staccato Placebo',
                      ],
                    },
                  },
                ],
              },
              InterventionList: {
                Intervention: [
                  {
                    InterventionType: 'Combination Product',
                    InterventionName: '3mg AZ-010',
                    InterventionDescription:
                      'Subject will receive a single inhaled dose (3mg)',
                    InterventionArmGroupLabelList: {
                      InterventionArmGroupLabel: ['3mg AZ010'],
                    },
                  },
                  {
                    InterventionType: 'Combination Product',
                    InterventionName: '1mg AZ010',
                    InterventionDescription:
                      'Subject will receive a single inhaled dose (1mg)',
                    InterventionArmGroupLabelList: {
                      InterventionArmGroupLabel: ['1mg AZ010'],
                    },
                  },
                  {
                    InterventionType: 'Combination Product',
                    InterventionName: 'Staccato Placebo',
                    InterventionDescription:
                      'Subject will receive a single inhaled dose (Staccato Placebo)',
                    InterventionArmGroupLabelList: {
                      InterventionArmGroupLabel: ['Placebo'],
                    },
                  },
                ],
              },
            },
            OutcomesModule: {
              PrimaryOutcomeList: {
                PrimaryOutcome: [
                  {
                    PrimaryOutcomeMeasure:
                      'The number of vomiting/retching events in the 2 hours following treatment.',
                    PrimaryOutcomeTimeFrame: '24 hours',
                  },
                ],
              },
              SecondaryOutcomeList: {
                SecondaryOutcome: [
                  {
                    SecondaryOutcomeMeasure:
                      'Number of adverse events as a measure of safety',
                    SecondaryOutcomeTimeFrame: '24 hours',
                  },
                ],
              },
            },
            EligibilityModule: {
              EligibilityCriteria:
                "Inclusion Criteria:\n\nAdult males and females between 18 and 60 years of age, inclusive at the time of signing the informed consent document.\nDiagnosis of cyclic vomiting syndrome (CVS) using the Rome IV diagnostic criteria.\nOtherwise healthy, as determined by the responsible physician, based on a medical evaluation including history, physical examination, vital signs, electrocardiograms (ECGs) and laboratory tests assessed at the screening visit\nNegative urine tests for selected drugs of abuse and alcohol breath test at Screening.\n\nExclusion Criteria:\n\nAny significant medical or psychiatric condition that could, in the Investigator's opinion, compromise the subject's safety or interfere with the completion of this protocol.\nAny condition, including the presence of laboratory abnormalities or pulmonary condition, which according to the Investigator places the subject at unacceptable risk if he/she were to participate in the study.\nA diagnosis of any gastrointestinal disorder other than CVS that in the judgement of the Investigator could compromise the subject's safety or interfere with the interpretation of safety or efficacy data.",
              HealthyVolunteers: 'Accepts Healthy Volunteers',
              Gender: 'All',
              MinimumAge: '18 Years',
              MaximumAge: '60 Years',
              StdAgeList: {
                StdAge: ['Adult'],
              },
            },
            ContactsLocationsModule: {
              CentralContactList: {
                CentralContact: [
                  {
                    CentralContactName: 'Barrie Weeks',
                    CentralContactRole: 'Contact',
                    CentralContactPhone: '650-944-7156',
                    CentralContactEMail: 'bweeks@alexza.com',
                  },
                ],
              },
              OverallOfficialList: {
                OverallOfficial: [
                  {
                    OverallOfficialName: 'Barrie Weeks, BA',
                    OverallOfficialAffiliation: 'Alexza Pharmaceuticals, Inc.',
                    OverallOfficialRole: 'Study Director',
                  },
                ],
              },
              LocationList: {
                Location: [
                  {
                    LocationFacility: 'Om Research',
                    LocationStatus: 'Recruiting',
                    LocationCity: 'Lancaster',
                    LocationState: 'California',
                    LocationZip: '93535',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Nancy Toc',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '661-388-2239',
                          LocationContactPhoneExt: '08',
                          LocationContactEMail: 'info@omclinicaltrials.com',
                        },
                        {
                          LocationContactName: 'Jatinder S. Pruthi, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Axis Clinical Trials',
                    LocationStatus: 'Recruiting',
                    LocationCity: 'Los Angeles',
                    LocationState: 'California',
                    LocationZip: '90036',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Elianet De La Cruz',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '310-289-8242',
                          LocationContactEMail: 'eli@axistoday.com',
                        },
                        {
                          LocationContactName: 'Lydie Hazan, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Precision Research Institute, LLC',
                    LocationStatus: 'Not yet recruiting',
                    LocationCity: 'San Diego',
                    LocationState: 'California',
                    LocationZip: '92114',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Josie Summers',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '619-501-0371',
                          LocationContactPhoneExt: '309',
                          LocationContactEMail: 'josie@prisandiego.com',
                        },
                        {
                          LocationContactName: 'Taddese Desta, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'University of South Florida',
                    LocationStatus: 'Not yet recruiting',
                    LocationCity: 'Tampa',
                    LocationState: 'Florida',
                    LocationZip: '33606',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Thanh Tran',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '813-844-8544',
                          LocationContactEMail: 'tqtran@usf.edu',
                        },
                        {
                          LocationContactName: 'Vic Velanovich, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Summit Clinical Studies',
                    LocationStatus: 'Recruiting',
                    LocationCity: 'Athens',
                    LocationState: 'Georgia',
                    LocationZip: '30607',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Barbara Wilson, MSc CROM',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '706-400-4262',
                          LocationContactEMail:
                            'info@summitclinicalstudies.com',
                        },
                        {
                          LocationContactName: 'Jeffrey Williams, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Indiana University Health',
                    LocationStatus: 'Not yet recruiting',
                    LocationCity: 'Indianapolis',
                    LocationState: 'Indiana',
                    LocationZip: '46202',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Anita Gupta',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '317-274-3253',
                          LocationContactEMail: 'anigupta@iu.edu',
                        },
                        {
                          LocationContactName: 'Robert Siwiec, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'University of Louisville',
                    LocationStatus: 'Not yet recruiting',
                    LocationCity: 'Louisville',
                    LocationState: 'Kentucky',
                    LocationZip: '40202',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Annette Robinson',
                          LocationContactRole: 'Contact',
                          LocationContactEMail:
                            'annette.robinson@louisville.edu',
                        },
                        {
                          LocationContactName: 'Thomas Abell, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Massachusetts General Hospital',
                    LocationStatus: 'Not yet recruiting',
                    LocationCity: 'Boston',
                    LocationState: 'Massachusetts',
                    LocationZip: '02114',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Rao Fatima',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '617-724-0480',
                          LocationContactEMail: 'frao@mgh.harvard.edu',
                        },
                        {
                          LocationContactName: 'Braden Kuo, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Henry Ford Health System',
                    LocationStatus: 'Not yet recruiting',
                    LocationCity: 'Detroit',
                    LocationState: 'Michigan',
                    LocationZip: '48202',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Kathryn Wilson',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '313-404-9110',
                          LocationContactEMail: 'kwilso10@hfhs.org',
                        },
                        {
                          LocationContactName: 'Joseph Miller, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Mayo Clinic',
                    LocationStatus: 'Recruiting',
                    LocationCity: 'Rochester',
                    LocationState: 'Minnesota',
                    LocationZip: '55905',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Margaret Breen-Lyles',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '507-293-0237',
                          LocationContactEMail: 'breen-lyles.margaret@mayo.deu',
                        },
                        {
                          LocationContactName: 'Madhusudan Grover, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Temple University Hospital',
                    LocationStatus: 'Not yet recruiting',
                    LocationCity: 'Philadelphia',
                    LocationState: 'Pennsylvania',
                    LocationZip: '19140',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Bradley Fesi',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '215-707-2411',
                          LocationContactEMail: 'bradley.fesi@temple.edu',
                        },
                        {
                          LocationContactName: 'Henry Parkman, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'New Phase Research & Development, LLC',
                    LocationStatus: 'Recruiting',
                    LocationCity: 'Knoxville',
                    LocationState: 'Tennessee',
                    LocationZip: '37909',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Jessica Kidd',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '865-200-8364',
                          LocationContactEMail: 'jkidd@newphaseonline.com',
                        },
                        {
                          LocationContactName: 'Evelyne M. Davidson, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Baylor College of Medicine',
                    LocationStatus: 'Not yet recruiting',
                    LocationCity: 'Houston',
                    LocationState: 'Texas',
                    LocationZip: '77030',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Michael Mercado',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '713-798-3606',
                          LocationContactEMail: 'michael.mercado@bcm.edu',
                        },
                        {
                          LocationContactName: 'Mohamed Othman, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Sante Clinical Research',
                    LocationStatus: 'Recruiting',
                    LocationCity: 'Kerrville',
                    LocationState: 'Texas',
                    LocationZip: '78028',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Danielle Monclova',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '830-890-5171',
                          LocationContactEMail: 'dmonclova@santeresearch.net',
                        },
                        {
                          LocationContactName: 'Carlos Menendez, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                  {
                    LocationFacility: 'Medical College of Wisconsin',
                    LocationStatus: 'Not yet recruiting',
                    LocationCity: 'Milwaukee',
                    LocationState: 'Wisconsin',
                    LocationZip: '53226',
                    LocationCountry: 'United States',
                    LocationContactList: {
                      LocationContact: [
                        {
                          LocationContactName: 'Alexandra Bruss',
                          LocationContactRole: 'Contact',
                          LocationContactPhone: '414-805-7128',
                          LocationContactEMail: 'abruss@mcw.edu',
                        },
                        {
                          LocationContactName: 'Thangam Venkatesan, MD',
                          LocationContactRole: 'Principal Investigator',
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
          DerivedSection: {
            MiscInfoModule: {
              VersionHolder: 'April 29, 2021',
            },
            ConditionBrowseModule: {
              ConditionMeshList: {
                ConditionMesh: [
                  {
                    ConditionMeshId: 'D000013577',
                    ConditionMeshTerm: 'Syndrome',
                  },
                  {
                    ConditionMeshId: 'D000014839',
                    ConditionMeshTerm: 'Vomiting',
                  },
                ],
              },
              ConditionAncestorList: {
                ConditionAncestor: [
                  {
                    ConditionAncestorId: 'D000004194',
                    ConditionAncestorTerm: 'Disease',
                  },
                  {
                    ConditionAncestorId: 'D000010335',
                    ConditionAncestorTerm: 'Pathologic Processes',
                  },
                  {
                    ConditionAncestorId: 'D000012817',
                    ConditionAncestorTerm: 'Signs and Symptoms, Digestive',
                  },
                ],
              },
              ConditionBrowseLeafList: {
                ConditionBrowseLeaf: [
                  {
                    ConditionBrowseLeafId: 'M14938',
                    ConditionBrowseLeafName: 'Syndrome',
                    ConditionBrowseLeafAsFound: 'Syndrome',
                    ConditionBrowseLeafRelevance: 'high',
                  },
                  {
                    ConditionBrowseLeafId: 'M16165',
                    ConditionBrowseLeafName: 'Vomiting',
                    ConditionBrowseLeafAsFound: 'Vomiting',
                    ConditionBrowseLeafRelevance: 'high',
                  },
                  {
                    ConditionBrowseLeafId: 'M14205',
                    ConditionBrowseLeafName: 'Signs and Symptoms, Digestive',
                    ConditionBrowseLeafRelevance: 'low',
                  },
                ],
              },
              ConditionBrowseBranchList: {
                ConditionBrowseBranch: [
                  {
                    ConditionBrowseBranchAbbrev: 'BC23',
                    ConditionBrowseBranchName: 'Symptoms and General Pathology',
                  },
                  {
                    ConditionBrowseBranchAbbrev: 'All',
                    ConditionBrowseBranchName: 'All Conditions',
                  },
                ],
              },
            },
            InterventionBrowseModule: {
              InterventionBrowseLeafList: {
                InterventionBrowseLeaf: [
                  {
                    InterventionBrowseLeafId: 'M18603',
                    InterventionBrowseLeafName: 'Granisetron',
                    InterventionBrowseLeafRelevance: 'low',
                  },
                ],
              },
              InterventionBrowseBranchList: {
                InterventionBrowseBranch: [
                  {
                    InterventionBrowseBranchAbbrev: 'AnEm',
                    InterventionBrowseBranchName: 'Antiemetics',
                  },
                  {
                    InterventionBrowseBranchAbbrev: 'Gast',
                    InterventionBrowseBranchName: 'Gastrointestinal Agents',
                  },
                  {
                    InterventionBrowseBranchAbbrev: 'All',
                    InterventionBrowseBranchName: 'All Drugs and Chemicals',
                  },
                ],
              },
            },
          },
        },
      },
    ],
  },
}
