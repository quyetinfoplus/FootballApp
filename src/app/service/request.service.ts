import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient,
  ) { }
  get(url: string, params: any, headers: any, onSuccess: any, onError: any, onComplete: any) {
    let paramsRequest = new HttpParams();
    if (params !== undefined) {
      for (const p of params) {
        paramsRequest = paramsRequest.set(p.key, p.value);
      }
    }
    let headersRequest = new HttpHeaders();
    if (headers !== undefined) {
      for (const h of headers) {
        headersRequest = headersRequest.set(h.key, h.value);
      }
    }
    this.http.get(url, { headers: headersRequest, params: paramsRequest }).subscribe(
      (response) => onSuccess(response),
      (error) => onError(error),
      () => onComplete()
    );
  }

  post(url: string, body: any, params: any, headers: any, onSuccess: any, onError: any, onComplete: any) {
    let paramsRequest = new HttpParams();
    if (params !== undefined) {
      for (const p of params) {
        paramsRequest = paramsRequest.set(p.key, p.value);
      }
    }
    let headersRequest = new HttpHeaders();
    if (headers !== undefined) {
      for (const h of headers) {
        headersRequest = headersRequest.set(h.key, h.value);
      }
    }

    this.http.post(url, body, { headers: headersRequest, params: paramsRequest }).subscribe(
      (response) => onSuccess(response),
      (error) => onError(error),
      () => onComplete()
    );
  }

  put(url: string, body: any, params: any, onSuccess: any, onError: any, onComplete: any) {
    let paramsRequest = new HttpParams();
    if (params !== undefined) {
      for (const p of params) {
        paramsRequest = paramsRequest.set(p.key, p.value);
      }
    }
    this.http.put(url, body, { params: paramsRequest }).subscribe(
      (response) => onSuccess(response),
      (error) => onError(error),
      () => onComplete()
    );
  }

  getWithAuth(url: string, params: any, headers: any, onSuccess: any, onError: any, onComplete: any) {
    let paramsRequest = new HttpParams();
    if (params !== undefined) {
      for (const p of params) {
        paramsRequest = paramsRequest.set(p.key, p.value);
      }
    }
    let headersRequest = new HttpHeaders();
    if (headers !== undefined) {
      for (const h of headers) {
        headersRequest = headersRequest.set(h.key, h.value);
      }
    }
    this.http.get(url, { headers: headersRequest, params: paramsRequest }).subscribe(
      (response) => onSuccess(response),
      (error) => onError(error),
      () => onComplete()
    );
  }

  postWithAuth(url: string, body: any, headers: any, params: any, onSuccess: any, onError: any, onComplete: any) {
    let paramsRequest = new HttpParams();
    if (params !== undefined) {
      for (const p of params) {
        paramsRequest = paramsRequest.set(p.key, p.value);
      }
    }
    let headersRequest = new HttpHeaders();
    if (headers !== undefined) {
      for (const h of headers) {
        headersRequest = headersRequest.set(h.key, h.value);
      }
    }
    this.http.post(url, body, { headers: headersRequest, params: paramsRequest }).subscribe(
      (response) => onSuccess(response),
      (error) => onError(error),
      () => onComplete()
    );
  }

  putWithAuth(url: string, body: any, params: any, headers: any, onSuccess: any, onError: any, onComplete: any) {
    let paramsRequest = new HttpParams();
    if (params !== undefined) {
      for (const p of params) {
        paramsRequest = paramsRequest.set(p.key, p.value);
      }
    }
    let headersRequest = new HttpHeaders();
    if (headers !== undefined) {
      for (const h of headers) {
        headersRequest = headersRequest.set(h.key, h.value);
      }
    }
    this.http.put(url, body, { headers: headersRequest, params: paramsRequest }).subscribe(
      (response) => onSuccess(response),
      (error) => onError(error),
      () => onComplete()
    );
  }

  deleteWithAuth(url: string, params: any, headers: any, onSuccess: any, onError: any, onComplete: any) {
    let paramsRequest = new HttpParams();
    if (params !== undefined) {
      for (const p of params) {
        paramsRequest = paramsRequest.set(p.key, p.value);
      }
    }
    let headersRequest = new HttpHeaders();
    if (headers !== undefined) {
      for (const h of headers) {
        headersRequest = headersRequest.set(h.key, h.value);
      }
    }
    this.http.delete(url, { headers: headersRequest, params: paramsRequest }).subscribe(
      (response) => onSuccess(response),
      (error) => onError(error),
      () => onComplete()
    );
  }
}
