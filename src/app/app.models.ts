export class Property {
    constructor(
        public url: string,
        public InternetAddressDisplayYN : boolean,
        public MBR_AffectedbyDisclosures : number,
        public Township : string,
        public MBR_AvailableforShowing : number,
        public MBR_AvailableforShowingDate : Date,
        public MBR_BedroomsMU: number,
        public MBR_BedsMU : number,
        public MBR_BuildingSize : number,
        public CumulativeDaysOnMarket : number,
        public MBR_CeilingHeight : number,
        public City : string,
        public Contingency: string,
        public CountyOrParish: string,
        public MBR_CurrentPrice: number,
        public MBR_DisclosureOther: string,
        public Disclosures: string,
        public MBR_Documents: string,
        public DaysOnMarket: number,
        public MBR_ExistingLease: number,
        public MBR_FeedbackEmail: string,
        public MBR_FeedbackPhoneNumber: string,
        public MBR_FullBathsMU: number,
        public MBR_HalfBathsMU: number,
        public MBR_Interstate: string,
        public MBR_IsthereDirectSoliciting: number,
        public MajorChangeTimestamp: Date,
        public MajorChangeType: string,
        public  PreviousListPrice: number,
        public MBR_LeaseAmtSF: number,
        public MBR_LeasePrice: number,
        public ListAgentKey: string,
        public ListAgentEmail: string,
        public ListAgentFullName: string,
        public ListAgentMlsId: string,
        public ListAgentPreferredPhone: string,
        public ListingContractDate: string,
        public SyndicateTo: string,
        public  ListingAgreement: string,
        public ListOfficeKey: string,
        public ListOfficeMlsId: string,
        public ListOfficeName: string,
        public ListOfficePhone: string,
        public ListPrice: number,
        public ListingKey: string,
        public OriginatingSystemModificationTimestamp: Date,
        public MBR_MaxContigSqFt: number,
        public MBR_MinContigSqFt: number,
        public MBR_MLS: string,
        public ListingId: string,
        public MBR_MultiTenants: number,
        public NewConstructionYN: boolean,
        public Stories: number,
        public MBR_OfficePhoneExtension: number,
        public MBR_OptionalLevlSqFtBlwGrade: number,
        public OriginalEntryTimestamp: Date,
        public OriginalListPrice: number,
        public ParcelNumber: string,
        public MBR_ParkBuildingName: string,
        public MBR_ParkingSurface: string,
        public PhotosCount: number,
        public PhotosChangeTimestamp: Date,
        public Possession: string,
        public MBR_PossessionCommercial: string,
        public PostalCode: number,
        public CurrentUse: string,
        public PriceChangeTimestamp: Date,
        public MBR_PropertyDesconInternet: number,
        public PropertySubType: string,
        public PropertyType: string,
        public MBR_ProposedLease: string,
        public PossibleUse: string,
        public MBR_ProviderKey: number,
        public MBR_ProviderModificationTimestamp: Date,
        public InternetEntireListingDisplayYN: boolean,
        public MBR_RetailType: string,
        public MBR_RoadAccess: string,
        public RoadSurfaceType: string,
        public MBR_RoomsMU: number,
        public RoomsTotal: number,
        public MBR_RoomsTotalMU: number,
        public MBR_SemiAnnualPropertyTaxAmt: number,
        public ShowingContactPhone: string,
        public MBR_SpaceAvailable: string,
        public MBR_SqFtMainUpper: number,
        public StateOrProvince: string,
        public StandardStatus: string,
        public MlsStatus: string,
        public MBR_StatusContractualSearchDate: Date,
        public StreetDirPrefix: string,
        public StreetName : string,
        public StreetNumber : number,
        public MBR_StreetNumberAlpha : number,
        public StreetNumberNumeric: number,
        public StreetSuffix: string,
        public SubdivisionName: string,
        public TaxYear: string,
        public LotSizeAcres: number,
        public MBR_TransType: string,
        public MBR_UpperSqFt: number,
        public MBR_VariableRateCommission: number,
        public MBR_YearTaxesPaid: number,
        public Zoning: number,
        public OriginatingSystemName: string,
        public ModificationTimestamp: Date,
        public Media: MediaObject[],
        public MlgCanView: boolean){ }
} 

export class MediaObject {
    constructor(
        public LongDescription: string,
            public MediaKey: string,
            public Order: number,
            public MediaType: string,
            public ImageWidth: number,
            public ImageHeight: number,
            public ImageSizeDescription: string,
            public MediaURL: string,
            public MediaModificationTimestamp: Date
    ) {}
}

export class Area {
    constructor(public id: number, 
                public value: number,
                public unit: string){ }
}

export class AdditionalFeature {
    constructor(public id: number, 
                public name: string,
                public value: string){ }
}

export class Location {
    constructor(public propertyId: number,
                public lat: number,
                public lng: number){ }
}

export class Price {
    public sale: number;
    public rent: number;
}


export class Gallery {
    constructor(public id: number, 
                public small: string,
                public medium: string,
                public big: string){ }
}

export class Plan {
    constructor(public id: number, 
                public name: string,
                public desc: string,
                public area: Area,
                public rooms: number,
                public baths: number,
                public image: string){ }
}

export class Video {
    constructor(public id: number, 
                public name: string,
                public link: string){ }
}

export class Pagination {
    constructor(public page: number,
                public perPage: number,
                public prePage: number,
                public nextPage: number,
                public total: number,
                public totalPages: number){ 
                }
}

export class TxData {
    constructor (
        public context : string,
        public value : Property[]

    ) {}
    
}

