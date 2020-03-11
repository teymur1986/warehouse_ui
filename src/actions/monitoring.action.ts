import { IActionPayload, IActionBasic } from ".";
import { IMonitoring } from "../store/monitoring/types";
import { EOrderTypeOptions, EOrderSubTypeOptions } from "../store/order-type/types";

export const MONITORING_ACTION_START =           'MONITORING_ACTION_START';
export const MONITORING_ACTION_REQUEST =         'MONITORING_ACTION_REQUEST';
export const MONITORING_ACTION_REQUEST_SUCCESS = 'MONITORING_ACTION_REQUEST_SUCCESS';
export const MONITORING_ACTION_REQUEST_FAILED =  'MONITORING_ACTION_REQUEST_FAILED';
export const MONITORING_AND_ORDER_TYPE_ACTION_START =  'MONITORING_AND_ORDER_TYPE_ACTION_START';

export type MonitoringRequestProps = {
    type?: number;
    subtype?: number;
    locationId: number;
    branchId: number;
    currentTab: EOrderTypeOptions;
    currentSubTab: EOrderSubTypeOptions;
}

export const monitoringStart = (): IActionBasic => ({
    type: MONITORING_ACTION_START,
});

export const monitoringRequest = (props: MonitoringRequestProps)
: IActionPayload => ({
    type: MONITORING_ACTION_REQUEST,
    payload: { ...props }
});

export const monitoringRequestCombination = (props: MonitoringRequestProps)
: IActionPayload => ({
    type: MONITORING_AND_ORDER_TYPE_ACTION_START,
    payload: { ...props }
});

export const monitoringRequestSucceeded = (monitoringArray: IMonitoring)
: IActionPayload => ({
    type: MONITORING_ACTION_REQUEST_SUCCESS,
    payload: { monitoringArray }
});

export const monitoringRequestFailed = (error: Error)
: IActionPayload => ({
    type: MONITORING_ACTION_REQUEST_FAILED,
    payload: { error }
});