export interface ISessionRaw {
	__zone_symbol__state: boolean;
	__zone_symbol__value: any[];
}

export interface ISession {
	state: boolean;
	value: any[];
}

export type ISessions = ISession[];

export enum NAVIGATOR_XR_MODES {
	INLINE = 'inline'
	, IMMERSIVE_AR = 'immersive-ar'
	, IMMERSIVE_VR = 'immersive-vr'
}

export interface XRSession {
	environmentBlendMode: any | 'opaque';
	mode: NAVIGATOR_XR_MODES;
	onblur: any;
	onend: any;
	onfocus: any;
	onresetpose: any;
	renderState: XRRenderState;
	viewerSpace: XRSpace;
}

export interface XRRenderState {
	baseLayer: any; // default null
	depthFar: number; // default 1000
	depthNear: number; // default 0.1
	outputContext: any; // default null
}

export type XRSpace = any; // todo
