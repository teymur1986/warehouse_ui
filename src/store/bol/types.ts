import { IHeaderCellType } from "../../components/DynamicTable";
import { ConflictAddressType, ProcessingInfo } from "../../actions/bol.action";

export interface IBOLMonitoring {
    bolIds: Array<number>;
    bolNumber: string;
    brokerApi: number;
    proNumber: string;
    freightTerms: string;
    freightCharges: number;
    carrier: string;
    customerNumber: string;
    customerName: string;
    bolStatus: number;
    shipToCountry: string;
    orderNumbers: Array<string>;
    firstOrder: string;
    deliveryNumbers: Array<string>;
    skids: number;
    skid: number;
    revisedWeight: number;
    boxes: number;
    taskId: number;
    checkedDate: Date;
    deliveryDays: number;
    quoteNumber: number;
    quoteAmount: number;
    apiCarrier: number;
    apiCarrierId: number;
}

export interface ICarrier {
    carrierNumber: string;
    carrierName: string;
    scacCode: string;
    cnt: number;
}

export interface IBOLProcessing {
    id: number;
    bolNumber: null
    bolStatus: number;
    proNumber: string;
    freightTerms: string;
    carrier: string;
    carriers: ICarrier[];
    orderNumber:string;
    pilot?: string;
    deliveryNumber: string;
    customerName: string;
    shipToCustomerName: string;
    shipToCustomerNumber: string;
    shipToAddressId: number;
    billToCustomerName: string;
    billToCustomerNumber: string;
    billToAddressId: number;
    freightCharges: number;
    maxPalletsSplit: null
    customerNumber: string;
    skid: number;
    originalWeight: number;
    revisedWeight: string;
    boxes: number;
    brokerApi: number;
    customerShipToAddress1: string;
    shipToCity: string;
    shipToState: string;
    bolSplitWarning: null
    billToBOL: null
    remarks: string;
    orderSubType: number;
    palletTrigger: number;
    shipToAddress1: string;
    shipToAddress2: string;
    shipToAddress3: null
    shipToAddress4: null
    orderDate: Date;
    releasedDate: Date;
    dueDate: Date;
    orderParts: number;
}

export interface IBOLState {
    monitoring?: IBOLMonitoring[] | null;
    monitoringTableHeaders: IHeaderCellType[];
    conflictAddress: ConflictAddressType[] | null;
    processing?: IBOLProcessing[] | null;
    processingTableHeaders: IHeaderCellType[];
    isMonitoringBolRequestFailed: boolean;
    isProcessingBolRequestFailed: boolean;
    monitoringBolRequestErrorMessage: string;
    processingBolRequestErrorMessage: string;
    processInfo: ProcessingInfo | null;
}

const processingHeaderCells: IHeaderCellType[] = [
    { id: 'orderNumber', numeric: false, disablePadding: true, label: 'Order', isFilter: true },
    { id: 'deliveryNumber', numeric: false, disablePadding: true, label: 'Delivery', isFilter: true },
    { id: 'pilot', numeric: false, disablePadding: true, label: 'Pilot', isFilter: true },
    { id: 'proNumber', numeric: false, disablePadding: true, label: 'Pro Number', isFilter: true },
    { id: 'carrier', numeric: false, disablePadding: true, label: 'Carrier', isFilter: true },
    { id: 'freightTerms', numeric: false, disablePadding: true, label: 'Terms', isFilter: true },
    { id: 'freightCharges', numeric: false, disablePadding: true, label: 'Charge', isFilter: true },
    { id: 'customerName', numeric: false, disablePadding: true, label: 'Customer Name' },
    { id: 'shipToCity', numeric: false, disablePadding: true, label: 'City', isFilter: true },
    { id: 'shipToState', numeric: false, disablePadding: true, label: 'State', isFilter: true },
    { id: 'boxes', numeric: false, disablePadding: true, label: '# Boxes', isFilter: true },
    { id: 'skid', numeric: false, disablePadding: true, label: '# Skids', isFilter: true },
    { id: 'originalWeight', numeric: false, disablePadding: true, label: 'Actual Weight', isFilter: true },
    { id: 'actions', numeric: false, disablePadding: true, label: 'Actions' },
];

const monitoringHeaderCells: IHeaderCellType[] = [
    { id: 'bolNumber', numeric: false, disablePadding: true, label: 'BOL' },
    { id: 'orderNumbers', numeric: false, disablePadding: true, label: 'Order' },
    { id: 'proNumber', numeric: false, disablePadding: true, label: 'Pro Number' },
    { id: 'customerName', numeric: false, disablePadding: true, label: 'Customer Name' },
    { id: 'carrier', numeric: false, disablePadding: true, label: 'Carrier' },
    { id: 'deliveryDays', numeric: false, disablePadding: true, label: 'D Days' },
    { id: 'freightCharges', numeric: false, disablePadding: true, label: 'Charge' },
    { id: 'freightTerms', numeric: false, disablePadding: true, label: 'Terms' },
    { id: 'boxes', numeric: false, disablePadding: true, label: 'Boxes' },
    { id: 'skids', numeric: false, disablePadding: true, label: 'Skids' },
    { id: 'revisedWeight', numeric: false, disablePadding: true, label: 'Weight' },
    { id: 'checkedDate', numeric: false, disablePadding: true, label: 'Ship Date' },
    { id: 'status', numeric: false, disablePadding: true, label: 'Status' },
];

export const initBOLState: IBOLState = {
    monitoring: null,
    processingTableHeaders: processingHeaderCells,
    monitoringTableHeaders: monitoringHeaderCells,
    processing: null,
    conflictAddress: null,
    processInfo: null,
    isMonitoringBolRequestFailed: false,
    isProcessingBolRequestFailed: false,
    monitoringBolRequestErrorMessage: '',
    processingBolRequestErrorMessage: '',
}