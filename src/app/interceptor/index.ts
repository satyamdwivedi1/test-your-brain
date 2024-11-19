import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './http.interceptor';

/** Provider for the Noop Interceptor. */
export const noopInterceptorProvider: Provider =
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true };