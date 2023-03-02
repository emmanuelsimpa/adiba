// import { navigation } from "../components/navigations/ChannelsMenu"

const baseUrl = "https://run.mocky.io/v3/"

export default class _BaseViewModel{
    private _props: any
    constructor(data: any){
        const _init = data
        if(typeof _init === 'object'){
            this._props = _init
        }else if (typeof _init === 'string'){
            this._props = {'name': _init}
        }else{
            this._props = {}
        }
        this._init()
    }

    _init(){
        if(!this._props['baseUrl']) {
            this._props['baseUrl'] = baseUrl
        }
    }

    _preconnect(data: any){
        const queryParam = this._props['hasQueryParam'] ? ("?" + new URLSearchParams(this._props['queryParams']).toString()) : ""
        const fullPath = this._props['baseUrl'] + this._props['path'] + queryParam
        const url = new URL(fullPath)
        // const credsEncoded = base64.encode('admin@turog.com.ng:Y0hKdmFtVmpkQzF3');
        
        const headers = new Headers({
            'Content-Type': this._props['ContentType'] || 'application/json',
            'authorization':  `Bearer ${this._props.authorization}`,
            'accept': this._props['accept'] || 'application/json',
            // 'X-EncodedURL': 'https://odoo.apps.turog.com.ng',
            // 'X-Database': 'turog-odoo-sandbox',
            // 'X-UID': 2,
            // 'X-Auth': credsEncoded
        })
        const opts : {
            method: any;
            mode: RequestMode;
            cache: RequestCache;
            credentials: RequestCredentials;
            headers: Headers;
            redirect: RequestRedirect;
            referrerPolicy: ReferrerPolicy;
            body?: BodyInit;
        } = {
            method: this._props.httpVerb,
            mode: 'cors' as RequestMode, 
            cache: 'no-cache' as RequestCache, 
            credentials: 'same-origin' as RequestCredentials, 
            headers: headers,
            redirect: 'follow' as RequestRedirect,
            referrerPolicy: 'no-referrer' as ReferrerPolicy, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) || {} as BodyInit
        }
        if(this._props.httpVerb === 'GET'){
            delete opts.body
        }
        return { url, opts }
    }

    _connect(data: any){
        const builder = async () => {
            const { url, opts } = this._preconnect(data)
            const response = await fetch(url, opts);
            return response
        }

        return builder
    }

    get(data: any = null) {
        this._props.httpVerb = 'GET'
        const req = this._connect(data);
        return req()
    }

    post(data: any) {
        this._props.httpVerb = 'GET'
        const req = this._connect(data);
        return req();
    }

    _get(fieldName: any){
        if(fieldName)
            return this._props[fieldName]
    }

    _set(fieldName: any, fieldValue: any){
        this._props[fieldName] = fieldValue;
    }

    _getAll(){
        return this._props
    }

    _setAll(fieldValues: any){
        for (var k in fieldValues) {
            this._set(k, fieldValues[k])
        }
    }

}